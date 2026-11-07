// configuracion.js - Lógica para la página de configuración (Versión robusta)

// Función global para añadir miembros
window.agregarMiembro = function(contenedorId, tipo) {
    const cont = document.getElementById(contenedorId);
    if (!cont) return;
    
    const num = Date.now();
    
    const div = document.createElement('div');
    div.className = 'miembro-row';
    div.innerHTML = `
        <div class="form-group" style="margin: 0;">
            <label>Nombre y apellidos</label>
            <input type="text" class="miembro-nombre" placeholder="Nombre completo">
        </div>
        <div class="form-group" style="margin: 0;">
            <label>Cargo</label>
            <select class="miembro-rol">
                <option value="Titular">Titular</option>
                <option value="Suplente">Suplente</option>
                <option value="Presidente/a">Presidente/a</option>
                <option value="Secretario/a">Secretario/a</option>
                <option value="Asesor/a">Asesor/a</option>
            </select>
        </div>
        <div class="form-group" style="margin: 0;">
            <label>Género</label>
            <select class="miembro-genero">
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="no_especifica">No especifica</option>
            </select>
        </div>
        <button type="button" class="btn-icon" onclick="this.parentElement.remove()" title="Eliminar">✕</button>
    `;
    cont.appendChild(div);
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('configForm');
    if (!form) return;

    cargarDatos();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Guardar datos de la empresa
        const config = {};
        const camposConfig = [
            'empresaNombre', 'empresaCif', 'empresaDireccion', 'empresaCiudad', 
            'empresaCp', 'empresaSector', 'empresaEmpleados', 'empresaRepresentante',
            'planFechaNegociacion', 'planFechaFin'
        ];
        
        camposConfig.forEach(campo => {
            const input = form.elements[campo];
            if (input) config[campo] = input.value;
        });
        
        MODELO.saveConfig(config);

        // 2. Guardar comité (Empresa) - Leemos por clase, no por name
        const comiteEmpresa = [];
        document.querySelectorAll('#listaEmpresa .miembro-row').forEach(row => {
            const inputNombre = row.querySelector('.miembro-nombre, input[type="text"]');
            const inputRol = row.querySelector('.miembro-rol, select[name$="_rol"]');
            const inputGenero = row.querySelector('.miembro-genero, select[name$="_genero"]');
            
            if (inputNombre && inputNombre.value.trim() !== '') {
                comiteEmpresa.push({ 
                    nombre: inputNombre.value.trim(), 
                    rol: inputRol ? inputRol.value : 'Titular',
                    genero: inputGenero ? inputGenero.value : 'no_especifica'
                });
            }
        });

        // 3. Guardar comité (Trabajadores) - Leemos por clase, no por name
        const comiteTrabajadores = [];
        document.querySelectorAll('#listaTrabajadores .miembro-row').forEach(row => {
            const inputNombre = row.querySelector('.miembro-nombre, input[type="text"]');
            const inputRol = row.querySelector('.miembro-rol, select[name$="_rol"]');
            const inputGenero = row.querySelector('.miembro-genero, select[name$="_genero"]');
            
            if (inputNombre && inputNombre.value.trim() !== '') {
                comiteTrabajadores.push({ 
                    nombre: inputNombre.value.trim(), 
                    rol: inputRol ? inputRol.value : 'Titular',
                    genero: inputGenero ? inputGenero.value : 'no_especifica'
                });
            }
        });

        MODELO.saveComite({
            empresa: comiteEmpresa,
            trabajadores: comiteTrabajadores
        });

        alert('✅ Configuración guardada correctamente.');
        location.reload();
    });

    function cargarDatos() {
        const config = MODELO.getConfig();
        const comite = MODELO.getComite();

        // Rellenar campos de la empresa
        if (config && Object.keys(config).length > 0) {
            Object.keys(config).forEach(key => {
                const input = form.elements[key];
                if (input) input.value = config[key];
            });
        }

        // Función para pintar miembros con clases
        const renderizarMiembros = (contenedorId, lista) => {
            const cont = document.getElementById(contenedorId);
            if (!cont) return;
            
            // Si no hay lista, dejamos la fila por defecto que viene en el HTML
            if (!lista || lista.length === 0) return;
            
            cont.innerHTML = ''; // Limpiar
            
            lista.forEach((m) => {
                const div = document.createElement('div');
                div.className = 'miembro-row';
                div.innerHTML = `
                    <div class="form-group" style="margin: 0;">
                        <label>Nombre y apellidos</label>
                        <input type="text" class="miembro-nombre" value="${m.nombre || ''}">
                    </div>
                    <div class="form-group" style="margin: 0;">
                        <label>Cargo</label>
                        <select class="miembro-rol">
                            <option value="Titular" ${m.rol === 'Titular' ? 'selected' : ''}>Titular</option>
                            <option value="Suplente" ${m.rol === 'Suplente' ? 'selected' : ''}>Suplente</option>
                            <option value="Presidente/a" ${m.rol === 'Presidente/a' ? 'selected' : ''}>Presidente/a</option>
                            <option value="Secretario/a" ${m.rol === 'Secretario/a' ? 'selected' : ''}>Secretario/a</option>
                            <option value="Asesor/a" ${m.rol === 'Asesor/a' ? 'selected' : ''}>Asesor/a</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin: 0;">
                        <label>Género</label>
                        <select class="miembro-genero">
                            <option value="mujer" ${m.genero === 'mujer' ? 'selected' : ''}>Mujer</option>
                            <option value="hombre" ${m.genero === 'hombre' ? 'selected' : ''}>Hombre</option>
                            <option value="no_especifica" ${m.genero === 'no_especifica' || !m.genero ? 'selected' : ''}>No especifica</option>
                        </select>
                    </div>
                    <button type="button" class="btn-icon" onclick="this.parentElement.remove()" title="Eliminar">✕</button>
                `;
                cont.appendChild(div);
            });
        };

        renderizarMiembros('listaEmpresa', comite.empresa);
        renderizarMiembros('listaTrabajadores', comite.trabajadores);
    }
});

