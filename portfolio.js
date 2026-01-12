// Portfolio Page Logic
document.addEventListener('DOMContentLoaded', () => {
    // Category Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    if (filterBtns.length > 0 && workCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                workCards.forEach(card => {
                    const categories = card.getAttribute('data-category');

                    if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
                        card.style.display = 'flex';
                        // Add animation/fade-in class if needed
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                    }
                });
            });
        });
    }
});
