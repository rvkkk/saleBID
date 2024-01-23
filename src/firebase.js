import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2pKkDB95K4cgoS-sti7wmkY87cKqIqYI",
  authDomain: "sale-bid.firebaseapp.com",
  projectId: "sale-bid",
  storageBucket: "sale-bid.appspot.com",
  messagingSenderId: "1084793601660",
  appId: "1:1084793601660:web:deb3f7445ee44185de53f9",
  measurementId: "G-72ZLFCFNL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);