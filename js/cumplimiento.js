// cumplimiento.js - Lógica para las fases del ministerio

// --- FUNCIONES DE APOYO ---
function analizarParidad() {
    const comite = MODELO.getComite();
    const empresa = comite.empresa || [];
    const trabajadores = comite.trabajadores || [];
    
    const contarGenero = (lista) => {
        let mujeres = 0, hombres = 0;
        lista.forEach(m => {
            if (m.genero === 'mujer') mujeres++;
            if (m.genero === 'hombre') hombres++;
        });
        
        const total = mujeres + hombres;
        // Porcentaje de mujeres respecto al total (solo los que han especificado género)
        const pctMujeres = total > 0 ? (mujeres / total) * 100 : 0;
        
        // Consideramos "desequilibrio" si hay menos del 40% de mujeres o más del 60%
        // (Rango legal de "presencia equilibrada" según LO 3/2007)
        const desequilibrado = total > 0 && (pctMujeres < 40 || pctMujeres > 60);
        
        return { mujeres, hombres, total, pctMujeres, desequilibrado };
    };

    return { emp: contarGenero(empresa), trab: contarGenero(trabajadores) };
}

function guardarFecha(key, valor) {
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');
    fechas[key] = valor;
    localStorage.setItem('pi_fechas_fases', JSON.stringify(fechas));
}

// --- CARGA INICIAL ---
document.addEventListener('DOMContentLoaded', () => {
    const config = MODELO.getConfig();
    const fechasGuardadas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');
    
    // Configurar fechas
    const fApertura = document.getElementById('f1_fecha_apertura');
    const fConstitucion = document.getElementById('f1_fecha_constitucion');
    const fReunion = document.getElementById('f1_fecha_reunion');

    if (fApertura) {
        fApertura.value = fechasGuardadas.f1_apertura || config.planFechaNegociacion || MODELO.hoyISO();
        fApertura.addEventListener('change', (e) => guardarFecha('f1_apertura', e.target.value));
    }
    if (fConstitucion) {
        fConstitucion.value = fechasGuardadas.f1_constitucion || config.planFechaNegociacion || MODELO.hoyISO();
        fConstitucion.addEventListener('change', (e) => guardarFecha('f1_constitucion', e.target.value));
    }
    if (fReunion) {
        fReunion.value = fechasGuardadas.f1_reunion || config.planFechaNegociacion || MODELO.hoyISO();
        fReunion.addEventListener('change', (e) => guardarFecha('f1_reunion', e.target.value));
    }

    // Campos extra
    const convenio = document.getElementById('f1_convenio');
    const obsApertura = document.getElementById('f1_observaciones_apertura');
    const obsConstitucion = document.getElementById('f1_observaciones_constitucion');
    const ambito = document.getElementById('f1_ambito');

    if (convenio) {
        convenio.value = fechasGuardadas.f1_convenio || '';
        convenio.addEventListener('change', (e) => guardarFecha('f1_convenio', e.target.value));
    }
    if (obsApertura) {
        obsApertura.value = fechasGuardadas.f1_obs_apertura || '';
        obsApertura.addEventListener('change', (e) => guardarFecha('f1_obs_apertura', e.target.value));
    }
    if (obsConstitucion) {
        obsConstitucion.value = fechasGuardadas.f1_obs_constitucion || '';
        obsConstitucion.addEventListener('change', (e) => guardarFecha('f1_obs_constitucion', e.target.value));
    }
    if (ambito) {
        ambito.value = fechasGuardadas.f1_ambito || 'provincial';
        ambito.addEventListener('change', (e) => guardarFecha('f1_ambito', e.target.value));
    }
    
    // Guardar y recuperar el Nº de Centros
    const centrosInput = document.getElementById('f1_centros');
    if (centrosInput) {
        centrosInput.value = fechasGuardadas.f1_centros || '1';
        centrosInput.addEventListener('change', (e) => guardarFecha('f1_centros', e.target.value));
    }

    // Guardar y recuperar el calendario y sistema de sustitución
    const calendario = document.getElementById('f1_calendario');
    const sustitucion = document.getElementById('f1_sustitucion');

    if (calendario) {
        calendario.value = fechasGuardadas.f1_calendario || 'Mensual';
        calendario.addEventListener('change', (e) => guardarFecha('f1_calendario', e.target.value));
    }
    if (sustitucion) {
        sustitucion.value = fechasGuardadas.f1_sustitucion || 'parte_designante';
        sustitucion.addEventListener('change', (e) => guardarFecha('f1_sustitucion', e.target.value));
    }

    // Inicializar asistencias según modalidad guardada
    // Representación de la Parte Social (guardado automático)
    const repSocial = document.getElementById('f1_representacion_social');
    if (repSocial) {
        repSocial.value = fechasGuardadas.f1_representacion_social || 'RLPT';
        repSocial.addEventListener('change', (e) => guardarFecha('f1_representacion_social', e.target.value));
    }

    // Modalidad de la Reunión (guardado automático)
    const modalidadReunion = document.getElementById('f1_modalidad_reunion');
    if (modalidadReunion) {
        modalidadReunion.value = fechasGuardadas.f1_modalidad_reunion || 'presencial';
        modalidadReunion.addEventListener('change', (e) => guardarFecha('f1_modalidad_reunion', e.target.value));
    }

    inicializarAsistencias(fechasGuardadas.f1_modalidad_reunion || 'presencial');
    // Forzar renderizado de la lista de asistencia
    renderizarListaAsistencia();

    // Alerta de Paridad
    const alerta = document.getElementById('alerta-paridad');
    if (alerta) {
        const paridad = analizarParidad();
        let mensajes = [];
        
        if (paridad.emp.desequilibrado) {
            mensajes.push(`⚠️ <strong>Atención (Empresa):</strong> La representación de la Empresa tiene un ${paridad.emp.pctMujeres.toFixed(0)}% de mujeres. Se recomienda una presencia equilibrada (40%-60%).`);
        }
        if (paridad.trab.desequilibrado) {
            mensajes.push(`⚠️ <strong>Atención (Trabajadores):</strong> La representación de los Trabajadores tiene un ${paridad.trab.pctMujeres.toFixed(0)}% de mujeres. Se recomienda una presencia equilibrada (40%-60%).`);
        }
        
        if (mensajes.length > 0) {
            alerta.innerHTML = mensajes.join('<br><br>') + '<br><br><em>El acta incluirá un párrafo justificativo de esta situación.</em>';
            alerta.style.display = 'block';
        }
    }
});

