 // Create hearts effect
 function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
function showStep(stepId) {
    const steps = document.querySelectorAll('.step');

    steps.forEach(step => {
        step.classList.remove('active');
    });

    document.getElementById(stepId).classList.add('active');
}

setInterval(createHearts, 300);

// Move "No" button function
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}



function goToStep3() {
    showStep("step3");
    triggerConfetti();
}

function goToStep2() {
    showStep("step2");
    triggerConfetti();
}

function goToStep4() {
    showStep("step4");
    triggerConfetti();
}

function finalStep() {
    // Cacher toutes les steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Afficher le message final
    document.querySelector('.final-message').style.display = 'block';

    // Confetti celebration
    triggerConfetti();
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
function askGift() {
    document.getElementById('giftModal').style.display = "flex";
}

function submitGift() {
    const gift = document.getElementById('giftInput').value;

    document.getElementById("giftModal").style.display = "none";

    

    // Passe à Step 4
    goToStep4();
}