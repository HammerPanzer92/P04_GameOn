/**
 * Validate the form data
 * @returns {boolean} true if the form is valid, false otherwise
 */
function validate() {
  //First called resetInput to delete the error message and red border
  resetInput();

  let valid = true;

  for(let i = 0; i < formData.length; i++) {
    const inputs = formData[i].querySelectorAll('input');
    const input = inputs[0];

    let check = true;

    //Check if the input is empty or not before checking its value
    //If it is empty we will go the next iteration
    if((input.type !== "checkbox" || input.type !== "radio") && input.value === ""){
      valid = false;
      input.classList.add("inputInvalid");
      createWarning(i);
      continue;
    }

    switch (input.type) {
      //For input of type text (corresponding to first and last name field)
      case "text":        
        if(!checkString(input)){
          check = false;
        }
        break;
      
      //For input of type mail (corresponding to the E-mail field)
      case "email":
        if(!checkMail(input)){
          check = false;
        }
        break;
      
      //For input of type date (for the birthdate field)
      case "date":
        if(!checkDate(input)){
          check = false;
        }
        break;
      
      //For input of type number (for the quantity field)
      case "number":
        if(isNaN(input.value)){
          check = false;
        }
        break;
      
      //For input of type radios
      case "radio":
        const listRadios = formData[i].querySelectorAll("input");
        if(!checkRadios(listRadios)){
          check = false;
        }
        break;
      
      //For input of type checkbox (only one necessary)
      case "checkbox":
        if(!input.checked){
          check = false;
        }
        break;
      default:
        break;
    }

    if(!check){
      valid = false;
      input.classList.add("inputInvalid");
      createWarning(i, false);
    }
  }

  //If everything has been checked, valid will be true, else it will be false
  return valid;
}
