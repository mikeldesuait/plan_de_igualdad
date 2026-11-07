// medidas.js - Lógica para la página de Medidas de Igualdad

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('medidas-contenido');
    if (!contenedor) return;

    renderPaginaMedidas(contenedor);
});

function renderPaginaMedidas(contenedor) {
    let html = '';

    // --- 1. AVISO MORADO ---
    html += '<div style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">📦</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Kits para la Implantación de Medidas</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'El Instituto de las Mujeres ofrece estos <strong>kits prácticos</strong> para ayudar a las empresas a implantar medidas concretas de igualdad, más allá del Plan. Cada kit incluye herramientas, checklists y modelos para aplicar la perspectiva de género en diferentes ámbitos de la gestión empresarial.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. TARJETAS INFORMATIVAS ---
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">';
    
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">🗓️ Política de Reuniones</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Pautas para organizar reuniones con perspectiva de igualdad: convocatoria, horarios, lugar, participación equilibrada, lenguaje inclusivo y checklists para antes, durante y después.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">🗣️ Comunicación Incluyente</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Guía práctica para evitar el lenguaje sexista en la comunicación interna y externa: alternativas al masculino genérico, desdoblamientos, imágenes no estereotipadas y comunicación web inclusiva.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">📣 Plan de Comunicación</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Guía para diseñar un plan de comunicación de las actuaciones en materia de igualdad: objetivos, públicos, canales, acciones, lenguaje y fases a lo largo de todo el proceso del Plan.</p>';
    html += '</div>';
    html += '</div>';

    // --- 3. ENLACES A LOS KITS ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Descarga los Kits Completos</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">Materiales oficiales del Instituto de las Mujeres:</p>';

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';

    // Kit 1: Política de Reuniones
    html += '<a href="ministerio/medidasdeigualdad/Kit_01_Politica_Reuniones_2015.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">🗓️</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Kit 01. Política de Reuniones</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Convocatoria, antes, durante y después. Checklists de igualdad.</div>';
    html += '</div></a>';

    // Kit 2: Comunicación Incluyente
    html += '<a href="ministerio/medidasdeigualdad/Kit_03_Guia_Comunicacion_Incluyente.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">🗣️</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Kit 03. Comunicación Incluyente</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Guía práctica para evitar el lenguaje sexista en la empresa.</div>';
    html += '</div></a>';

    // Kit 3: Plan de Comunicación
    html += '<a href="ministerio/medidasdeigualdad/Kit_04_Plan_Comunicacion.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📣</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Kit 04. Plan de Comunicación</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Guía para diseñar la comunicación del Plan de Igualdad.</div>';
    html += '</div></a>';

    html += '</div>';

    // --- 4. AVISO FINAL ---
    html += '<div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 1.25rem; margin-top: 2rem; font-size: 0.9rem; color: #78350f; line-height: 1.6;">';
    html += '<strong>💡 Consejo:</strong> Estas medidas no son obligatorias por sí solas, pero <strong>sí son muy recomendables</strong>. Además, algunas de ellas pueden formar parte del Plan de Igualdad (Fase 3) si el diagnóstico detecta necesidades en esos ámbitos (por ejemplo, si hay reuniones fuera de horario que afectan a las personas con reducción de jornada, o si la comunicación interna no es inclusiva).';
    html += '</div>';

    // --- 5. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Fuente oficial de los materiales: <a href="https://www.igualdadenlaempresa.es" target="_blank" rel="noopener noreferrer" style="color: #4f46e5; text-decoration: none; font-weight: 600;">Instituto de las Mujeres - Igualdad en la Empresa</a>.</p>';
    html += '<p style="margin: 0.25rem 0 0 0; font-size: 0.75rem;">Materiales del Servicio de Asesoramiento para Planes y Medidas de Igualdad.</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}
