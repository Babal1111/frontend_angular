import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {

  @Output() onpagechange = new EventEmitter<number>();
  @Input() max=1;
  currentPage =1;
  numbers:number[] = [];

  ngOnInit(){
    for(let i = 1;i<=this.max;i++){
      this.numbers.push(i);
    }
  }

  emitPageEvent(num:number){
    this.currentPage=num;
    this.onpagechange.emit(num);
    
  }
}
