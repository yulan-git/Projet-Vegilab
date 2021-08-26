import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showPwd: boolean = false;
  eyeIcon: boolean = true;
  signupForm: FormGroup;
  pwdPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"


  constructor(private router: Router,
  private authService: AuthService) {
    this.signupForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.pwdPattern)])
    })
  }

  get username() {
    return this.signupForm.get("username")
  }
  get email() {
    return this.signupForm.get("email")
  }
  get password() {
    return this.signupForm.get("password")
  }


  onSubmit() {
    try {
      const user = {
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }
      this.authService.signup(user).subscribe((response) => {
        this.router.navigate(["/login"]);
        console.log(response, "Création réussie")
      });
    } catch {
      console.log("__Error handled gracefully.")
    }
  }

  showPassword() {
    console.log('ok');
    this.showPwd = !this.showPwd;
    this.eyeIcon = !this.eyeIcon;
  }

}
