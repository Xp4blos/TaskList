import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Task } from "../models/task.model";
import { Subject, take } from "rxjs";
import { Point } from "../models/point.model";

@Injectable({providedIn:'root'})
export class UsersService{
    users: User[] = [
        new User(1111,'RIW','DT','Julia','Nowacka','Analityk biznesowy',[
            new Task('Tworzenie makiet',0,25,'Naprawa'),
            new Task('Inspekcja',2,50,'Naprawa'),
            new Task('Instalacja programu ABC',1,100,'Naprawa')]),

        new User(222,'PUM','DT','Sylwia','Nowak','Analityk biznesowy',[
            new Task('Tworzenie makiet',0,25,'Naprawa',[
                new Point('Stworzenie planu',20,false),
                new Point('Przygotowanie materiałów',20,false),
                new Point('Wykonanie makiety',60,false)
            ]),
            new Task('Inspekcja',2,50,'Naprawa'),
            new Task('Instalacja programu ABC',1,100,'Naprawa')],),

        new User(333,'TWT','okok','Wojciech','Śliwa','Analityk biznesowy',[
            new Task('Tworzenie makiet',0,25,'Naprawa'),
            new Task('Inspekcja',2,50,'Naprawa'),
            new Task('Instalacja programu ABC',1,100,'Naprawa')]),

        new User(444,'RIT','DT','Jan','Kowalski','Analityk biznesowy',[
            new Task('Tworzenie dokumentacji',2,25,'Naprawa'),
            new Task('Tworzenie makiet',1,75,'Naprawa'),
        ])

    ]
    
    getUserIndexByNr(numer:number){
        for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].nr == numer)
            {
                return i;
            }
            
        }
        return null;
    }
    setUsers(recipes:User[]){
        this.users= recipes;
        this.usersChanged.next(this.users.slice())
      }
  
    getUsersByDzial(dzial:string){
       let resultArray = []
        for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].dzial == dzial)
            {
                resultArray.push(this.users[i].name + ' ' + this.users[i].lastName)
            }
            
        }
        return resultArray;
    }
    getProcent(){

    }
    getTasksByKat(userId:number,kategoria:string){
        let resultArray = []
            for(let i = 0; i< this.users[userId].tasks.length; i++){
                if (this.users[userId].tasks[i].kategoria == kategoria) {
                    resultArray.push(this.users[userId].tasks[i])
                }
            }
        return resultArray;
    }
    moveTask(userOwnerIndex:number,taskIndex:number,newOwnerIndex:any){
       let task:Task = this.users[userOwnerIndex].tasks[taskIndex]
       console.log(task)
       this.users[newOwnerIndex].tasks.push(task)
       this.users[userOwnerIndex].tasks.splice(taskIndex,1)
        console.log('przeniesiono')

    }
    userIdEmitter = new Subject();
    UserEmitter = new Subject();
    usersChanged = new Subject<User[]>()
    getTask(userID:number, taskID:number){
        return this.users[userID].tasks[taskID]
    }

    deleteTask(userId:number,taskId:number){
        this.users[userId].tasks.splice(taskId,1)
    }
    deleteUser(userId:number){
        this.users.splice(userId,1)
    }
    addUser(user:User){
        this.users.push(user)
    }

    getUser(index:number){
        return this.users[index]
    }
    getUsers(){
        return this.users;
    }
    allTasksAmount(index:number){
        return this.users[index].tasks.length
    }
    finishedTasksAmount(index:number){
        let finished = 0
        for (const task of this.users[index].tasks) {
            if(task.status == 2){
                finished += 1
            }
            
        }
        return finished
    }
    updateRange(id:number,newValue:number){
    }
    getTaskName(status:number){
        let statusText = ''
        switch (status) {
            case 0:
                statusText = 'Nie rozpoczęte'
                break;
        
            case 1:
                statusText = 'W realizacji'
                break;
        
            case 2:
                statusText = 'Zakończone'
                break;
        }
        return statusText
    }

    userFullName(userId:number){
        return this.users[userId].name + ' ' + this.users[userId].lastName
    }


    filtrowanie(key:string){
        let resultArray = []

        if(!key || key ==''){
            console.log('nokey')
            return this.users
            
        }
        else{
            for(let i = 0; i < this.users.length; i++){
                if(this.userFullName(i).toLocaleLowerCase().includes(key) || this.userFullName(i).includes(key)){
                    resultArray.push(this.users[i])
                }
            }
            return resultArray
        }
    }



}