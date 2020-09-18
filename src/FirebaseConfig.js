import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyAEcWBuPdPFAr6kl7KE5g1R3Exs7UpjiP8",
	authDomain: "travel-guide-2fc02.firebaseapp.com",
	databaseURL: "https://travel-guide-2fc02.firebaseio.com",
	projectId: "travel-guide-2fc02",
	storageBucket: "travel-guide-2fc02.appspot.com",
	messagingSenderId: "577856097993",
	appId: "1:577856097993:web:d998238059cb854544c718",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
