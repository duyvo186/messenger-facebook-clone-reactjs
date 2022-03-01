import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp ({
    

        apiKey: "AIzaSyBjeLlxmJ2wRV37gEKBZng2Uc6WfflRI48",
        authDomain: "facebook-messenger-clone-c54da.firebaseapp.com",
        projectId: "facebook-messenger-clone-c54da",
        storageBucket: "facebook-messenger-clone-c54da.appspot.com",
        messagingSenderId: "513416901247",
        appId: "1:513416901247:web:3429f3757bd36cf215854a",
        measurementId: "G-G8PJD7TE8L"
  
}); 
 const db = firebaseApp.firestore();


export default  db ;
