// configuracion.js - Lógica para la página de configuración (Blindada)

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('configForm');
    if (!form) return;

    cargarDatos();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Guardar datos de la empresa (con validación segura)
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

        // 2. Guardar comité (Empresa)
        const comiteEmpresa = [];
        document.querySelectorAll('#listaEmpresa .miembro-row').forEach(row => {
            const inputNombre = row.querySelector('input[name$="_nombre"]');
            const inputRol = row.querySelector('select[name$="_rol"]');
            
            // Solo añadimos si el input de nombre existe y tiene valor
            if (inputNombre && inputNombre.value.trim() !== '') {
                const inputGenero = row.querySelector('select[name$="_genero"]');
                comiteEmpresa.push({ 
                    nombre: inputNombre.value.trim(), 
                    rol: inputRol ? inputRol.value : 'Titular',
                    genero: inputGenero ? inputGenero.value : 'no_especifica'
                });
            }
        });

        // 3. Guardar comité (Trabajadores)
        const comiteTrabajadores = [];
        document.querySelectorAll('#listaTrabajadores .miembro-row').forEach(row => {
            const inputNombre = row.querySelector('input[name$="_nombre"]');
            const inputRol = row.querySelector('select[name$="_rol"]');
            
            if (inputNombre && inputNombre.value.trim() !== '') {
                const inputGenero = row.querySelector('select[name$="_genero"]');
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

        // 4. Feedback
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

        // Función auxiliar para pintar miembros
        const renderizarMiembros = (contenedorId, lista, tipo) => {
            if (!lista || lista.length === 0) return;
            
            const cont = document.getElementById(contenedorId);
            if (!cont) return;
            
            cont.innerHTML = ''; // Limpiar el HTML estático
            
            lista.forEach((m, i) => {
                const div = document.createElement('div');
                div.className = 'miembro-row';
                div.innerHTML = `
                    <div class="form-group" style="margin: 0;">
                        <label>Nombre y apellidos</label>
                        <input type="text" name="${tipo}${i+1}_nombre" value="${m.nombre || ''}">
                    </div>
                    <div class="form-group" style="margin: 0;">
                        <label>Cargo</label>
                        <select name="${tipo}${i+1}_rol">
                            <option value="Titular" ${m.rol === 'Titular' ? 'selected' : ''}>Titular</option>
                            <option value="Suplente" ${m.rol === 'Suplente' ? 'selected' : ''}>Suplente</option>
                            <option value="Presidente/a" ${m.rol === 'Presidente/a' ? 'selected' : ''}>Presidente/a</option>
                            <option value="Secretario/a" ${m.rol === 'Secretario/a' ? 'selected' : ''}>Secretario/a</option>
                            <option value="Asesor/a" ${m.rol === 'Asesor/a' ? 'selected' : ''}>Asesor/a</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin: 0;">
                        <label>Género</label>
                        <select name="${tipo}${i+1}_genero">
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

        renderizarMiembros('listaEmpresa', comite.empresa, 'empresa');
        renderizarMiembros('listaTrabajadores', comite.trabajadores, 'trabajador');
    }
});

// Función global para añadir un nuevo miembro dinámicamente
window.agregarMiembro = function(contenedorId, tipo) {
    const cont = document.getElementById(contenedorId);
    if (!cont) return;
    
    const num = cont.querySelectorAll('.miembro-row').length + 1;
    
    const div = document.createElement('div');
    div.className = 'miembro-row';
    div.innerHTML = `
        <div class="form-group" style="margin: 0;">
            <label>Nombre y apellidos</label>
            <input type="text" name="${tipo}${num}_nombre" placeholder="Nombre completo">
        </div>
        <div class="form-group" style="margin: 0;">
            <label>Cargo</label>
            <select name="${tipo}${num}_rol">
                <option value="Titular">Titular</option>
                <option value="Suplente">Suplente</option>
                <option value="Presidente/a">Presidente/a</option>
                <option value="Secretario/a">Secretario/a</option>
                <option value="Asesor/a">Asesor/a</option>
            </select>
        </div>
        <div class="form-group" style="margin: 0;">
            <label>Género</label>
            <select name="${tipo}${num}_genero">
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="no_especifica">No especifica</option>
            </select>
        </div>
        <button type="button" class="btn-icon" onclick="this.parentElement.remove()" title="Eliminar">✕</button>
    `;
    cont.appendChild(div);
};
