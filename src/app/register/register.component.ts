import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  name: string;
  loginForm: FormGroup;
  registerForm: FormGroup;
  isPassMatch = true;
  isEmailTaken: boolean;
  errorMsgs = {
    emailErrorMsg: '',
    passwordErrorMsg: '',
    cPasswordErrorMsg: ''
  };
  inProcess = false;

  constructor( public dialogRef: MatDialogRef<RegisterComponent>,
               private iconRegistry: MatIconRegistry,
               private sanitizer: DomSanitizer,
               private fb: FormBuilder,
               private router: Router,
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
  ngOnInit() {
  }

  checkPassMatch(): void {
    this.isPassMatch = this.registerForm.value.password === this.registerForm.value.password_confirmation;
    this.getErrorMessage();
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
          console.log(res);
          this.inProcess = false;
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('refresh_token', res.refresh_token);
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
        // return;
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
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        self.authService.currentUser = {
          id: res.access_token,
          userName: this.loginForm.value.email,
          isAdmin: false,
          type: ''
        };
        self.dialogRef.close();
        if (self.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
