import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDX1koVxNxvV5_YbDlQ5kNO-Pl1MPk4ZxE",
    authDomain: "e-v2-3603f.firebaseapp.com",
    projectId: "e-v2-3603f",
    storageBucket: "e-v2-3603f.appspot.com",
    messagingSenderId: "417005997275",
    appId: "1:417005997275:web:f22dda29aa84cff69310fe",
    measurementId: "G-E60V9DG63X"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db