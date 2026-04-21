import { Component } from '@angular/core';
import { Customer } from './Customer';
import { email } from '@angular/forms/signals';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../../truncate-pipe';

@Component({
  selector: 'app-customer-list',
  imports: [DecimalPipe,DatePipe,FormsModule,TruncatePipe],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  startIndex=0;
  pageSize=5;
  // endIndex=this.pageSize;

  searchedName="";
  result:Customer[]=[];

    customers:Customer[]=[
      {id:1,name:"Babal",address:"Jalandhar",email:"babal@gmail.com",phone:7009043251,dateOfBirth:new Date(2003,11,11), gender:"Male"},
      {id:2,name:"Neha",address:"Ludhiana",email:"nehu@gmail.com",phone:7023043251,dateOfBirth:new Date(2000,6,1), gender:"Female"},
      {id:3,name:"Preet",address:"Mohali",email:"Preeee@gmail.com",phone:9004561694,dateOfBirth:new Date(1990,10,11), gender:"Male"},
      {id:4,name:"Singh",address:"Chandigarh",email:"Seengh@gmail.com",phone:9417830863,dateOfBirth:new Date(1978,8,3), gender:"Male"},
      {id:5,name:"Vanshika",address:"Rama mandi",email:"vanshu@gmail.com",phone:9465621366,dateOfBirth:new Date(2011,9,11), gender:"Female"},

      {id:6,name:"Binnu",address:"Jalandhar",email:"babal@gmail.com",phone:7009043251,dateOfBirth:new Date(2003,11,11), gender:"Male"},
      {id:7,name:"Neha",address:"Ludhiana",email:"nehu@gmail.com",phone:7023043251,dateOfBirth:new Date(2000,6,1), gender:"Female"},
      {id:8,name:"Preet",address:"Mohali",email:"Preeee@gmail.com",phone:9004561694,dateOfBirth:new Date(1990,10,11), gender:"Male"},
      {id:9,name:"Singh",address:"Chandigarh",email:"Seengh@gmail.com",phone:9417830863,dateOfBirth:new Date(1978,8,3), gender:"Male"},
      {id:10,name:"Vanshika",address:"Rama mandi",email:"vanshu@gmail.com",phone:9465621366,dateOfBirth:new Date(2011,9,11), gender:"Female"},


      {id:11,name:"Barak",address:"Jalandhar",email:"babal@gmail.com",phone:7009043251,dateOfBirth:new Date(2003,11,11), gender:"Male"},
      {id:12,name:"Neha",address:"Ludhiana",email:"nehu@gmail.com",phone:7023043251,dateOfBirth:new Date(2000,6,1), gender:"Female"},
      {id:13,name:"Preet",address:"Mohali",email:"Preeee@gmail.com",phone:9004561694,dateOfBirth:new Date(1990,10,11), gender:"Male"},
      {id:14,name:"Singh",address:"Chandigarh",email:"Seengh@gmail.com",phone:9417830863,dateOfBirth:new Date(1978,8,3), gender:"Male"},
      {id:15,name:"Vanshika",address:"Rama mandi",email:"vanshu@gmail.com",phone:9465621366,dateOfBirth:new Date(2011,9,11), gender:"Female"},

      {id:16,name:"Preet",address:"Mohali",email:"Preeee@gmail.com",phone:9004561694,dateOfBirth:new Date(1990,10,11), gender:"Male"},
      {id:17,name:"Singh",address:"Chandigarh",email:"Seengh@gmail.com",phone:9417830863,dateOfBirth:new Date(1978,8,3), gender:"Male"},
      {id:18,name:"Vanshika",address:"Rama mandi",email:"vanshu@gmail.com",phone:9465621366,dateOfBirth:new Date(2011,9,11), gender:"Female"}

    ]
    len=this.customers.length;
    prev(){
      if(this.startIndex>0){
        this.startIndex = this.startIndex-this.pageSize;
      }
    }
    next(){
      if(this.startIndex<this.customers.length){
        this.startIndex=this.startIndex+this.pageSize;
      }
    }
    search(){
      
      // if(this.searchedName==""){
      //   this.result=[];
      // }
      this.result=[];
      for(let customer of this.customers){
        if(customer.name.toLowerCase().includes(this.searchedName.toLowerCase())){
          this.result.push(customer);
        }

      }
    }
 
}

