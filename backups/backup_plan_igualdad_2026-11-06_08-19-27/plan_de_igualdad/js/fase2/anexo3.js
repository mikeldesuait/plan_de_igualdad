// anexo3.js - Lógica y formulario del Anexo III (Ficha de Identificación)

window.renderAnexo3 = function() {
    const config = MODELO.getConfig();
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');

    let html = '<div style="margin-top: 1.5rem; background: #f8fafc; padding: 1.5rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
    
    // DATOS DE LA EMPRESA
    html += '<h4 style="margin-top: 0; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Datos de la Empresa</h4>';
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>Razón Social (Auto)</label><input type="text" id="a3_razon" readonly style="background:#e2e8f0;" value="${config.empresaNombre || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>NIF (Auto)</label><input type="text" id="a3_nif" readonly style="background:#e2e8f0;" value="${config.empresaCif || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Domicilio Social (Auto)</label><input type="text" id="a3_domicilio" readonly style="background:#e2e8f0;" value="${config.empresaDireccion || ''}, ${config.empresaCp || ''} ${config.empresaCiudad || ''}"></div>`;
    html += '</div>';
    html += '<div class="form-inline" style="margin-top: 1rem;">';
    html += `<div class="form-group" style="margin:0;"><label>Forma Jurídica</label><select id="a3_forma"><option value="S.L.">S.L.</option><option value="S.A.">S.A.</option><option value="Cooperativa">Cooperativa</option><option value="Autónomo">Autónomo</option><option value="Otro">Otro</option></select></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Año Constitución</label><input type="number" id="a3_anio" value="${fechas.a3_anio || ''}"></div>`;
    html += '</div>';

    // RESPONSABLE ENTIDAD
    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Responsable de la Entidad</h4>';
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>Nombre</label><input type="text" id="a3_rep_nombre" value="${fechas.a3_rep_nombre || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Cargo</label><input type="text" id="a3_rep_cargo" value="${fechas.a3_rep_cargo || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Teléfono</label><input type="text" id="a3_rep_telf" value="${fechas.a3_rep_telf || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>e-mail</label><input type="email" id="a3_rep_email" value="${fechas.a3_rep_email || ''}"></div>`;
    html += '</div>';

    // RESPONSABLE IGUALDAD
    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Responsable de Igualdad</h4>';
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>Nombre</label><input type="text" id="a3_ig_nombre" value="${fechas.a3_ig_nombre || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Cargo</label><input type="text" id="a3_ig_cargo" value="${fechas.a3_ig_cargo || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Teléfono</label><input type="text" id="a3_ig_telf" value="${fechas.a3_ig_telf || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>e-mail</label><input type="email" id="a3_ig_email" value="${fechas.a3_ig_email || ''}"></div>`;
    html += '</div>';

    // ACTIVIDAD
    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Actividad</h4>';
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>Sector</label><input type="text" id="a3_sector" value="${fechas.a3_sector || config.empresaSector || ''}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>CNAE</label><input type="text" id="a3_cnae" value="${fechas.a3_cnae || ''}"></div>`;
    html += '</div>';
    html += `<div class="form-group" style="margin-top: 1rem;"><label>Descripción de la actividad</label><textarea id="a3_desc" rows="2">${fechas.a3_desc || ''}</textarea></div>`;
    html += `<div class="form-group"><label>Dispersión geográfica y ámbito de actuación</label><input type="text" id="a3_dispersion" value="${fechas.a3_dispersion || ''}"></div>`;

    // DIMENSIÓN
    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Dimensión</h4>';
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>Mujeres</label><input type="number" id="a3_mujeres" value="${fechas.a3_mujeres || 0}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Hombres</label><input type="number" id="a3_hombres" value="${fechas.a3_hombres || 0}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Centros de trabajo</label><input type="number" id="a3_centros" value="${fechas.a3_centros || 1}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>Facturación anual (€)</label><input type="number" id="a3_facturacion" value="${fechas.a3_facturacion || ''}"></div>`;
    html += '</div>';

    // ORGANIZACIÓN GESTIÓN PERSONAS
    html += '<h4 style="margin-top: 1.5rem; color: #4f46e5; font-size: 1rem; margin-bottom: 1rem;">Organización de la gestión de personas</h4>';
    html += `<div class="form-group"><label>¿Dispones de departamento de personal?</label><input type="text" id="a3_depto" value="${fechas.a3_depto || ''}"></div>`;
    html += `<div class="form-group"><label>Certificados o reconocimientos de igualdad obtenidos</label><input type="text" id="a3_certificados" value="${fechas.a3_certificados || ''}"></div>`;
    html += '<div class="form-inline">';
    html += `<div class="form-group" style="margin:0;"><label>RLT Mujeres</label><input type="number" id="a3_rlt_m" value="${fechas.a3_rlt_m || 0}"></div>`;
    html += `<div class="form-group" style="margin:0;"><label>RLT Hombres</label><input type="number" id="a3_rlt_h" value="${fechas.a3_rlt_h || 0}"></div>`;
    html += '</div>';
    
    html += '</div>'; // Fin formulario
    
    // Botón Generar
    html += '<button class="btn-generar" onclick="generarPDFAnexo3()" style="margin-top: 1rem;">⚡ Generar Anexo III (PDF)</button>';
    
    return html;
};

// Listener para guardar cambios en localStorage
document.addEventListener('change', (e) => {
    if (e.target.id && e.target.id.startsWith('a3_')) {
        guardarFecha(e.target.id, e.target.value);
    }
});
