import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit{
  users!:User[]
  constructor(private usersService: UsersService, private router: Router){
    this.users = usersService.getUsers()
    
  }
  onAddUser(){
    this.router.navigate(['add'])
  }
  ngOnInit(): void {
    this.usersService.usersChanged.subscribe((e)=>{
      this.users = e
    })
    this.usersService.userIdEmitter.next('Lista pracowników')
  }
}
