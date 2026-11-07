// valoracion.js - Lógica para la página de Valoración de Puestos de Trabajo

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('valoracion-contenido');
    if (!contenedor) return;

    renderPaginaValoracion(contenedor);
});

function renderPaginaValoracion(contenedor) {
    let html = '';

    // --- 1. AVISO PREVIO OBLIGATORIO ---
    html += '<div id="aviso-vpt" style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">🔗</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Paso Previo: Valoración de Puestos</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'Para empresas de más de 50 personas trabajadoras, este paso es obligatorio antes del Registro Retributivo. Aquí se definen los puestos "de igual valor" mediante el sistema de valoración. Una vez tengas esta agrupación, pasarás a rellenar el Registro y, finalmente, la Auditoría Retributiva.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. TARJETAS INFORMATIVAS (¿Qué es? ¿Por qué? ¿Qué aporta?) ---
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">';
    
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">📋 ¿Qué es la Valoración de Puestos?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Es el procedimiento técnico que permite estimar el valor de cada puesto de trabajo, asignándole una puntuación objetiva. Su objetivo es identificar qué puestos tienen <strong>igual valor</strong> para la empresa, más allá de su nombre o de la persona que lo ocupe.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">⚖️ ¿Por qué es obligatoria?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">El <strong>Real Decreto 902/2020</strong> (Arts. 4 y 8) y el <strong>Estatuto de los Trabajadores</strong> (Art. 28.1) exigen que la valoración se haga con criterios de <strong>adecuación, totalidad y objetividad</strong>. Es un paso previo imprescindible para el Registro Retributivo (en empresas de +50 personas trabajadoras) y para la Auditoría Retributiva.</p>';
    html += '</div>';

    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">💡 ¿Qué aporta al Plan de Igualdad?</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Permite detectar si las tareas o habilidades tradicionalmente feminizadas (ej. atención al público, minuciosidad, cuidado) están infravaloradas frente a las masculinizadas. Sus resultados alimentan directamente el diagnóstico de la Fase 2 del Plan de Igualdad.</p>';
    html += '</div>';
    html += '</div>';

    // --- 3. VÍDEO TUTORIAL (DESTACADO) ---
    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); display: flex; flex-direction: column; md:flex-row; align-items: center; gap: 1.5rem;">';
    html += '<div style="flex-shrink: 0;">';
    html += '<img src="https://img.youtube.com/vi/YF3cjOUoUI0/0.jpg" alt="Miniatura del vídeo" style="width: 200px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0; display: block;">';
    html += '</div>';
    html += '<div style="flex-grow: 1;">';
    html += '<h3 style="margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.1rem;">🎥 Vídeo Tutorial: Seminario Web Oficial</h3>';
    html += '<p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">El <strong>Instituto de las Mujeres</strong> explica en este seminario (25/02/2025) cómo utilizar la herramienta de valoración paso a paso.</p>';
    html += '<a href="https://www.youtube.com/watch?v=YF3cjOUoUI0" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; background: #ff0000; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.2s;" onmouseover="this.style.background=\'#cc0000\'" onmouseout="this.style.background=\'#ff0000\'">';
    html += '<span style="font-size: 1.2rem;">▶️</span> Ver Seminario en YouTube';
    html += '</a>';
    html += '</div></div>';

    // --- 4. RESUMEN DEL MÉTODO (4 BLOQUES) ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">El Método de Valoración: 4 Grandes Bloques</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">La herramienta oficial del Ministerio evalúa cada puesto asignando puntos (sobre 1000) en función de cuatro categorías de factores, con sus subfactores y niveles. Esta es la estructura que debes seguir:</p>';

    const bloques = [
        { icono: '🔧', titulo: 'A) Naturaleza de las funciones o tareas', peso: '40%', desc: 'Evalúa el contenido esencial del puesto: polivalencia, esfuerzos físicos, mentales y emocionales, responsabilidad, autonomía, etc.' },
        { icono: '🎓', titulo: 'B) Condiciones educativas', peso: '20%', desc: 'Mide el nivel mínimo de formación reglada exigido para ocupar el puesto (primaria, bachillerato, grado medio, universitario, máster, doctorado).' },
        { icono: '🧠', titulo: 'C) Condiciones profesionales y de formación', peso: '25%', desc: 'Valora los conocimientos técnicos, competencias digitales, idiomas, experiencia, destreza, minuciosidad, capacidad comunicativa y emocional, etc.' },
        { icono: '🏢', titulo: 'D) Condiciones laborales y del desempeño', peso: '15%', desc: 'Analiza el entorno físico y psicosocial (ruido, químicos, estrés), así como las condiciones organizativas (turnos, viajes, disponibilidad).' }
    ];

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    bloques.forEach(bloque => {
        html += `<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; display: flex; gap: 0.75rem;">`;
        html += `<div style="font-size: 1.5rem; line-height: 1;">${bloque.icono}</div>`;
        html += `<div>`;
        html += `<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 0.25rem;">${bloque.titulo} <span style="background: #eef2ff; color: #4f46e5; font-size: 0.75rem; padding: 0.1rem 0.4rem; border-radius: 4px; margin-left: 0.4rem;">${bloque.peso}</span></div>`;
        html += `<div style="font-size: 0.85rem; color: #64748b; line-height: 1.5;">${bloque.desc}</div>`;
        html += `</div></div>`;
    });
    html += '</div>';

    // --- 5. ENLACES A LAS HERRAMIENTAS ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Descarga las Herramientas Oficiales</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">El Ministerio de Igualdad proporciona un Excel (SVPT.xlsm) que automatiza este cálculo y genera las agrupaciones de puestos de igual valor. Descárgalo aquí:</p>';

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    
    html += '<a href="ministerio/ValoracióndePuestosdeTrabajo/SVPT.xlsm" download style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📊</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Herramienta SVPT.xlsm</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Excel con macros. Calcula los puntos y agrupa los puestos de igual valor.</div>';
    html += '</div></a>';

    html += '<a href="ministerio/ValoracióndePuestosdeTrabajo/2022_04_01_Guia_Uso_Heramienta_SVPT.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📖</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Guía de Uso (PDF)</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Manual oficial del Ministerio. Explica cada factor y cómo puntuarlo.</div>';
    html += '</div></a>';
    
    html += '</div>';

    // --- 6. AVISO / RECOMENDACIÓN FINAL ---
    html += '<div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 1.25rem; margin-top: 2rem; font-size: 0.9rem; color: #78350f; line-height: 1.6;">';
    html += '<strong>⚠️ Recomendación:</strong> El Excel oficial (SVPT.xlsm) ya hace los cálculos y genera las agrupaciones de puestos de igual valor. Una vez obtenidas esas agrupaciones (ej: "Agrupación 1: persona directora general, persona directora de RRHH"), debes introducirlas en la pestaña de <strong>Registro Retributivo</strong> para que los promedios y medianas se calculen correctamente.';
    html += '</div>';

    // --- 7. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Fuente oficial de los materiales: <a href="https://www.igualdadenlaempresa.es/asesoramiento/herramientas-igualdad/herramienta-valoraciones.htm" target="_blank" rel="noopener noreferrer" style="color: #4f46e5; text-decoration: none; font-weight: 600;">Instituto de las Mujeres - Igualdad en la Empresa</a>.</p>';
    html += '<p style="margin: 0.25rem 0 0 0; font-size: 0.75rem;">La herramienta y su guía están sujetas a la Orden PCM/1047/2022, de 1 de noviembre.</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}
