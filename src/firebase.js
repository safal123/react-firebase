import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBlRJIwkjWY7MLI5DGf0VOrL3dVZ3FFg68",
    authDomain: "react-login-a0b54.firebaseapp.com",
    projectId: "react-login-a0b54",
    storageBucket: "react-login-a0b54.appspot.com",
    messagingSenderId: "596286641344",
    appId: "1:596286641344:web:950706f5b6bbf9b26ac925",
    measurementId: "G-EKKD3M4MZX"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};