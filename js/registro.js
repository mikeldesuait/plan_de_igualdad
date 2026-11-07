// registro.js - Lógica para la página de Registro Retributivo

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('registro-contenido');
    if (!contenedor) return;

    renderPaginaRegistro(contenedor);
});

function renderPaginaRegistro(contenedor) {
    let html = '';

    // --- 1. AVISO PREVIO OBLIGATORIO ---
    html += '<div id="aviso-registro" style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">📋</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Obligación Autónoma y Anual</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'El <strong>Registro Retributivo</strong> es una obligación para <strong>todas las empresas</strong> (Art. 28.2 ET), tengan o no Plan de Igualdad. Se actualiza <strong>anualmente</strong> (año natural). Debe ser consultado con la RLPT (o RLT) al menos 10 días antes de su elaboración.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. TARJETAS INFORMATIVAS ---
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">';
    
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">📊 ¿Qué es?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Es el documento que refleja los <strong>valores medios</strong> (promedios y medianas) de los salarios, complementos y percepciones extrasalariales de la plantilla, desagregados por sexo y distribuidos por grupos profesionales (o por puestos de igual valor en empresas con auditoría).</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">⚖️ ¿Por qué es obligatorio?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">La transparencia retributiva está regulada por el <strong>Art. 28.2 ET</strong> y el <strong>Real Decreto 902/2020</strong> (Arts. 5 y 6). Sin este registro, no se puede cumplir con la auditoría retributiva ni con el diagnóstico del Plan de Igualdad.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">💡 ¿Qué aporta al Plan?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Es la base para la <strong>Auditoría Retributiva</strong> y, por tanto, para el diagnóstico de la Fase 2 del Plan. Permite detectar diferencias salariales entre mujeres y hombres y justificar (o corregir) la brecha.</p>';
    html += '</div>';
    html += '</div>';

    // --- 3. VÍDEO TUTORIAL ---
    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); display: flex; flex-direction: column; md:flex-row; align-items: center; gap: 1.5rem;">';
    html += '<div style="flex-shrink: 0;">';
    html += '<img src="https://img.youtube.com/vi/_fHJohL5htc/0.jpg" alt="Miniatura del vídeo" style="width: 200px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0; display: block;">';
    html += '</div>';
    html += '<div style="flex-grow: 1;">';
    html += '<h3 style="margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.1rem;">🎥 Seminario Web (24/02/2025) - Herramienta de Registro Retributivo</h3>';
    html += '<p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">El <strong>Instituto de las Mujeres</strong> explica en este seminario cómo utilizar la herramienta de registro retributivo paso a paso.</p>';
    html += '<a href="https://www.youtube.com/watch?v=_fHJohL5htc" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: #ff0000; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.background=\'#cc0000\'" onmouseout="this.style.background=\'#ff0000\'">';
    html += '<span style="font-size: 1.2rem;">▶️</span> Ver Seminario en YouTube';
    html += '</a>';
    html += '</div></div>';

    // --- 4. RESUMEN DEL MÉTODO (3 BLOQUES) ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">El Método del Registro Retributivo</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">El registro se compone de los siguientes bloques, que se rellenan con la herramienta oficial del Ministerio:</p>';

    const bloques = [
        { icono: '📈', titulo: 'Promedios y Medianas', desc: 'Calcula la media aritmética y la mediana de las retribuciones, desagregadas por sexo y por grupo profesional (o por puestos de igual valor si hay auditoría).' },
        { icono: '💼', titulo: 'Conceptos Retributivos', desc: 'Debe detallar cada concepto: salario base, cada complemento salarial (antigüedad, pluses, comisiones…) y cada percepción extrasalarial (dietas, transporte…).' },
        { icono: '⚖️', titulo: 'Justificación del 25%', desc: 'Si la media o la mediana de un sexo supera a la del otro en un 25% o más, es obligatorio incluir una justificación de que responde a motivos no relacionados con el sexo.' }
    ];

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    bloques.forEach(bloque => {
        html += `<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; display: flex; gap: 0.75rem;">`;
        html += `<div style="font-size: 1.5rem; line-height: 1;">${bloque.icono}</div>`;
        html += `<div>`;
        html += `<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 0.25rem;">${bloque.titulo}</div>`;
        html += `<div style="font-size: 0.85rem; color: #64748b; line-height: 1.5;">${bloque.desc}</div>`;
        html += `</div></div>`;
    });
    html += '</div>';

    // --- 5. ENLACES A LAS HERRAMIENTAS ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Descarga las Herramientas Oficiales</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">El Ministerio de Igualdad proporciona una herramienta en Excel y su guía de uso. Descárgalas aquí:</p>';

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    
    // Botón 1: Herramienta Excel
    html += '<a href="ministerio/RegistroRetributivo/Herramienta_Registro_Retributivo.xlsx" download style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📊</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Herramienta Registro Retributivo.xlsx</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Excel oficial con macros. Calcula promedios, medianas y diferencias.</div>';
    html += '</div></a>';

    // Botón 2: Guía de uso
    html += '<a href="ministerio/RegistroRetributivo/Guia_Uso_Herramienta_Registro_Retributivo.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📖</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Guía de Uso (PDF)</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Manual oficial. Explica cómo cumplimentar cada hoja.</div>';
    html += '</div></a>';

    // Botón 3: Hoja de ruta
    html += '<a href="ministerio/RegistroRetributivo/Hoja_Ruta_Reg_Ret.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">🗺️</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Hoja de Ruta (PDF)</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Resumen visual de los pasos previos y el contenido mínimo.</div>';
    html += '</div></a>';
    
    html += '</div>';

    // --- 6. AVISO / RECOMENDACIÓN FINAL ---
    html += '<div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 1.25rem; margin-top: 2rem; font-size: 0.9rem; color: #78350f; line-height: 1.6;">';
    html += '<strong>⚠️ Recomendación:</strong> Antes de rellenar el registro, asegúrate de haber realizado la <strong>Valoración de Puestos de Trabajo</strong> (si tu empresa tiene más de 50 personas trabajadoras) y de haber consultado a la <strong>RLPT</strong> con al menos 10 días de antelación. La herramienta Excel del Ministerio calcula automáticamente los promedios y medianas, pero necesita que le introduzcas los datos de la plantilla.';
    html += '</div>';

    // --- 7. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Fuente oficial de los materiales: <a href="https://www.igualdadenlaempresa.es/asesoramiento/herramientas-igualdad/herramienta-registro.htm" target="_blank" rel="noopener noreferrer" style="color: #4f46e5; text-decoration: none; font-weight: 600;">Instituto de las Mujeres - Igualdad en la Empresa</a>.</p>';
    html += '<p style="margin: 0.25rem 0 0 0; font-size: 0.75rem;">La herramienta y su guía están sujetas al Real Decreto 902/2020, de 13 de octubre.</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}
