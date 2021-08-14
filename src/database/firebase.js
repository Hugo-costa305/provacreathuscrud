
import firebase from 'firebase'
  
  var firebaseConfig = {
    apiKey: "AIzaSyAr3ZImpqrYXnRGELXqYLvJVdgRiwRobE8",
    authDomain: "agenda-de-aulas-e1471.firebaseapp.com",
    
    projectId: "agenda-de-aulas-e1471",
    storageBucket: "agenda-de-aulas-e1471.appspot.com",
    messagingSenderId: "158541115373",
    appId: "1:158541115373:web:5ce4f4acba261f2391c1e4"
  };
  
  
  let fireDb = firebase. initializeApp(firebaseConfig);

  export default fireDb.database().ref()
