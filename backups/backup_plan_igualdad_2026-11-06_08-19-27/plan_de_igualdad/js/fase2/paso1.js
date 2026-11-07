// paso1.js - Lógica y formulario del Paso 1 (Metodología)

window.renderPaso1 = function() {
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');

    let html = '<div style="margin-top: 1.5rem; background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
    
    html += '<h4 style="margin-top: 0; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Fechas y Periodo de Referencia</h4>';
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>Inicio Recogida Info</label><input type="date" id="p1_inicio_recogida" value="${fechas.p1_inicio_recogida || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Fin Recogida Info</label><input type="date" id="p1_fin_recogida" value="${fechas.p1_fin_recogida || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Inicio Diagnóstico</label><input type="date" id="p1_inicio_diag" value="${fechas.p1_inicio_diag || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Fin Diagnóstico</label><input type="date" id="p1_fin_diag" value="${fechas.p1_fin_diag || ''}"></div>`;
    html += '</div>';

    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Personas / Entidades que intervienen</h4>';
    html += `<div class="form-group"><label>Nombres o Entidades (Ej: Comisión Negociadora, Consultora XYZ)</label><input type="text" id="p1_personas" value="${fechas.p1_personas || ''}" placeholder="Ej: Comisión Negociadora y consultora externa"></div>`;
    
    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Herramientas utilizadas</h4>';
    html += '<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; font-size: 0.9rem; background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
    html += `<label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" id="p1_herr_analisis" ${fechas.p1_herr_analisis ? 'checked' : 'checked'}> Herramienta de análisis de plantilla</label>`;
    html += `<label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" id="p1_herr_cuestionarios" ${fechas.p1_herr_cuestionarios ? 'checked' : 'checked'}> Cuestionarios (Dirección y Plantilla)</label>`;
    html += `<label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer;"><input type="checkbox" id="p1_herr_entrevistas" ${fechas.p1_herr_entrevistas ? 'checked' : ''}> Entrevistas</label>`;
    html += '</div>';
    
    html += '</div>'; // Fin formulario
    
    html += '<button class="btn-generar" onclick="generarPDFPaso1()" style="margin-top: 1rem;">⚡ Generar Documento de Metodología (PDF)</button>';
    
    return html;
};

// Listener para guardar cambios en localStorage
document.addEventListener('change', (e) => {
    if (e.target.id && e.target.id.startsWith('p1_')) {
        if (e.target.type === 'checkbox') {
            guardarFecha(e.target.id, e.target.checked);
        } else {
            guardarFecha(e.target.id, e.target.value);
        }
    }
});
