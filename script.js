document.addEventListener('DOMContentLoaded', function() {
    function toggleDetails(button) {
        const cardContent = button.closest('.card-content');
        const details = cardContent.querySelector('.card-details');
        details.classList.toggle('expanded');
        button.textContent = details.classList.contains('expanded') ? 'See Less' : 'See More';
    }

    document.querySelectorAll('.btn.btn-light').forEach(button => {
        button.addEventListener('click', function() {
            toggleDetails(this);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay for white letters
                const whiteLetters = entry.target.querySelectorAll('.white');
                whiteLetters.forEach((letter, index) => {
                    setTimeout(() => {
                        letter.classList.add('show');
                    }, index * 100); // 100ms delay between each white letter
                });

                // Add delay for green letters
                const greenLetters = entry.target.querySelectorAll('.green');
                greenLetters.forEach((letter, index) => {
                    setTimeout(() => {
                        letter.classList.add('show');
                    }, (whiteLetters.length * 100) + (index * 200)); // Start after white letters with 200ms delay between each green letter
                });
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each line
    document.querySelectorAll('.firstline, .secondline, .thirdline, .fourthline, .fifthline, .sixthline').forEach(line => {
        observer.observe(line);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('card')) {
                    // Animate card
                    entry.target.classList.add('show');
                } else {
                    // Animate letters
                    // Add delay for white letters
                    const whiteLetters = entry.target.querySelectorAll('.white');
                    whiteLetters.forEach((letter, index) => {
                        setTimeout(() => {
                            letter.classList.add('show');
                        }, index * 100); // 100ms delay between each white letter
                    });

                    // Add delay for green letters
                    const greenLetters = entry.target.querySelectorAll('.green');
                    greenLetters.forEach((letter, index) => {
                        setTimeout(() => {
                            letter.classList.add('show');
                        }, (whiteLetters.length * 100) + (index * 200)); // Start after white letters with 200ms delay between each green letter
                    });
                }
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each line and card
    document.querySelectorAll('.firstline, .secondline, .thirdline, .fourthline, .fifthline, .sixthline, .card').forEach(element => {
        observer.observe(element);
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Parallax effect for specific elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // For text elements
        document.querySelectorAll('.parallax-text').forEach(text => {
            const speed = text.getAttribute('data-speed');
            text.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // For cards
        document.querySelectorAll('.card').forEach((card, index) => {
            const delay = index * 0.3;
            const speed = 0.3;
            card.style.transform = `translateY(${scrolled * speed}px)`;
            card.style.transitionDelay = `${delay}s`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class 'green'
    const greenElements = document.querySelectorAll('.green');
    
    // Add click event listener to each green element
    greenElements.forEach(element => {
        element.style.cursor = 'pointer';
        
        // Add click event for portfolio redirect
        element.addEventListener('click', function() {
            window.location.href = '/portfolio';
        });

        // Add mouseover event to scale all green elements
        element.addEventListener('mouseover', function() {
            greenElements.forEach(el => {
                el.style.transform = 'scale(1.2)';
            });
        });

        // Add mouseout event to return all elements to normal size
        element.addEventListener('mouseout', function() {
            greenElements.forEach(el => {
                el.style.transform = 'scale(1)';
            });
        });
    });
});

let currentPosition = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel(direction) {
    currentPosition = (currentPosition + direction + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentPosition * itemWidth}px)`;

    // Check if current item is parallax and trigger animation
    if (items[currentPosition].classList.contains('parallax-item')) {
        triggerParallaxAnimation();
    }
}

function triggerParallaxAnimation() {
    // Reset animations
    const letters = document.querySelectorAll('.parallax-item .white, .parallax-item .green');
    letters.forEach(letter => {
        letter.classList.remove('show');
        void letter.offsetWidth; // Trigger reflow
        letter.classList.add('show');
    });
}

// Initialize the carousel
updateCarousel();

// Optional: Auto-rotate the carousel
setInterval(() => moveCarousel(1), 5000); // Change slide every 5 seconds

// Your existing parallax animation code
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Your existing animation logic
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each line and card
    document.querySelectorAll('.firstline, .secondline, .thirdline, .fourthline, .fifthline, .sixthline, .card').forEach(element => {
        observer.observe(element);
    });
});

