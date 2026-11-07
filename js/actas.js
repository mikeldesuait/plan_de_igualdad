// actas.js - Gestión de actas vinculadas a reuniones

let quillDesarrollo = null;
let quillAcuerdos = null;

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('actas-contenido');
    if (!contenedor) return;

    renderPaginaActas(contenedor);
});

function obtenerReuniones() {
    return JSON.parse(localStorage.getItem('pi_reuniones') || '[]');
}

function obtenerActas() {
    return JSON.parse(localStorage.getItem('pi_actas') || '[]');
}

function guardarActas(actas) {
    localStorage.setItem('pi_actas', JSON.stringify(actas));
}

function renderPaginaActas(contenedor) {
    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const actas = obtenerActas().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const comite = MODELO.getComite();
    const empresa = comite.empresa || [];
    const trabajadores = comite.trabajadores || [];

    let html = '';

    // --- 1. AVISO MORADO ---
    html += '<div style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">📝</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Actas vinculadas a reuniones</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'Selecciona una reunión registrada, marca la asistencia de cada persona, redacta el desarrollo y los acuerdos. Usa el editor para dar formato (negrita, subrayado, color...). La corrección ortográfica la activa el navegador con clic derecho sobre el texto.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. FORMULARIO DE NUEVA ACTA ---
    html += '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<h3 style="margin-top: 0; color: #1e293b; font-size: 1.1rem; margin-bottom: 1rem;">➕ Nueva Acta</h3>';

    if (reuniones.length === 0) {
        html += '<p style="color: #94a3b8; font-size: 0.9rem;">No hay reuniones registradas. Crea primero una reunión en la pestaña <strong>Reuniones</strong>.</p>';
    } else {
        html += '<div class="form-group"><label>Selecciona la reunión</label><select id="acta_reunion_select" onchange="cargarDatosReunion()"><option value="">— Selecciona una reunión —</option>';
        reuniones.forEach((r, i) => {
            const tipoLabel = { negociadora: 'Comisión Negociadora', seguimiento: 'Comisión de Seguimiento', extraordinaria: 'Reunión Extraordinaria' }[r.tipo] || r.tipo;
            html += `<option value="${i}">${r.fecha} · ${tipoLabel} · ${r.lugar || 'Sin lugar'}</option>`;
        });
        html += '</select></div>';

        html += '<div id="acta_detalle_reunion" style="display: none;">';

        // Info de la reunión (se rellena con JS)
        html += '<div id="acta_info_reunion" style="background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 1rem; font-size: 0.9rem; color: #475569;"></div>';

        // Asistentes
        html += '<h4 style="color: #1e293b; font-size: 1rem; margin-bottom: 0.75rem;">Asistencia</h4>';
        html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1rem;">';

        // Empresa
        html += '<div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
        html += '<strong style="color: #4f46e5; font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">🏢 Por la Empresa</strong>';
        empresa.forEach((m) => {
            if (m.nombre) {
                html += `<div class="asistente-row">
                    <span>${m.nombre} <small style="color: #94a3b8;">(${m.rol})</small></span>
                    <select class="asistencia-empresa select-asistencia" data-nombre="${m.nombre}">
                        <option value="Presencial">Presencial</option>
                        <option value="Telemático">Telemático</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>`;
            }
        });
        html += '</div>';

        // Trabajadores
        html += '<div style="background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">';
        html += '<strong style="color: #0f766e; font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">👷 Por la Parte Social</strong>';
        trabajadores.forEach((m) => {
            if (m.nombre) {
                html += `<div class="asistente-row">
                    <span>${m.nombre} <small style="color: #94a3b8;">(${m.rol})</small></span>
                    <select class="asistencia-trabajador select-asistencia" data-nombre="${m.nombre}">
                        <option value="Presencial">Presencial</option>
                        <option value="Telemático">Telemático</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>`;
            }
        });
        html += '</div>';
        html += '</div>';

        // Editor: Desarrollo
        html += '<h4 style="color: #1e293b; font-size: 1rem; margin-bottom: 0.75rem;">Desarrollo de la reunión</h4>';
        html += '<div id="editor_desarrollo" style="height: 200px; background: #ffffff; margin-bottom: 1rem;"></div>';

        // Editor: Acuerdos
        html += '<h4 style="color: #1e293b; font-size: 1rem; margin-bottom: 0.75rem;">Acuerdos adoptados</h4>';
        html += '<div id="editor_acuerdos" style="height: 200px; background: #ffffff; margin-bottom: 1rem;"></div>';

        html += '<div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem;">';
        html += '<button onclick="guardarActa()" style="padding: 0.75rem 1.5rem; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">💾 Guardar Acta</button>';
        html += '</div>';

        html += '</div>'; // fin acta_detalle_reunion
    }
    html += '</div>';

    // --- 3. LISTADO DE ACTAS ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Actas Registradas</h3>';

    if (actas.length === 0) {
        html += '<div style="padding: 3rem 2rem; text-align: center; color: #94a3b8; border: 2px dashed #e2e8f0; border-radius: 12px; background: #ffffff;">';
        html += '<div style="font-size: 3rem; margin-bottom: 1rem;">📄</div>';
        html += '<h3 style="color: #1e293b; margin-bottom: 0.5rem;">No hay actas registradas</h3>';
        html += '<p style="margin: 0;">Crea la primera acta con el formulario de arriba.</p>';
        html += '</div>';
    } else {
        html += '<div style="display: grid; gap: 1rem; margin-bottom: 2rem;">';
        actas.forEach((acta, index) => {
            html += `<div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">`;
            html += `<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">`;
            html += `<div>`;
            html += `<h4 style="margin: 0 0 0.25rem 0; color: #1e293b; font-size: 1rem;">Acta · ${acta.fecha}</h4>`;
            html += `<p style="margin: 0 0 0.5rem 0; font-size: 0.85rem; color: #64748b;">📍 ${acta.lugar || 'Sin lugar'} · 👥 ${acta.asistentes.length} asistentes</p>`;
            html += `</div>`;
            html += `<div style="display: flex; gap: 0.5rem; flex-direction: column;">`;
            html += `<button onclick="verActa(${index})" style="background: #4f46e5; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap;">📄 Ver / Imprimir</button>`;
            html += `<button onclick="editarActa(${index})" style="background: #f59e0b; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap;">✏️ Editar</button>`;
            html += `<button onclick="eliminarActa(${index})" style="background: #fef2f2; border: 1px solid #fecaca; color: #ef4444; padding: 0.4rem 0.8rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; white-space: nowrap;">🗑️ Eliminar</button>`;
            html += `</div></div></div>`;
        });
        html += '</div>';
    }

    // --- 4. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Las actas deben ser aprobadas y firmadas por las partes por los medios establecidos en la Comisión.</p>';
    html += '</div>';

    contenedor.innerHTML = html;

    // Inicializar Quill después de inyectar el HTML
    if (reuniones.length > 0) {
        quillDesarrollo = new Quill('#editor_desarrollo', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['clean']
                ]
            },
            placeholder: 'Escribe aquí el desarrollo de la reunión...'
        });

        quillAcuerdos = new Quill('#editor_acuerdos', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['clean']
                ]
            },
            placeholder: 'Escribe aquí los acuerdos adoptados...'
        });
    }
}

