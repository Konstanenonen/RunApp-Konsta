import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.page.html',
  styleUrls: ['./progres.page.scss'],
})
export class ProgresPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  //Function for going through an array, which is a list of all the tips, Pauliina 2000603
  changeText() {
    //creates an array
    const array = [
      'Remember to take a day off!',
      'Do not forget to drink water!',
      'Remember to eat healthy!',
      'Choose good shoes for running!',
      'Have a running schedule!',
    ];
    //chooses random number from the array list
    const random = Math.floor(Math.random() * array.length);
    const textBox = document.getElementById('tipText');
    //shows random tip in the textBox
    textBox.innerHTML = array[random];
  }
  //This function makes the button direct to input page Konsta 2001353
  btnClicked() {
    this.router.navigate(['input']);
  }
}
