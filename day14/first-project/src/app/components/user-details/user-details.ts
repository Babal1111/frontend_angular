import { Component, EventEmitter, Input,OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
    public edit = false;
    @Input() name ='default';
    @Input() address ='default';
    @Input() age=22;
    @Input() gender='default';
    @Input() index=0;

    @Output() onupdate = new EventEmitter<any>();
    

   constructor(){
    console.log("in constructor of userdetails");
    console.log("Name : "+this.name+" Adress : "+this.address + " gender : "+this.gender);
   }
   ngOnInit(){
    console.log("in constructor of userdetails");
    console.log("Name : "+this.name+" Adress : "+this.address + " gender : "+this.gender);
   }
   informParent(){
    this.onupdate.emit({ name : this.name,gender: this.gender});
   }
   editDetails(){
    this.edit=true;
   }
}
