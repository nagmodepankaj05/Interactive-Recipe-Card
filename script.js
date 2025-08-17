const IngredientsBtn = document.getElementById("ingredients");
const ingredientsList = document.querySelector(".ingredients-menu");

IngredientsBtn.addEventListener("click", () => {
    ingredientsList.classList.toggle("hidden");
    IngredientsBtn.textContent = ingredientsList.classList.contains("hidden") 
        ? "Show Ingredients" : "Hide Ingredients";
});

const startBtn = document.getElementById("cooking");
const steps = document.querySelectorAll(".steps li");
const process = document.getElementById("process");

let currentStep = 0;

startBtn.addEventListener("click", () => {
    if (currentStep < steps.length) {
        steps.forEach(step => step.classList.remove("highlight"));
        steps[currentStep].classList.add("highlight");
        process.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
        currentStep++;
    } else {
        alert("Recipe Completed");
        currentStep = 0;
        steps.forEach(step => step.classList.remove("highlight"));
        process.style.width = "0%";
    }
});