import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'app/core/services/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as Auth from 'app/store/actions/auth.actions';
import * as fromRoot from 'app/store/reducers/app.reducer';
import { Observable } from 'rxjs';
import * as googleAuthService from 'angularx-social-login';
import {User} from 'app/store/models/user.model';
import * as Loading from 'app/store/actions/loading.actions';


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
  isAuthenticated$: Observable<boolean>;

  constructor( public dialogRef: MatDialogRef<AuthComponent>,
               private iconRegistry: MatIconRegistry,
               private sanitizer: DomSanitizer,
               private fb: FormBuilder,
               private router: Router,
               private store: Store<fromRoot.State>,
               private authService: AuthService,
               private googleAuth: googleAuthService.AuthService,
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
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    };
    this.registerForm = this.fb.group(controlsConfig);
  }
  createLoginForm(): void {
    const controlsConfig = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
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
    // if (!this.registerForm.controls.password.valid) {
    //   this.errorMsgs.passwordErrorMsg = 'Please supply a legal password';
    // }
    // if (!this.registerForm.controls.password_confirmation.valid) {
    //   this.errorMsgs.cPasswordErrorMsg = 'Please supply a legal password';
    // }
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
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new Loading.ShowLoading());
      this.authService.signInWithGoogle().subscribe((user: User) => {
        this.store.dispatch(new Auth.SetAuthenticated({user}));
        this.store.dispatch(new Loading.HideLoading());
      });
    });
  }

  signup(): void {
    const self  = this;
    self.isEmailTaken = false;
    // start loading
    this.store.dispatch(new Loading.ShowLoading());
    if (this.registerForm.valid) {
      if (this.registerForm.value.password === this.registerForm.value.password_confirmation) {
        this.registerForm.value.email = this.registerForm.value.email.toLowerCase();
        this.registerForm.value.name = this.registerForm.value.email;
        this.authService.register(this.registerForm.value).subscribe((user: User) => {
          this.store.dispatch(new Loading.HideLoading());
          this.store.dispatch(new Auth.SetAuthenticated({user}));
          self.dialogRef.close();
          if (self.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/account/dashboard']);
          }
        }, error => {
          if (error.status === 422) {
            self.isEmailTaken = true;
            self.errorMsgs.emailErrorMsg = 'This email is already taken!';
          }
        });
      } else {
        this.isPassMatch = false;
        this.errorMsgs.cPasswordErrorMsg = 'Passwords do not match!';
      }
    }
  }

  login(): void {
    const self  = this;
    self.isEmailTaken = false;
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(new Loading.ShowLoading());
      if (this.loginForm.valid) {
        this.loginForm.value.email = this.loginForm.value.email.toLowerCase();
        this.authService.login(this.loginForm.value).subscribe((user: User) => {
          this.store.dispatch(new Auth.SetAuthenticated({user}));
          this.store.dispatch(new Loading.HideLoading());
          self.dialogRef.close();
          if (self.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/account/dashboard']);
          }
        }, error => {
          console.log(error);
          this.store.dispatch(new Loading.HideLoading());
          this.errorMsgs.credentialErrorMsg = error.error.message;
        });
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
