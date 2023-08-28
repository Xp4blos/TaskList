import { Component, OnInit } from '@angular/core';
import { Kat } from '../services/kat.service';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-kategories',
  templateUrl: './kategories.component.html',
  styleUrls: ['./kategories.component.css']
})
export class KategoriesComponent implements OnInit{
  id!:number
constructor(public kategories:Kat, public usersService: UsersService, private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    this.id = +params['id'];

  })
}
}
