(function () {
    // Initialize Firebase
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
    
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const newEmail = document.getElementById('newEmail');
    const newPassword = document.getElementById('newPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        usrEmail = email;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => alert(e.message));
    });
    
    btnSignUp.addEventListener('click', e => {
        const email = newEmail.value;
        usrEmail = email;
        const pass = newPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => alert(e.message));
    });
    
    // On clicking logout
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	})
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            window.location.href="browse.html";
            btnLogout.classList.remove('hide');
            btnSave.classList.remove('hide');
        }
        else{
            btnLogout.classList.add('hide');
            btnSave.classList.add('hide');
        }
    });
}());


