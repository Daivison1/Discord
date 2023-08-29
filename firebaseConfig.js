import { initializeApp } from 'firebase/app';

then ((userCredential) => {
   const user = userCredential.user;
})

.catch((error)=> {
   const errorCode = error .code;
   const errorMessage = error.message;
});

const firebaseConfig = {
    apiKey: "AIzaSyAsX44cmlM-bhKxEjPvL9ZaGo4nU01f5cE",
    authDomain: "discord-eb428.firebaseapp.com",
    databaseURL: "https://discord-eb428-default-rtdb.firebaseio.com",
    projectId: "discord-eb428",
    storageBucket: "discord-eb428.appspot.com",
    messagingSenderId: "783007954648",
    appId: "1:783007954648:web:98c57d868bcd35482309ad"
  };
  
  const app = initializeApp(firebaseConfig);
  export default app 