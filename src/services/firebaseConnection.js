import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBEFdY5TVEz2_LIeQ38qJ_7z2JC0o2CHlk",
    authDomain: "sistema-e754a.firebaseapp.com",
    projectId: "sistema-e754a",
    storageBucket: "sistema-e754a.appspot.com",
    messagingSenderId: "393921800036",
    appId: "1:393921800036:web:c100f17cb0f1a8bfa23c71",
    measurementId: "G-SS9L1Y35BC"
  };
 
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);   
  }

  export default firebase;