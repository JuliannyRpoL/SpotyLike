import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyAzL_jRGx-g9P5TYDxeDBa4KCX7bWa_WLU',
  authDomain: 'netlike-538c0.firebaseapp.com',
  databaseURL: 'https://netlike-538c0.firebaseio.com',
  projectId: 'netlike-538c0',
  storageBucket: 'netlike-538c0.appspot.com',
  messagingSenderId: '969850758677',
  appId: '1:969850758677:web:c71b5cbccfa2fbf1ff101c',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
