import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Point } from 'src/app/models/point.model';
import { Task } from 'src/app/models/task.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input() task!:Task
  @Input() taskId!:number
  status!:number
  range!:number
  userId!:number
  procenty!:number
  

constructor(public usersService: UsersService,private router:Router, private route:ActivatedRoute){}




onSelect(){
console.log('task: '+this.taskId)
this.router.navigate(['/list/'+this.userId+'/details/'+this.taskId])
}

zliczajProcentTxt(){
  if(this.usersService.users[this.userId].tasks[this.taskId].Points){
    let precent = 0
    for(let point of <any>this.usersService.users[this.userId].tasks[this.taskId].Points){
      if(point.done == true){
      precent += point.procent
      }
    }
    return `| ukończono na ${precent}%`
  }
  return null
}
zliczajProcentValue(){
  if(this.usersService.users[this.userId].tasks[this.taskId].Points){
    let precent :number= 0
    for(let point of <any>this.usersService.users[this.userId].tasks[this.taskId].Points){
      if(point.done == true){
      precent += point.procent
      }
    }
    return precent
  }
  return 0
}

 anyPoints(){
  const anyPoints = <any>this.usersService.users[this.userId].tasks[this.taskId].Points?.length > 0
  if(anyPoints){
    return true
  }
  else{
    return false
  }
 }



onEdit(){
this.router.navigate(['/list/'+this.userId+'/edit/'+this.taskId])
}
// onStatusChanged(e:any){
// this.usersService.users[this.userId].tasks[this.taskId].status = +e
// console.log('Nowy status: '+e.target.value+' '+this.usersService.getTaskName(+e.target.value))
// }
onDelete(){
  this.usersService.deleteTask(this.userId,this.taskId)
}
onMove(){
  this.router.navigate(['/move/'+this.userId+'/task/'+this.taskId])
}
onSelected(){
  console.log('task: '+this.taskId)
}
ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    this.userId = +params['id'];
    this.task.status = this.usersService.users[this.userId].tasks[this.taskId].status

    if(this.usersService.users[this.userId].tasks[this.taskId].Points)
    {
      if(this.zliczajProcentValue()>=100){
        this.usersService.users[this.userId].tasks[this.taskId].status = 2
      }
      else if(this.zliczajProcentValue() == 0){
        this.usersService.users[this.userId].tasks[this.taskId].status = 0
      }
      else if(this.zliczajProcentValue()>0 && this.zliczajProcentValue()<100){
        this.usersService.users[this.userId].tasks[this.taskId].status = 1
      }

    }
  })
}
}