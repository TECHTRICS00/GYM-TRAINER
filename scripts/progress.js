// Muscle Growth
const muscleForm = document.getElementById("muscle-form");
const muscleInput = document.getElementById("muscle-input");
const muscleSize = document.getElementById("muscle-size");

muscleForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const size = parseFloat(muscleInput.value);
    if (!isNaN(size)) {
        muscleSize.textContent = size;
        muscleInput.value = "";
    }
});

// Weight Loss
const weightForm = document.getElementById("weight-form");
const weightInput = document.getElementById("weight-input");
const weight = document.getElementById("weight");

weightForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const weightValue = parseFloat(weightInput.value);
    if (!isNaN(weightValue)) {
        weight.textContent = weightValue;
        weightInput.value = "";
    }
});
