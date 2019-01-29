import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'app/core/services/auth.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as Auth from 'app/store/actions/auth.actions';
import * as fromRoot from 'app/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, OnDestroy {
  name: string;
  loginForm: FormGroup;
  registerForm: FormGroup;
  isPassMatch = true;
  isEmailTaken: boolean;
  tabIndex = 0;
  errorMsgs = {
    emailErrorMsg: '',
    passwordErrorMsg: '',
    cPasswordErrorMsg: '',
    credentialErrorMsg: ''
  };
  componentActive = true;
  inProcess = false;
  isAuthenticated$: Observable<boolean>;

  constructor( public dialogRef: MatDialogRef<AuthComponent>,
               private iconRegistry: MatIconRegistry,
               private sanitizer: DomSanitizer,
               private fb: FormBuilder,
               private router: Router,
               private store: Store<fromRoot.State>,
               private authService: AuthService,
               @Inject(MAT_DIALOG_DATA) public data: any,
               ) {
    iconRegistry.addSvgIcon('facebook-icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/fb.svg'));
    iconRegistry.addSvgIcon('google-icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/google.svg'));
    this.createRegForm();
    this.createLoginForm();
  }
  createRegForm(): void {
    const controlsConfig = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(8)]]
    };
    this.registerForm = this.fb.group(controlsConfig);
  }
  createLoginForm(): void {
    const controlsConfig = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    };
    this.loginForm = this.fb.group(controlsConfig);
  }
  getErrorMessage() {
    if (this.registerForm.controls.email == null) {
      this.errorMsgs.emailErrorMsg = 'Email is required.';
    }
    if (!this.registerForm.controls.email.valid) {
      this.errorMsgs.emailErrorMsg = 'Please supply a valid email address';
    }
    if (!this.registerForm.controls.password.valid) {
      this.errorMsgs.passwordErrorMsg = 'Please supply a legal password';
    }
    if (!this.registerForm.controls.password_confirmation.valid) {
      this.errorMsgs.cPasswordErrorMsg = 'Please supply a legal password';
    }
    return this.errorMsgs;
  }
  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkPassMatch(): void {
    this.isPassMatch = this.registerForm.value.password === this.registerForm.value.password_confirmation;
    this.getErrorMessage();
  }

  moveToSignup(): void {
    this.tabIndex = 1;
  }

  googleSignIn(): void {
    this.authService.signInWithGoogle();
  }

  signup(): void {
    const self  = this;
    self.isEmailTaken = false;
    if (this.registerForm.valid) {
      if (this.registerForm.value.password === this.registerForm.value.password_confirmation) {
        this.registerForm.value.email = this.registerForm.value.email.toLowerCase();
        this.registerForm.value.name = this.registerForm.value.email;
        this.inProcess = true;
        this.authService.register(this.registerForm.value).subscribe((res: any) => {
          this.inProcess = false;
          self.authService.currentUser = {
            id: res.access_token,
            email: this.registerForm.value.email,
            avatar: ''
          };
          // TODO: remove localStorage total in some stage, instead using ngrx
          // localStorage.setItem('current_user', JSON.stringify(self.authService.currentUser));
          this.store.dispatch(new Auth.SetAuthenticated({user: self.authService.currentUser}));
          self.dialogRef.close();
          if (self.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/dashboard']);
          }
        }, error => {
          self.inProcess = false;
          if (error.status === 422) {
            self.isEmailTaken = true;
            self.errorMsgs.emailErrorMsg = 'This email is already taken!';
          }
        });
      } else {
        this.isPassMatch = false;
        this.inProcess = false;
        this.errorMsgs.cPasswordErrorMsg = 'Passwords do not match!';
      }
    }
  }

  login(): void {
    const self  = this;
    self.isEmailTaken = false;
    if (this.loginForm.valid) {
      this.loginForm.value.email = this.loginForm.value.email.toLowerCase();
      this.inProcess = true;
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        self.authService.currentUser = {
          id: res.access_token,
          email: this.loginForm.value.email,
          avatar: '',
        };
        // TODO: remove localStorage total in some stage, instead using ngrx
        // localStorage.setItem('current_user', JSON.stringify(self.authService.currentUser));
        this.store.dispatch(new Auth.SetAuthenticated({user: self.authService.currentUser}));
        self.dialogRef.close();
        if (self.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        console.log(error);
        this.inProcess = false;
        this.errorMsgs.credentialErrorMsg = error.error.message;
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
