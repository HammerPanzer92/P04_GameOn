/**
 * Validate the form data
 * @returns {boolean} true if the form is valid, false otherwise
 */
function validate() {
  //Checking first name
  const inputFirstValue = document.getElementById("first").value;
  if (inputFirstValue.lenght < 2) {
    return false;
  }

  //Checking last name
  const inputLastValue = document.getElementById("last").value;
  if (inputLastValue.lenght < 2) {
    return false;
  }

  //Checking if email is valid (via a RegEx)
  const emailReg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
  );
  const inputEmailValue = document.getElementById("email").value;
  if (!emailReg.test(inputEmailValue)) {
    return false;
  }

  //Checking if the birthdate is valid
  const actualDate = new Date();
  const inputBirthdate = document.getElementById("birthdate").value;
  const birthdate = new Date(inputBirthdate);
  if(birthdate > actualDate) {
    console.log("date fausse");
    return false;
  }

  //Checking if quantity is a number
  const inputQuantity = document.getElementById("quantity").value;
  if (!Number.isInteger(inputQuantity)) {
    return false;
  }

  //Check if a radio button has been selected
  const inputRadios = document.querySelectorAll("input[type=radio]");
  var tournamentSelected = "";

  for(let i = 0; i < inputRadios.length; i++) {
    if(inputRadios[i].checked) {
        tournamentSelected = inputRadios[i].value;
        break;
    }
  }

  if(tournamentSelected == "") {
    return false;
  }

  //Check if the checkbox is checked
  const inputCheckbox = document.getElementById("checkbox1").checked;
  if (!inputCheckbox) {
    return false;
  }

  //If everything is valid, returns true
  return true;
}
