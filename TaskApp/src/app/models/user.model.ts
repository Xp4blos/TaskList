import { Task } from "./task.model";
export class User{
    constructor(
        public nr:number, 
        public dzial:string, 
        public pion:string, 
        public name:string, 
        public lastName:string,
        public stanowisko:string,
        public tasks:Task[]){}
}
