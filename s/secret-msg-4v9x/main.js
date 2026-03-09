const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
let isDrawing = false;
let revealedPixels = 0;
const revealThreshold = 0.55; // % of area revealed before fully clearing

// Initialize Canvas
function initCanvas() {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    // Create a cute scratchable layer (Silver with a pink tint)
    ctx.fillStyle = "#e5e7eb"; // Silver/Grey
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add a text label "SCRATCH HERE" on the silver part
    ctx.font = "bold 24px 'Quicksand'";
    ctx.fillStyle = "#ff8fa3";
    ctx.textAlign = "center";
    ctx.fillText("SCRATCH", canvas.width / 2, canvas.height / 2 - 10);
    ctx.fillText("HERE!", canvas.width / 2, canvas.height / 2 + 30);

    // Some decorative dots on the scratchable surface
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#ffb3c1";
        ctx.fill();
    }
}

// Scratch Logic
function scratch(e) {
    if (!isDrawing) return;

    // Supports both mouse and touch events
    const x = (e.clientX || e.touches[0].clientX) - canvas.getBoundingClientRect().left;
    const y = (e.clientY || e.touches[0].clientY) - canvas.getBoundingClientRect().top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    checkReveal();
}

// Auto-reveal after 50% scratching
function checkReveal() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let transparentCount = 0;

    // Check every 4th pixel for performance
    for (let i = 0; i < data.length; i += 16) {
        if (data[i + 3] === 0) {
            transparentCount++;
        }
    }

    const totalCheckPixels = data.length / (16);
    const percent = transparentCount / totalCheckPixels;

    if (percent > revealThreshold) {
        canvas.style.transition = 'opacity 1s ease';
        canvas.style.opacity = '0';
        setTimeout(() => {
            canvas.style.display = 'none';
        }, 1000);
    }
}

// Event Listeners
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousemove', scratch);

canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    scratch(e);
});
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Prevent scrolling on mobile
    scratch(e);
});

// Start
initCanvas();

