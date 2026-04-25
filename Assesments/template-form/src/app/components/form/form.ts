import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainingList } from '../training-list/training-list';
import { TrainingInterface,TrainigService } from '../../services/trainig-service';
 
@Component({
  selector: 'app-form',
  imports: [FormsModule,TrainingList],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  data:TrainingInterface={title:"",topic:"",maxTrainees:0,startDate:'',endDate:'',trainerName:"",venue:""}
  trainingList:any[] =[];
  btnEnabled=true;

  constructor(private trainigService: TrainigService){};

  onSubmit(){
    this.trainigService.addTraining({...this.data});
    console.log("form data: " +this.data.title,this.data.topic,this.data.maxTrainees,this.data.startDate,this.data.endDate);
    this.resetForm();
  }
  resetForm(){
    this.data={title:"",topic:"",maxTrainees:0,startDate:'',endDate:'',trainerName:"",venue:""}
  }
}
