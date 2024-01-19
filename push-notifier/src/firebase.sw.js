importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');      // Atenção para a versao do firebase aqui e na linha de baixo
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyD9efTQuEPBKpMalL7xLMfnoxFeYJ24Dws",
    authDomain: "push-notifier-737e2.firebaseapp.com",
    projectId: "push-notifier-737e2",
    storageBucket: "push-notifier-737e2.appspot.com",
    messagingSenderId: "1086353491958",
    appId: "1:1086353491958:web:0458396c584303ed43e9d7",
    measurementId: "G-RHKJJFMESH"
});
const messaging = firebase.messaging();