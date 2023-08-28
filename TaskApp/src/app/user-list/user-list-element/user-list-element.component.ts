import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user-list-element',
  templateUrl: './user-list-element.component.html',
  styleUrls: ['./user-list-element.component.css']
})
export class UserListElementComponent implements OnInit {
@Input() user!:User
@Input() id!:number
tasksAmount!:number
tasksFinished!:number
onDelete(){
  this.usersService.deleteUser(this.id)
}
constructor(private usersService: UsersService, private router:Router){}
onEdit(){
this.router.navigate(['edit/'+this.id])
}
ngOnInit(): void {
  this.tasksAmount = this.usersService.allTasksAmount(this.id)
  
  this.tasksFinished = this.usersService.finishedTasksAmount(this.id)
  console.log(this.user.name,this.tasksFinished,'/',this.tasksAmount)
}

}
