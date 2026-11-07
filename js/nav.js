// nav.js - Generador centralizado del menú de navegación

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    // Detectar en qué página estamos para marcar el "active"
    const path = window.location.pathname.split('/').pop() || 'index.html';

    // ORDEN LÓGICO LEGAL (RD 902/2020):
    // 1. VPT (Valoración de Puestos) -> Agrupa puestos de igual valor
    // 2. Registro Retributivo -> Usa los grupos definidos en VPT
    // 3. Auditoría Retributiva -> Análisis final y brecha
    const enlaces = [
        { href: 'index.html', texto: 'Inicio', id: 'index.html' },
        { href: 'cumplimiento.html', texto: 'Pasos Plan de Igualdad', id: 'cumplimiento.html' },
        { href: 'valoracion.html', texto: 'Valoración de Puestos', id: 'valoracion.html' },
        { href: 'registro.html', texto: 'Registro Retributivo', id: 'registro.html' },
        { href: 'auditoria.html', texto: 'Auditoría Retributiva', id: 'auditoria.html' },
        { href: 'configuracion.html', texto: 'Configuración', id: 'configuracion.html' }
    ];

    nav.innerHTML = enlaces.map(enlace => {
        const activeClass = (path === enlace.id) ? ' class="active"' : '';
        return `<a href="${enlace.href}"${activeClass}>${enlace.texto}</a>`;
    }).join('');
});
