import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit{
taskId !: number
userId !: number



constructor(private route:ActivatedRoute,private router: Router, public usersService:UsersService){}


onBack(){
  this.router.navigate(['list/'+this.userId])
}
setPointIndex(i:number){
  return i = i+ 1
}
ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    this.taskId = +params['taskId']
    this.userId = +params['id']
  })

  //cofnięcie jeśli pusta lista
    if(!this.usersService.users[this.userId].tasks[this.taskId].Points){
      this.router.navigate(['list/'+this.userId])
    }

}


}
