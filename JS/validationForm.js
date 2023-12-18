/**
 * Validate the form data
 * @returns {boolean} true if the form is valid, false otherwise
 */
function validate() {
  //First called resetInput to delete the error message and red border
  resetInput();

  let valid = true;

  //Checking first name
  const inputFirst = document.getElementById("first");
  if (inputFirst.value.lenght < 2) {
    inputFirst.classList.add("inputInvalid");
    document.querySelector(".firstWarning").style.display = "inline-block";
    valid = false;
  }

  //Checking last name
  const inputLast = document.getElementById("last");
  if (inputLast.value.lenght < 2) {
    inputLast.classList.add("inputInvalid");
    document.querySelector(".lastWarning").style.display = "inline-block";
    valid = false;
  }

  //Checking if email is valid (via a RegEx)
  const emailReg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
  );
  const inputEmail = document.getElementById("email");
  if (!emailReg.test(inputEmail.value)) {
    inputEmail.classList.add("inputInvalid");
    document.querySelector(".mailWarning").style.display = "inline-block";
    valid = false;
  }

  //Checking if the birthdate is valid
  const actualDate = new Date();
  const inputBirthdate = document.getElementById("birthdate");
  const birthdate = new Date(inputBirthdate.value);
  if (birthdate > actualDate) {
    inputBirthdate.classList.add("inputInvalid");
    document.querySelector(".dateWarning").style.display= "inline-block";
    valid = false;
  }

  //Checking if quantity is a number
  const inputQuantity = document.getElementById("quantity");
  if (isNaN(inputQuantity.value)) {
    inputQuantity.classList.add("inputInvalid");
    document.querySelector(".quantityWarning").style.display= "inline-block";
    valid = false;
  }

  //Check if a radio button has been selected
  const inputRadios = document.querySelectorAll("input[type=radio]");
  var tournamentSelected = "";

  for (let i = 0; i < inputRadios.length; i++) {
    if (inputRadios[i].checked) {
      tournamentSelected = inputRadios[i].value;
      break;
    }
  }

  if (tournamentSelected == "") {
    document.querySelector(".tournamentWarning").style.display = "inline-block";
    valid = false;
  }

  //Check if the checkbox is checked
  const inputCheckbox = document.getElementById("checkbox1").checked;
  if (!inputCheckbox) {
    document.querySelector(".checkboxWarning").style.display = "inline-block";
    valid = false;
  }

  //If everything has been checked, valid will be true, else it will be false
  return valid;
}
