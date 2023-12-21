/**
 * Checks if the value of the input is long enough
 * @param {HTMLInputElement} input The element to check
 * @param {number} lenght Optional length desired, default is 2 characters
 * @returns {boolean} True if the string matches the lenght, false otherwise
 */
function checkString(input, lenght = 2) {
  if (input.value.length < lenght) {
    return false;
  } else {
    return true;
  }
}

/**
 * Checks if the mail address in the input is valid
 * @param {HTMLInputElement} input The input to check
 * @returns {boolean} Returns false if the address is invalid, true otherwise
 * (add the inputInvalid class to the input if invalid)
 */
function checkMail(input) {
  const emailReg = new RegExp(
    /^([a-zA-Z0-9\-\_]+)@([A-Za-z0-9]+\.[A-Za-z0-9]{2,})$/i
  );
  return emailReg.test(input.value);
}

/**
 * Check if the date is before the dateLimit
 * @param {HTMLInputElement} input The input of type date to check
 * @param {Date} dateLimit The date limit, by default is the current date
 * @returns {boolean} false if the date is after the dateLimit (or the input is not of the type date), true otherwise
 */
function checkDate(input, dateLimit = dateJour) {
  if (input.type === "date") {
    const date = new Date(input.value);

    if (date > dateLimit) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

/**
 * Check if one of the radios is selected and returns its value if so
 * @param {Array} radios An array of radios input
 * @returns {boolean} True if one of the radios is selected, false otherwise
 */
function checkRadios(radios) {
  let result = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      result = true;
      break;
    }
  }
  return result;
}
