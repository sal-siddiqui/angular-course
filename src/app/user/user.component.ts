import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex])
  
  get src() {
    return computed(() => 'assets/users/' + this.selectedUser().avatar)
  }
  
  get alt() {
    return computed(() => 'Picture of ' + this.selectedUser().name)
  }
  
  onClick() {
    randomIndex = (randomIndex + 1) % DUMMY_USERS.length
    console.log(randomIndex)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }



  
}
