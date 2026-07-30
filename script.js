document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Gallery Filter Logic (if on gallery page)
    const filterButtons = document.querySelectorAll('.btn-group .btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked
                button.classList.add('active');
                
                // Note: In a full production app, you would add logic here to 
                // hide/show images based on a data-category attribute.
            });
        });
    }

    // 2. Form Submission Prevention (to stop page reloads during demo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get the submit button to show feedback
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<i class="fas fa-check-circle me-2"></i> Sent Successfully';
            btn.classList.remove('btn-primary-custom');
            btn.classList.add('btn-success');
            btn.style.color = 'white';
            
            // Reset form
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('btn-success');
                btn.classList.add('btn-primary-custom');
            }, 3000);
        });
    });
    
    // 3. Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});