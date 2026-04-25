import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Form } from './components/form/form';
import { TrainingList } from './components/training-list/training-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Form,TrainingList,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('template-form');
}
