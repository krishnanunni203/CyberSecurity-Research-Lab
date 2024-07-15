// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Remove active class from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Add active class to target section
            targetSection.classList.add('active');
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
        const email

