// usuario-selector.js - Rellena el selector de usuario en la cabecera

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('usuarioActualSelect');
    if (!select) return;

    const comite = MODELO.getComite();
    const actual = MODELO.getUsuarioActual();

    select.innerHTML = '<option value="">— Selecciona —</option>';

    // Función auxiliar para añadir miembros
    const agregarMiembros = (lista, bando) => {
        lista.forEach(m => {
            if (!m.nombre) return;
            const opt = document.createElement('option');
            opt.value = m.nombre;
            opt.textContent = `${m.nombre} (${m.rol})`;
            if (m.nombre === actual) opt.selected = true;
            select.appendChild(opt);
        });
    };

    if (comite.empresa.length === 0 && comite.trabajadores.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = '⚠️ Configura el comité primero';
        opt.disabled = true;
        select.appendChild(opt);
    } else {
        agregarMiembros(comite.empresa);
        agregarMiembros(comite.trabajadores);
    }

    select.addEventListener('change', (e) => {
        MODELO.setUsuarioActual(e.target.value);
    });
});
