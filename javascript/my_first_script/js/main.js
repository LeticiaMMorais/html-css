const toggleButton = document.getElementById('btn-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});