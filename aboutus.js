document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const checkPosition = () => {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check
});
