import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = 'first-project';

  user = {
    name:'babal',
    address :'jalandhar',
    age:22,
    phone:[7009043251,123456789]
    };
    users=[
      {id:1,name:"babal",address:"pink city", age:26,gender:'male',pic:"https://imgs.search.brave.com/vz6WXA7ZmqJZ1-3Y2K785VQgvb_Oe8XG9gmvb5HmBCg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA0Lzc5LzQ0/LzM2MF9GXzMwNDc5/NDQ1OV9iYmlrZXNS/dWF3djF4R3MzWFhQ/ajhKTFZWTnVCeG05/Ty5qcGc",edit:true},
      {id:2,name:"Riya",address:"blue city", age:25,gender:'female',pic:"https://imgs.search.brave.com/vz6WXA7ZmqJZ1-3Y2K785VQgvb_Oe8XG9gmvb5HmBCg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA0Lzc5LzQ0/LzM2MF9GXzMwNDc5/NDQ1OV9iYmlrZXNS/dWF3djF4R3MzWFhQ/ajhKTFZWTnVCeG05/Ty5qcGc",edit:true},
      {id:3,name:"singh",address:"vice city", age:22,gender:'male',pic:"https://imgs.search.brave.com/vz6WXA7ZmqJZ1-3Y2K785VQgvb_Oe8XG9gmvb5HmBCg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA0Lzc5LzQ0/LzM2MF9GXzMwNDc5/NDQ1OV9iYmlrZXNS/dWF3djF4R3MzWFhQ/ajhKTFZWTnVCeG05/Ty5qcGc",edit:false}
    ]
}
  