// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//made firebase environment, Kim Dinh 2001124
export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyBXT1j2jnGv7C2eEPiiu02MC_DxHkfXUoU",
    authDomain: "runapp-3bda3.firebaseapp.com",
    projectId: "runapp-3bda3",
    storageBucket: "runapp-3bda3.appspot.com",
    messagingSenderId: "288099147896",
    appId: "1:288099147896:web:4339a38e0e18251a390d8d",
    measurementId: "G-S6LBT2Z5HL"
  }
};
//-------
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
