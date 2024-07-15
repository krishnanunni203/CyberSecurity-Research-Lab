// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');
    const coordinatorList = document.getElementById('coordinatorList');

    const coordinators = [
        {
            name: "Dr. John Doe",
            role: "Head of Research",
            email: "john.doe@example.com",
            image: "https://example.com/images/john_doe.jpg"
        },
        {
            name: "Dr. Jane Smith",
            role: "Senior Researcher",
            email: "jane.smith@example.com",
            image: "https://example.com/images/jane_smith.jpg"
        }
    ];

    // Load coordinators
    coordinators.forEach(coordinator => {
        const card = document.createElement('div');
        card.classList.add('coordinator-card');

        card.innerHTML = `
            <img src="${coordinator.image}" alt="${coordinator.name}">
            <h3>${coordinator.name}</h3>
            <p><strong>Role:</strong> ${coordinator.role}</p>
            <p><strong>Email:</strong> ${coordinator.email}</p>
        `;

        coordinatorList.appendChild(card);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const researchArea = document.getElementById('researchArea').value;
        const email = document.getElementById('email').value;
        const image = document.getElementById('image').value;

        // Create new student card
        const card = document.createElement('div');
        card.classList.add('student-card');

        card.innerHTML = `
            <img src="${image}" alt="${


