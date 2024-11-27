document.querySelectorAll('.video-thumbnail').forEach(item => {
    item.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.style.width = "100%";
        iframe.style.aspectRatio = "16/9";
        
        this.innerHTML = '';  // Remove the thumbnail and play button
        this.appendChild(iframe);
    });
});
