// reuniones.js - Gestión de reuniones de la Comisión

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('reuniones-contenido');
    if (!contenedor) return;

    renderPaginaReuniones(contenedor);
});

function obtenerReuniones() {
    return JSON.parse(localStorage.getItem('pi_reuniones') || '[]');
}

function guardarReuniones(reuniones) {
    localStorage.setItem('pi_reuniones', JSON.stringify(reuniones));
}

function renderPaginaReuniones(contenedor) {
    const comite = MODELO.getComite();
    const empresa = comite.empresa || [];
    const trabajadores = comite.trabajadores || [];

    let html = '';

    // --- 1. AVISO MORADO ---
    html += '<div style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">🗓️</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Registro de Reuniones</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'Aquí puedes registrar las reuniones de la Comisión Negociadora y de Seguimiento. Los asistentes se toman automáticamente de la configuración del comité. Cada reunión puede generar un <strong>acta preliminar</strong> que luego puedes editar y firmar.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. FORMULARIO DE NUEVA REUNIÓN ---
    html += '<div style="margin-bottom: 1.5rem;">';
    html += '<button onclick="toggleFormularioReunion()" id="btn-toggle-reunion" style="padding: 0.75rem 1.5rem; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">➕ Nueva Reunión</button>';
    html += '</div>';

    html += '<div id="formulario-reunion" style="display: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02); animation: fadeIn 0.3s ease;">';
    html += '<h3 style="margin-top: 0; color: #1e293b; font-size: 1.1rem; margin-bottom: 1rem;">➕ Nueva Reunión</h3>';
    
    // Fila 1: Fecha, Hora, Tipo
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">';
    html += '<div class="form-group" style="margin:0;"><label>Fecha</label><input type="date" id="reunion_fecha"></div>';
    html += '<div class="form-group" style="margin:0;"><label>Hora</label><input type="time" id="reunion_hora" value="10:00"></div>';
    html += '<div class="form-group" style="margin:0;"><label>Tipo</label><select id="reunion_tipo"><option value="negociadora">Comisión Negociadora</option><option value="seguimiento">Comisión de Seguimiento</option><option value="extraordinaria">Reunión Extraordinaria</option></select></div>';
    html += '</div>';

    // Fila 2: Lugar, Forma
    html += '<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; margin-bottom: 1rem;">';
    html += '<div class="form-group" style="margin:0;"><label>Lugar</label><input type="text" id="reunion_lugar" placeholder="Ej: Sala de Juntas 2ª planta"></div>';
    html += '<div class="form-group" style="margin:0;"><label>Forma de la reunión</label><select id="reunion_forma"><option value="presencial">Presencial</option><option value="telematica">Telemática</option><option value="mixta">Mixta</option></select></div>';
    html += '</div>';

    // Fila 2b: Representación de la parte social
    html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">';
    html += '<div class="form-group" style="margin:0;"><label>Representación de la Parte Social</label><select id="reunion_representacion"><option value="RLPT">RLPT (Representación Legal de las Personas Trabajadoras)</option><option value="comite">Comité de Empresa</option><option value="seccion_sindical">Sección Sindical</option><option value="delegados">Delegados/as de Personal</option><option value="otra">Otra (especificar en Orden del Día)</option></select></div>';
    html += '</div>';

    // Orden del día
    html += '<div class="form-group"><label>Orden del Día</label><textarea id="reunion_orden" rows="3" placeholder="1. Lectura y aprobación del acta anterior&#10;2. ..."></textarea></div>';

    // Asistentes
    html += '<h4 style="color: #1e293b; font-size: 1rem; margin-bottom: 0.75rem;">Asistentes</h4>';
    
    if (empresa.length === 0 && trabajadores.length === 0) {
        html += '<p style="color: #94a3b8; font-size: 0.9rem;">No hay miembros en el comité. Ve a <strong>Configuración</strong> para añadirlos.</p>';
    } else {
        html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1rem;">';
        
        // Empresa
        html += '<div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
        html += '<strong style="color: #4f46e5; font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">🏢 Por la Empresa</strong>';
        empresa.forEach((m, i) => {
            if (m.nombre) {
                html += `<label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; margin-bottom: 0.4rem; cursor: pointer;"><input type="checkbox" class="asistente-empresa" value="${m.nombre}" checked> ${m.nombre} <small style="color: #94a3b8;">(${m.rol})</small></label>`;
            }
        });
        html += '</div>';

        // Trabajadores
        html += '<div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
        html += '<strong style="color: #0f766e; font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">👷 Por la Parte Social</strong>';
        trabajadores.forEach((m, i) => {
            if (m.nombre) {
                html += `<label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; margin-bottom: 0.4rem; cursor: pointer;"><input type="checkbox" class="asistente-trabajador" value="${m.nombre}" checked> ${m.nombre} <small style="color: #94a3b8;">(${m.rol})</small></label>`;
            }
        });
        html += '</div>';

        html += '</div>';
    }

    html += '<div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem;">';
    html += '<button onclick="guardarReunion()" style="padding: 0.75rem 1.5rem; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">💾 Guardar Reunión</button>';
    html += '</div>';
    html += '</div>';

    // --- 3. LISTADO DE REUNIONES ---
    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Reuniones Registradas</h3>';

    if (reuniones.length === 0) {
        html += '<div style="padding: 3rem 2rem; text-align: center; color: #94a3b8; border: 2px dashed #e2e8f0; border-radius: 12px; background: #ffffff;">';
        html += '<div style="font-size: 3rem; margin-bottom: 1rem;">📅</div>';
        html += '<h3 style="color: #1e293b; margin-bottom: 0.5rem;">No hay reuniones registradas</h3>';
        html += '<p style="margin: 0;">Crea la primera reunión con el formulario de arriba.</p>';
        html += '</div>';
    } else {
        html += '<div style="display: grid; gap: 1rem; margin-bottom: 2rem;">';
        reuniones.forEach((r, index) => {
            const tipoLabel = { negociadora: 'Comisión Negociadora', seguimiento: 'Comisión de Seguimiento', extraordinaria: 'Reunión Extraordinaria' }[r.tipo] || r.tipo;
            html += `<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">`;
            html += `<div>`;
            html += `<h4 style="margin: 0 0 0.25rem 0; color: #1e293b; font-size: 1rem;">${tipoLabel} · ${r.fecha} ${r.hora ? 'a las ' + r.hora : ''}</h4>`;
            const formaLabel = { presencial: 'Presencial', telematica: 'Telemática', mixta: 'Mixta' }[r.forma] || 'Presencial';
            const repLabel = { RLPT: 'RLPT', comite: 'Comité de Empresa', seccion_sindical: 'Sección Sindical', delegados: 'Delegados/as de Personal', otra: 'Otra' }[r.representacion] || 'RLPT';
            html += `<p style="margin: 0 0 0.5rem 0; font-size: 0.85rem; color: #64748b;">📍 ${r.lugar || 'Sin especificar'} · 💻 ${formaLabel} · 🏛️ ${repLabel} · 👥 ${r.asistentes.length} asistentes</p>`;
            if (r.orden) html += `<p style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #475569; white-space: pre-line;"><strong>Orden del día:</strong><br>${r.orden}</p>`;
            html += `<p style="margin: 0; font-size: 0.8rem; color: #94a3b8;">Asistentes: ${r.asistentes.join(', ')}</p>`;
            if (r.tieneActa) {
                html += `<p style="margin: 0.5rem 0 0 0; font-size: 0.8rem; color: #10b981; font-weight: 600;">✅ Acta guardada</p>`;
            }
            html += `</div>`;
            html += `<div style="display: flex; gap: 0.5rem; flex-direction: column;">`;
            if (r.tieneActa) {
                html += `<button onclick="verActaGuardada(${index})" style="background: #4f46e5; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap;">📄 Ver Acta</button>`;
            } else {
                html += `<button onclick="generarActa(${index})" style="background: #10b981; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap;">📄 Generar Acta</button>`;
            }
            html += `<button onclick="eliminarReunion(${index})" style="background: #fef2f2; border: 1px solid #fecaca; color: #ef4444; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap;">🗑️ Eliminar</button>`;
            html += `</div></div></div>`;
        });
        html += '</div>';
    }

    // --- 4. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Las reuniones deben documentarse con acta y ser aprobadas por las partes (RD 901/2020).</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}

// --- FUNCIONES GLOBALES ---

window.guardarReunion = function() {
    const fecha = document.getElementById('reunion_fecha')?.value;
    if (!fecha) { alert('Introduce una fecha para la reunión.'); return; }

    const hora = document.getElementById('reunion_hora')?.value || '';
    const tipo = document.getElementById('reunion_tipo')?.value || 'negociadora';
    const lugar = document.getElementById('reunion_lugar')?.value || '';
    const forma = document.getElementById('reunion_forma')?.value || 'presencial';
    const representacion = document.getElementById('reunion_representacion')?.value || 'RLPT';
    const orden = document.getElementById('reunion_orden')?.value || '';

    const asistentes = [];
    document.querySelectorAll('.asistente-empresa:checked, .asistente-trabajador:checked').forEach(cb => {
        asistentes.push(cb.value);
    });

    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    reuniones.push({ fecha, hora, tipo, lugar, forma, representacion, orden, asistentes });
    guardarReuniones(reuniones);

    renderPaginaReuniones(document.getElementById('reuniones-contenido'));
};

window.eliminarReunion = function(index) {
    if (!confirm('¿Seguro que quieres eliminar esta reunión?')) return;
    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    reuniones.splice(index, 1);
    guardarReuniones(reuniones);
    renderPaginaReuniones(document.getElementById('reuniones-contenido'));
};

window.generarActa = function(index) {
    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const r = reuniones[index];
    const comite = MODELO.getComite();
    const config = MODELO.getConfig();

    const nombreEmpresa = config.empresaNombre || '[Denominación Social]';
    const cifEmpresa = config.empresaCif || '[NIF]';
    const direccionEmpresa = config.empresaDireccion || '';
    const ciudadEmpresa = config.empresaCiudad || '';
    const cpEmpresa = config.empresaCp || '';

    // Buscar si ya hay un acta guardada para esta reunión
    const actas = JSON.parse(localStorage.getItem('pi_actas') || '[]');
    const actaGuardada = actas.find(a => 
        a.fecha === r.fecha && 
        a.lugar === r.lugar && 
        a.forma === r.forma
    );

    const tipoLabel = { negociadora: 'Comisión Negociadora', seguimiento: 'Comisión de Seguimiento', extraordinaria: 'Reunión Extraordinaria' }[r.tipo] || r.tipo;
    const formaLabel = { presencial: 'Presencial', telematica: 'Telemática', mixta: 'Mixta' }[r.forma] || 'Presencial';

    let empresaAsistentes = (comite.empresa || []).filter(m => r.asistentes.includes(m.nombre));
    let trabajadoresAsistentes = (comite.trabajadores || []).filter(m => r.asistentes.includes(m.nombre));

    // Si hay acta guardada, usar los detalles de asistencia y el contenido del acta
    let desarrolloHTML = '<p>[Espacio para redactar el desarrollo de la reunión]</p>';
    let acuerdosHTML = '<p>[Espacio para redactar los acuerdos adoptados]</p>';
    let detallesAsistencia = null;

    if (actaGuardada) {
        desarrolloHTML = actaGuardada.desarrollo || desarrolloHTML;
        acuerdosHTML = actaGuardada.acuerdos || acuerdosHTML;
        detallesAsistencia = actaGuardada.detallesAsistencia || null;
        
        // Recalcular asistentes según el acta guardada
        if (detallesAsistencia) {
            empresaAsistentes = (comite.empresa || []).filter(m => detallesAsistencia[m.nombre] && detallesAsistencia[m.nombre] !== 'Ausente');
            trabajadoresAsistentes = (comite.trabajadores || []).filter(m => detallesAsistencia[m.nombre] && detallesAsistencia[m.nombre] !== 'Ausente');
        }
    }

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Acta de Reunión - ${r.fecha}</title>
            <style>
                body { font-family: 'Times New Roman', serif; padding: 3rem; color: #000; line-height: 1.6; max-width: 800px; margin: 0 auto; }
                h1 { text-align: center; text-decoration: underline; margin-bottom: 2rem; }
                h3 { margin-top: 2rem; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem; }
                p, li { text-align: justify; margin-bottom: 0.5rem; }
                @media print { body { padding: 0; } .no-print { display: none !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 5px; cursor: pointer;">🖨️ Imprimir / Guardar PDF</button>
                ${actaGuardada ? '<p style="font-size: 0.8rem; color: #10b981; margin-top: 0.5rem;">✅ Este acta ya ha sido guardada y editada.</p>' : '<p style="font-size: 0.8rem; color: #f59e0b; margin-top: 0.5rem;">📝 Borrador: aún no hay acta guardada para esta reunión.</p>'}
            </div>

            <h1>ACTA DE REUNIÓN - ${tipoLabel.toUpperCase()}</h1>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem 1.5rem; margin-bottom: 2rem; font-size: 0.9rem;">
                <p style="margin: 0 0 0.25rem 0;"><strong>Empresa:</strong> ${nombreEmpresa}</p>
                <p style="margin: 0 0 0.25rem 0;"><strong>CIF:</strong> ${cifEmpresa}</p>
                <p style="margin: 0;"><strong>Domicilio:</strong> ${direccionEmpresa}${direccionEmpresa && (cpEmpresa || ciudadEmpresa) ? ', ' : ''}${cpEmpresa} ${ciudadEmpresa}</p>
            </div>
            
            <p><strong>Fecha:</strong> ${r.fecha}${r.hora ? ' a las ' + r.hora : ''}</p>
            <p><strong>Lugar:</strong> ${r.lugar || 'Instalaciones de la empresa'}</p>
            <p><strong>Forma de la reunión:</strong> ${formaLabel}</p>
            <p><strong>Representación de la Parte Social:</strong> ${{ RLPT: 'RLPT', comite: 'Comité de Empresa', seccion_sindical: 'Sección Sindical', delegados: 'Delegados/as de Personal', otra: 'Otra' }[r.representacion] || 'RLPT'}</p>

            <h3>1. Asistentes</h3>
            <p><strong>Por la Empresa:</strong></p>
            <ul>${empresaAsistentes.map(m => {
                const modo = detallesAsistencia?.[m.nombre] || 'Presencial';
                return `<li>${m.nombre} - ${m.rol} (${modo})</li>`;
            }).join('') || '<li>[Sin asistentes]</li>'}</ul>
            <p><strong>Por la Parte Social:</strong></p>
            <ul>${trabajadoresAsistentes.map(m => {
                const modo = detallesAsistencia?.[m.nombre] || 'Presencial';
                return `<li>${m.nombre} - ${m.rol} (${modo})</li>`;
            }).join('') || '<li>[Sin asistentes]</li>'}</ul>

            <h3>2. Orden del Día</h3>
            <p style="white-space: pre-line;">${r.orden || '[Sin orden del día especificado]'}</p>

            <h3>3. Desarrollo de la Reunión</h3>
            <div>${desarrolloHTML}</div>

            <h3>4. Acuerdos Adoptados</h3>
            <div>${acuerdosHTML}</div>

            <p style="margin-top: 3rem; font-size: 0.85rem; color: #64748b; text-align: center; font-style: italic;">
                Acta pendiente de aprobación y firma por los medios establecidos en la Comisión.
            </p>
        </body>
        </html>
    `);
    ventana.document.close();
};

// Función para ver el acta guardada de una reunión
window.verActaGuardada = function(index) {
    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const r = reuniones[index];
    
    // Buscar el acta que corresponde a esta reunión
    const actas = JSON.parse(localStorage.getItem('pi_actas') || '[]');
    const acta = actas.find(a => 
        a.fecha === r.fecha && 
        a.lugar === r.lugar && 
        a.forma === r.forma
    );
    
    if (!acta) {
        alert('No se encontró el acta guardada para esta reunión.');
        return;
    }
    
    // Abrir el acta en una nueva pestaña
    const comite = MODELO.getComite();
    const empresa = comite.empresa || [];
    const trabajadores = comite.trabajadores || [];

    const tipoLabel = { negociadora: 'Comisión Negociadora', seguimiento: 'Comisión de Seguimiento', extraordinaria: 'Reunión Extraordinaria' }[r.tipo] || 'Reunión';
    const formaLabel = { presencial: 'Presencial', telematica: 'Telemática', mixta: 'Mixta' }[r.forma] || 'Presencial';

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Acta - ${r.fecha}</title>
            <style>
                body { font-family: 'Times New Roman', serif; padding: 3rem; color: #000; line-height: 1.6; max-width: 800px; margin: 0 auto; }
                h1 { text-align: center; text-decoration: underline; margin-bottom: 2rem; }
                h3 { margin-top: 2rem; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem; }
                p, li { text-align: justify; margin-bottom: 0.5rem; }
                @media print { body { padding: 0; } .no-print { display: none !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 5px; cursor: pointer;">🖨️ Imprimir / Guardar PDF</button>
            </div>

            <h1>ACTA DE REUNIÓN - ${tipoLabel.toUpperCase()}</h1>
            
            <p><strong>Fecha:</strong> ${r.fecha}</p>
            <p><strong>Lugar:</strong> ${r.lugar || 'Instalaciones de la empresa'}</p>
            <p><strong>Forma de la reunión:</strong> ${formaLabel}</p>

            <h3>1. Orden del Día</h3>
            <p style="white-space: pre-line;">${r.orden || 'Sin orden del día'}</p>

            <h3>2. Asistentes</h3>
            <p><strong>Por la Empresa:</strong></p>
            <ul>${empresa.filter(m => acta.detallesAsistencia?.[m.nombre] && acta.detallesAsistencia[m.nombre] !== 'Ausente').map(m => `<li>${m.nombre} - ${m.rol} (${acta.detallesAsistencia[m.nombre]})</li>`).join('') || '<li>Sin asistentes</li>'}</ul>
            <p><strong>Por la Parte Social:</strong></p>
            <ul>${trabajadores.filter(m => acta.detallesAsistencia?.[m.nombre] && acta.detallesAsistencia[m.nombre] !== 'Ausente').map(m => `<li>${m.nombre} - ${m.rol} (${acta.detallesAsistencia[m.nombre]})</li>`).join('') || '<li>Sin asistentes</li>'}</ul>

            <h3>3. Desarrollo de la Reunión</h3>
            <div>${acta.desarrollo || '<p>Sin desarrollo registrado.</p>'}</div>

            <h3>4. Acuerdos Adoptados</h3>
            <div>${acta.acuerdos || '<p>Sin acuerdos registrados.</p>'}</div>

            <p style="margin-top: 3rem; font-size: 0.85rem; color: #64748b; text-align: center; font-style: italic;">
                Acta pendiente de aprobación y firma por los medios establecidos en la Comisión.
            </p>
        </body>
        </html>
    `);
    ventana.document.close();
};

// Función para mostrar/ocultar el formulario de nueva reunión
window.toggleFormularioReunion = function() {
    const form = document.getElementById('formulario-reunion');
    const btn = document.getElementById('btn-toggle-reunion');
    if (!form || !btn) return;

    if (form.style.display === 'none') {
        form.style.display = 'block';
        btn.innerHTML = '✖ Cerrar Formulario';
        btn.style.background = '#64748b';
    } else {
        form.style.display = 'none';
        btn.innerHTML = '➕ Nueva Reunión';
        btn.style.background = '#4f46e5';
    }
};
