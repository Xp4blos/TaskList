import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Kat } from 'src/app/services/kat.service';
import { Task } from 'src/app/models/task.model';
import { NgForm } from '@angular/forms';
import { Point } from 'src/app/models/point.model';
@Component({
  selector: 'app-task-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class TaskEditComponent implements  OnDestroy {
  @Input() id!:any
  @Input() taskId!:any
  isNewKat = false;
  task!:Task
  
  constructor(private route:ActivatedRoute,private router: Router ,public usersService: UsersService, private katService:Kat){}
  kategorie = this.katService.kategorie
  
  onSubmit(f:NgForm){
  console.log(f.form.value.kategoria)
  console.log(f.form.value.content)
  
  this.usersService.users[this.id].tasks[this.taskId].content = f.form.value.content
  this.usersService.users[this.id].tasks[this.taskId].kategoria = f.form.value.kategoria
  
  this.router.navigate(['/list/'+this.id])
  }
  onNewKat(){
    this.isNewKat = true
  }

  closeEmit(e:any){
   this.isNewKat = false
   }
  
  onCancel(){
    this.router.navigate(['/list/'+this.id])
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.taskId= params['task']
      console.log('ID: '+this.id+' Task: '+this.taskId)
      this.task = this.usersService.getTask(this.id,this.taskId)
      
      this.usersService.userIdEmitter.next(this.usersService.getUser(this.id).name + ' ' + this.usersService.getUser(this.id).lastName + ' - edycja zadania')
    })
    
  }

  onPointDelete(index:number){
    this.usersService.users[this.id].tasks[this.taskId].Points?.splice(index,1)
  }

  newPointContent !:string
  newPointPer :number = 0


onPointAdd(){
  this.usersService.users[this.id].tasks[this.taskId].Points?.push(new Point(this.newPointContent,this.newPointPer,false))
  this.newPointContent = ''
  this.newPointPer = 0
}



}
