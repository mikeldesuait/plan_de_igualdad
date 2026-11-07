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
