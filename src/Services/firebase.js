import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDiY-p2wNsywveyPzXeup2GGYeKgJ3Tg58",
    authDomain: "space-x-pwa.firebaseapp.com",
    projectId: "space-x-pwa",
    storageBucket: "space-x-pwa.appspot.com",
    messagingSenderId: "269409990526",
    appId: "1:269409990526:web:c00e8402bac066b076652f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;