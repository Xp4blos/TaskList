import { Component, EventEmitter, Output } from '@angular/core';
import { Kat } from 'src/app/services/kat.service';

@Component({
  selector: 'app-new-kat',
  templateUrl: './new-kat.component.html',
  styleUrls: ['./new-kat.component.css']
})
export class NewKatComponent {
@Output() close = new EventEmitter<number>()
katName!:string


constructor(private katService:Kat){}

onKatInput(e:any){
this.katName = e.target.value
}
onAdd(){
  console.log(this.katName)
  this.katService.kategorie.push(this.katName)
  this.close.emit(1)
}

onClose(){
this.close.emit()
}


}
