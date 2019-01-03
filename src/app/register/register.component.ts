import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  loginForm: FormGroup;
  registerForm: FormGroup;
  isPassMatch = false;
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
               private authService: AuthService,
               @Inject(MAT_DIALOG_DATA) public data: any,
               ) {
    iconRegistry.addSvgIcon('facebook-icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/fb.svg'));
    iconRegistry.addSvgIcon('google-icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/google.svg'));
    this.createForm();
  }
  createForm(): void {
    const controlsConfig = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cPassword: ['', [Validators.required, Validators.minLength(8)]]
    };
    this.registerForm = this.fb.group(controlsConfig);
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
    if (!this.registerForm.controls.cPassword.valid) {
      this.errorMsgs.cPasswordErrorMsg = 'Please supply a legal password';
    }
    return this.errorMsgs;
  }
  ngOnInit() {
  }

  signup(): void {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password === this.registerForm.value.cPassword) {
        this.isPassMatch = true;
        this.registerForm.value.email = this.registerForm.value.email.toLowerCase();
        this.inProcess = true;
        this.authService.register(this.registerForm.value).subscribe(res => {
          console.log(res);
        });
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
