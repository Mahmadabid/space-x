/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDiY-p2wNsywveyPzXeup2GGYeKgJ3Tg58",
    authDomain: "space-x-pwa.firebaseapp.com",
    projectId: "space-x-pwa",
    storageBucket: "space-x-pwa.appspot.com",
    messagingSenderId: "269409990526",
    appId: "1:269409990526:web:c00e8402bac066b076652f"
})

firebase.messaging();
