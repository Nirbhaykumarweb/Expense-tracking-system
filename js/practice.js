document.addEventListener('DOMContentLoaded', () => {
    const questions = window.careerPilotData.questions;
    const list = document.getElementById('questionList');
    if (!list) return;

    list.innerHTML = questions.map((q, index) => `
    <div class="col-xl-6 col-lg-12">
      <div class="question-card p-4 h-100">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <span class="badge bg-light text-dark">${q.company}</span>
            <h5 class="mt-3 mb-1">${q.question}</h5>
          </div>
          <button class="btn btn-link p-0 text-muted" data-bookmark="q-${q.id}" aria-label="Bookmark question"><i class="bi bi-bookmark"></i></button>
        </div>
        <div class="d-flex flex-wrap gap-2 small text-muted mb-3">
          <span><i class="bi bi-tag"></i> ${q.topic}</span>
          <span><i class="bi bi-clock"></i> ${q.time}</span>
          <span><i class="bi bi-bar-chart"></i> ${q.difficulty}</span>
        </div>
        <a href="question.html?id=${q.id}" class="btn btn-primary">Practice</a>
      </div>
    </div>
  `).join('');

    const filterCompany = document.getElementById('practiceCompany');
    const filterCategory = document.getElementById('practiceCategory');
    const filterDifficulty = document.getElementById('practiceDifficulty');

    function applyFilters() {
        const company = filterCompany ? filterCompany.value : 'all';
        const category = filterCategory ? filterCategory.value : 'all';
        const difficulty = filterDifficulty ? filterDifficulty.value : 'all';

        const filtered = questions.filter((q) => {
            const matchesCompany = company === 'all' || q.company === company;
            const matchesCategory = category === 'all' || q.category === category;
            const matchesDifficulty = difficulty === 'all' || q.difficulty === difficulty;
            return matchesCompany && matchesCategory && matchesDifficulty;
        });

        list.innerHTML = filtered.map((q) => `
      <div class="col-xl-6 col-lg-12">
        <div class="question-card p-4 h-100">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <div>
              <span class="badge bg-light text-dark">${q.company}</span>
              <h5 class="mt-3 mb-1">${q.question}</h5>
            </div>
            <button class="btn btn-link p-0 text-muted" data-bookmark="q-${q.id}" aria-label="Bookmark question"><i class="bi bi-bookmark"></i></button>
          </div>
          <div class="d-flex flex-wrap gap-2 small text-muted mb-3">
            <span><i class="bi bi-tag"></i> ${q.topic}</span>
            <span><i class="bi bi-clock"></i> ${q.time}</span>
            <span><i class="bi bi-bar-chart"></i> ${q.difficulty}</span>
          </div>
          <a href="question.html?id=${q.id}" class="btn btn-primary">Practice</a>
        </div>
      </div>
    `).join('') || '<div class="col-12"><div class="alert alert-info">No questions match the selected filters.</div></div>';

        initBookmarks();
    }

    [filterCompany, filterCategory, filterDifficulty].forEach((field) => {
        if (field) field.addEventListener('change', applyFilters);
    });

    if (filterCompany) {
        const companies = ['all', ...new Set(questions.map((q) => q.company))];
        filterCompany.innerHTML = companies.map((company) => `<option value="${company}">${company === 'all' ? 'All Companies' : company}</option>`).join('');
    }

    if (filterCategory) {
        const categories = ['all', 'Aptitude', 'Logical Reasoning', 'Coding', 'DSA', 'OOP', 'DBMS', 'SQL', 'OS', 'Computer Networks', 'Projects', 'HR'];
        filterCategory.innerHTML = categories.map((category) => `<option value="${category}">${category === 'all' ? 'All Categories' : category}</option>`).join('');
    }

    if (filterDifficulty) {
        const difficulties = ['all', 'Easy', 'Medium', 'Hard'];
        filterDifficulty.innerHTML = difficulties.map((level) => `<option value="${level}">${level === 'all' ? 'All Levels' : level}</option>`).join('');
    }

    initBookmarks();
});
