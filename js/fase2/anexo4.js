// anexo4.js - Lógica y formulario del Anexo IV (Análisis de Gestión de Personal)

window.renderAnexo4 = function() {
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');

    let html = '';

    // --- SISTEMA DE PESTAÑAS (SUB-TABS) ---
    html += '<div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">';
    html += '<button class="tab-btn active" onclick="cambiarTabAnexo4(event, \'tab-seleccion\')">Selección y Contratación</button>';
    html += '<button class="tab-btn" onclick="cambiarTabAnexo4(event, \'tab-promocion\')">Promoción</button>';
    html += '<button class="tab-btn" onclick="cambiarTabAnexo4(event, \'tab-formacion\')">Formación</button>';
    html += '</div>';

    // --- CONTENIDO: SELECCIÓN Y CONTRATACIÓN ---
    html += '<div id="tab-seleccion" class="sub-tab-content active">';
    
    // TIP DE AYUDA
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> En esta sección debes analizar si los procesos de selección son objetivos. Marca las casillas que se cumplan en tu empresa. Recuerda que solo debes rellenar los datos de los **últimos 4 procesos** de selección para puestos de responsabilidad.';
    html += '</div>';

    html += '<h4 style="margin-top: 0; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Información Cualitativa: Selección</h4>';
    html += '<div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 1rem;">';
    
    const preguntasSeleccion = [
        { id: 'a4_sel_crit_objetivos', text: 'La empresa realiza la selección basándose en criterios objetivos de idoneidad' },
        { id: 'a4_sel_equipo_mixto', text: 'Se procura que el equipo encargado de la selección sea mixto' },
        { id: 'a4_sel_formacion_igualdad', text: 'Las personas encargadas de la selección tienen formación en igualdad' },
        { id: 'a4_sel_preguntas_neutras', text: 'Se evitan preguntas de carácter personal o familiar en las entrevistas' }
    ];

    preguntasSeleccion.forEach(p => {
        const checked = fechas[p.id] ? 'checked' : '';
        html += `<label style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem; cursor: pointer;">
            <input type="checkbox" id="${p.id}" ${checked} style="width: 18px; height: 18px; accent-color: #4f46e5;">
            ${p.text}
        </label>`;
    });
    html += '</div>';

    html += '<h4 style="margin-top: 2rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Información Cuantitativa: Últimos procesos de selección</h4>';
    html += '<div style="overflow-x: auto;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: center;">';
    html += '<thead><tr style="background: #f1f5f9; color: #334155;">';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: left;">Candidaturas</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Proceso 1 (M / H)</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Proceso 2 (M / H)</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Proceso 3 (M / H)</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Proceso 4 (M / H)</th>';
    html += '</tr></thead><tbody>';

    const filasTabla = [
        { label: 'Recibidas por anuncios', prefix: 'a4_cand_anuncios' },
        { label: 'Recibidas por contactos', prefix: 'a4_cand_contactos' },
        { label: 'Preseleccionadas', prefix: 'a4_cand_preselec' },
        { label: 'Contratadas', prefix: 'a4_cand_contratadas' }
    ];

    filasTabla.forEach(fila => {
        html += `<tr>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: left; font-weight: 500; background: #f8fafc;">${fila.label}</td>`;
        for (let i = 1; i <= 4; i++) {
            const valM = fechas[`${fila.prefix}_${i}_m`] || '';
            const valH = fechas[`${fila.prefix}_${i}_h`] || '';
            html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;">
                <div style="display: flex; gap: 0.25rem; justify-content: center;">
                    <input type="number" id="${fila.prefix}_${i}_m" value="${valM}" placeholder="M" style="width: 45px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;">
                    <span style="color: #94a3b8;">/</span>
                    <input type="number" id="${fila.prefix}_${i}_h" value="${valH}" placeholder="H" style="width: 45px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;">
                </div>
            </td>`;
        }
        html += `</tr>`;
    });
    html += '</tbody></table></div>';
    html += '</div>'; // Fin tab-seleccion

    // --- CONTENIDO: PROMOCIÓN ---
    html += '<div id="tab-promocion" class="sub-tab-content">';
    
    // TIP DE AYUDA
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> Aquí medimos si las oportunidades de ascenso son iguales para mujeres y hombres. En la tabla cuantitativa, indica cuántas personas de cada sexo han ascendido a cada nivel jerárquico **durante el último año**.';
    html += '</div>';

    html += '<h4 style="margin-top: 0; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Información Cualitativa: Promoción</h4>';
    html += '<div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 1rem;">';
    
    const preguntasPromocion = [
        { id: 'a4_prom_proc_objetivo', text: 'El procedimiento de promoción es objetivo y transparente, regido por criterios demostrables de valía profesional' },
        { id: 'a4_prom_informa_plantilla', text: 'Cuando hay una posible promoción interna se informa a toda la plantilla' },
        { id: 'a4_prom_fomenta_subrep', text: 'Si las personas promocionables son mayoritariamente de un sexo, se fomenta la presentación del sexo subrepresentado' },
        { id: 'a4_prom_equipo_mixto', text: 'Se procura que el equipo encargado de la evaluación de personal sea mixto' }
    ];

    preguntasPromocion.forEach(p => {
        const checked = fechas[p.id] ? 'checked' : '';
        html += `<label style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem; cursor: pointer;">
            <input type="checkbox" id="${p.id}" ${checked} style="width: 18px; height: 18px; accent-color: #4f46e5;">
            ${p.text}
        </label>`;
    });
    html += '</div>';

    html += '<h4 style="margin-top: 2rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Información Cuantitativa: Ascensos (Último año)</h4>';
    html += '<div style="overflow-x: auto;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: center;">';
    html += '<thead><tr style="background: #f1f5f9; color: #334155;">';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: left;">Nivel Jerárquico</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Mujeres ascendidas</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Hombres ascendidos</th>';
    html += '</tr></thead><tbody>';

    const nivelesProm = ['Directivo', 'Mando intermedio', 'Técnico', 'Administrativo', 'Operario'];
    nivelesProm.forEach((nivel, idx) => {
        const idBase = `a4_prom_asc_${idx}`;
        html += `<tr>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: left; font-weight: 500; background: #f8fafc;">${nivel}</td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;"><input type="number" id="${idBase}_m" value="${fechas[idBase + '_m'] || ''}" style="width: 60px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;"></td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;"><input type="number" id="${idBase}_h" value="${fechas[idBase + '_h'] || ''}" style="width: 60px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;"></td>`;
        html += `</tr>`;
    });
    html += '</tbody></table></div>';
    html += '</div>'; // Fin tab-promocion

    // --- CONTENIDO: FORMACIÓN ---
    html += '<div id="tab-formacion" class="sub-tab-content">';
    
    // TIP DE AYUDA
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> El objetivo es comprobar si la formación llega por igual a toda la plantilla y si se facilita la asistencia (por ejemplo, impartiéndola en horario laboral). Introduce los datos del **último año**.';
    html += '</div>';

    html += '<h4 style="margin-top: 0; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Información Cualitativa: Formación</h4>';
    html += '<div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 1rem;">';
    
    const preguntasFormacion = [
        { id: 'a4_form_horas_iguales', text: 'Se asegura que todas las personas tengan las mismas horas de formación para su desarrollo profesional' },
        { id: 'a4_form_toda_plantilla_igualdad', text: 'La totalidad de la plantilla ha tenido alguna formación sobre igualdad' },
        { id: 'a4_form_horario_laboral', text: 'Se procura que la formación sea en horario laboral para facilitar la asistencia' },
        { id: 'a4_form_habilidades_equilibrio', text: 'En los cursos de habilidades directivas asisten hombres y mujeres en proporción equilibrada' }
    ];

    preguntasFormacion.forEach(p => {
        const checked = fechas[p.id] ? 'checked' : '';
        html += `<label style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem; cursor: pointer;">
            <input type="checkbox" id="${p.id}" ${checked} style="width: 18px; height: 18px; accent-color: #4f46e5;">
            ${p.text}
        </label>`;
    });
    html += '</div>';

    html += '<h4 style="margin-top: 2rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Información Cuantitativa: Participación en Formación</h4>';
    html += '<div style="overflow-x: auto;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: center;">';
    html += '<thead><tr style="background: #f1f5f9; color: #334155;">';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: left;">Datos de Formación</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Mujeres</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Hombres</th>';
    html += '</tr></thead><tbody>';

    const filasFormacion = [
        { label: 'Personas que han recibido formación (último año)', prefix: 'a4_form_recibido' },
        { label: 'Horas totales de formación (último año)', prefix: 'a4_form_horas' },
        { label: 'Personas con formación en igualdad', prefix: 'a4_form_igualdad' }
    ];

    filasFormacion.forEach(fila => {
        html += `<tr>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: left; font-weight: 500; background: #f8fafc;">${fila.label}</td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;"><input type="number" id="${fila.prefix}_m" value="${fechas[fila.prefix + '_m'] || ''}" style="width: 60px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;"></td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;"><input type="number" id="${fila.prefix}_h" value="${fechas[fila.prefix + '_h'] || ''}" style="width: 60px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;"></td>`;
        html += `</tr>`;
    });
    html += '</tbody></table></div>';
    html += '</div>'; // Fin tab-formacion

    // Botón Generar
    html += '<button class="btn-generar" onclick="generarPDFAnexo4()" style="margin-top: 2rem;">⚡ Generar Anexo IV (PDF)</button>';

    return html;
};

// Función para cambiar de pestaña
window.cambiarTabAnexo4 = function(event, tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
};

// Listener para guardar cambios
document.addEventListener('change', (e) => {
    if (e.target.id && e.target.id.startsWith('a4_')) {
        if (e.target.type === 'checkbox') {
            guardarFecha(e.target.id, e.target.checked);
        } else {
            guardarFecha(e.target.id, e.target.value);
        }
    }
});
