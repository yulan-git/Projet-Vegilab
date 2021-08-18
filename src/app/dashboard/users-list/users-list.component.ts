import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  userSub: Subscription

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersList = [];
    this.userSub = this.userService.usersSubject.subscribe(resp => {
      this.usersList = resp as User[];
      // this.usersList.forEach(user => {
      //   user.roles.forEach(element => {
          
      //   });
        
      // })
    });
    this.userService.getAllUsers();
  }

  userIdToDelete(userId: number) {
    this.userService.deleteUserById(userId).subscribe(resp => {
      console.log('Lutilisateur à bien été supprimé !');
      this.userService.getAllUsers();
    });
  }

  

}
