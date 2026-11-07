// modelo.js - Esquema de datos centralizado para el Plan de Igualdad

const MODELO = (() => {
    // Claves de almacenamiento
    const KEYS = {
        CONFIG: 'pi_configuracion',
        COMITE: 'pi_comite',
        FASES: 'pi_fases',
        REUNIONES: 'pi_reuniones',
        MEDIDAS: 'pi_medidas',
        USUARIO: 'pi_usuario_actual'
    };

    // -------- CONFIGURACIÓN DE LA EMPRESA --------
    function getConfig() {
        try { return JSON.parse(localStorage.getItem(KEYS.CONFIG)) || {}; } 
        catch { return {}; }
    }

    function saveConfig(data) {
        localStorage.setItem(KEYS.CONFIG, JSON.stringify(data));
    }

    // -------- MIEMBROS DEL COMITÉ --------
    function getComite() {
        try { return JSON.parse(localStorage.getItem(KEYS.COMITE)) || { empresa: [], trabajadores: [] }; } 
        catch { return { empresa: [], trabajadores: [] }; }
    }

    function saveComite(data) {
        localStorage.setItem(KEYS.COMITE, JSON.stringify(data));
    }

    // -------- USUARIO ACTUAL (Para saber quién firma o edita) --------
    function getUsuarioActual() {
        return localStorage.getItem(KEYS.USUARIO) || '';
    }

    function setUsuarioActual(nombre) {
        if (nombre) localStorage.setItem(KEYS.USUARIO, nombre);
        else localStorage.removeItem(KEYS.USUARIO);
    }

    // -------- UTILIDADES --------
    function hoyISO() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    }

    // API Pública
    return {
        getConfig,
        saveConfig,
        getComite,
        saveComite,
        getUsuarioActual,
        setUsuarioActual,
        hoyISO
    };
})();
