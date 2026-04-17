import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './components/user-details/user-details';
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserDetails,UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = 'first-project';
  public viewType = "";
  public us={"name":"testingName"};
  users = [
    {"name":"Babal","address":"jabalPur","age":20,"gender":"male"},
    {"name":"Preet","address":"ludhiana","age":21,"gender":"male"},
    {"name":"Priya","address":"ferozepur","age":23,"gender":"female"},
    {"name":"Neha","address":"Surat","age":20,"gender":"female"},
    {"name":"Chandan","address":"Goa","age":21,"gender":"male"},
    {"name":"Narendra Modi","address":"People's Heart","age":16,"gender":"gmail"}
  ]
changeTitle(){
this.title = "Indian geography (changed title)"
}



cardView(){
  this.viewType="cardView";
}
listView(){
  this.viewType="listView";

}

parentAction(data:any){
  console.log("Parent has recieved the data: "+data);
  console.log("The data: (name)"+data.name+" (gender) : "+data.gender );
  
  for(let i=0;i<this.users.length;i++){
    if(this.users[i].name = data.name){
      this.users.splice(i,1);
      break;
    }
  }

}
}
  
