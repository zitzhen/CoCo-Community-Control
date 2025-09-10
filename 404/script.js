document.addEventListener('DOMContentLoaded', function() {
    const html_url = document.getElementById("url")
    const path = decodeURIComponent(window.location.pathname);
    html_url.textContent = path;
});