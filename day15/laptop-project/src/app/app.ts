import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaptopCard } from './components/laptop-card/laptop-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LaptopCard,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = ' laptop-project' ;
  startIndex=0;
  endIndex=3;
  
  laptops=[
    {"id":1,"model":"Pavillion", "price":10000,"brand":"HP"},
    {"id":2,"model":"Neo", "price":20000,"brand":"Apple"},
    {"id":3,"model":"Idepad", "price":5000,"brand":"Lenovo"},
    {"id":4,"model":"Kela", "price":20000,"brand":"Banana"},
    {"id":5,"model":"ROG", "price":5000,"brand":"Asus"},
    {"id":6,"model":"Thinkpad", "price":20000,"brand":"lenovo"},
  ]


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
