// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('section');

    const toggleSection = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);

        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to target section
        targetSection.classList.add('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            toggleSection(e, targetId);
        });
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            toggleSection(e, targetId);
        });
    });

    const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');
    const coordinatorList = document.getElementById('coordinatorList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const researchArea = document.getElementById('researchArea').value;
        const email = document.getElementById('email').value;
        const image = document.getElementById('image').value;

        // Create new student card
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p><strong>Research Area:</strong> ${researchArea}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Add student card to list
        studentList.appendChild(studentCard);

        // Clear form
        form.reset();
    });
});



