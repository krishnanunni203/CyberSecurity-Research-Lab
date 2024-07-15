// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('nav ul li a, .sidebar-nav ul li a');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('header');

    // Function to handle section visibility
    const showSection = (id) => {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === id) {
                section.classList.add('active');
            }
        });
    };

    // Function to smooth scroll to sections
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        }
    };

    // Add event listeners for nav links
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Handle form submission
    const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const researchArea = document.getElementById('researchArea').value;
        const email = document.getElementById('email').value;
        const image = document.getElementById('image').value;

        // Create new student card
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p><strong>Research Area:</strong> ${researchArea}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Add the new card to the student list
        studentList.appendChild(card);

        // Clear the form
        form.reset();
    });

    // Show the home section by default
    showSection('home');

    // Toggle the sidebar on smaller screens
    document.querySelector('.sidebar-toggle').addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Optional: Hide sidebar on scroll for better user experience
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollTop) {
            sidebar.classList.remove('active');
        }
        lastScrollTop = window.scrollY;
    });
});





