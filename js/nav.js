// nav.js - Generador centralizado del menú de navegación

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const path = window.location.pathname.split('/').pop() || 'index.html';

    // 1. Enlaces de cabecera (Inicio, Reuniones, Actas, Configuración)
    const headerContainer = document.querySelector('.header-container');
    const h1 = headerContainer ? headerContainer.querySelector('h1') : null;
    if (h1 && !h1.querySelector('a')) {
        h1.innerHTML = `<a href="index.html" style="color: inherit; text-decoration: none;">${h1.innerHTML}</a>`;
    }
    
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

    // 2. Controles de cabecera (selector + guía de uso)
    const headerControls = document.querySelector('.header-controls');
    if (headerControls && !document.getElementById('guia-uso-btn')) {
        // Botón de Guía de Uso
        const btnGuia = document.createElement('button');
        btnGuia.id = 'guia-uso-btn';
        btnGuia.textContent = '📖 Guía de Uso';
        btnGuia.style.cssText = 'background: #f3e8ff; border: 1px solid #e9d5ff; color: #6b21a8; font-weight: 500; cursor: pointer; font-size: 0.85rem; padding: 0.4rem 0.8rem; border-radius: 6px; transition: all 0.15s ease; white-space: nowrap;';
        btnGuia.onclick = () => { if (window.abrirManualUso) window.abrirManualUso(); };
        btnGuia.onmouseover = () => { btnGuia.style.background = '#e9d5ff'; btnGuia.style.borderColor = '#d8b4fe'; };
        btnGuia.onmouseout = () => { btnGuia.style.background = '#f3e8ff'; btnGuia.style.borderColor = '#e9d5ff'; };
        headerControls.appendChild(btnGuia);
    }

    // 3. Contador de plazo (debajo del botón de Guía de Uso)
    if (headerControls && !document.getElementById('contador-plazo')) {
        const config = MODELO.getConfig();
        const fechaFin = config.planFechaFin;
        if (fechaFin) {
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            const fin = new Date(fechaFin);
            fin.setHours(0, 0, 0, 0);
            const diff = Math.ceil((fin - hoy) / (1000 * 60 * 60 * 24));
            
            let color, icono, texto;
            if (diff < 0) {
                color = '#ef4444';
                icono = '⚠️';
                texto = 'Plazo vencido';
            } else if (diff <= 30) {
                color = '#f59e0b';
                icono = '⏳';
                texto = `Quedan ${diff} días`;
            } else {
                color = '#10b981';
                icono = '✅';
                texto = `Quedan ${diff} días`;
            }
            
            const contador = document.createElement('div');
            contador.id = 'contador-plazo';
            contador.style.cssText = `font-size: 0.65rem; color: ${color}; font-weight: 600; text-align: right; margin-top: 0.1rem; white-space: nowrap;`;
            contador.textContent = `${icono} ${texto} para finalizar el Plan`;
            
            // Añadirlo DENTRO del header-controls (que ahora será columna)
            headerControls.style.display = 'flex';
            headerControls.style.flexDirection = 'column';
            headerControls.style.alignItems = 'flex-end';
            headerControls.style.gap = '0.1rem';
            headerControls.appendChild(contador);
        }
    }

    // 4. Pestañas de navegación (tabs-nav)
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
                { href: 'acoso.html', texto: 'Prevención del Acoso', id: 'acoso.html' }
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
