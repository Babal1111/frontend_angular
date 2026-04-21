import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaptopCard } from './components/laptop-card/laptop-card';
import { FormsModule } from '@angular/forms';
import { CustomerList } from './components/customer-list/customer-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LaptopCard,FormsModule,CustomerList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = ' laptop-project' ;
  startIndex=0;
  endIndex=3;
  
laptops = [
  {"id":1,"model":"Pavillion", "price":10000,"brand":"HP","discription":"Reliable HP laptop for everyday use. Satsta tikau maal , lelo"},
  {"id":2,"model":"Neo", "price":20000,"brand":"Apple","discription":"Sleek Apple laptop with top-notch performance. Satsta tikau maal , lelo"},
  {"id":3,"model":"Idepad", "price":5000,"brand":"Lenovo","discription":"Affordable Lenovo laptop for basic tasks. Satsta tikau maal , lelo"},
  {"id":4,"model":"Kela", "price":20000,"brand":"Banana","discription":"High-end Banana laptop with premium features. Satsta tikau maal , lelo"},
  {"id":5,"model":"ROG", "price":5000,"brand":"Asus","discription":"Gaming laptop by Asus with powerful graphics. Satsta tikau maal , lelo"},
  {"id":6,"model":"Thinkpad", "price":20000,"brand":"lenovo","discription":"Business laptop Lenovo Thinkpad, sturdy and reliable. Satsta tikau maal , lelo"},
];


  previous(){
    // this.startIndex-=3;
    
    if(this.startIndex>0){
      this.startIndex-=3;
      this.endIndex-=3;
    }
  }
  next(){
    
    if(this.endIndex<this.laptops.length){
      this.startIndex+=3;
      this.endIndex+=3;
    }
  }
}
