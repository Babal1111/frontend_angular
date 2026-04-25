import { Routes } from '@angular/router';
import { Form } from './components/form/form';
import { TrainingList } from './components/training-list/training-list';

export const routes: Routes = [
    // {path:'',redirectTo:'trainings'},
    {path:'add-training',component: Form},
    {path:'training-list',component:TrainingList}
];
