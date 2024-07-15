// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navIcons = document.querySelectorAll('.nav-icon');
    const sections = document.querySelectorAll('.section');
    const studentForm = document.getElementById('studentForm');
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
    coordinators.forEach(coordinator =>
