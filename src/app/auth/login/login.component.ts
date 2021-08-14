import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPwd: boolean = false;
  eyeIcon: boolean = true;

  constructor(private router: Router,
  private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.authService.login(form.value)
      .subscribe(
        (resp: any) => {
          console.log("connection succeed", resp);
          this.router.navigate(['/welcome-home']);
        },
        error => {
          console.log('error while');
          
        }
    )
  }

  showPassword(form: NgForm) {
    this.showPwd = !this.showPwd;
    this.eyeIcon = !this.eyeIcon;
  }

}
