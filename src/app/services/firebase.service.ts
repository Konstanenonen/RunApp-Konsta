// setting input page for to use Crud Operations. Kim Dinh 2001124.
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'RunningInfo';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_Run(Run) {
    return this.firestore.collection(this.collectionName).add(Run);
  }

  read_Runs() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_Run(RunID, run) {
    this.firestore.doc(this.collectionName + '/' + RunID).update(run);
  }

  delete_Run(Run_id) {
    this.firestore.doc(this.collectionName + '/' + Run_id).delete();
  }
}