import firebase from 'firebase'
// import * as firebase from "firebase";
// import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCmvkAW7xqMVNc-1ndwhsi3TnBBeLFBR7g",
    authDomain: "onyma-3d5ad.firebaseapp.com",
    projectId: "onyma-3d5ad",
    storageBucket: "onyma-3d5ad.appspot.com",
    messagingSenderId: "427795202569",
    appId: "1:427795202569:web:14a5498ea8fd7703a3aed8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;