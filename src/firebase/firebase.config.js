import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-LCVvyfdT9-eqjbT9CHubd7pAvvk9de8",
  authDomain: "sanjeev-foodapp.firebaseapp.com",
  projectId: "sanjeev-foodapp",
  storageBucket: "sanjeev-foodapp.firebasestorage.app",
  messagingSenderId: "843316866534",
  appId: "1:843316866534:web:61bfeeb393c36661ff3a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;