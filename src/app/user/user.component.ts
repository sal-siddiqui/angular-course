import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

 let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

   @Input({required: true}) user!: {id: string; avatar: string; name: string;};
   @Output() select = new EventEmitter()

   get src() {
    return 'assets/users/' + this.user.avatar;
   }

   onClick() {
    this.select.emit(this.user.id);
    }
}
