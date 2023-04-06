import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  users: Observable<any[]>;

  constructor() {
    const usersCollection = collection(this.firestore, 'users');
    this.users = collectionData(usersCollection);
  }
}
