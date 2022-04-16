import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwis5lpj4wb-L5uNaMT0lsPhEcunF22PE",
  authDomain: "twitter-clone-7840f.firebaseapp.com",
  projectId: "twitter-clone-7840f",
  storageBucket: "twitter-clone-7840f.appspot.com",
  messagingSenderId: "508169431445",
  appId: "1:508169431445:web:3efec7d65822f98c49ee9c",
  measurementId: "G-Y8L4TCCLDW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
