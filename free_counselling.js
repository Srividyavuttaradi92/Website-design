function openPopup() {
    document.getElementById('popupForm').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    var popup = document.getElementById('popupForm');
    if (event.target === popup) {
        closePopup();
    }
}