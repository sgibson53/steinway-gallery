// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA27izgiRRoOgouEsciAU8fRzgcPQnAfNc',
    authDomain: 'steinway-gallery-2ee6a.firebaseapp.com',
    databaseURL: 'https://steinway-gallery-2ee6a.firebaseio.com',
    projectId: 'steinway-gallery-2ee6a',
    storageBucket: '',
    messagingSenderId: '491872175744'
  }
};
