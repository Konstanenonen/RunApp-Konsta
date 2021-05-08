/* section done by olivia Ekholm 2001411. */
/* removed the sidenav folder and moved the sidenav function to app.component.ts  */
/* because it interfered with the login page and other functions. Olivia Ekholm 2001411 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userEmail: string;
  active = '';

  /* sidenav buttons and icons */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NAV = [
    {
      name: 'Home',
      link: '/progres',
      icon: 'star'
    },
    {
      name: 'Insert your run',
      link: '/input',
      icon: 'walk'
    },
    {
      name: 'About us',
      link: '/about',
      icon: 'information-circle'
    },
    {
      name: 'Contact us',
      link: '/contact',
      icon: 'chatbubbles'
    },
  ];

  constructor(private navCtrl: NavController, private authService: AuthenticationService, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });
  }
  ngOnInit() { 
    // added logout function for the side menu. Olivia Ekholm 2001411.
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });

  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      });
  }
//
}
