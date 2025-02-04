document.addEventListener('DOMContentLoaded', () => {
    let timerInterval;
    let isTimerRunning = false;
    let timerSeconds = 0;

    const timerDisplay = document.getElementById('timerDisplay');
    const startTimerBtn = document.getElementById('startTimerBtn');
    const resetTimerBtn = document.getElementById('resetTimerBtn');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');

    function formatTimerTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        timerDisplay.textContent = formatTimerTime(timerSeconds);
    }

    function startStopTimer() {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            startTimerBtn.textContent = 'Iniciar';
        } else {
            const inputMinutes = parseInt(minutesInput.value) || 0;
            const inputSeconds = parseInt(secondsInput.value) || 0;
            timerSeconds = inputMinutes * 60 + inputSeconds;
            updateTimerDisplay();

            timerInterval = setInterval(() => {
                if (timerSeconds > 0) {
                    timerSeconds--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    isTimerRunning = false;
                    startTimerBtn.textContent = 'Iniciar';
                }
            }, 1000);
            startTimerBtn.textContent = 'Parar';
        }
        isTimerRunning = !isTimerRunning;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        timerSeconds = 0;
        updateTimerDisplay();
        startTimerBtn.textContent = 'Iniciar';
    }

    startTimerBtn.addEventListener('click', startStopTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    updateTimerDisplay();
});