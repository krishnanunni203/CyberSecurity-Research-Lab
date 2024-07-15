/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and Main Container */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    background: linear-gradient(to right, #0066cc, #00cc99);
    color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2.5rem;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    transition: color 0.3s;
}

header nav ul li a i {
    margin-right: 8px;
}

header nav ul li a:hover {
    color: #ffdd57;
}

.main-content {
    display: flex;
}

aside {
    width: 250px;
    background: #333;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.sidebar-nav ul {
    list-style: none;
}

.sidebar-nav ul li {
    margin-bottom: 20px;
}

.sidebar-nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    transition: color 0.3s;
}

.sidebar-nav ul li a i {
    margin-right: 8px;
}

.sidebar-nav ul li a:hover {
    color: #ffdd57;
}

main {
    flex-grow: 1;
    padding: 40px 20px;
}

.section {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.section.active {
    display: block;
    opacity: 1;
}

.section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.section p {
    font-size: 1.2rem;
    line-height: 1.8;
}

/* Form */
.form-container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
}

form label {
    display: block;
    margin-top: 10px;
}

form input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
}

form input:focus {
    border-color: #0066cc;
    outline: none;
}

form button {
    background: #0066cc;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

form button:hover {
    background: #004d99;
}

/* Coordinator and Student Cards */
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 300px;
    overflow: hidden;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    animation: fadeIn 1s ease-in-out;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
}

.card h2 {
    padding: 10px;
    background: #0066cc;
    color: #fff;
    margin: 0;
    font-size: 1.5rem
/* Coordinator and Student Cards */
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 300px;
    overflow: hidden;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    animation: fadeIn 1s ease-in-out;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
}

.card h2 {
    padding: 10px;
    background: #0066cc;
    color: #fff;
    margin: 0;
    font-size: 1.5rem;
}

.card p {
    padding: 10px;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.card:hover img {
    opacity: 0.8;
}

/* Footer */
footer {
    background: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}




