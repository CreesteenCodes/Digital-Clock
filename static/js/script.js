const days = document.querySelectorAll('.days span');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    timeEl.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} <small>${ampm}</small>`;

    const dayIndex = now.getDay();
    days.forEach((d, i) => d.classList.toggle('active', i === dayIndex));

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = now.getFullYear();
    dateEl.textContent = `${day} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();