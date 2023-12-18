/**
 * Delete the inputInvalid class and 
 */
function resetInput() {
    const inputs = document.querySelectorAll(".inputInvalid");
    inputs.forEach(input => {
        input.classList.remove("inputInvalid");
    });

    const warnings = document.querySelectorAll(".warning");
    warnings.forEach(warning => {
        warning.style.display = "none";
    });
};