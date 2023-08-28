import { Point } from "./point.model";
export class Task{
    constructor(public content:string, 
                public status:number, 
                public zaawansowanie:number,    
                public kategoria:string, 
                public Points ?: Point[] ){}
}