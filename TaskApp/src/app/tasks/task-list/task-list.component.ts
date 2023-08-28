import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Params } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  id!: any
  user!:User
  constructor(private route: ActivatedRoute,private router:Router ,private usersService: UsersService){}
   onNewTask(){
    this.router.navigate(['/list/'+this.id+'/new'])
   }
onBack(){
  this.router.navigate(['list'])
}
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.user = this.usersService.getUser(this.id)
      this.usersService.UserEmitter.next(this.id)
      this.usersService.userIdEmitter.next(this.usersService.getUser(this.id).name + ' ' + this.usersService.getUser(this.id).lastName + ' - zadania')
    })
}
}