window.cargarDatosReunion = function() {
    const select = document.getElementById('acta_reunion_select');
    const detalle = document.getElementById('acta_detalle_reunion');
    const info = document.getElementById('acta_info_reunion');

    if (!select.value) {
        detalle.style.display = 'none';
        return;
    }

    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const r = reuniones[parseInt(select.value)];

    const tipoLabel = { negociadora: 'Comisión Negociadora', seguimiento: 'Comisión de Seguimiento', extraordinaria: 'Reunión Extraordinaria' }[r.tipo] || r.tipo;
    const formaLabel = { presencial: 'Presencial', telematica: 'Telemática', mixta: 'Mixta' }[r.forma] || 'Presencial';

    info.innerHTML = `
        <strong>Fecha:</strong> ${r.fecha} ${r.hora ? 'a las ' + r.hora : ''}<br>
        <strong>Tipo:</strong> ${tipoLabel}<br>
        <strong>Lugar:</strong> ${r.lugar || 'Sin especificar'}<br>
        <strong>Forma:</strong> ${formaLabel}<br>
        <strong>Orden del día:</strong><br>
        <span style="white-space: pre-line;">${r.orden || 'Sin orden del día'}</span>
    `;

    // Marcar como "Presencial" a quienes estaban en la reunión, y "Ausente" al resto
    document.querySelectorAll('.asistencia-empresa, .asistencia-trabajador').forEach(sel => {
        const nombre = sel.dataset.nombre;
        sel.value = r.asistentes.includes(nombre) ? 'Presencial' : 'Ausente';
    });

    detalle.style.display = 'block';
};

