import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laptop-card',
  imports: [DecimalPipe,CurrencyPipe,FormsModule],
  templateUrl: './laptop-card.html',
  styleUrl: './laptop-card.css',
})
export class LaptopCard {

    // @Input() model="default";
    // @Input() price= 0;
    // @Input() brand = "default";
    // @Input() index=0;

    @Input() laptopObject ={"model":"default","price":0,"brand":"default","id":0};  // this will be the data i recieve
    model="default";
    brand="default"
    price=0;
    id=0;
    highlighted=false;
    like=""
    clr=""

    highlight(){
      // this.clr="pink";
      this.highlighted = !this.highlighted;
    }
    

  constructor(){
    console.log("const of laptop card data recieved (constructor)" + this.laptopObject+ "brand "+this.laptopObject.brand);

  }
  
  ngOnInit(){
      
    this.model=this.laptopObject.model;
    this.brand= this.laptopObject.brand;
    this.price = this.laptopObject.price;
    this.id=this.laptopObject.id;
    // price = this.laptopObject.price;
        console.log("const of laptop card data (ngOnitit) " + this.laptopObject ,this.model, this.brand, this.laptopObject.brand);

  }
  
  
  // changedValue(event:any){
  //   console.log("event : ",event.target.value);
  //   this.like = event.target.value;
  //   console.log();
  // }

}
