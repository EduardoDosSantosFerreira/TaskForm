document.addEventListener('DOMContentLoaded', () => {
    let stopwatchTimer;
    let isStopwatchRunning = false;
    let elapsedStopwatchSeconds = 0;

    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    const startStopStopwatchBtn = document.getElementById('startStopStopwatchBtn');
    const resetStopwatchBtn = document.getElementById('resetStopwatchBtn');

    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateStopwatchDisplay() {
        stopwatchDisplay.textContent = formatTime(elapsedStopwatchSeconds);
    }

    function startStopStopwatch() {
        if (isStopwatchRunning) {
            clearInterval(stopwatchTimer);
            startStopStopwatchBtn.textContent = 'Iniciar';
        } else {
            stopwatchTimer = setInterval(() => {
                elapsedStopwatchSeconds++;
                updateStopwatchDisplay();
            }, 1000);
            startStopStopwatchBtn.textContent = 'Parar';
        }
        isStopwatchRunning = !isStopwatchRunning;
    }

    function resetStopwatch() {
        clearInterval(stopwatchTimer);
        isStopwatchRunning = false;
        elapsedStopwatchSeconds = 0;
        updateStopwatchDisplay();
        startStopStopwatchBtn.textContent = 'Iniciar';
    }

    startStopStopwatchBtn.addEventListener('click', startStopStopwatch);
    resetStopwatchBtn.addEventListener('click', resetStopwatch);
    updateStopwatchDisplay();
});
