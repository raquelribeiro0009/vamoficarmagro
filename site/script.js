document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para a altura do menu fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});