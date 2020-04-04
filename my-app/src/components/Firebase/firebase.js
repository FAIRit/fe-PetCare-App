import firebase from 'firebase';
import 'firebase/storage'


const config = {
  apiKey:  "AIzaSyCbRkA5K0ZtmftnVW4Q8TVb5t6MHCzGg2Y",
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: 'https://petcare-app-264d9.firebaseio.com/',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'petcare-app-264d9.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}

const fire = firebase.initializeApp(config);

const storage = firebase.storage();


export {
  fire, storage, firebase as default
}