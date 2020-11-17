import { Component, OnInit } from '@angular/core';


import { SearchUserService } from '../searchuserservice';

import { Repositories } from '../repositories';
import { User } from '../user';

@Component({ 
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: User
  userRepo: Repositories

  constructor(private SearchUserService : SearchUserService ) {
 
  }

  searchUser(user) {

    this.SearchUserService .searchUser(user).then((succes) => {
      this.userProfile = this.SearchUserService .userProfile;
    },
      (error) => {
        console.log(error)
      }
    )

    this.SearchUserService .displayRepos(user).then((succes) => {
      this.userRepo = this.SearchUserService .userRepo;
    },
      (error) => {
        console.log(error)
      }
    )

  }

  ngOnInit(): void {

    this.searchUser('Fridah-Alwanga');
  }
}