// --- EXPORTAR E IMPORTAR JSON ---

window.exportarJSON = function() {
    // Recopilar todas las claves relevantes de localStorage
    const claves = {
        configuracion: localStorage.getItem('pi_configuracion'),
        comite: localStorage.getItem('pi_comite'),
        fechas: localStorage.getItem('pi_fechas_fases'),
        usuario: localStorage.getItem('pi_usuario_actual'),
        reuniones: localStorage.getItem('pi_reuniones'),
        actas: localStorage.getItem('pi_actas')
    };

    // Crear el objeto JSON con metadatos
    const backup = {
        version: '2.0',
        fecha: new Date().toISOString(),
        datos: claves
    };

    // Convertir a string y descargar
    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const fechaHoy = new Date().toISOString().split('T')[0];
    a.download = `Backup_Plan_Igualdad_${fechaHoy}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    alert('✅ Copia de seguridad exportada correctamente.');
};

window.importarJSON = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const backup = JSON.parse(e.target.result);

            // Validar que el archivo tiene la estructura correcta
            if (!backup.datos) {
                alert('❌ El archivo no es una copia de seguridad válida.');
                return;
            }

            if (!confirm('⚠️ Se van a sobrescribir TODOS los datos actuales con los del archivo. ¿Continuar?')) {
                return;
            }

            // Restaurar cada clave en localStorage
            const claves = backup.datos;
            if (claves.configuracion) localStorage.setItem('pi_configuracion', claves.configuracion);
            if (claves.comite) localStorage.setItem('pi_comite', claves.comite);
            if (claves.fechas) localStorage.setItem('pi_fechas_fases', claves.fechas);
            if (claves.usuario) localStorage.setItem('pi_usuario_actual', claves.usuario);
            if (claves.reuniones) localStorage.setItem('pi_reuniones', claves.reuniones);
            if (claves.actas) localStorage.setItem('pi_actas', claves.actas);

            alert('✅ Copia de seguridad restaurada correctamente. La página se recargará.');
            location.reload();

        } catch (err) {
            console.error(err);
            alert('❌ Error al leer el archivo. Asegúrate de que es un JSON válido.');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
};

// --- IMPORTAR JSON (versión corregida) ---
window.importarJSON = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        let backup;
        try {
            backup = JSON.parse(e.target.result);
        } catch (err) {
            alert('❌ El archivo no es un JSON válido.');
            event.target.value = '';
            return;
        }

        // Validar estructura
        if (!backup.datos) {
            alert('❌ El archivo no es una copia de seguridad válida de esta aplicación.');
            event.target.value = '';
            return;
        }

        // Pedir confirmación explícita
        const confirmar = confirm(
            '⚠️ ATENCIÓN: Se van a sobrescribir TODOS los datos actuales con los del archivo.\n\n' +
            '¿Estás seguro de que quieres continuar?'
        );
        if (!confirmar) {
            event.target.value = '';
            return;
        }

        // Restaurar datos
        try {
            const claves = backup.datos;
            if (claves.configuracion !== null && claves.configuracion !== undefined) localStorage.setItem('pi_configuracion', claves.configuracion);
            if (claves.comite !== null && claves.comite !== undefined) localStorage.setItem('pi_comite', claves.comite);
            if (claves.fechas !== null && claves.fechas !== undefined) localStorage.setItem('pi_fechas_fases', claves.fechas);
            if (claves.usuario !== null && claves.usuario !== undefined) localStorage.setItem('pi_usuario_actual', claves.usuario);
            if (claves.reuniones !== null && claves.reuniones !== undefined) localStorage.setItem('pi_reuniones', claves.reuniones);
            if (claves.actas !== null && claves.actas !== undefined) localStorage.setItem('pi_actas', claves.actas);

            alert('✅ Copia de seguridad restaurada correctamente. La página se recargará.');
            setTimeout(() => location.reload(), 500);
        } catch (err) {
            console.error(err);
            alert('❌ Error al restaurar los datos: ' + err.message);
        }
        event.target.value = '';
    };
    reader.readAsText(file);
};

// --- IMPORTAR JSON ---
window.importarJSON = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        let backup;
        try {
            backup = JSON.parse(e.target.result);
        } catch (err) {
            alert('❌ El archivo no es un JSON válido.');
            event.target.value = '';
            return;
        }

        if (!backup.datos) {
            alert('❌ El archivo no es una copia de seguridad válida de esta aplicación.');
            event.target.value = '';
            return;
        }

        const confirmar = confirm(
            '⚠️ ATENCIÓN: Se van a sobrescribir TODOS los datos actuales con los del archivo.\n\n' +
            '¿Estás seguro de que quieres continuar?'
        );
        if (!confirmar) {
            event.target.value = '';
            return;
        }

        try {
            const claves = backup.datos;
            if (claves.configuracion) localStorage.setItem('pi_configuracion', claves.configuracion);
            if (claves.comite) localStorage.setItem('pi_comite', claves.comite);
            if (claves.fechas) localStorage.setItem('pi_fechas_fases', claves.fechas);
            if (claves.usuario) localStorage.setItem('pi_usuario_actual', claves.usuario);
            if (claves.reuniones) localStorage.setItem('pi_reuniones', claves.reuniones);
            if (claves.actas) localStorage.setItem('pi_actas', claves.actas);

            alert('✅ Copia de seguridad restaurada correctamente. La página se recargará.');
            setTimeout(() => location.reload(), 500);
        } catch (err) {
            console.error(err);
            alert('❌ Error al restaurar los datos: ' + err.message);
        }
        event.target.value = '';
    };
    reader.readAsText(file);
};

// Listener para el input de importar (más robusto que el onchange inline)
document.addEventListener('DOMContentLoaded', () => {
    const inputImportar = document.getElementById('importarJSON');
    if (inputImportar) {
        inputImportar.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                let backup;
                try {
                    backup = JSON.parse(e.target.result);
                } catch (err) {
                    alert('❌ El archivo no es un JSON válido.');
                    event.target.value = '';
                    return;
                }

                if (!backup.datos) {
                    alert('❌ El archivo no es una copia de seguridad válida de esta aplicación.');
                    event.target.value = '';
                    return;
                }

                const confirmar = confirm(
                    '⚠️ ATENCIÓN: Se van a sobrescribir TODOS los datos actuales con los del archivo.\n\n' +
                    '¿Estás seguro de que quieres continuar?'
                );
                if (!confirmar) {
                    event.target.value = '';
                    return;
                }

                try {
                    const claves = backup.datos;
                    if (claves.configuracion) localStorage.setItem('pi_configuracion', claves.configuracion);
                    if (claves.comite) localStorage.setItem('pi_comite', claves.comite);
                    if (claves.fechas) localStorage.setItem('pi_fechas_fases', claves.fechas);
                    if (claves.usuario) localStorage.setItem('pi_usuario_actual', claves.usuario);
                    if (claves.reuniones) localStorage.setItem('pi_reuniones', claves.reuniones);
                    if (claves.actas) localStorage.setItem('pi_actas', claves.actas);

                    alert('✅ Copia de seguridad restaurada correctamente. La página se recargará.');
                    setTimeout(() => location.reload(), 500);
                } catch (err) {
                    console.error(err);
                    alert('❌ Error al restaurar los datos: ' + err.message);
                }
                event.target.value = '';
            };
            reader.readAsText(file);
        });
    }
});
