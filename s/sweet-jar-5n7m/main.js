const jar = document.getElementById('jar');
const container = document.getElementById('heart-container');

// A collection of sweet messages
const messages = [
    "Your smile is my favorite! 😊",
    "You're the absolute cutest! 🥰",
    "You make my heart go 'pop'! ❤️",
    "Every day is better with you! ☀️",
    "You're rare, real, and radiant! ✨",
    "Thinking of you... right now! 💭",
    "You're my human cupcake! 🧁",
    "The world is lucky to have you! 🌍",
    "I'm so glad we know each other! 💞",
    "You're basically a sunshine in person! 🌻"
];

// Logic to "pop" a heart out of the jar
function popHeart() {
    const heart = document.createElement('div');
    heart.classList.add('pop-heart');

    // Choose a random message
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    heart.innerHTML = `<p class="msg-text">${randomMsg}</p>`;

    // Position it roughly where the jar is
    // The CSS animation handles the upward motion
    const rect = jar.getBoundingClientRect();
    heart.style.left = (rect.left + rect.width / 2 - 100) + 'px';
    heart.style.top = (rect.top + 50) + 'px';

    container.appendChild(heart);

    // Self-cleanup after animation ends
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Event Listeners
jar.addEventListener('click', popHeart);

// Add a little wobble every now and then to invite interaction
setInterval(() => {
    jar.style.transform = 'rotate(3deg)';
    setTimeout(() => {
        jar.style.transform = 'rotate(0deg)';
    }, 100);
}, 3000);
