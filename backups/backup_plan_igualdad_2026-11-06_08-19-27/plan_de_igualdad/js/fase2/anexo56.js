// anexo56.js - Lógica y formulario de los Anexos V y VI (Encuestas de Opinión)

window.renderAnexo56 = function() {
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');

    let html = '';

    // --- SISTEMA DE PESTAÑAS (SUB-TABS) ---
    html += '<div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">';
    html += '<button class="tab-btn active" onclick="cambiarTabAnexo56(event, \'tab-direccion\')">Cuestionario Dirección (Anexo V)</button>';
    html += '<button class="tab-btn" onclick="cambiarTabAnexo56(event, \'tab-plantilla\')">Cuestionario Plantilla (Anexo VI)</button>';
    html += '</div>';

    // --- CONTENIDO: DIRECCIÓN (ANEXO V) ---
    html += '<div id="tab-direccion" class="sub-tab-content active">';
    
    // TIP DE AYUDA
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> Este cuestionario lo debe rellenar la Dirección. Valora del 1 (bajo) al 4 (alto) el grado de cumplimiento de cada afirmación. Si no sabes qué contestar, marca la casilla "Ns/Nc" (No sabes / No contestas).';
    html += '</div>';

    const preguntasDir = [
        "La igualdad se reconoce como principio básico de la empresa.",
        "La dirección de la empresa tiene sensibilidad real y compromiso hacia la igualdad.",
        "Se busca la forma de reequilibrar situaciones donde un sexo está subrepresentado.",
        "La dirección está dispuesta a impulsar el plan incluso con cambios sustanciales.",
        "Hay protocolos de actuación para casos de acoso sexual y/o por razón de sexo.",
        "Tu departamento ofrece las mismas oportunidades a hombres y a mujeres.",
        "Consideras necesario un plan de igualdad en la empresa."
    ];

    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">';
    html += '<thead><tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #475569;">';
    html += '<th style="padding: 1rem; text-align: left; width: 60%;">Afirmación</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">1</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">2</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">3</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">4</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">Ns/Nc</th>';
    html += '</tr></thead><tbody>';

    preguntasDir.forEach((pregunta, index) => {
        const qId = `a5_q${index}`;
        html += `<tr style="border-bottom: 1px solid #f1f5f9;">`;
        html += `<td style="padding: 1rem; color: #334155;">${pregunta}</td>`;
        for (let val = 1; val <= 4; val++) {
            html += `<td style="text-align: center;"><input type="radio" name="${qId}" value="${val}" ${fechas[qId] === val.toString() ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #4f46e5; cursor: pointer;"></td>`;
        }
        html += `<td style="text-align: center;"><input type="radio" name="${qId}" value="ns" ${fechas[qId] === 'ns' ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #94a3b8; cursor: pointer;"></td>`;
        html += `</tr>`;
    });
    html += '</tbody></table></div>';
    html += '</div>'; // Fin tab-direccion

    // --- CONTENIDO: PLANTILLA (ANEXO VI) ---
    html += '<div id="tab-plantilla" class="sub-tab-content">';
    
    // TIP DE AYUDA
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> Este cuestionario es para la plantilla. Mide la percepción del clima laboral. Al igual que el anterior, valora del 1 al 4 o marca Ns/Nc. Para los datos de la app, lo ideal es que estos resultados sean el **promedio** de las respuestas de todo el equipo.';
    html += '</div>';

    const preguntasPlant = [
        "En la empresa hay igualdad de trato y de oportunidades entre mujeres y hombres.",
        "La dirección está sensibilizada y comprometida con la igualdad.",
        "La selección de personal se realiza de forma objetiva, con las mismas oportunidades.",
        "A la hora de promocionar a puestos directivos se ofrecen las mismas posibilidades.",
        "La retribución se establece desde criterios de igualdad.",
        "Se favorece el ejercicio corresponsable de la vida personal y familiar.",
        "Las personas que se acogen a medidas de conciliación tienen las mismas oportunidades."
    ];

    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">';
    html += '<thead><tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #475569;">';
    html += '<th style="padding: 1rem; text-align: left; width: 60%;">Afirmación</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">1</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">2</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">3</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">4</th>';
    html += '<th style="padding: 0.5rem; text-align: center; width: 8%;">Ns/Nc</th>';
    html += '</tr></thead><tbody>';

    preguntasPlant.forEach((pregunta, index) => {
        const qId = `a6_q${index}`;
        html += `<tr style="border-bottom: 1px solid #f1f5f9;">`;
        html += `<td style="padding: 1rem; color: #334155;">${pregunta}</td>`;
        for (let val = 1; val <= 4; val++) {
            html += `<td style="text-align: center;"><input type="radio" name="${qId}" value="${val}" ${fechas[qId] === val.toString() ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #4f46e5; cursor: pointer;"></td>`;
        }
        html += `<td style="text-align: center;"><input type="radio" name="${qId}" value="ns" ${fechas[qId] === 'ns' ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #94a3b8; cursor: pointer;"></td>`;
        html += `</tr>`;
    });
    html += '</tbody></table></div>';
    html += '</div>'; // Fin tab-plantilla

    // Botón Generar
    html += '<button class="btn-generar" onclick="generarPDFAnexo56()" style="margin-top: 2rem;">⚡ Generar Anexos V y VI (PDF)</button>';

    return html;
};

// Función para cambiar de pestaña
window.cambiarTabAnexo56 = function(event, tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
};

// Listener para guardar cambios (Radios)
document.addEventListener('change', (e) => {
    if (e.target.type === 'radio' && e.target.name.startsWith('a')) {
        guardarFecha(e.target.name, e.target.value);
    }
});
