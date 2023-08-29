document.addEventListener("DOMContentLoaded", function() {
    const dniInput = document.getElementById("number");
    const userField = document.getElementById("user");
    const passwordField = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");

    dniInput.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "");
    });

    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (isFormValid()) {
            showSuccessMessage();
        }
    });

    function isFormValid() {
        const dni = dniInput.value;
        const user = userField.value;
        const password = passwordField.value;

        if (!dni || !user || !password) {
            alert("Por favor, complete todos los campos.");
            return false;
        }

        return true;
    }

    function showSuccessMessage() {
        alert("¡Inicio de sesión exitoso!");
    }
});
