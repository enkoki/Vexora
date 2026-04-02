// Format:  (YYYY, M-1, D, H, M, S)
const targetDate = new Date(2026, 3, 3, 12, 0, 0); // April 3rd 2026, 12:00:00 - project bujayney din

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

export function updateCountdown() {
	const now = new Date();
	const diff = targetDate - now;

	if (diff <= 0) {
		daysEl.textContent = "00";
		hoursEl.textContent = "00";
		minutesEl.textContent = "00";
		secondsEl.textContent = "00";
		clearInterval(timerInterval);
		return;
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	daysEl.textContent = String(days).padStart(2, "0");
	hoursEl.textContent = String(hours).padStart(2, "0");
	minutesEl.textContent = String(minutes).padStart(2, "0");
	secondsEl.textContent = String(seconds).padStart(2, "0");
}

const timerInterval = setInterval(updateCountdown, 1000);
