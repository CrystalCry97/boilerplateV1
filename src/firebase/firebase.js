import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDCfAwKSZ-q3GaiPK8Di5bWCCh8jTImbdI",
    authDomain: "sas92-10d48.firebaseapp.com",
    databaseURL: "https://sas92-10d48.firebaseio.com",
    projectId: "sas92-10d48",
    storageBucket: "sas92-10d48.appspot.com",
    messagingSenderId: "501650310659"
  };

  firebase.initializeApp(config);

  const Firebase = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {firebase, googleAuthProvider, Firebase as default};
//   Firebase.ref().set({
//       name:'chin yew tianee'
//   });
 