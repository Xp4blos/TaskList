import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  id!:number
  user!:any
  constructor(private router: Router,private route:ActivatedRoute, private usersService:UsersService){}
  onSubmit(f:NgForm){
  console.log(f.form.value)
  this.usersService.users[this.id].nr = f.form.value.nrPrac
  this.usersService.users[this.id].dzial = f.form.value.dzial
  this.usersService.users[this.id].pion = f.form.value.pion
  this.usersService.users[this.id].name = f.form.value.name
  this.usersService.users[this.id].lastName = f.form.value.lastName
  this.usersService.users[this.id].stanowisko =  f.form.value.stanowisko
  this.router.navigate(['/list'])
  }
  
  onCancel(){
  this.router.navigate(['/list'])
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      console.log('ID: '+this.id+' edytowanie')
      this.user = this.usersService.getUser(this.id)
      this.usersService.userIdEmitter.next(this.usersService.getUser(this.id).name + ' ' + this.usersService.getUser(this.id).lastName + ' - edycja użytkownika')
  })
}
  }
 

