document.addEventListener("DOMContentLoaded", () => {
    const progressFill = document.querySelector(".progress-fill");
    const formContainers = document.querySelectorAll(".form-container");
    const totalSteps = formContainers.length;
    let currentStep = 0;

    // Actualizează bara de progres
    function updateProgress() {
        const percent = ((currentStep + 1) / totalSteps) * 100;
        progressFill.style.width = `${percent}%`;
    }

    // Trecerea între părți
    function showNextForm() {
        if (currentStep < totalSteps - 1) {
            formContainers[currentStep].style.display = "none"; // Ascunde partea curentă
            currentStep++; // Incrementăm pasul
            formContainers[currentStep].style.display = "block"; // Afișează următoarea parte
            updateProgress(); // Actualizează bara de progres
        } else {
            alert("Formular completat!");
        }
    }

    // Adaugă evenimente pentru toate butoanele "Următorul Pas"
    const nextButtons = document.querySelectorAll(".form-next");
    nextButtons.forEach(button => {
        button.addEventListener("click", showNextForm);
    });

    // Inițializează prima parte
    formContainers[currentStep].style.display = "block";
    updateProgress();
});

let currentForm = 1;

function showNextForm() {
    const current = document.getElementById(`form${currentForm}`);
    const next = document.getElementById(`form${currentForm + 1}`);
    if (next) {
        current.classList.remove('active');
        next.classList.add('active');
        currentForm++;
    }
}

function showPreviousForm() {
    const current = document.getElementById(`form${currentForm}`);
    const previous = document.getElementById(`form${currentForm - 1}`);
    if (previous) {
        current.classList.remove('active');
        previous.classList.add('active');
        currentForm--;
    }
}
