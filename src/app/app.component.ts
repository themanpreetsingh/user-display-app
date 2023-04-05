import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  title = 'user-display-app';
  users: Observable<any[]>;

  constructor() {
    const usersCollection = collection(this.firestore, 'users');
    this.users = collectionData(usersCollection);
  }
}
