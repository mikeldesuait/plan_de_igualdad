// fases-ui.js - Lógica para el acordeón de las fases

document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.fase-tarjeta');
    const contenidos = document.querySelectorAll('.contenido-fase');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            // 1. Quitar 'activa' de todas las tarjetas y contenidos
            tarjetas.forEach(t => t.classList.remove('activa'));
            contenidos.forEach(c => c.classList.remove('activa'));

            // 2. Añadir 'activa' a la tarjeta pulsada
            tarjeta.classList.add('activa');

            // 3. Mostrar el contenido correspondiente
            const targetId = tarjeta.getAttribute('data-target');
            const targetContenido = document.getElementById(targetId);
            if (targetContenido) {
                targetContenido.classList.add('activa');
            }
        });
    });
});
