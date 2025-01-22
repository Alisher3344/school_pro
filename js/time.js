let time =document.querySelector(".sana");
function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    time.textContent = `HOZIRGI VAQT: ${hours}:${minutes}:${seconds}`;
}

// Har 1 soniyada vaqtni yangilash
setInterval(updateClock, 1000);

// Dastlabki vaqtni ko'rsatish
updateClock();