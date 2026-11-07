// seguridad.js - Lógica para exportar e importar copias de seguridad

window.exportarBackup = function() {
    const backup = {
        version: '1.0',
        fecha: new Date().toISOString(),
        config: localStorage.getItem('pi_configuracion'),
        comite: localStorage.getItem('pi_comite'),
        fechas: localStorage.getItem('pi_fechas_fases'),
        persona usuaria: localStorage.getItem('pi_persona usuaria_actual')
    };

    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const fechaHoy = new Date().toISOString().split('T')[0];
    a.download = `Backup_Plan_Igualdad_${fechaHoy}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    alert('✅ Copia de seguridad descargada.');
};

window.importarBackup = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const backup = JSON.parse(e.target.result);
            
            if (!backup.version || !backup.config) {
                alert('❌ El archivo no es un backup válido de esta aplicación.');
                return;
            }

            if (!confirm('⚠️ Se van a sobrescribir TODOS los datos actuales con los del backup. ¿Continuar?')) {
                return;
            }

            if (backup.config) localStorage.setItem('pi_configuracion', backup.config);
            if (backup.comite) localStorage.setItem('pi_comite', backup.comite);
            if (backup.fechas) localStorage.setItem('pi_fechas_fases', backup.fechas);
            if (backup.persona usuaria) localStorage.setItem('pi_persona usuaria_actual', backup.persona usuaria);

            alert('✅ Backup restaurado correctamente. La página se recargará.');
            location.reload();

        } catch (err) {
            console.error(err);
            alert('❌ Error al leer el archivo. Asegúrate de que es un JSON válido.');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
};
