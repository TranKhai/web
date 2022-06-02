import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABqyYp75S1zC3VacSJ1JKeK-gDkw5XwRc",
  authDomain: "web-test-7a62f.firebaseapp.com",
  projectId: "web-test-7a62f",
  storageBucket: "web-test-7a62f.appspot.com",
  messagingSenderId: "932741798855",
  appId: "1:932741798855:web:65fbde1e95c52be199d7e2",
  measurementId: "G-FV0G4QXQ90"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
