import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  constructor(private router: Router, private usersService:UsersService){}
onSubmit(f:NgForm){
console.log(f.form.value)
this.usersService.addUser(new User(
  f.form.value.nrPrac,
  f.form.value.dzial,
  f.form.value.pion,
  f.form.value.name,
  f.form.value.lastName,
  f.form.value.stanowisko,
  []
))
this.router.navigate(['/list'])
}

onCancel(){
this.router.navigate(['/list'])
}
}
