import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7Bo2Q_Dwc3D4dcEm22Fhxxv5xxkBUtLA",
  authDomain: "iyftravelandtour-64885.firebaseapp.com",
  projectId: "iyftravelandtour-64885",
  storageBucket: "iyftravelandtour-64885.appspot.com",
  messagingSenderId: "762839369206",
  appId: "1:762839369206:web:fe4d46d2fbaba7563673d7",
  measurementId: "G-1Z01GQ98WQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
