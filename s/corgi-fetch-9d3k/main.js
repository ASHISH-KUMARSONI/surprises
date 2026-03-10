const targetArea = document.getElementById('target-area');
const scoreVal = document.getElementById('score-val');
const bestVal = document.getElementById('best-val');
const milestoneText = document.getElementById('milestone-text');
const headline = document.getElementById('headline');
const corgi = document.getElementById('corgi-actor');
const corgiTail = document.getElementById('corgi-tail');

let score = 0;
let highScore = localStorage.getItem('doggy-high-score') || 0;
let isGameOver = false;
let gameSpeed = 1500;
let bubbleDuration = 5;
let milestoneLevel = 1;

// Load high score
bestVal.innerText = highScore;

// Levels and Dogs
const levels = [
    { threshold: 0, name: "Corgi Day", dogClass: "", bg: "#e3f2fd" },
    { threshold: 10, name: "Shepherd Sunset", dogClass: "shepherd", bg: "#ffccbc" },
    { threshold: 25, name: "Shiba Night", dogClass: "shiba", bg: "#283593" },
    { threshold: 50, name: "Husky Galaxy", dogClass: "husky", bg: "#000b1e" }
];

// Bubble types
const treats = ['🦴', '🍗', '💕', '🐾', '🥯'];
const dangers = ['💣', '🍫', '🏢']; // Things that can "kill" a dog (comically)

function createBubble() {
    if (isGameOver) return;

    const bubble = document.createElement('div');
    bubble.classList.add('treat-bubble');

    // Determine if it's a danger bubble (starts after 5 points)
    const isDanger = Math.random() > 0.8 && score > 5;
    if (isDanger) {
        bubble.classList.add('danger');
        bubble.innerText = dangers[Math.floor(Math.random() * dangers.length)];
    } else {
        bubble.innerText = treats[Math.floor(Math.random() * treats.length)];
    }

    // Random position across the width
    bubble.style.left = Math.random() * (window.innerWidth - 80) + 'px';

    // Zig Zag motion logic (More aggressive)
    const isZigZag = Math.random() > 0.4 && milestoneLevel > 1;
    if (isZigZag) {
        const zigDist = Math.random() > 0.5 ? 120 : -120;
        bubble.style.setProperty('--zig-zag-dist', zigDist + 'px');
        bubble.style.animation = `floatUp ${bubbleDuration}s linear forwards, zigZag 1s ease-in-out infinite alternate`;
    } else {
        bubble.style.animationDuration = bubbleDuration + 's';
    }

    bubble.addEventListener('click', (e) => {
        if (isGameOver) return;

        if (isDanger) {
            killDog();
        } else {
            score++;
            feedCorgi();
            updateUI();
        }
        bubble.remove();
    });

    targetArea.appendChild(bubble);

    // Self-cleanup after animation ends
    setTimeout(() => {
        bubble.remove();
    }, bubbleDuration * 1000);
}

// Update the UI
function updateUI() {
    scoreVal.innerText = score;

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('doggy-high-score', highScore);
        bestVal.innerText = highScore;
    }

    checkMilestones();
}

function checkMilestones() {
    const nextLevel = levels.filter(l => score >= l.threshold).pop();
    if (nextLevel && levels.indexOf(nextLevel) + 1 > milestoneLevel) {
        milestoneLevel = levels.indexOf(nextLevel) + 1;
        applyMilestone(nextLevel);
    }
}

function applyMilestone(level) {
    milestoneText.innerText = `Level ${milestoneLevel}: ${level.name} ✨`;
    document.body.style.backgroundColor = level.bg;

    // Change dog type
    corgi.className = `corgi ${level.dogClass}`;

    // Increase difficulty
    gameSpeed = Math.max(500, gameSpeed - 200);
    bubbleDuration = Math.max(2, bubbleDuration - 0.5);

    // Flash excitement
    milestoneText.style.fontSize = "1.5rem";
    setTimeout(() => milestoneText.style.fontSize = "0.9rem", 1000);

    // Reset spawner with new speed
    clearInterval(bubbleInterval);
    setInterval(createBubble, gameSpeed);
}

function feedCorgi() {
    corgi.style.transform = 'scale(1.2) translateY(-10px)';
    corgiTail.style.animation = 'wag-fast 0.1s infinite alternate';

    setTimeout(() => {
        corgi.style.transform = `scale(${isGameOver ? 0 : 1}) translateY(0)`;
        if (!isGameOver) {
            corgiTail.style.animation = 'wag-slow 0.4s infinite alternate';
        }
    }, 400);
}

function killDog() {
    isGameOver = true;
    document.body.classList.add('dead');
    corgi.classList.add('dead-dog');
    headline.innerText = "NOOO! 😱 BRUTAL!";
    milestoneText.innerText = `Final Score: ${score}`;

    // Disable any clicking
    targetArea.style.pointerEvents = 'none';

    setTimeout(() => {
        if (confirm("Game Over! The doggo is gone... 😭\n\nFinal Score: " + score + "\n\nTry to save the next dog?")) {
            location.reload();
        }
    }, 1500);
}

// Initial Spawner
let bubbleInterval = setInterval(createBubble, gameSpeed);

// Add Zig Zag Keyframe via JS for flexibility
const style = document.createElement('style');
style.textContent = `
    @keyframes zigZag {
        from { margin-left: 0; }
        to { margin-left: var(--zig-zag-dist); }
    }
`;
document.head.appendChild(style);
