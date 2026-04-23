import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [DatePipe,DecimalPipe],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

  @Input() customers:any[] = [];

  // @Input() customer ={id:1,name:"default",address:"default",email:"default@gmail.com",phone:101100,dateOfBirth:new Date(2003,11,11), gender:"default"};

// ngOnInit(){
//   this.customer = 
// }
  constructor(){
    console.log("constructor called")
  }
  ngOnInint(){
    console.log("ngOn inti called")

  }
}
