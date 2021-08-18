import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  eyeIcon: boolean = true; $
  @Input() adminRole: any = false;

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
          for (let i = 0; i < resp.roles.length; i++) {
            if (resp.roles[i] == "USER" && resp.roles.length == 1)  {
              this.router.navigate(['/welcome-home/']);
            } else if (resp.roles.length > 1 ) {
              this.router.navigate(['/dashboard/']);
              this.adminRole = true;
            }
          }
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
