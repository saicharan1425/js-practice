/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
document
  .getElementById("username")
  .insertAdjacentHTML(
    "beforebegin",
    '<label for="username"> UserName: </label>'
  );
document
  .getElementById("password")
  .insertAdjacentHTML(
    "beforebegin",
    '<label for="password"> PassWord: </label>'
  );
document
  .getElementById("confirmPassword")
  .insertAdjacentHTML(
    "beforebegin",
    '<label for="confirmPassword"> ReEnter Password: </label>'
  );
/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
const checkInput = (event) => {
  const errorElement = Array.from(
    event.target.parentNode.querySelectorAll("span")
  );
  if (event.target.value === "" && !errorElement.length) {
    event.target.insertAdjacentHTML(
      "afterEnd",
      '<span class="text-danger"> Required</span>'
    );
  }
  if (errorElement && event.target.value !== "") {
    errorElement.forEach((elem) => elem.remove());
  }
};

document.getElementById("username").addEventListener("blur", checkInput);
document.getElementById("password").addEventListener("blur", checkInput);
document.getElementById("confirmPassword").addEventListener("blur", checkInput);
/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

const checkPwMatch = document.getElementById("password");

document.getElementById("confirmPassword").addEventListener("blur", (event) => {
  if (event.target.value !== checkPwMatch.value) {
    event.target.insertAdjacentHTML(
      "afterEnd",
      '<span class="text-danger"> PassWords Should Match</span>'
    );
  }
});
/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

const btn = document.querySelector("button");

btn.setAttribute("disabled", "disabled");

document
  .getElementById("registrationForm")
  .addEventListener("change", (event) => {
    const isFormFiled = Array.from(document.querySelectorAll("input")).every(
      (input) => input.value
    );
    if (isFormFiled) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", "disabled");
    }
  });
/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-success");
  alert.innerText = " User Registered Sucessfully";

  form.prepend(alert);
});
