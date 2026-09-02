document.addEventListener('DOMContentLoaded', () => {
    renderReadinessChart();
    renderPracticeChart();
    renderInterviewPerformance();
    renderWeakTopics();
    renderRecommendations();
    renderRecentInterviews();
});

function renderReadinessChart() {
    const svg = document.getElementById('readinessChart');
    if (!svg) return;

    const points = [38, 42, 46, 53, 59, 66, 72, 78];
    const max = Math.max(...points);
    const coords = points.map((value, index) => {
        const x = index * 42 + 10;
        const y = 140 - (value / max) * 100;
        return `${x},${y}`;
    }).join(' ');

    svg.innerHTML = `
    <polyline fill="none" stroke="var(--primary-color)" stroke-width="4" points="${coords}" />
    ${points.map((value, index) => {
        const x = index * 42 + 10;
        const y = 140 - (value / max) * 100;
        return `<circle cx="${x}" cy="${y}" r="5" fill="var(--secondary-color)" />`;
    }).join('')}
  `;
}

function renderPracticeChart() {
    const container = document.getElementById('practiceChart');
    if (!container) return;
    const bars = [62, 71, 68, 80, 76, 82, 88];
    container.innerHTML = bars.map((value, index) => `
    <div class="d-flex flex-column align-items-center gap-2" style="width:14%;">
      <div class="w-100 d-flex align-items-end justify-content-center" style="height: 120px;">
        <div class="w-100 rounded-top" style="height:${value}%; background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));"></div>
      </div>
      <small class="text-muted">${['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</small>
    </div>
  `).join('');
}

function renderInterviewPerformance() {
    const bars = [
        { label: 'Technical', value: 84 },
        { label: 'DSA', value: 79 },
        { label: 'Project', value: 88 },
        { label: 'HR', value: 86 }
    ];

    const container = document.getElementById('performanceBars');
    if (!container) return;

    container.innerHTML = bars.map((bar) => `
    <div class="mb-3">
      <div class="d-flex justify-content-between small mb-1">
        <span>${bar.label}</span>
        <span>${bar.value}%</span>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width:${bar.value}%" aria-valuenow="${bar.value}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  `).join('');
}

function renderWeakTopics() {
    const container = document.getElementById('weakTopics');
    if (!container) return;

    const topics = [
        { name: 'DBMS', value: 62 },
        { name: 'SQL', value: 54 },
        { name: 'Operating Systems', value: 67 }
    ];

    container.innerHTML = topics.map((topic) => `
    <div class="mb-3">
      <div class="d-flex justify-content-between mb-1">
        <span class="fw-semibold">${topic.name}</span>
        <span class="text-muted">${topic.value}%</span>
      </div>
      <div class="progress">
        <div class="progress-bar" style="width:${topic.value}%"></div>
      </div>
    </div>
  `).join('');
}

function renderRecommendations() {
    const container = document.getElementById('recommendations');
    if (!container) return;

    const items = [
        { title: 'Revise DBMS Normalization', meta: '10 questions recommended' },
        { title: 'Practice SQL Joins', meta: '15 questions recommended' },
        { title: 'Take Technical Mock Interview', meta: '20 minutes' }
    ];

    container.innerHTML = items.map((item) => `
    <div class="card h-100 border-0 bg-light-subtle">
      <div class="card-body">
        <h6 class="fw-bold">${item.title}</h6>
        <p class="text-muted mb-0">${item.meta}</p>
      </div>
    </div>
  `).join('');
}

function renderRecentInterviews() {
    const container = document.getElementById('recentInterviews');
    if (!container) return;

    const rows = [
        { company: 'Google', round: 'Technical', score: '84%', status: 'Strong' },
        { company: 'Amazon', round: 'DSA', score: '79%', status: 'Needs work' },
        { company: 'Microsoft', round: 'Project', score: '88%', status: 'Excellent' }
    ];

    container.innerHTML = rows.map((row) => `
    <div class="d-flex justify-content-between align-items-center border-bottom py-3">
      <div>
        <div class="fw-bold">${row.company}</div>
        <small class="text-muted">${row.round}</small>
      </div>
      <div class="text-end">
        <div class="fw-bold">${row.score}</div>
        <small class="text-muted">${row.status}</small>
      </div>
    </div>
  `).join('');
}
