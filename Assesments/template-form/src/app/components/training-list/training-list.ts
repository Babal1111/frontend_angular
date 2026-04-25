import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrainingInterface,TrainigService } from '../../services/trainig-service';


@Component({
  selector: 'app-training-list',
  imports: [DatePipe],
  templateUrl: './training-list.html',
  styleUrl: './training-list.css',
})
export class TrainingList {
  
 // @Input() trainingList:any[]=[];
 trainingList:TrainingInterface[]=[];

 constructor(private trainigService: TrainigService){}

 ngOnInit(){
  this.trainingList= this.trainigService.getUpComingTrainigs();
 }

}
