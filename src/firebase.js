import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAU43P6qUlHcqVK6oSOROO8NgCUQYfD9tY",
    authDomain: "idobatakaigi-with-ham-c95de.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-c95de",
    storageBucket: "idobatakaigi-with-ham-c95de.appspot.com",
    messagingSenderId: "720906214243",
    appId: "1:720906214243:web:0c321cb8af0ae883051156"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messsagesRef = database.ref('messages');

export const pushMessage = ({name,text}) => {
  messsagesRef.push({name,text});
};

