document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('contactForm').style.display = 'block';
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
});
