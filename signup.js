const form = document.querySelector("form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const userName = document.querySelector("#uname");
const email = document.querySelector("#email");
const phone = document.querySelector("#tel");
const password = document.querySelector("#pw");

function validate() {
  if (firstName.value.trim() === "") {
    let formControl = firstName.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "First name cannot be empty";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    let formControl = firstName.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "";
    formControl.classList.remove("error");
    formControl.classList.add("success");
  }

  if (lastName.value.trim() === "") {
    let formControl = lastName.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "Last name cannot be empty";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    let formControl = lastName.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "";
    formControl.classList.remove("error");
    formControl.classList.add("success");
  }
  if (userName.value.trim() === "") {
    let formControl = userName.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "User name cannot be empty";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    let formControl = userName.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "";
    formControl.classList.remove("error");
    formControl.classList.add("success");
  }

  if (email.value.trim() === "") {
    let formControl = email.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "Email cannot be empty";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    if (!isValidEmail(email.value.trim())) {
      let formControl = email.parentElement;
      let msg = formControl.querySelector("small");
      msg.style.display = "block";
      msg.textContent = "Email is not a valid Email Address";
      formControl.classList.add("error");
      formControl.classList.remove("success");
    } else {
      let formControl = email.parentElement;
      let msg = formControl.querySelector("small");
      msg.style.display = "block";
      msg.textContent = "";
      formControl.classList.remove("error");
      formControl.classList.add("success");
    }
  }

  if (phone.value.trim() === "") {
    let formControl = phone.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "Phone number cannot be empty";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    if (!isValidPhone(phone.value.trim())) {
      let formControl = phone.parentElement;
      let msg = formControl.querySelector("small");
      msg.style.display = "block";
      msg.textContent = " it's not a valid Phone number";
      formControl.classList.add("error");
      formControl.classList.remove("success");
    } else {
      let formControl = phone.parentElement;
      let msg = formControl.querySelector("small");
      msg.style.display = "block";
      msg.textContent = "";
      formControl.classList.remove("error");
      formControl.classList.add("success");
    }
  }
  if (password.value.trim() === "") {
    let formControl = password.parentElement;
    let msg = formControl.querySelector("small");
    msg.style.display = "block";
    msg.textContent = "Password cannot be empty";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    if (!isValidPassword(password.value.trim())) {
      let formControl = password.parentElement;
      let msg = formControl.querySelector("small");
      msg.style.display = "block";
      msg.textContent =
        " Password must contain atleast an uppercase, lowercase, a digit and must have a minimum length of 8 character";
      formControl.classList.add("error");
      formControl.classList.remove("success");
    } else {
      let formControl = password.parentElement;
      let msg = formControl.querySelector("small");
      msg.style.display = "block";
      msg.textContent = "";
      formControl.classList.remove("error");
      formControl.classList.add("success");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function isValidEmail(email) {
  let emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}
function isValidPhone(phone) {
  let phoneReg = /^(\+?234|0)[789]\d{9}$/;
  return phoneReg.test(phone);
}

function isValidPassword(password) {
  let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordReg.test(password);
}
// storing Data
function test() {
  let firstN = localStorage.setItem("First Name", firstName);
  return test();
}
