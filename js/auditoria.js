// auditoria.js - Lógica para la página de Auditoría Retributiva

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('auditoria-contenido');
    if (!contenedor) return;

    renderPaginaAuditoria(contenedor);
});

function renderPaginaAuditoria(contenedor) {
    let html = '';

    // --- 1. AVISO PREVIO OBLIGATORIO ---
    // --- 1. AVISO PREVIO OBLIGATORIO ---
    html += '<div id="aviso-auditoria" style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">🔍</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Obligatoria en el Plan de Igualdad</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'La <strong>Auditoría Retributiva</strong> es obligatoria para <strong>todas las empresas que elaboren un Plan de Igualdad</strong> (Art. 46.2.e LO 3/2007 y Art. 7 RD 902/2020). Sus resultados forman parte del diagnóstico del Plan y su vigencia es la misma que la del Plan, salvo que se establezca una inferior.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. TARJETAS INFORMATIVAS ---
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">';
    
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">🎯 ¿Qué es?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Es el análisis que permite comprobar si el sistema retributivo de la empresa cumple con el principio de igualdad. Consta de dos partes: un <strong>diagnóstico</strong> de la situación retributiva y un <strong>plan de actuación</strong> para corregir las desigualdades detectadas.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">⚖️ ¿Por qué es obligatoria?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">El <strong>RD 902/2020 (Art. 7 y 8)</strong> la exige a todas las empresas que tengan Plan de Igualdad. No se puede realizar si antes no se han elaborado el <strong>Registro Retributivo</strong> y la <strong>Valoración de Puestos</strong>.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">💡 ¿Qué aporta al Plan?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Sus conclusiones (diagnóstico y plan de actuación) se integran directamente en la Fase 2 del Plan de Igualdad. Además, el plan de actuación sirve de base para definir las medidas de la Fase 3.</p>';
    html += '</div>';
    html += '</div>';


    // --- 3. VÍDEO TUTORIAL ---
    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); display: flex; flex-direction: column; md:flex-row; align-items: center; gap: 1.5rem;">';
    html += '<div style="flex-shrink: 0;">';
    html += '<img src="https://img.youtube.com/vi/WREXJ7gsoFw/0.jpg" alt="Miniatura del vídeo" style="width: 200px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0; display: block;">';
    html += '</div>';
    html += '<div style="flex-grow: 1;">';
    html += '<h3 style="margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.1rem;">🎥 Seminario Web (26/02/2025) - Auditoría Retributiva con Perspectiva de Género</h3>';
    html += '<p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">El <strong>Instituto de las Mujeres</strong> explica en este seminario cómo realizar la auditoría retributiva paso a paso y qué aspectos clave debe cubrir el diagnóstico.</p>';
    html += '<a href="https://www.youtube.com/watch?v=WREXJ7gsoFw" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: #ff0000; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.background=\'#cc0000\'" onmouseout="this.style.background=\'#ff0000\'">';
    html += '<span style="font-size: 1.2rem;">▶️</span> Ver Seminario en YouTube';
    html += '</a>';
    html += '</div></div>';

    // --- 4. RESUMEN DEL MÉTODO (2 GRANDES BLOQUES) ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">El Método de la Auditoría Retributiva</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">El Art. 8 del RD 902/2020 la divide en dos grandes bloques que deben elaborarse en el seno de la Comisión Negociadora:</p>';

    const bloques = [
        { 
            icono: '📊', 
            titulo: '1. Diagnóstico de la situación retributiva', 
            desc: 'Analiza la valoración de puestos y los factores que generan diferencias: conciliación, promoción, movilidad, disponibilidad, etc. Cuantifica dónde y en qué medida se producen las diferencias entre mujeres y hombres.',
            color: '#4f46e5'
        },
        { 
            icono: '🛠️', 
            titulo: '2. Plan de actuación', 
            desc: 'Define los objetivos, las medidas concretas, el cronograma, las personas responsables y los indicadores para corregir las desigualdades detectadas. Prioriza las áreas donde se hayan detectado discriminaciones.',
            color: '#10b981'
        }
    ];

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    bloques.forEach(bloque => {
        html += `<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; display: flex; gap: 0.75rem; border-left: 4px solid ${bloque.color};">`;
        html += `<div style="font-size: 1.5rem; line-height: 1;">${bloque.icono}</div>`;
        html += `<div>`;
        html += `<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 0.25rem;">${bloque.titulo}</div>`;
        html += `<div style="font-size: 0.85rem; color: #64748b; line-height: 1.5;">${bloque.desc}</div>`;
        html += `</div></div>`;
    });
    html += '</div>';

    // --- 5. ENLACES A LAS HERRAMIENTAS ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Descarga las Herramientas y Guías</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">El Ministerio de Igualdad proporciona una guía técnica específica para la realización de auditorías retributivas:</p>';

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    
    // Botón 1: Guía técnica
    html += '<a href="ministerio/auditoríasretributivas/guia_AR_GENERO.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📖</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Guía Técnica de Auditorías Retributivas</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Manual oficial. Detalla los 10 pasos del diagnóstico.</div>';
    html += '</div></a>';
    
    html += '</div>';

    // --- 6. AVISO / RECOMENDACIÓN FINAL ---
    html += '<div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 1.25rem; margin-top: 2rem; font-size: 0.9rem; color: #78350f; line-height: 1.6;">';
    html += '<strong>⚠️ Muy importante:</strong> No se puede realizar la auditoría retributiva si antes no se han elaborado el <strong>Registro Retributivo</strong> y la <strong>Valoración de Puestos de Trabajo</strong>. La guía oficial establece <strong>10 pasos</strong> para el diagnóstico (verificación del registro, comparación por puestos de igual valor, análisis de promoción, selección, clasificación, formación, condiciones de trabajo, corresponsabilidad, infrarrepresentación, etc.). Recomendamos usar la guía técnica descargable como referencia para no dejar ningún aspecto sin analizar.';
    html += '</div>';

    // --- 7. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Fuente oficial de los materiales: <a href="https://www.igualdadenlaempresa.es/asesoramiento/herramientas-igualdad/auditorias-retributivas.htm" target="_blank" rel="noopener noreferrer" style="color: #4f46e5; text-decoration: none; font-weight: 600;">Instituto de las Mujeres - Igualdad en la Empresa</a>.</p>';
    html += '<p style="margin: 0.25rem 0 0 0; font-size: 0.75rem;">La guía técnica está sujeta al Real Decreto 902/2020, de 13 de octubre.</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}
