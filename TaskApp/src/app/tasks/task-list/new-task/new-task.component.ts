import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Point } from 'src/app/models/point.model';
import { Task } from 'src/app/models/task.model';
import { Kat } from 'src/app/services/kat.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{
@Input() id!:any
isNewKat = false;
defaultKat:any
newPoints:Point[] = []

constructor(private route:ActivatedRoute,private router: Router ,public usersService: UsersService, private katService:Kat){}
kategorie = this.katService.kategorie

onSubmit(f:NgForm){
console.log(f.form.value.kategoria)
console.log(f.form.value.content)
const newTask = new Task(f.form.value.content,0,0,f.form.value.kategoria,this.newPoints ? this.newPoints : [])
this.usersService.users[this.id].tasks.push(newTask)
this.router.navigate(['/list/'+this.id])
}

onNewKat(){
  this.isNewKat = true
}
closeEmit(e:any){
 this.isNewKat = false
 if(e==1){
  this.defaultKat = this.katService.kategorie[this.katService.kategorie.length-1]
 }
}

onCancel(){
  this.router.navigate(['/list/'+this.id])
}
newPointContent : string = ''
newPointPer : number = 0


onPointDelete(index:number){
  console.log('del point')
  this.newPoints.splice(index,1)
}
onPointAdd(){
  this.newPoints.push(new Point(this.newPointContent,this.newPointPer, false))
  this.newPointContent = ''
  this.newPointPer = 0
}


ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    this.id = +params['id'];
    this.usersService.userIdEmitter.next(this.usersService.getUser(this.id).name + ' ' + this.usersService.getUser(this.id).lastName + ' - dodawanie zadania')
  })
}
}
