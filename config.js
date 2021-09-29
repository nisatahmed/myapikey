const { initializeApp } = require("firebase/app");
const { getFirestore, collection, onSnapshot } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAVGVODrwoLWDvjDn8XfWMNBZlL8Nm09WU",
  authDomain: "nodeapi1234.firebaseapp.com",
  projectId: "nodeapi1234",
  storageBucket: "nodeapi1234.appspot.com",
  messagingSenderId: "338681629387",
  appId: "1:338681629387:web:00da95272ee45f8d95694e"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const books = collection(db, 'books');

module.exports = books;