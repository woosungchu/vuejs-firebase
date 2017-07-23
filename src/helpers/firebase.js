import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyATJF0TthZFfzONJ1ZaoO13PjWZqJYYU8M",
  authDomain: "fir-vue-tutorial.firebaseapp.com",
  databaseURL: "https://fir-vue-tutorial.firebaseio.com",
  projectId: "fir-vue-tutorial",
  storageBucket: "fir-vue-tutorial.appspot.com",
  messagingSenderId: "8930388054"
};

const firebaseApp = Firebase.initializeApp(config);

export const db = firebaseApp.database();
