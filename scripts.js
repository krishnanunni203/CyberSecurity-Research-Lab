document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.home-icons a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                sections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initial Active Section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }
});

