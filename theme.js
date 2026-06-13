document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeBtn');
    const html = document.documentElement;

    // Load user's saved choice if it exists
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    themeBtn.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';

    themeBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        let newTheme = 'light';

        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeBtn.textContent = 'Light Mode';
        } else {
            themeBtn.textContent = 'Dark Mode';
        }

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    });
});