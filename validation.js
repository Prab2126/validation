let form = document.querySelector("form");
let button = document.querySelector(".btn");
let inputs = document.querySelectorAll("input");
const userData = {
  userName: "",
  phoneNo: "",
  mail: "",
  password: "",
};
const Validator = [false, false, false, false, false];
form.addEventListener("input", (e) => {
  let value = e.target.value;
  let style = e.target.style;
  let id = e.target.id;
  if (id == "userName") {
    let valid = /^([\w_-\s]){3,32}$/.test(value);
    changeStyle(valid, style);
    userData[id] = value;
    Validator[0] = valid;
  }
  if (id == "mail") {
    let valid =
      /^([\w][.\-_+\S\w]{1,64}[^.\-_+]\@[\w][-\S\w]{3,253}\.[a-z]{2,63})$/.test(
        value
      );
    changeStyle(valid, style);
    userData[id] = value;
    Validator[1] = valid;
  }
  if (id == "phoneNo") {
    let valid = /^(\+91)?([6-9][\d]{9})$/.test(value);
    changeStyle(valid, style);
    userData[id] = value;
    Validator[2] = valid;
  }
  if (id == "password") {
    let valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,20}$/.test(
      value
    );
    changeStyle(valid, style);
    userData[id] = value;
    Validator[3] = valid;
  }
  if (id == "c-password") {
    let check = userData["password"] == value;
    changeStyle(check, style);
    Validator[4] = check;
  }
  btnDisable();
});

const btnDisable = () => {
  let isValid = Validator.every((e) => e == true);
  if (isValid) {
    button.classList.remove("js-btn");
    button.disabled = false;
  } else {
    button.classList.add("js-btn");
    button.disabled = true;
  }
};
btnDisable();
const changeStyle = (postiveValue, style) => {
  if (postiveValue) {
    style.color = "green";
    style.borderColor = "green";
  } else {
    style.color = "red";
    style.borderColor = "red";
  }
};
button.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((e) => {
    e.value = "";
    e.style.color = "black";
    e.style.borderColor = "black";
  });

  console.log(userData);
  Validator.forEach((e, i) => {
    Validator.splice(i, 1, false);
  });
  btnDisable();

  alert("Registration is compeleted . to check the data open console");
});