// --- GENERADOR PASO 1: APERTURA ---
window.generarAnexoI = function() {
    const config = MODELO.getConfig();
    const centros = document.getElementById('f1_centros').value;
    const centrosNum = parseInt(centros) || 1;
    const textoCentros = centrosNum === 1 ? '1 centro de trabajo' : `${centrosNum} centros de trabajo`;
    const ambito = document.getElementById('f1_ambito').value;
    const convenio = document.getElementById('f1_convenio').value || '[Convenio Colectivo]';
    const obsApertura = document.getElementById('f1_observaciones_apertura').value;
    
    const nombreEmpresa = config.empresaNombre || '[Denominación Social]';
    const cif = config.empresaCif || '[NIF]';
    const direccion = config.empresaDireccion || '[Domicilio Social]';
    const ciudad = config.empresaCiudad || '[Ciudad]';
    const cp = config.empresaCp || '[CP]';
    const sector = config.empresaSector || '[CNAE]';
    const representante = config.empresaRepresentante || '[Representante Legal]';
    
    let fechaHoy = new Date().toLocaleDateString('es-ES');
    const fechaAperturaInput = document.getElementById('f1_fecha_apertura');
    if (fechaAperturaInput && fechaAperturaInput.value) {
        const d = new Date(fechaAperturaInput.value);
        d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
        fechaHoy = d.toLocaleDateString('es-ES');
    }

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Anexo I - Apertura</title>
            <style>
                body { font-family: 'Times New Roman', serif; padding: 3rem; color: #000; line-height: 1.6; max-width: 800px; margin: 0 auto; }
                h1 { text-align: center; text-decoration: underline; margin-bottom: 2rem; }
                p { text-align: justify; margin-bottom: 1rem; }
                ul { margin-bottom: 1rem; }
                .firma { margin-top: 4rem; text-align: center; }
                @media print { body { padding: 0; } .no-print { display: none !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 5px; cursor: pointer;">🖨️ Imprimir / Guardar PDF</button>
            </div>

            <h1>ANEXO I. PROMOCIÓN DE LA NEGOCIACIÓN</h1>
            
            <p>Mediante el presente escrito y en virtud de lo dispuesto en el artículo 5 del Real Decreto 901/2020, la empresa <strong>${nombreEmpresa}</strong>, N.I.F. <strong>${cif}</strong> y domicilio social en <strong>${direccion}, ${cp} ${ciudad}</strong>, CNAE <strong>${sector}</strong>, Convenio Colectivo aplicable <strong>${convenio}</strong>, promueve la negociación de su plan de igualdad y diagnóstico previo y expone:</p>

            <p><strong>1º</strong> Que la persona abajo firmante, ostenta legitimación por parte de <strong>${nombreEmpresa}</strong> para negociar el plan de igualdad y su diagnóstico previo.</p>

            <p><strong>2º</strong> Que el ámbito de negociación del plan de igualdad y su diagnóstico previo es la empresa, que cuenta con <strong>${textoCentros}</strong>, en el ámbito <strong>${ambito}</strong>.</p>

            <p><strong>3º</strong> Que las materias objeto de negociación de conformidad con el artículo 46.2 de la Ley Orgánica 3/2007, serán al menos:</p>
            <ul>
                <li>Proceso de selección y contratación</li>
                <li>Clasificación profesional</li>
                <li>Formación</li>
                <li>Promoción profesional</li>
                <li>Condiciones de trabajo, incluida la auditoría salarial</li>
                <li>Ejercicio corresponsable de la vida personal, familiar y laboral</li>
                <li>Infrarrepresentación femenina</li>
                <li>Retribuciones</li>
                <li>Prevención del acoso sexual y por razón de sexo</li>
                <li>Violencia de género, lenguaje y comunicación no sexista</li>
            </ul>

            <p><strong>4º</strong> Que la empresa señala como domicilio a efectos de comunicaciones <strong>${direccion}, ${cp} ${ciudad}</strong> y como persona de contacto a <strong>${representante}</strong>.</p>

            ${obsApertura ? `<p><strong>Observaciones adicionales:</strong> ${obsApertura}</p>` : ''}

            <p>Y para que conste a los efectos oportunos firma la presente,</p>

            <div class="firma">
                <p>En ${ciudad}, a ${fechaHoy}</p>
                <br><br>
                <p>_______________________________________</p>
                <p><strong>${representante}</strong></p>
                <p>Representante Legal de la Empresa</p>
            </div>
        </body>
        </html>
    `);
    ventana.document.close();
};

// --- GENERADOR PASO 2: CONSTITUCIÓN ---
window.generarAnexoII = function() {
    const config = MODELO.getConfig();
    const comite = MODELO.getComite();
    
    // --- LECTURA DE CAMPOS CON VALORES POR DEFECTO ---
    const fechaReunionInput = document.getElementById('f1_fecha_reunion');
    const fechaReunion = (fechaReunionInput && fechaReunionInput.value) 
        ? fechaReunionInput.value 
        : (document.getElementById('f1_fecha_constitucion')?.value || MODELO.hoyISO());
        
    const lugarInput = document.getElementById('f1_lugar_constitucion');
    const lugarReunion = (lugarInput && lugarInput.value) ? lugarInput.value : 'Instalaciones de la empresa';
    
    const modalidadInput = document.getElementById('f1_modalidad_reunion');
    const modalidad = (modalidadInput && modalidadInput.value) ? modalidadInput.value : 'presencial';
    
    const fechaFmt = new Date(fechaReunion).toLocaleDateString('es-ES');
    let textoLugarFecha = '';
    if (modalidad === 'presencial') {
        textoLugarFecha = `En ${lugarReunion}, a ${fechaFmt}`;
    } else if (modalidad === 'telematica') {
        textoLugarFecha = `Mediante videoconferencia, a ${fechaFmt}`;
    } else if (modalidad === 'mixta') {
        textoLugarFecha = `De forma mixta (presencial en ${lugarReunion} y telemática), a ${fechaFmt}`;
    } else if (modalidad === 'asincrona') {
        textoLugarFecha = `De forma asíncrona (por escrito), a ${fechaFmt}`;
    } else {
        textoLugarFecha = `En ${lugarReunion}, a ${fechaFmt}`;
    }
    
    const obsInput = document.getElementById('f1_observaciones_constitucion');
    const obsConstitucion = (obsInput && obsInput.value) ? obsInput.value : '';
    
    const repInput = document.getElementById('f1_representacion_social');
    const representacionSocial = (repInput && repInput.value) ? repInput.value : 'RLPT';
    const repSocialTexto = {
        'RLPT': 'RLPT (Representación Legal de las Personas Trabajadoras)',
        'comite': 'Comité de Empresa',
        'seccion_sindical': 'Sección Sindical',
        'delegados': 'Delegados/as de Personal',
        'otra': 'Otra (especificada en observaciones)'
    }[representacionSocial] || 'RLPT';
    
    // Leer Calendario
    const calendarioInput = document.getElementById('f1_calendario');
    const calendario = (calendarioInput && calendarioInput.value) ? calendarioInput.value : 'Mensual';
    
    // Leer Sistema de Sustitución
    const sustitucionInput = document.getElementById('f1_sustitucion');
    const sustitucion = (sustitucionInput && sustitucionInput.value) ? sustitucionInput.value : 'parte_designante';
    const sustitucionTexto = {
        'parte_designante': 'Las personas que dejen de formar parte de la Comisión serán sustituidas por la parte que las designó.',
        'organo_representacion': 'Las personas que dejen de formar parte de la Comisión serán sustituidas por el órgano de representación legal o sindical correspondiente.',
        'mutuo_acuerdo': 'Las personas que dejen de formar parte de la Comisión serán sustituidas por mutuo acuerdo de las partes.'
    }[sustitucion] || 'Por acuerdo de las partes.';

    // Leer Recomendaciones
    const recFormacion = document.getElementById('f1_rec_formacion')?.checked || false;
    const recCircular = document.getElementById('f1_rec_circular')?.checked || false;
    const recLenguaje = document.getElementById('f1_rec_lenguaje')?.checked || false;
    
    let compromisosHTML = '';
    if (recFormacion || recCircular || recLenguaje) {
        compromisosHTML = '<h3>5. Compromisos de Buenas Prácticas</h3><p>Ambas partes acuerdan voluntariamente:</p><ul>';
        if (recFormacion) compromisosHTML += '<li>Proporcionar formación específica en materia de igualdad a los miembros de la Comisión.</li>';
        if (recCircular) compromisosHTML += '<li>Elaborar y difundir una circular informativa para toda la plantilla sobre el inicio del proceso.</li>';
        if (recLenguaje) compromisosHTML += '<li>Utilizar un lenguaje inclusivo y no sexista en todas las comunicaciones y documentos de la Comisión.</li>';
        compromisosHTML += '</ul>';
    }

    // --- DATOS GENERALES ---
    const nombreEmpresa = config.empresaNombre || '[Denominación Social]';
    const asistencias = JSON.parse(localStorage.getItem('pi_asistencias_constitucion') || '{}');
    const modalidadActual = document.getElementById('f1_modalidad_reunion')?.value || 'presencial';
    
    const formatoMiembro = (m) => {
        let sufijo = '';
        const asistencia = asistencias[m.nombre];
        
        if (asistencia === 'No asiste') {
            return `<li style="color: #94a3b8; text-decoration: line-through;">${m.nombre} - ${m.rol} <em>(No asiste)</em></li>`;
        } else if (asistencia) {
            sufijo = ` <em>(${asistencia})</em>`;
        }
        return `<li>${m.nombre} - ${m.rol}${sufijo}</li>`;
    };

    const listaEmpresaHTML = (comite.empresa || []).map(formatoMiembro).join('');
    const listaTrabajadoresHTML = (comite.trabajadores || []).map(formatoMiembro).join('');

    // --- PARIDAD ---
    const paridad = analizarParidad();
    const sinParidad = (paridad.emp.desequilibrado || paridad.trab.desequilibrado);

    // --- GENERAR PDF ---
    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Acta de Constitución</title>
            <style>
                body { font-family: 'Times New Roman', serif; padding: 3rem; color: #000; line-height: 1.6; max-width: 800px; margin: 0 auto; }
                h1, h2 { text-align: center; margin-bottom: 2rem; }
                h3 { margin-top: 2rem; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem; }
                p { text-align: justify; margin-bottom: 1rem; }
                ul { margin-bottom: 1rem; }
                .firmas { display: flex; justify-content: space-between; margin-top: 4rem; }
                .firma-box { width: 45%; text-align: center; }
                @media print { body { padding: 0; } .no-print { display: none !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; cursor: pointer;">🖨️ Imprimir / Guardar PDF</button>
            </div>

            <h1>ACTA DE CONSTITUCIÓN DE LA COMISIÓN NEGOCIADORA</h1>

            <p><strong>${textoLugarFecha}</strong>, reunidas las partes abajo firmantes,</p>

            <p><strong>Por una parte, la representación de la empresa:</strong></p>
            <ul>${listaEmpresaHTML || '<li>[Nombre y cargo]</li>'}</ul>

            <p><strong>Y por otra, la representación de la ${repSocialTexto}:</strong></p>
            <ul>${listaTrabajadoresHTML || '<li>[Nombre y cargo]</li>'}</ul>

            <p>Con motivo de la constitución de la Comisión Negociadora del Plan de Igualdad de <strong>${nombreEmpresa}</strong>, en cumplimiento de los artículos 45 y 46 de la Ley Orgánica 3/2007.</p>

            <p>Ambas partes se reconocen mutua capacidad y legitimación suficiente y <strong>ACUERDAN</strong> constituir la Comisión Negociadora y establecer sus competencias y normas de funcionamiento.</p>

            ${sinParidad ? `<div style="background: #f9f9f9; padding: 1rem; border-left: 3px solid #000; margin: 1rem 0; font-size: 0.9rem;">
                <strong>Nota sobre la composición:</strong> Se hace constar expresamente que, por causas objetivas derivadas de la representación existente, no ha sido posible alcanzar la paridad de género en la composición de esta Comisión. Ambas partes se comprometen a fomentar la participación equilibrada en futuras renovaciones.
            </div>` : ''}

            <h3>1. Composición</h3>
            <p>La Comisión Negociadora queda constituida por las personas relacionadas anteriormente, en representación paritaria de ambas partes.</p>

            <h3>2. Funciones</h3>
            <ul>
                <li>Negociación y elaboración del diagnóstico y de las medidas del Plan.</li>
                <li>Elaboración del informe de resultados del diagnóstico.</li>
                <li>Identificación de medidas prioritarias y cronograma.</li>
                <li>Impulso de la implantación del Plan.</li>
                <li>Remisión del Plan a la autoridad laboral para su registro.</li>
            </ul>

            <h3>3. Régimen de funcionamiento</h3>
            <p><strong>Calendario de reuniones:</strong> ${calendario}. De cada reunión se levantará acta.</p>
            <p><strong>Sustitución de miembros:</strong> ${sustitucionTexto}</p>
            <p>Los acuerdos se adoptarán por mayoría de cada una de las partes.</p>

            ${obsConstitucion ? `<h3>4. Otras disposiciones</h3><p>${obsConstitucion}</p>` : ''}
            
            ${compromisosHTML}

            <p>Y sin más asuntos que tratar, se levanta la sesión, firmando el presente documento en prueba de conformidad.</p>

            <div style="margin-top: 3rem; page-break-inside: avoid;">
                <p style="text-align: center; font-size: 0.95rem; margin-bottom: 1.5rem;">
                    En prueba de conformidad, las partes abajo firmantes aprueban el presente acta.
                </p>
                <p style="text-align: center; font-size: 0.9rem; color: #666; margin-bottom: 2rem;">
                    (Firma pendiente según el procedimiento establecido por la empresa)
                </p>
                <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
                    <div style="width: 45%; text-align: center;">
                        <p style="font-weight: bold; margin: 0;">Por la Empresa</p>
                        <p style="font-size: 0.85rem; color: #666; margin: 0.25rem 0;">${config.empresaRepresentante || '[Representante Legal]'}</p>
                        <p style="font-size: 0.85rem; color: #333; margin: 0.5rem 0;">${textoLugarFecha}</p>
                    </div>
                    <div style="width: 45%; text-align: center;">
                        <p style="font-weight: bold; margin: 0;">Por la Parte Social</p>
                        <p style="font-size: 0.85rem; color: #666; margin: 0.25rem 0;">${repSocialTexto}</p>
                        <p style="font-size: 0.85rem; color: #333; margin: 0.5rem 0;">${textoLugarFecha}</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    ventana.document.close();
};

// --- GENERADOR PASO 3 (OPCIONAL): CIRCULAR INFORMATIVA ---
window.generarCircularPlantilla = function() {
    const config = MODELO.getConfig();
    const nombreEmpresa = config.empresaNombre || '[Empresa]';
    
    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Comunicación a la Plantilla</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 3rem; color: #333; line-height: 1.6; max-width: 800px; margin: 0 auto; }
                .header { text-align: center; margin-bottom: 3rem; border-bottom: 2px solid #4f46e5; padding-bottom: 1rem; }
                .header h1 { color: #4f46e5; margin: 0; }
                @media print { body { padding: 0; } .no-print { display: none !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 5px; cursor: pointer;">🖨️ Imprimir / Guardar PDF</button>
            </div>

            <div class="header">
                <h1>${nombreEmpresa}</h1>
                <p style="margin: 0.5rem 0 0 0; color: #666;">Comunicación Interna</p>
            </div>

            <p><strong>Asunto: Inicio del proceso de negociación del Plan de Igualdad</strong></p>

            <p>Estimado personal,</p>

            <p>Nos dirigimos a vosotros y vosotras para informaros de que <strong>${nombreEmpresa}</strong> ha iniciado el proceso de elaboración de su Plan de Igualdad.</p>

            <p>Este Plan tiene como objetivo garantizar la igualdad de trato y oportunidades entre mujeres y hombres en la empresa, eliminando cualquier tipo de discriminación y promoviendo medidas que favorezcan la conciliación y la corresponsabilidad.</p>

            <p>Para ello, se ha constituido una <strong>Comisión Negociadora paritaria</strong>, formada por representantes de la dirección y de la plantilla, que será la encargada de realizar el diagnóstico de situación y proponer las medidas necesarias.</p>

            <p>En las próximas semanas, la Comisión os pedirá vuestra colaboración para participar en encuestas anónimas y aportar vuestras ideas. <strong>Vuestra opinión es fundamental</strong> para que el Plan refleje las necesidades reales de toda la plantilla.</p>

            <p>Agradecemos de antemano vuestra participación y os mantendremos informados e informadas de los avances.</p>

            <p style="margin-top: 3rem;">Atentamente,</p>
            <p><strong>La Comisión Negociadora del Plan de Igualdad</strong></p>
        </body>
        </html>
    `);
    ventana.document.close();
};

function renderizarListaAsistencia() {
    const contenedor = document.getElementById('lista_asistencia_miembros');
    const contenedorPadre = document.getElementById('contenedor_asistencia');
    
    if (!contenedor || !contenedorPadre) return;
    
    // Forzar visibilidad
    contenedorPadre.style.display = 'block';
    contenedor.innerHTML = '';
    
    // Obtener miembros del comité con seguridad
    let comite = { empresa: [], trabajadores: [] };
    try {
        if (typeof MODELO !== 'undefined' && MODELO.getComite) {
            comite = MODELO.getComite() || { empresa: [], trabajadores: [] };
        }
    } catch (e) {
        console.error("Error al obtener el comité:", e);
    }
    
    const empresa = comite.empresa || [];
    const trabajadores = comite.trabajadores || [];
    
    if (empresa.length === 0 && trabajadores.length === 0) {
        contenedor.innerHTML = '<p style="color: #64748b; font-size: 0.9rem; margin: 0; text-align: center;">No hay miembros configurados. Ve a <strong>Configuración</strong> para añadirlos.</p>';
        return;
    }
    
    const asistenciasGuardadas = JSON.parse(localStorage.getItem('pi_asistencias_constitucion') || '{}');
    
    // Función auxiliar para crear una fila
    const crearFila = (m) => {
        if (!m.nombre) return null; // Ignorar miembros sin nombre
        
        const div = document.createElement('div');
        div.style = "display: flex; justify-content: space-between; align-items: center; gap: 1rem; font-size: 0.95rem; padding: 0.5rem 0; border-bottom: 1px dashed #e2e8f0;";
        
        const modoActual = asistenciasGuardadas[m.nombre] || 'Presencial';
        
        div.innerHTML = `
            <span style="font-weight: 500; color: #1e293b;">${m.nombre} <small style="color: #94a3b8;">(${m.rol})</small></span>
            <select class="select-asistencia-miembro" data-nombre="${m.nombre}" style="padding: 0.4rem 0.6rem; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 0.85rem; background: #fff;">
                <option value="Presencial" ${modoActual === 'Presencial' ? 'selected' : ''}>Presencial</option>
                <option value="Telemático" ${modoActual === 'Telemático' ? 'selected' : ''}>Telemático</option>
                <option value="No asiste" ${modoActual === 'No asiste' ? 'selected' : ''}>No asiste</option>
            </select>
        `;
        return div;
    };
    
    // 1. Grupo Empresa
    if (empresa.length > 0) {
        const tituloEmpresa = document.createElement('div');
        tituloEmpresa.innerHTML = '<strong style="color: #4f46e5; font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">🏢 Por la Empresa:</strong>';
        contenedor.appendChild(tituloEmpresa);
        
        empresa.forEach(m => {
            const fila = crearFila(m);
            if (fila) contenedor.appendChild(fila);
        });
    }
    
    // 2. Grupo Trabajadores
    if (trabajadores.length > 0) {
        const tituloTrabajadores = document.createElement('div');
        tituloTrabajadores.innerHTML = '<strong style="color: #0f766e; font-size: 0.85rem; display: block; margin-top: 1rem; margin-bottom: 0.5rem;">👷 Por los Trabajadores:</strong>';
        contenedor.appendChild(tituloTrabajadores);
        
        trabajadores.forEach(m => {
            const fila = crearFila(m);
            if (fila) contenedor.appendChild(fila);
        });
    }
    
    // Añadir listeners para guardar
    contenedor.querySelectorAll('.select-asistencia-miembro').forEach(sel => {
        sel.addEventListener('change', (e) => {
            const nombre = e.target.dataset.nombre;
            const modo = e.target.value;
            const guardadas = JSON.parse(localStorage.getItem('pi_asistencias_constitucion') || '{}');
            guardadas[nombre] = modo;
            localStorage.setItem('pi_asistencias_constitucion', JSON.stringify(guardadas));
        });
    });
}

function inicializarAsistencias(modalidad) {
    const asistencias = JSON.parse(localStorage.getItem('pi_asistencias_constitucion') || '{}');
    const comite = MODELO.getComite() || { empresa: [], trabajadores: [] };
    const todos = [...(comite.empresa || []), ...(comite.trabajadores || [])];
    
    let cambio = false;
    todos.forEach(m => {
        if (!m.nombre) return;
        // Si el miembro no tiene una asistencia guardada, le ponemos el valor por defecto según la modalidad
        if (!asistencias[m.nombre]) {
            asistencias[m.nombre] = (modalidad === 'telematica') ? 'Telemático' : 'Presencial';
            cambio = true;
        }
    });
    
    if (cambio) {
        localStorage.setItem('pi_asistencias_constitucion', JSON.stringify(asistencias));
    }
}
