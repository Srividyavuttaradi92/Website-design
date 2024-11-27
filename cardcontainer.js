document.getElementById('nextBtn').addEventListener('click', function() {
    const hiddenCards = document.querySelectorAll('.card.hidden');
    if (hiddenCards.length) {
        hiddenCards.forEach((card, index) => {
            if (index < 3) {
                card.classList.remove('hidden');
            }
        });
    } else {
        this.style.display = 'none';
    }
});
