let button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  let email = document.getElementById("email");
  let Newpassword = document.getElementById("newpassword");
  let ConfirmPassword = document.getElementById("confirmpassword");
  let eerror = document.getElementById("eerror");
  let nperror = document.getElementById("nperror");
  let cperror = document.getElementById("cperror");

  let formDiv = document.getElementById("formDiv");
  let userEmail = localStorage.getItem("email");

  if (email.value === "") {
    eerror.style.display = "block";
    email.style.border = "1px solid red";
    eerror.innerText = "email is required";
    setTimeout(() => {
      eerror.style.display = "none";
      email.style.border = "1px solid black";
    }, 5000);
  } else if (userEmail !== email.value) {
    eerror.style.display = "block";
    eerror.innerText = "user dose not exist";
    email.style.border = "1px solid red";

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      eerror.style.display = "block";
      eerror.innerText = "email is invalid";
      email.style.border = "1px solid red";
    }

    setTimeout(() => {
      eerror.style.display = "none";
      email.style.border = "1px solid black";
    }, 5000);
  } else if (Newpassword.value === "") {
    nperror.style.display = "block";
    Newpassword.style.border = "1px solid red";
    nperror.innerText = "password is required";
    setTimeout(() => {
      nperror.style.display = "none";
      Newpassword.style.border = "1px solid black";
    }, 5000);
  } else if (Newpassword.value !== ConfirmPassword.value) {
    cperror.style.display = "block";
    ConfirmPassword.style.border = "1px solid red";
    cperror.innerText = "new password dose not match";
    setTimeout(() => {
      cperror.style.display = "none";
      ConfirmPassword.style.border = "1px solid black";
    }, 5000);
  } else {
    if (Newpassword.value === ConfirmPassword.value) {
      localStorage.setItem("password", Newpassword.value);
      setTimeout(() => {
        window.location.replace("http://127.0.0.1:5500/home.html");
      }, 3000);
    }
  }
});
