document.addEventListener('DOMContentLoaded', () => {
    const questionList = window.careerPilotData.interviewQuestions;
    let currentIndex = 0;
    let timer = 15 * 60;
    let timerId = null;
    let micOn = false;
    let cameraOn = false;

    const questionBox = document.getElementById('interviewQuestion');
    const timerEl = document.getElementById('interviewTimer');
    const micButton = document.getElementById('micToggle');
    const cameraButton = document.getElementById('cameraToggle');
    const nextButton = document.getElementById('nextQuestion');
    const endButton = document.getElementById('endInterview');
    const statusLabel = document.getElementById('interviewStatus');
    const followUpBox = document.getElementById('followUpBox');

    if (!questionBox) return;

    function updateTimer() {
        const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2, '0');
        if (timerEl) timerEl.textContent = `${minutes}:${seconds}`;
        timer -= 1;
        if (timer < 0) {
            clearInterval(timerId);
            timer = 0;
            if (timerEl) timerEl.textContent = '00:00';
            return;
        }
    }

    function renderQuestion(index) {
        questionBox.textContent = questionList[index] || 'Interview completed. Great work!';
        const message = index === 0 ? 'AI Interviewer is speaking...' : 'AI is thinking...';
        if (statusLabel) statusLabel.textContent = message;
        if (followUpBox) {
            const examples = {
                0: 'AI Follow-up: Why did you choose your final-year project, and how did your decisions impact the outcome?',
                1: 'AI Follow-up: Can you walk me through the architecture and major trade-offs in that project?',
                2: 'AI Follow-up: How would you normalize this schema if a new department table was added?',
                3: 'AI Follow-up: Compare process and thread scheduling in a multithreaded environment.',
                4: 'AI Follow-up: What is the role of complexity analysis when choosing an algorithm?'
            };
            followUpBox.innerHTML = `<strong>AI Follow-up:</strong><br>${examples[index] || 'AI Follow-up: Explain your reasoning behind your answer with a real example.'}`;
        }
    }

    function setupTimer() {
        if (timerId) clearInterval(timerId);
        timerId = setInterval(() => {
            if (timer < 0) clearInterval(timerId);
            else {
                updateTimer();
            }
        }, 1000);
    }

    if (micButton) {
        micButton.addEventListener('click', () => {
            micOn = !micOn;
            micButton.innerHTML = micOn ? '<i class="bi bi-mic-fill"></i> Mic On' : '<i class="bi bi-mic-mute"></i> Mic Off';
            micButton.classList.toggle('btn-primary', micOn);
            micButton.classList.toggle('btn-outline-secondary', !micOn);
            showToast(micOn ? 'Microphone enabled' : 'Microphone disabled', 'success');
        });
    }

    if (cameraButton) {
        cameraButton.addEventListener('click', () => {
            cameraOn = !cameraOn;
            cameraButton.innerHTML = cameraOn ? '<i class="bi bi-camera-video-fill"></i> Camera On' : '<i class="bi bi-camera-video-off"></i> Camera Off';
            cameraButton.classList.toggle('btn-primary', cameraOn);
            cameraButton.classList.toggle('btn-outline-secondary', !cameraOn);
            showToast(cameraOn ? 'Camera enabled' : 'Camera disabled', 'success');
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % questionList.length;
            renderQuestion(currentIndex);
            showToast('Next question loaded', 'success');
        });
    }

    if (endButton) {
        endButton.addEventListener('click', () => {
            const modal = new bootstrap.Modal(document.getElementById('endInterviewModal'));
            modal.show();
        });
    }

    document.getElementById('confirmEndInterview')?.addEventListener('click', () => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('endInterviewModal'));
        modal.hide();
        showToast('Interview completed successfully', 'success');
        if (statusLabel) statusLabel.textContent = 'Generating Performance Report...';
        setTimeout(() => {
            window.location.href = 'report.html';
        }, 1400);
    });

    renderQuestion(currentIndex);
    setupTimer();
});
