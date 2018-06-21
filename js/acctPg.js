var userEmail;
var userID; 
(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCiiafjb0maBJQMlMzuKeDF_9PGCf6v9Sc",
        authDomain: "bnsf-ideb.firebaseapp.com",
        databaseURL: "https://bnsf-ideb.firebaseio.com",
        projectId: "bnsf-ideb",
        storageBucket: "bnsf-ideb.appspot.com",
        messagingSenderId: "607551119611"
    };
    firebase.initializeApp(config);

	// Logout button
	const btnLogout = document.getElementById('btnLogout');
    const btnAccount = document.getElementById('btnAccount');
     
	// On clicking logout
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		window.location.href="index.html";
	})
    
    // Go to account page from the home page
    // TODO: DISPLAY SAVED DATA TO USER ACCOUNT PAGE
	btnAccount.addEventListener('click', e => {
		window.location.href="browse.html";
	});

	// Real-time listener to authenticate account and track login state
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        
		if(firebaseUser){
			console.log('logged in');
			var email = firebaseUser.email;
            userID = firebaseUser.uid;
            userEmail = email;
            document.getElementById("disp-txt").innerHTML = email;
            btnLogout.classList.remove('hide');
            /* TODO: DISPLAY SAVED DATA TO USER ACCOUNT PAGE */
            //btnSave.classList.remove('hide');
		}
		else{
            document.getElementById("disp-txt").innerHTML = "Sign up to save history";
            btnLogout.classList.add('hide');
            btnSave.classList.add('hide');
		}
	});
}());