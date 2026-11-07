// index.js - Lógica del Panel de Control (Inicio)

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('index-contenido');
    if (!contenedor) return;

    renderPanelControl(contenedor);
});

function renderPanelControl(contenedor) {
    let html = '';

    // --- 1. INTRODUCCIÓN (BIENVENIDA) ---
    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);">';
    html += '<h3 style="margin-top: 0; color: #1e293b; font-size: 1.15rem; margin-bottom: 0.5rem;">Te damos la bienvenida al Gestor del Plan de Igualdad</h3>';
    html += '<p style="color: #475569; font-size: 0.9rem; line-height: 1.5; margin-bottom: 0.75rem;">Esta herramienta te guiará paso a paso en la elaboración del Plan de Igualdad. Para que el proceso tenga validez legal, sigue el orden establecido por el <strong>Real Decreto 901/2020</strong> y el <strong>Real Decreto 902/2020</strong>.</p>';
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 0.75rem; border-radius: 0 8px 8px 0; font-size: 0.85rem; color: #3730a3; display: flex; align-items: center; gap: 0.5rem;">';
    html += '<span style="font-size: 1rem;">💡</span> <strong>Consejo:</strong> Antes de empezar, asegúrate de tener configurados los datos de la empresa y del comité en la pestaña <em>Configuración</em>.';
    html += '</div>';
    html += '</div>';

    // --- 2. AVISO LEGAL / ORDEN (ANTES DE LAS TARJETAS) ---
    html += '<div style="background: #fffbeb; border-left: 6px solid #f59e0b; border-radius: 8px; padding: 1.25rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.5rem; line-height: 1;">📌</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #92400e; font-size: 0.95rem; font-weight: 700;">Recuerda el orden legal y las obligaciones autónomas</h4>';
    html += '<p style="margin: 0 0 0.5rem 0; color: #78350f; font-size: 0.85rem; line-height: 1.5;">';
    html += 'Para que el Plan de Igualdad sea válido, la <strong>Valoración de Puestos</strong> debe hacerse primero. Sus resultados alimentan el <strong>Registro Retributivo</strong>, y ambos son la base de la <strong>Auditoría Retributiva</strong>. Todo ello forma parte del diagnóstico de la <strong>Fase 2</strong> del Plan de Igualdad.';
    html += '</p>';
    html += '<p style="margin: 0; color: #78350f; font-size: 0.8rem; line-height: 1.5; background: #fef3c7; padding: 0.5rem; border-radius: 6px;">';
    html += '<strong>⚠️ Importante:</strong> El <strong>Registro Retributivo</strong> es una obligación autónoma para <em>todas</em> las empresas (Art. 28.2 ET) y debe actualizarse <strong>anualmente</strong>, independientemente de que tengan o no Plan de Igualdad. La Valoración y la Auditoría son preceptivas en el marco del Plan.';
    html += '</p>';
    html += '</div></div></div>';


    // --- NUEVO BLOQUE: EMPEZAR POR LA FASE 1 (CONSTITUCIÓN) ---
    html += '<div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; display: flex; flex-direction: column; md:flex-row; align-items: flex-start; gap: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    
    // Icono
    html += '<div style="font-size: 2.5rem; line-height: 1; flex-shrink: 0;">🤝</div>';
    
    // Contenido
    html += '<div style="flex-grow: 1;">';
    html += '<h3 style="margin: 0 0 0.5rem 0; color: #166534; font-size: 1.1rem; font-weight: 700;">Paso de partida: Constitución de la Comisión</h3>';
    html += '<p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #15803d; line-height: 1.6;">';
    html += 'La <strong>Fase 1 del Plan de Igualdad</strong> es la creación de la Comisión Negociadora. Este es el primer paso real y <strong>ya se puede realizar</strong>. Esta comisión será la encargada de supervisar que el resto de herramientas preceptivas (Valoración, Registro y Auditoría) se realicen correctamente y con las garantías legales.';
    html += '</p>';
    html += '<a href="cumplimiento.html" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.25rem; background: #10b981; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: background 0.2s;" onmouseover="this.style.background=\'#059669\'" onmouseout="this.style.background=\'#10b981\'">';
    html += '<span style="font-size: 1.1rem;">📝</span> Ir a la Fase 1: Constitución';
    html += '</a>';
    html += '</div>';
    html += '</div>';

    // --- 3. TARJETAS DE PASOS (ORDENADAS Y COMPACTAS) ---
    html += '<h3 style="color: #1e293b; font-size: 1.1rem; margin-bottom: 1rem;">Ruta de Trabajo Recomendada</h3>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1rem; margin-bottom: 3rem;">';

    const tarjetas = [
        { paso: '1', icono: '⚖️', titulo: 'Valoración de Puestos', desc: 'Agrupa los puestos de igual valor.', enlace: 'valoracion.html', color: '#4f46e5' },
        { paso: '2', icono: '💰', titulo: 'Registro Retributivo', desc: 'Promedios y medianas por sexo.', enlace: 'registro.html', color: '#0ea5e9' },
        { paso: '3', icono: '🔍', titulo: 'Auditoría Retributiva', desc: 'Análisis de brecha y actuación.', enlace: 'auditoria.html', color: '#8b5cf6' },
        { paso: '4', icono: '📋', titulo: 'Plan de Igualdad', desc: 'Diagnóstico y medidas finales.', enlace: 'cumplimiento.html', color: '#10b981' },
        { paso: '5', icono: '⚙️', titulo: 'Configuración', desc: 'Datos de empresa y comité.', enlace: 'configuracion.html', color: '#64748b' }
    ];

    tarjetas.forEach(t => {
        html += `<a href="${t.enlace}" style="text-decoration: none; display: block;">`;
        html += `<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.85rem; height: 100%; transition: all 0.2s; display: flex; flex-direction: column; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 16px -4px rgba(0,0,0,0.08)'; this.style.borderColor='${t.color}';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.02)'; this.style.borderColor='#e2e8f0';">`;
        
        html += `<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">`;
        html += `<div style="font-size: 1.5rem; line-height: 1;">${t.icono}</div>`;
        html += `<div style="background: ${t.color}15; color: ${t.color}; font-size: 0.65rem; font-weight: 800; padding: 0.15rem 0.4rem; border-radius: 20px;">PASO ${t.paso}</div>`;
        html += `</div>`;
        
        html += `<h4 style="margin: 0 0 0.25rem 0; color: #1e293b; font-size: 0.9rem; font-weight: 700;">${t.titulo}</h4>`;
        html += `<p style="margin: 0; color: #64748b; font-size: 0.75rem; line-height: 1.4; flex-grow: 1;">${t.desc}</p>`;
        
        html += `<div style="margin-top: 0.75rem; color: ${t.color}; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; gap: 0.25rem;">Acceder <span style="font-size: 1rem;">→</span></div>`;
        
        html += `</div></a>`;
    });

    html += '</div>';

    contenedor.innerHTML = html;
}
