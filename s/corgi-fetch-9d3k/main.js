const targetArea = document.getElementById('target-area');
const countSpan = document.getElementById('count');
const progressBar = document.getElementById('progress');
const headline = document.getElementById('headline');
const rewardOverlay = document.getElementById('reward-overlay');
const corgi = document.getElementById('corgi-actor');
const corgiTail = document.getElementById('corgi-tail');

let score = 0;
const targetScore = 5;
let isGameOver = false;

// Bubble types
const treats = ['🦴', '🍗', '💕', '🐾', '🥯'];

function createBubble() {
    if (isGameOver) return;

    const bubble = document.createElement('div');
    bubble.classList.add('treat-bubble');

    // Choose a random treat
    const randomTreat = treats[Math.floor(Math.random() * treats.length)];
    bubble.innerText = randomTreat;

    // Random position across the width
    bubble.style.left = Math.random() * (window.innerWidth - 80) + 'px';

    // Variable speed
    const duration = Math.random() * 3 + 4; // 4s - 7s
    bubble.style.animationDuration = duration + 's';

    bubble.addEventListener('click', (e) => {
        if (isGameOver) return;

        score++;
        feedCorgi();

        // Remove the bubble instantly
        bubble.remove();

        // Update UI
        updateUI();
    });

    targetArea.appendChild(bubble);

    // Self-cleanup after animation ends
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Update the UI progress
function updateUI() {
    countSpan.innerText = targetScore - score;
    const percent = (score / targetScore) * 100;
    progressBar.style.width = percent + '%';

    if (score >= targetScore) {
        winGame();
    }
}

// Happy Corgi action!
function feedCorgi() {
    // Make Corgi jump/wobble
    corgi.style.transform = 'scale(1.2) translateY(-10px)';

    // Make tail wag fast!
    corgiTail.style.animation = 'wag-fast 0.1s infinite alternate';

    setTimeout(() => {
        corgi.style.transform = 'scale(1) translateY(0)';
        // Revert to slower wag unless it's the game end
        if (!isGameOver) {
            corgiTail.style.animation = 'wag-slow 0.4s infinite alternate';
        }
    }, 400);
}

function winGame() {
    isGameOver = true;
    headline.innerText = "YUM! Who's a good boy? 🦴✨";

    // Celeb!
    setTimeout(() => {
        rewardOverlay.classList.remove('hidden');
        triggerConfetti();
    }, 1000);
}

function triggerConfetti() {
    const end = Date.now() + (3 * 1000);
    const colors = ['#fb8c00', '#ff4081', '#ffcc80'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Logic to spawn bubbles every 1.5s
const bubbleInterval = setInterval(createBubble, 1500);

// Cleanup interval if game over
setInterval(() => {
    if (isGameOver) clearInterval(bubbleInterval);
}, 500);
