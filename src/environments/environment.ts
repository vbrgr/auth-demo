// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCc4d_B1vuq-tSMcEuZY2S2BQbWchRQjvg',
      authDomain: 'auth-demo-2b749.firebaseapp.com',
      databaseURL: 'https://auth-demo-2b749.firebaseio.com',
      projectId: 'auth-demo-2b749',
      storageBucket: 'auth-demo-2b749.appspot.com',
      messagingSenderId: '389238218580'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
