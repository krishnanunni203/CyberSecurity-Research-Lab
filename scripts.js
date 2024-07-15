document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link, .sidebar-link');
    const sections = document.querySelectorAll('.section');

    // Function to remove active class from all sections
    function deactivateSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Function to activate the section based on the id
    function activateSection(id) {
        deactivateSections();
        document.querySelector(id).classList.add('active');
    }

    // Event listeners for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            activateSection(targetId);
            if (window.innerWidth < 768) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        });
    });

    // Sidebar toggle button functionality
    document.querySelector('.sidebar-toggle').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Add sample cards dynamically
    const coordinatorList = document.getElementById('coordinatorList');
    const studentList = document.getElementById('studentList');
    const internList = document.getElementById('internList');

    // Sample coordinator data
    const coordinators = [
        { name: 'Dr. Alice Smith', designation: 'Lead Researcher', image: 'https://via.placeholder.com/150' },
        { name: 'Dr. Bob Johnson', designation: 'Senior Researcher', image: 'https://via.placeholder.com/150' }
    ];

    // Sample student data
    const students = [
        { name: 'John Doe', researchArea: 'Network Security', email: 'john.doe@example.com', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Doe', researchArea: 'Cryptography', email: 'jane.doe@example.com', image: 'https://via.placeholder.com/150' }
    ];

    // Sample intern data
    const interns = [
        { name: 'Intern A', project: 'Malware Analysis', image: 'https://via.placeholder.com/150' },
        { name: 'Intern B', project: 'Vulnerability Assessment', image: 'https://via.placeholder.com/150' }
    ];

    // Function to add cards to a container
    function addCards(container, data) {
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 5px;">
                <h3>${item.name}</h3>
                ${item.designation ? `<p>${item.designation}</p>` : ''}
                ${item.researchArea ? `<p>Research Area: ${item.researchArea}</p>` : ''}
                ${item.project ? `<p>Project: ${item.project}</p>` : ''}
                ${item.email ? `<p>Email: ${item.email}</p>` : ''}
            `;
            container.appendChild(card);
        });
    }

    addCards(coordinatorList, coordinators);
    addCards(studentList, students);
    addCards(internList, interns);
});






