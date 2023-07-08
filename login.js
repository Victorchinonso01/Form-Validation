let button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let userEmail = localStorage.getItem("email");
  let userPassword = localStorage.getItem("password");
  let error = document.getElementById("error");

  if (userEmail !== email.value && userPassword !== password.value) {
    error.style.display = "block";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else {
    setTimeout(() => {
      window.location.replace("./home.html");
    }, 3000);
  }
});
