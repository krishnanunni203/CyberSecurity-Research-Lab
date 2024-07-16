document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(id).classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            showSection(targetId);
        });
    });
});
