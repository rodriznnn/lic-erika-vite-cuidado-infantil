/**
 * Lógica para las animaciones de entrada al hacer scroll (Fade In Up)
 */
document.addEventListener('DOMContentLoaded', () => {
    // Configuramos el observador
    const observerOptions = {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' cuando el elemento entra en el viewport
                entry.target.classList.add('visible');
                // Opcional: Dejar de observar una vez que ya es visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que tengan la clase .fade-up y empezamos a observarlos
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});