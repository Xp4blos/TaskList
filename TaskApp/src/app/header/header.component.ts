import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  headerText:string = 'Lista pracowników' 
userId!:number
icon:string = 'assets/img/hand.png'
treeOpen:boolean = false
katOpen:boolean = false
  constructor(private route:ActivatedRoute,private router: Router ,private usersService:UsersService, private storage: DataStorageService){ }
  onButton(){
    this.storage.storeData()
    if(this.headerText == 'Lista pracowników')
    {
    if(this.treeOpen == false)
    {
    
        this.router.navigate(['tree'])
        this.treeOpen = true
      
    }
    else{
      this.router.navigate(['list'])
      console.log('goBack to list')
      this.treeOpen = false
    }
  }
  else{
    this.icon = 'assets/img/grid.png'

    if(this.katOpen == false){
    this.router.navigate(['kategories/'+this.userId])
    this.katOpen = true
    }
    else{
      this.router.navigate(['list/'+this.userId])
    this.katOpen = false
    }
  }
  }
onSave(){
  this.storage.storeData()
}
onFetch(){
  this.storage.fetchRecipes().subscribe()
}

  ngOnInit(): void {
    this.usersService.UserEmitter.subscribe((e:any)=>{
      this.userId = e
    })
    this.usersService.userIdEmitter.subscribe((e)=>{
      if(e){
        this.headerText = e.toString()
        if(e.toString() != 'Lista pracowników'){
          this.icon = 'assets/img/grid.png'
        }
        else{
          this.icon = 'assets/img/hand.png'
        }
      }
    })

  }

}
