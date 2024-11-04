document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.getElementById('greetButton');
    const aboutMeSection = document.querySelector('.about-me');

    greetButton.addEventListener('click', function() {
        aboutMeSection.innerHTML += "<p>Senang berkenalan denganmu!</p>"; // Menambahkan teks ke bagian 'Tentang Saya'
    });
});
