document.addEventListener('DOMContentLoaded', () => {
    const companyData = window.careerPilotData.companies;
    const grid = document.getElementById('companyGrid');
    const searchInput = document.getElementById('companySearch');
    const industryFilter = document.getElementById('industryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const roleFilter = document.getElementById('roleFilter');
    const sortSelect = document.getElementById('companySort');

    if (!grid) return;

    function renderCompanies(items) {
        const cards = items.map((company) => `
      <div class="col-lg-4 col-md-6">
        <div class="company-card h-100 p-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <div class="d-flex align-items-center gap-3">
              <div class="company-logo">${company.logo}</div>
              <div>
                <h5 class="mb-0">${company.name}</h5>
                <small class="text-muted">${company.industry}</small>
              </div>
            </div>
            <span class="badge badge-soft">${company.difficulty}</span>
          </div>
          <p class="mb-3 text-muted">${company.description}</p>
          <div class="d-flex justify-content-between small text-muted mb-3">
            <span><i class="bi bi-people"></i> ${company.rounds} rounds</span>
            <span><i class="bi bi-check-circle"></i> ${company.progress}% prep</span>
          </div>
          <div class="mb-3">
            ${company.roles.slice(0, 2).map((role) => `<span class="badge rounded-pill bg-light text-dark me-1 mb-1">${role}</span>`).join('')}
          </div>
          <div class="d-flex gap-2">
            <a href="company-details.html?id=${company.id}" class="btn btn-primary flex-fill">View Details</a>
          </div>
        </div>
      </div>
    `).join('');

        grid.innerHTML = cards || '<div class="col-12"><div class="alert alert-info">No companies match the current filters.</div></div>';
    }

    function getFilteredCompanies() {
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        const industry = industryFilter ? industryFilter.value : 'all';
        const difficulty = difficultyFilter ? difficultyFilter.value : 'all';
        const role = roleFilter ? roleFilter.value : 'all';
        const sort = sortSelect ? sortSelect.value : 'name';

        let filtered = companyData.filter((company) => {
            const matchesSearch = !query || company.name.toLowerCase().includes(query) || company.roles.some((r) => r.toLowerCase().includes(query));
            const matchesIndustry = industry === 'all' || company.industry === industry;
            const matchesDifficulty = difficulty === 'all' || company.difficulty === difficulty;
            const matchesRole = role === 'all' || company.roles.includes(role);
            return matchesSearch && matchesIndustry && matchesDifficulty && matchesRole;
        });

        if (sort === 'difficulty') {
            const level = { Easy: 1, Medium: 2, Hard: 3 };
            filtered = [...filtered].sort((a, b) => level[b.difficulty] - level[a.difficulty]);
        } else if (sort === 'progress') {
            filtered = [...filtered].sort((a, b) => b.progress - a.progress);
        } else {
            filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    }

    [searchInput, industryFilter, difficultyFilter, roleFilter, sortSelect].forEach((element) => {
        if (element) element.addEventListener('input', () => renderCompanies(getFilteredCompanies()));
        if (element) element.addEventListener('change', () => renderCompanies(getFilteredCompanies()));
    });

    renderCompanies(companyData);
    if (industryFilter) {
        const industries = [...new Set(companyData.map((company) => company.industry))];
        industryFilter.innerHTML = '<option value="all">All Industries</option>' + industries.map((industry) => `<option value="${industry}">${industry}</option>`).join('');
    }
    if (difficultyFilter) {
        const levels = ['Easy', 'Medium', 'Hard'];
        difficultyFilter.innerHTML = '<option value="all">All Difficulties</option>' + levels.map((level) => `<option value="${level}">${level}</option>`).join('');
    }
    if (roleFilter) {
        const roles = [...new Set(companyData.flatMap((company) => company.roles))];
        roleFilter.innerHTML = '<option value="all">All Roles</option>' + roles.map((role) => `<option value="${role}">${role}</option>`).join('');
    }
});
