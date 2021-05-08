//Done by
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// added Crud operation functionality
// adding values
interface RunningData {
  Distance: number;
  Time: number;
  Date: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'input.page.html',
  styleUrls: ['input.page.scss'],
})
export class InputPage {
  // making arrays for storing value
  RunList = [];
  runningData: RunningData;
  runningForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.runningData = {} as RunningData;
  }

  ngOnInit() {
    //creating a group for the form that requires validation
    this.runningForm = this.fb.group({
      Distance: ['', [Validators.required]],
      Time: ['', [Validators.required]],
      Date: ['', [Validators.required]],
    });
    // sends or updates new values to firebase storage
    this.firebaseService.read_Runs().subscribe((data) => {
      this.RunList = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Distance: e.payload.doc.data()['Distance'],
          Time: e.payload.doc.data()['Time'],
          Date: e.payload.doc.data()['Date'],
        };
      });
      console.log(this.RunList);
    });
  }
  // adding create function
  CreateRun() {
    console.log(this.runningForm.value);
    this.firebaseService
      .create_Run(this.runningForm.value)
      .then((resp) => {
        this.runningForm.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // adding remove function
  RemoveRun(rowID) {
    this.firebaseService.delete_Run(rowID);
  }
  //adding edit function
  EditRun(record) {
    record.isEdit = true;
    record.EditDistance = record.Distance;
    record.EditTime = record.Time;
    record.EditDate = record.Date;
  }
  // adding update function
  UpdateRun(recordRow) {
    let record = {};
    record['Distance'] = recordRow.EditDistance;
    record['Time'] = recordRow.EditTime;
    record['Date'] = recordRow.EditDate;
    this.firebaseService.update_Run(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
