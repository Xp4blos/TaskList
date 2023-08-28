import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Kat } from 'src/app/services/kat.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-task-move',
  templateUrl: './task-move.component.html',
  styleUrls: ['./task-move.component.css']
})
export class TaskMoveComponent implements OnInit {
id!:number
taskId!:number
chosenName!:string
newUserId!:number
numerNowegoWlasciciela:any
kategorie = this.kat.kategorie
filterKey:any = ''
selectedItem: any;
  constructor(private route:ActivatedRoute, public usersService:UsersService, private kat:Kat, public router:Router){}

  onChose(user:any,index:any){
    console.log(user)
    console.log(index)
    this.selectedItem = index
    this.chosenName = user.name + ' ' + user.lastName
    this.numerNowegoWlasciciela = user.nr
  }
onApply(){
    this.usersService.moveTask(this.id,this.taskId,this.usersService.getUserIndexByNr(this.numerNowegoWlasciciela))
    this.router.navigate(['list/'+this.id])
}
onCancel(){
  this.router.navigate(['list/'+this.id])
}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.taskId= params['task']
      console.log('ID: '+this.id+' Task: '+this.taskId)
  })}

}
