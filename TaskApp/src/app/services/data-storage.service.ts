import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";
import {HttpClient} from '@angular/common/http'
import { User } from "../models/user.model"
import { map, tap } from "rxjs";
@Injectable({providedIn:'root'})
export class DataStorageService{

constructor(private usersService: UsersService,private http:HttpClient ){}

storeData(){
const users = this.usersService.users
this.http.put('https://task-app-4f4a7-default-rtdb.europe-west1.firebasedatabase.app/users.json',users).subscribe((response)=>{
    console.log('put '+response)
})
}

fetchRecipes() {
    return this.http.get<User[]>('https://task-app-4f4a7-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      .pipe(
        map((users) => {
           
          return users.map(user => {
            return { ...user, tasks: user.tasks ? user.tasks : [] };
            
          });
        }),
        tap((users) => {
          this.usersService.setUsers(users)
          console.log(users)
        })
      );
  }
  
}