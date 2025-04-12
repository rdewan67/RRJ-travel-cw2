// Navbar scroll effect (matches Book Now)
window.addEventListener('scroll', function() {
const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(215, 103, 34, 0.8)';
        } else {
            navbar.style.backgroundColor = 'rgba(215, 103, 34, 0.3)';
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
    const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
            const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 56,
                behavior: 'smooth'
            });
        }
    });
});

// Review form functionality
document.addEventListener('DOMContentLoaded', function() {
 const reviewForm = document.getElementById('reviewForm');
 const stars = document.querySelectorAll('.rating-select i');
 const ratingInput = document.getElementById('rating');

// Star rating selection
    stars.forEach(star => {
     star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            console.log('Rating selected:', rating); // Debug
        });

 // Hover effect
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
 // Form submission
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (ratingInput.value === '0') {
                alert('Please select a rating');
                return;
            }
            
            console.log('Form submitted:', {
                name: this.name.value,
                email: this.email.value,
                trip: this.trip.value,
                rating: ratingInput.value,
                review: this.review.value
            }); // Debug
            
            alert('Thank you for your review!');
            this.reset();
            stars.forEach(star => star.classList.remove('active'));
            ratingInput.value = '0';
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});