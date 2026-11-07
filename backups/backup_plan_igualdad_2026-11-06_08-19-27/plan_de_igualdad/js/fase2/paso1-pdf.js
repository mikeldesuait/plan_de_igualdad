// paso1-pdf.js - Generación del PDF del Paso 1 (Metodología)

window.generarPDFPaso1 = function() {
    const val = (id) => document.getElementById(id) ? document.getElementById(id).value : '';
    const isChecked = (id) => document.getElementById(id) ? document.getElementById(id).checked : false;
    const config = MODELO.getConfig();
    const nombreEmpresa = config.empresaNombre || '[Denominación Social]';
    
    let herramientas = [];
    if(isChecked('p1_herr_analisis')) herramientas.push('Herramienta de análisis de la plantilla por sexo');
    if(isChecked('p1_herr_cuestionarios')) herramientas.push('Cuestionarios (Dirección y Plantilla)');
    if(isChecked('p1_herr_entrevistas')) herramientas.push('Entrevistas');
    const strHerramientas = herramientas.length > 0 ? herramientas.join(', ') : 'No especificadas';

    const formatearFecha = (f) => {
        if(!f) return 'No especificada';
        const d = new Date(f);
        d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
        return d.toLocaleDateString('es-ES');
    };

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Metodología del Diagnóstico</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                body { font-family: 'Plus Jakarta Sans', sans-serif; padding: 3rem; color: #1e293b; line-height: 1.6; max-width: 800px; margin: 0 auto; background-color: #ffffff; }
                h1 { text-align: center; color: #0f172a; font-size: 1.8rem; letter-spacing: -0.03em; border-bottom: 3px solid #4f46e5; padding-bottom: 1rem; margin-bottom: 2.5rem; }
                h3 { color: #4f46e5; font-size: 1.1rem; margin-top: 2rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; }
                p, ul { margin-bottom: 1rem; color: #334155; }
                li { margin-bottom: 0.5rem; }
                .highlight { font-weight: 600; color: #0f172a; }
                @media print { body { padding: 0; } .no-print { display: none !important; } * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 12px 24px; background: #6366f1; color: white; border: none; border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4); transition: background 0.2s;">🖨️ Imprimir / Guardar PDF</button>
            </div>
            
            <h1>Documento de Metodología del Diagnóstico</h1>
            
            <p><span class="highlight">Empresa:</span> ${nombreEmpresa}</p>
            <p>De conformidad con el artículo 7.2 del Real Decreto 901/2020, se detalla a continuación la metodología empleada para la realización del diagnóstico de situación previo al Plan de Igualdad.</p>
            
            <h3>1. Periodo de referencia y fechas</h3>
            <ul>
                <li><span class="highlight">Fecha de inicio de recogida de información:</span> ${formatearFecha(val('p1_inicio_recogida'))}</li>
                <li><span class="highlight">Fecha de fin de recogida de información:</span> ${formatearFecha(val('p1_fin_recogida'))}</li>
                <li><span class="highlight">Fecha de inicio de realización del diagnóstico:</span> ${formatearFecha(val('p1_inicio_diag'))}</li>
                <li><span class="highlight">Fecha de fin de realización del diagnóstico:</span> ${formatearFecha(val('p1_fin_diag'))}</li>
            </ul>

            <h3>2. Personas y órganos que intervienen</h3>
            <p>${val('p1_personas') || 'No especificadas.'}</p>

            <h3>3. Herramientas utilizadas</h3>
            <p>Para la recogida y análisis de la información se han utilizado las siguientes herramientas:</p>
            <ul>
                <li>${strHerramientas}</li>
            </ul>

            <p style="margin-top: 3rem; font-size: 0.9rem; color: #64748b;"><em>El presente documento forma parte del Informe Diagnóstico (Anexo VII) del Plan de Igualdad.</em></p>
        </body>
        </html>
    `);
    ventana.document.close();
};
