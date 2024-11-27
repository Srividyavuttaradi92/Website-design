alert("You are welcome");
let currentIndex = 0;
const backgroundContainer = document.getElementById('background-container');

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundContainer.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackground, 5000); // Change background every

document.addEventListener('DOMContentLoaded', function() {
    // Ensure the dropdown menu shows/hides correctly with Bootstrap 4
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            var menu = this.nextElementSibling;
            var isVisible = menu.style.display === 'block';
            hideAllDropdowns();
            if (!isVisible) {
                menu.style.display = 'block';
            }
        });
    });

    function hideAllDropdowns() {
        var dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(function(menu) {
            menu.style.display = 'none';
        });
    }

    // Hide dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        var isDropdown = event.target.matches('.dropdown-toggle') || event.target.closest('.dropdown-menu');
        if (!isDropdown) {
            hideAllDropdowns();
        }
    });
});
