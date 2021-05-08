import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}
  ngOnInit() {}

  // function for clicking the button, Pauliina 2000603
  btnClicked() {
    this.router.navigate(['progres']);
  }
}