window.guardarActa = function() {
    const select = document.getElementById('acta_reunion_select');
    if (!select.value) { alert('Selecciona una reunión.'); return; }

    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const r = reuniones[parseInt(select.value)];

    const asistentes = [];
    const detallesAsistencia = {};
    document.querySelectorAll('.asistencia-empresa, .asistencia-trabajador').forEach(sel => {
        const nombre = sel.dataset.nombre;
        detallesAsistencia[nombre] = sel.value;
        if (sel.value !== 'Ausente') asistentes.push(nombre);
    });

    const desarrollo = quillDesarrollo.root.innerHTML;
    const acuerdos = quillAcuerdos.root.innerHTML;

    const actas = obtenerActas();
    const actaData = {
        reunion: r,
        fecha: r.fecha,
        lugar: r.lugar,
        forma: r.forma,
        orden: r.orden,
        asistentes,
        detallesAsistencia,
        desarrollo,
        acuerdos
    };

    const indiceEdicion = parseInt(document.getElementById('acta_editando_index')?.value || '-1');
    if (indiceEdicion >= 0) {
        // Estamos editando un acta existente
        actas[indiceEdicion] = actaData;
    } else {
        // Creamos una nueva
        actas.push(actaData);
    }
    guardarActas(actas);

    // Marcar la reunión como que ya tiene acta
    const reunionesActualizadas = obtenerReuniones().map(reunion => {
        if (reunion.fecha === r.fecha && reunion.tipo === r.tipo && reunion.hora === r.hora) {
            return { ...reunion, tieneActa: true };
        }
        return reunion;
    });
    localStorage.setItem('pi_reuniones', JSON.stringify(reunionesActualizadas));

    alert('✅ Acta guardada correctamente.');
    renderPaginaActas(document.getElementById('actas-contenido'));
};

window.verActa = function(index) {
    const actas = obtenerActas().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const acta = actas[index];
    const comite = MODELO.getComite();
    const empresa = comite.empresa || [];
    const trabajadores = comite.trabajadores || [];

    const tipoLabel = { negociadora: 'Comisión Negociadora', seguimiento: 'Comisión de Seguimiento', extraordinaria: 'Reunión Extraordinaria' }[acta.reunion?.tipo] || 'Reunión';
    const formaLabel = { presencial: 'Presencial', telematica: 'Telemática', mixta: 'Mixta' }[acta.forma] || 'Presencial';

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Acta - ${acta.fecha}</title>
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
            
            <p><strong>Fecha:</strong> ${acta.fecha}</p>
            <p><strong>Lugar:</strong> ${acta.lugar || 'Instalaciones de la empresa'}</p>
            <p><strong>Forma de la reunión:</strong> ${formaLabel}</p>

            <h3>1. Orden del Día</h3>
            <p style="white-space: pre-line;">${acta.orden || 'Sin orden del día'}</p>

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

window.eliminarActa = function(index) {
    if (!confirm('¿Seguro que quieres eliminar esta acta?')) return;
    const actas = obtenerActas().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    actas.splice(index, 1);
    guardarActas(actas);
    renderPaginaActas(document.getElementById('actas-contenido'));
};

// Función para editar un acta existente
window.editarActa = function(index) {
    const actas = obtenerActas().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const acta = actas[index];

    // Buscar la reunión asociada para seleccionarla en el <select>
    const reuniones = obtenerReuniones().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const reunionIndex = reuniones.findIndex(r => 
        r.fecha === acta.fecha && 
        r.lugar === acta.lugar && 
        r.forma === acta.forma
    );

    if (reunionIndex === -1) {
        alert('No se encontró la reunión asociada a esta acta.');
        return;
    }

    // Seleccionar la reunión y cargar los datos
    const select = document.getElementById('acta_reunion_select');
    select.value = reunionIndex;
    cargarDatosReunion();

    // Rellenar los detalles de asistencia
    if (acta.detallesAsistencia) {
        document.querySelectorAll('.asistencia-empresa, .asistencia-trabajador').forEach(sel => {
            const nombre = sel.dataset.nombre;
            if (acta.detallesAsistencia[nombre]) {
                sel.value = acta.detallesAsistencia[nombre];
            }
        });
    }

    // Rellenar los editores
    if (quillDesarrollo) quillDesarrollo.root.innerHTML = acta.desarrollo || '';
    if (quillAcuerdos) quillAcuerdos.root.innerHTML = acta.acuerdos || '';

    // Guardar el índice del acta que estamos editando (para actualizarla al guardar)
    let hiddenInput = document.getElementById('acta_editando_index');
    if (!hiddenInput) {
        hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.id = 'acta_editando_index';
        document.querySelector('#actas-contenido').appendChild(hiddenInput);
    }
    hiddenInput.value = index;

    // Cambiar el texto del botón de guardar
    const btnGuardar = document.querySelector('button[onclick="guardarActa()"]');
    if (btnGuardar) {
        btnGuardar.textContent = '💾 Actualizar Acta';
    }

    // Hacer scroll al formulario
    document.getElementById('acta_detalle_reunion').scrollIntoView({ behavior: 'smooth' });
};
