//import firebase from 'firebase/app'
import  'firebase/firestore'
import * as firebase from 'firebase'
import 'firebase/storage'

  var firebaseConfig = {
    apiKey: "AIzaSyCbRkA5K0ZtmftnVW4Q8TVb5t6MHCzGg2Y",
    authDomain: "petcare-app-264d9.firebaseapp.com",
    databaseURL: "https://petcare-app-264d9.firebaseio.com",
    projectId: "petcare-app-264d9",
    storageBucket: "petcare-app-264d9.appspot.com",
    messagingSenderId: "832743567213",
    appId: "1:832743567213:web:b5195b984016a333e13464",
    measurementId: "G-GYED147FFT"

  };
  firebase.initializeApp(firebaseConfig);



  const storage = firebase.storage();


  export {
    storage, firebase as default
  } 