import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TruncatePipe } from '../../truncate-pipe';

@Component({
  selector: 'app-iterinary',
  imports: [TruncatePipe],
  templateUrl: './iterinary.html',
  styleUrl: './iterinary.css',
})
export class Iterinary {
  show=false;
  @Input() eachtour={id:0, place: "default", days:0, cost: 0, description:"shut up"}

  @ViewChild('desc') descripElement!: ElementRef

  ngAfterViewInit() {
    console.log("ViewChild:", this.descripElement);
  }

  truncLength=6
  changeLenght(){
    let fullLength = this.eachtour.description.length;
    console.log(fullLength)
    if(this.truncLength!=fullLength){
      this.truncLength=fullLength
    }else{
      this.truncLength=6
    }
  }

  showDetails(){
    this.show = !this.show;

  }
}
