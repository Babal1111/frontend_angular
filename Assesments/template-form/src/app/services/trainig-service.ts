import { Injectable } from '@angular/core';

export interface TrainingInterface{
  title:string;
  topic:string;
  maxTrainees:number;
  startDate:string;
  endDate:string;
  trainerName:string;
  venue:string;
}
@Injectable({
  providedIn: 'root',
})
export class TrainigService {
    private trainingList: TrainingInterface[]=[];

    addTraining(training:TrainingInterface){
      this.trainingList.push(training);
    }
    getUpComingTrainigs():TrainingInterface[]{
      const today = new Date();
      // return this.trainingList.filter(training=> new Date(training.startDate)>= today)
      return this.trainingList;
    }
}
