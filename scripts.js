// scripts.js

document.addEventListener('DOMContentLoaded', () => {
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
        card.classList.add('student-card');

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
});
