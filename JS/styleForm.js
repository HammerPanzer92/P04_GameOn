//Array containing the warnings messages (in the order they appear in the formData)
const tabWarnings = [
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
    "Veuillez entrer 2 caractères ou plus pour le champ du nom",
    "Veuillez entrer une adresse mail valide",
    "Veuillez entrer une date valide",
    "Veuillez entrer un nombre valide",
    "</br>Veuillez sélectionner un lieu",
    "Veuillez accepter les conditions d'utilisation",
];

/**
 * Create a warning message for the selected input
 * @param {Number} pos The position in the formData array where to put the warning
 * @param {boolean} empty True for a warning about the input being empty, false otherwise (Default value : true)
 */
function createWarning(pos, empty = true) {
    const newWarning = document.createElement("span");
    newWarning.classList.add("warning");
    if(empty){
      if(pos === 4){
        newWarning.innerText = "Veuillez entrer un nombre";
      }else{
        newWarning.innerText = "Ce champ est obligatoire";
      }        
    }else{
        newWarning.innerHTML = tabWarnings[pos];
    }
    formData[pos].appendChild(newWarning);
}

/**
 * Delete the inputInvalid class and warnings from the form
 */
function resetInput() {
  const inputs = document.querySelectorAll(".inputInvalid");
  inputs.forEach((input) => {
    input.classList.remove("inputInvalid");
  });

  formData.forEach(element => {
    const span = element.querySelector(".warning");
    if(span){
        span.remove();
    }
  });
}
