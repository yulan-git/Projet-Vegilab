import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.scss']
})
export class WelcomeHomeComponent implements OnInit {
  currentUsername: string;
  user: any;
  userSub: Subscription;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUsername = this.authService.getUserUsername();
    this.user = this.currentUsername
    // this.userService.getUserById(this.currentUserId).subscribe(resp => {
    //   console.log(resp);
    //   this.user = resp;
    // })
  }
}
