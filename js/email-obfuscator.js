// email-obfuscator.js - Ofusca el correo electrónico para evitar spambots
// El correo no aparece en el HTML. Se reconstruye al cargar la página.

document.addEventListener('DOMContentLoaded', () => {
    // El correo se construye a partir de partes separadas (los bots no lo ven en el HTML)
    const partes = ['info', '@', 'portalrlpt', '.', 'es'];
    const email = partes.join('');
    const asunto = 'Consulta desde portalrlpt.es';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(asunto)}`;

    // Buscar todos los elementos con la clase "email-ofuscado" y rellenarlos
    document.querySelectorAll('.email-ofuscado').forEach(el => {
        // Si ya está rellenado, no hacer nada (evitar duplicados)
        if (el.dataset.ofuscado === 'true') return;
        
        // Crear el enlace
        const enlace = document.createElement('a');
        enlace.href = mailto;
        enlace.textContent = email;
        enlace.style.color = 'inherit';
        enlace.style.textDecoration = 'underline';
        
        // Reemplazar el contenido del elemento por el enlace
        el.innerHTML = '';
        el.appendChild(enlace);
        el.dataset.ofuscado = 'true';
    });
});
