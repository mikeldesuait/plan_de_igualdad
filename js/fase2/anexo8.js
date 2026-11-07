// anexo8.js - Lógica y formulario del Anexo VIII (Brecha Salarial)

window.renderAnexo8 = function() {
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');

    let html = '';

    // --- SISTEMA DE PESTAÑAS (SUB-TABS) ---
    html += '<div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">';
    html += '<button class="tab-btn active" onclick="cambiarTabAnexo8(event, \'tab-a8-datos\')">1. Datos Salariales</button>';
    html += '<button class="tab-btn" onclick="cambiarTabAnexo8(event, \'tab-a8-brecha\')">2. Cálculo de Brecha</button>';
    html += '</div>';

    // --- CONTENIDO: DATOS SALARIALES ---
    html += '<div id="tab-a8-datos" class="sub-tab-content active">';
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> Introduce los datos medios (o totales) del último año fiscal. Para calcular la brecha, necesitamos el salario medio de las mujeres y de los hombres. Si tienes varios grupos profesionales, puedes usar los campos de abajo para desglosar.';
    html += '</div>';

    html += '<h4 style="margin-top: 0; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Datos Generales de Retribución (Media Anual)</h4>';
    html += '<div class="form-inline" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">';
    html += `<div class="form-group" style="margin:0;"><label>Salario Base Medio Mujeres (€)</label><input type="number" id="a8_sal_muj" value="${fechas.a8_sal_muj || ''}" placeholder="Ej: 25000"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Salario Base Medio Hombres (€)</label><input type="number" id="a8_sal_hom" value="${fechas.a8_sal_hom || ''}" placeholder="Ej: 27000"></div>`;
    html += '</div>';

    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Complementos Salariales Medios (€)</h4>';
    html += '<div class="form-inline" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">';
    html += `<div class="form-group" style="margin:0;"><label>Complementos Mujeres</label><input type="number" id="a8_comp_muj" value="${fechas.a8_comp_muj || ''}" placeholder="Ej: 3000"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Complementos Hombres</label><input type="number" id="a8_comp_hom" value="${fechas.a8_comp_hom || ''}" placeholder="Ej: 4500"></div>`;
    html += '</div>';

    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Percepciones Extrasalariales Medias (€)</h4>';
    html += '<div class="form-inline" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">';
    html += `<div class="form-group" style="margin:0;"><label>Extrasalarial Mujeres</label><input type="number" id="a8_extra_muj" value="${fechas.a8_extra_muj || ''}" placeholder="Ej: 1000"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Extrasalarial Hombres</label><input type="number" id="a8_extra_hom" value="${fechas.a8_extra_hom || ''}" placeholder="Ej: 1200"></div>`;
    html += '</div>';
    html += '</div>'; // Fin tab-a8-datos

    // --- CONTENIDO: CÁLCULO DE BRECHA ---
    html += '<div id="tab-a8-brecha" class="sub-tab-content">';
    html += '<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; font-size: 0.9rem; color: #334155;">';
    html += '<strong>💡 Ayuda:</strong> La aplicación calculará automáticamente la brecha salarial total basándose en los datos de la pestaña anterior. Si necesitas desglosar por grupos profesionales o puestos de igual valor, puedes añadir filas a la tabla inferior.';
    html += '</div>';

    html += `<div id="resultado-brecha" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; text-align: center; margin-bottom: 2rem;">
        <h3 style="margin-top: 0; color: #1e293b; font-size: 1.1rem;">Brecha Salarial Total Calculada</h3>
        <div style="font-size: 2.5rem; font-weight: 800; color: #4f46e5; margin: 0.5rem 0;" id="valor-brecha-global">-- %</div>
        <p style="color: #64748b; font-size: 0.9rem; margin: 0;">(Calculado sobre la retribución total media: Salario Base + Complementos + Extrasalarial)</p>
    </div>`;

    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Desglose por Grupos / Puestos de Igual Valor</h4>';
    html += '<div style="overflow-x: auto;">';
    html += '<table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: center;">';
    html += '<thead><tr style="background: #f1f5f9; color: #334155;">';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0; text-align: left;">Grupo / Puesto</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Mujeres (€)</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Hombres (€)</th>';
    html += '<th style="padding: 0.75rem; border: 1px solid #e2e8f0;">Brecha (%)</th>';
    html += '</tr></thead><tbody>';

    const grupos = ['Personas directivas', 'Mandos Intermedios', 'Técnicos', 'Administrativos', 'Operarios'];
    grupos.forEach((grupo, idx) => {
        const valM = fechas[`a8_g_${idx}_m`] || '';
        const valH = fechas[`a8_g_${idx}_h`] || '';
        html += `<tr>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: left; font-weight: 500; background: #f8fafc;">${grupo}</td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;"><input type="number" id="a8_g_${idx}_m" value="${valM}" style="width: 70px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;"></td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0;"><input type="number" id="a8_g_${idx}_h" value="${valH}" style="width: 70px; padding: 0.3rem; text-align: center; border: 1px solid #cbd5e1; border-radius: 4px;"></td>`;
        html += `<td style="padding: 0.5rem; border: 1px solid #e2e8f0; font-weight: bold; color: #4f46e5;" id="calc_g_${idx}">--</td>`;
        html += `</tr>`;
    });
    html += '</tbody></table></div>';
    html += '</div>'; // Fin tab-a8-brecha

    html += '<button class="btn-generar" onclick="generarPDFAnexo8()" style="margin-top: 2rem;">⚡ Generar Anexo VIII - Brecha Salarial (PDF)</button>';

    html += `<script>
        document.addEventListener('input', function(e) {
            if (e.target.id.startsWith('a8_sal') || e.target.id.startsWith('a8_comp') || e.target.id.startsWith('a8_extra')) {
                calcularBrechaGlobal();
            }
            if (e.target.id.startsWith('a8_g_')) {
                calcularBrechaGrupos();
            }
        });
        setTimeout(() => { calcularBrechaGlobal(); calcularBrechaGrupos(); }, 100);
    </script>`;

    return html;
};

