document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initModals();
    initForms();
    initToastSystem();
    initBookmarks();
    initDarkModeToggle();
    initLocalStorageDemo();
});

function initTheme() {
    const savedTheme = localStorage.getItem('careerPilotTheme');
    const theme = savedTheme || 'light';
    document.body.setAttribute('data-theme', theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.checked = theme === 'dark';
    }
}

function initNavbar() {
    const offcanvasEl = document.getElementById('mobileNav');
    if (offcanvasEl) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
        document.querySelectorAll('[data-nav-toggle]').forEach((btn) => {
            btn.addEventListener('click', () => bsOffcanvas.show());
        });
    }
}

function initModals() {
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach((trigger) => {
        trigger.addEventListener('click', function () {
            const target = this.getAttribute('data-bs-target');
            if (target && target.includes('#')) {
                const modal = document.querySelector(target);
                if (modal) {
                    const modalInstance = new bootstrap.Modal(modal);
                    modalInstance.show();
                }
            }
        });
    });
}

function initForms() {
    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const fields = form.querySelectorAll('input, select, textarea');
            let valid = true;

            fields.forEach((field) => {
                if (field.hasAttribute('required') && !field.value.trim()) {
                    valid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                }
            });

            if (!valid) {
                showToast('Please complete all required fields.', 'warning');
                return;
            }

            const actionMessage = form.dataset.submitMessage || 'Saved successfully';
            showToast(actionMessage, 'success');
            form.reset();
            form.querySelectorAll('.is-valid').forEach((el) => el.classList.remove('is-valid'));
        });
    });
}

function initToastSystem() {
    if (!document.getElementById('toastContainer')) {
        const container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-bg-${type === 'warning' ? 'warning' : type === 'danger' ? 'danger' : 'success'} border-0`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body text-white">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

    container.appendChild(toast);
    const instance = new bootstrap.Toast(toast, { delay: 2800 });
    instance.show();

    toast.addEventListener('hidden.bs.toast', () => toast.remove());
}

function initBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('careerPilotBookmarks') || '[]');
    document.querySelectorAll('[data-bookmark]').forEach((button) => {
        const id = button.dataset.bookmark;
        if (bookmarks.includes(id)) {
            button.classList.add('active');
            button.innerHTML = '<i class="bi bi-bookmark-fill"></i>';
        }

        button.addEventListener('click', () => {
            let items = JSON.parse(localStorage.getItem('careerPilotBookmarks') || '[]');
            if (items.includes(id)) {
                items = items.filter((item) => item !== id);
                button.classList.remove('active');
                button.innerHTML = '<i class="bi bi-bookmark"></i>';
                showToast('Bookmark removed', 'warning');
            } else {
                items.push(id);
                button.classList.add('active');
                button.innerHTML = '<i class="bi bi-bookmark-fill"></i>';
                showToast('Question bookmarked', 'success');
            }
            localStorage.setItem('careerPilotBookmarks', JSON.stringify(items));
        });
    });
}

function initDarkModeToggle() {
    const toggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    if (!toggle) return;

    toggle.addEventListener('change', () => {
        const nextTheme = toggle.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', nextTheme);
        localStorage.setItem('careerPilotTheme', nextTheme);
        if (themeLabel) {
            themeLabel.textContent = nextTheme === 'dark' ? 'Dark' : 'Light';
        }
        showToast(nextTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'success');
    });
}

function initLocalStorageDemo() {
    if (!localStorage.getItem('careerPilotUser')) {
        localStorage.setItem('careerPilotUser', JSON.stringify({
            name: 'Aarav Mehta',
            email: 'aarav@careerpilot.ai',
            role: 'Student'
        }));
    }

    if (!localStorage.getItem('careerPilotPreferences')) {
        localStorage.setItem('careerPilotPreferences', JSON.stringify({
            notifications: true,
            interviewMode: 'standard',
            darkMode: false
        }));
    }
}

window.careerPilot = {
    showToast,
    setTheme: (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('careerPilotTheme', theme);
    }
};
