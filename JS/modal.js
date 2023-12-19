function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Put a max constraint on the birthdate input and setting it to the current date
const dateInput = document.getElementById('birthdate');
const dateJour = new Date();
dateInput.max = dateJour.getFullYear() + "-" + (dateJour.getMonth() + 1) + "-" + dateJour.getDate();

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * Close the modal window
 */
function closeModal() {
  modalbg.style.display = "none";
}