window.cambiarTabAnexo8 = function(event, tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
};

window.calcularBrechaGlobal = function() {
    const sm = parseFloat(document.getElementById('a8_sal_muj')?.value) || 0;
    const sh = parseFloat(document.getElementById('a8_sal_hom')?.value) || 0;
    const cm = parseFloat(document.getElementById('a8_comp_muj')?.value) || 0;
    const ch = parseFloat(document.getElementById('a8_comp_hom')?.value) || 0;
    const em = parseFloat(document.getElementById('a8_extra_muj')?.value) || 0;
    const eh = parseFloat(document.getElementById('a8_extra_hom')?.value) || 0;

    const totalMuj = sm + cm + em;
    const totalHom = sh + ch + eh;

    const div = document.getElementById('valor-brecha-global');
    if (!div) return;

    if (totalHom === 0) {
        div.textContent = '-- %';
        return;
    }

    const brecha = ((totalHom - totalMuj) / totalHom) * 100;
    div.textContent = brecha.toFixed(1) + ' %';
    
    if (brecha > 20) div.style.color = '#ef4444';
    else if (brecha > 5) div.style.color = '#f59e0b';
    else div.style.color = '#10b981';
};

window.calcularBrechaGrupos = function() {
    const grupos = ['Personas directivas', 'Mandos Intermedios', 'Técnicos', 'Administrativos', 'Operarios'];
    grupos.forEach((grupo, idx) => {
        const m = parseFloat(document.getElementById(`a8_g_${idx}_m`)?.value) || 0;
        const h = parseFloat(document.getElementById(`a8_g_${idx}_h`)?.value) || 0;
        const celda = document.getElementById(`calc_g_${idx}`);
        
        if (celda) {
            if (h === 0) {
                celda.textContent = '--';
            } else {
                const brecha = ((h - m) / h) * 100;
                celda.textContent = brecha.toFixed(1) + '%';
            }
        }
    });
};

document.addEventListener('change', (e) => {
    if (e.target.id && e.target.id.startsWith('a8_')) {
        guardarFecha(e.target.id, e.target.value);
    }
});
