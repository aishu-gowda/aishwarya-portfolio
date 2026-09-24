// =====================================================
// AISHWARYA PORTFOLIO — JAVASCRIPT
// =====================================================


// =====================================================
// 1. TYPING EFFECT
// =====================================================

const typingText = document.querySelector(".home h2");

const text = "Java Full Stack Developer";

let textIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }

    if (!isDeleting) {

        // Add one character
        typingText.textContent = text.substring(0, textIndex + 1);

        textIndex++;

        // When the complete sentence is typed
        if (textIndex === text.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        // Remove one character
        typingText.textContent = text.substring(0, textIndex - 1);

        textIndex--;

        // When everything is deleted
        if (textIndex === 0) {

            isDeleting = false;

            setTimeout(typeEffect, 500);

            return;
        }
    }


    // Typing speed
    const speed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}


// Start typing effect
setTimeout(typeEffect, 700);


// =====================================================
// 2. SCROLL REVEAL ANIMATION
// =====================================================

const revealElements = document.querySelectorAll(
    ".about-content, .skills-heading, .skills-grid, .experience-container, .projects-heading, .project-feature, .project-row, .education-container, .contact-container"
);


const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);


// Run once when page loads
revealOnScroll();