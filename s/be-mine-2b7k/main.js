// --- Constant Selectors ---
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const heartsContainer = document.getElementById('hearts-bg');
const celebration = document.getElementById('celebration');

// --- Floating Hearts Logic ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 10 + 20 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    heartsContainer.appendChild(heart);

    // Cleanup
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Background hearts every 300ms
setInterval(createHeart, 300);

let noTapCount = 0;

// --- "No" Button Running Away Logic ---
function moveNoButton() {
    noTapCount++;

    // Magnet Effect: Make Yes button pulsate and GROW
    yesBtn.classList.add('pulse-active');
    // Scale up the Yes button significantly
    const yesScale = 1 + (noTapCount * 0.15);
    yesBtn.style.transform = `scale(${Math.min(yesScale, 3)})`;

    // Shrink Effect: Make No button smaller and harder to hit
    const noScale = Math.max(0.4, 1 - (noTapCount * 0.08));
    noBtn.style.transform = `scale(${noScale})`;

    // Current button size
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;

    // Define a safe margin from the edges (10% of window or 50px min)
    const marginX = Math.max(100, window.innerWidth * 0.25);
    const marginY = Math.max(100, window.innerHeight * 0.25);

    // Calculate the 'Safe Zone' range
    const minX = marginX;
    const maxX = window.innerWidth - marginX - btnWidth;

    const minY = marginY;
    const maxY = window.innerHeight - marginY - btnHeight;

    // Ensure ranges are valid
    const finalMaxX = Math.max(minX, maxX);
    const finalMaxY = Math.max(minY, maxY);

    // Calculate new random coordinates within the full safe zone
    let newX = Math.random() * (finalMaxX - minX) + minX;
    let newY = Math.random() * (finalMaxY - minY) + minY;

    // Apply the position
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.zIndex = '9999';

    // Smooth bouncy movement
    noBtn.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
}

// Event listeners for "No" button
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent accidental click on mobile
    moveNoButton();
});

// --- "Yes" Button Celebration ---
yesBtn.addEventListener('click', () => {
    // Show celebration screen
    celebration.classList.remove('hidden');

    // Launch confetti!
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
});
