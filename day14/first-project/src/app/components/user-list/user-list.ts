import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  @Input() name="default-name-list";
  @Input() address="default-add-list";
  @Input() age=0;
  @Input() gender="default-gender-list";
  @Input() index=0;

  
}
