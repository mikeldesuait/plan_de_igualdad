// nav.js - Generador del menú: enlaces de cabecera + pestañas agrupadas

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const path = window.location.pathname.split('/').pop() || 'index.html';

    const headerContainer = document.querySelector('.header-container');
    const h1 = headerContainer ? headerContainer.querySelector('h1') : null;
    
    if (headerContainer && h1 && !document.getElementById('headerLinks')) {
        const headerLinks = document.createElement('div');
        headerLinks.id = 'headerLinks';
        headerLinks.innerHTML = `
            <a href="index.html" class="header-link ${path === 'index.html' ? 'header-link-activa' : ''}">Inicio</a>
            <a href="reuniones.html" class="header-link ${path === 'reuniones.html' ? 'header-link-activa' : ''}">Reuniones</a>
            <a href="actas.html" class="header-link ${path === 'actas.html' ? 'header-link-activa' : ''}">Actas</a>
            <a href="configuracion.html" class="header-link ${path === 'configuracion.html' ? 'header-link-activa' : ''}">Configuración</a>
        `;
        h1.parentNode.insertBefore(headerLinks, h1.nextSibling);
    }

    nav.classList.add('tabs-nav');

    const grupos = [
        {
            tipo: 'obligatorio',
            etiqueta: 'Obligatorio por ley',
            enlaces: [
                { href: 'cumplimiento.html', texto: 'Pasos Plan de Igualdad', id: 'cumplimiento.html' },
                { href: 'valoracion.html', texto: 'Valoración de Puestos', id: 'valoracion.html' },
                { href: 'registro.html', texto: 'Registro Retributivo', id: 'registro.html' },
                { href: 'auditoria.html', texto: 'Auditoría Retributiva', id: 'auditoria.html' },
                { href: 'acoso.html', texto: 'Guía de Acoso', id: 'acoso.html' }
            ]
        },
        {
            tipo: 'recomendado',
            etiqueta: 'Recomendado / Opcional',
            enlaces: [
                { href: 'medidas.html', texto: 'Medidas de Igualdad', id: 'medidas.html' }
            ]
        }
    ];

    nav.innerHTML = grupos.map(grupo => {
        const tabs = grupo.enlaces.map(enlace => {
            const activeClass = (path === enlace.id) ? ' tab-activa' : '';
            return `<a href="${enlace.href}" class="tab tab-${grupo.tipo}${activeClass}">${enlace.texto}</a>`;
        }).join('');
        
        return `<div class="tab-grupo tab-grupo-${grupo.tipo}">
            <div class="tab-grupo-etiqueta">${grupo.etiqueta}</div>
            <div class="tab-grupo-tabs">${tabs}</div>
        </div>`;
    }).join('');
});
