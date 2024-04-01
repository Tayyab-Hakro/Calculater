document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".keys button");

    let currentInput = "";

    keys.forEach(key => {
        key.addEventListener("click", function() {
            const keyValue = key.value;
            
            if (keyValue === "C") {
                clearDisplay();
            } else if (keyValue === "=") {
                calculateResult();
            } else {
                currentInput += keyValue;
                display.value = currentInput;
            }
        });
    });

    function clearDisplay() {
        currentInput = "";
        display.value = "";
    }

    function calculateResult() {
        try {
            const result = eval(currentInput);
            display.value = result;
            currentInput = result.toString(); // Update current input with result for further calculations
        } catch (error) {
            display.value = "Error";
        }
    }
});
