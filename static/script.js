// Add event listener to navbar links
document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        console.log(`Link clicked: ${link.textContent}`);
    });
});

const words = ["Student", "Learner", "Coder", "AIML Enthusiast", "Tech Innovator", "Software Developer"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const wordElement = document.getElementById('word');

function typeWord() {
    if (currentCharIndex < words[currentWordIndex].length) {
        wordElement.textContent = words[currentWordIndex].slice(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(typeWord, 200); // Adjust the typing speed here
    } else {
        currentCharIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length; // Loop around the words list
        wordElement.textContent = words[currentWordIndex][0]; // Show the first letter of the next word
        setTimeout(typeWord, 700); // Adjust the delay between words here
    }
}

typeWord();

// Ensure this script is correctly linked and loaded
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-links a');

    function changeNavOnScroll() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeNavOnScroll();
    window.addEventListener('scroll', changeNavOnScroll);
});
