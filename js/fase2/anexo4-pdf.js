// anexo4-pdf.js - Generación del PDF del Anexo IV Completo

window.generarPDFAnexo4 = function() {
    const val = (id) => document.getElementById(id) ? document.getElementById(id).value : '';
    const isChecked = (id) => document.getElementById(id) ? document.getElementById(id).checked : false;
    
    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Anexo IV - Análisis de Gestión de Personal</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                body { font-family: 'Plus Jakarta Sans', sans-serif; padding: 3rem; color: #1e293b; line-height: 1.6; max-width: 900px; margin: 0 auto; background-color: #ffffff; }
                h1 { text-align: center; color: #0f172a; font-size: 1.8rem; letter-spacing: -0.03em; border-bottom: 3px solid #4f46e5; padding-bottom: 1rem; margin-bottom: 2.5rem; }
                h2 { color: #4f46e5; font-size: 1.3rem; margin-top: 3rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; }
                h3 { color: #334155; font-size: 1.1rem; margin-top: 2rem; }
                
                table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.85rem; }
                th, td { border: 1px solid #e2e8f0; padding: 0.75rem; text-align: center; }
                th { background-color: #f0f4f8; color: #4f46e5; font-weight: 700; }
                td.label { text-align: left; font-weight: 600; background-color: #f8fafc; color: #334155; }
                
                ul { margin-bottom: 1rem; padding-left: 1.5rem; }
                li { margin-bottom: 0.5rem; color: #334155; }
                
                @media print { body { padding: 0; } .no-print { display: none !important; } * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 12px 24px; background: #6366f1; color: white; border: none; border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4); transition: background 0.2s;">🖨️ Imprimir / Guardar PDF</button>
            </div>
            
            <h1>Anexo IV. Análisis de Gestión de Personal</h1>
            
            <!-- SECCIÓN 1: SELECCIÓN -->
            <h2>1. Selección y Contratación</h2>
            <h3>Información Cualitativa</h3>
            <ul>
                <li>Criterios objetivos de idoneidad: <strong>${isChecked('a4_sel_crit_objetivos') ? 'SÍ' : 'NO'}</strong></li>
                <li>Equipo de selección mixto: <strong>${isChecked('a4_sel_equipo_mixto') ? 'SÍ' : 'NO'}</strong></li>
                <li>Formación en igualdad para el equipo: <strong>${isChecked('a4_sel_formacion_igualdad') ? 'SÍ' : 'NO'}</strong></li>
                <li>Evitar preguntas personales/familiares: <strong>${isChecked('a4_sel_preguntas_neutras') ? 'SÍ' : 'NO'}</strong></li>
            </ul>
            <h3>Información Cuantitativa: Candidaturas en Procesos de Selección</h3>
            <table>
                <thead><tr><th style="text-align: left;">Candidaturas</th><th>Proceso 1 (M/H)</th><th>Proceso 2 (M/H)</th><th>Proceso 3 (M/H)</th><th>Proceso 4 (M/H)</th></tr></thead>
                <tbody>
                    ${['anuncios', 'contactos', 'preselec', 'contratadas'].map(fila => {
                        const label = fila === 'preselec' ? 'Preseleccionadas' : fila === 'contratadas' ? 'Contratadas' : 'Recibidas por ' + fila;
                        let row = `<tr><td class="label">${label}</td>`;
                        for (let i = 1; i <= 4; i++) {
                            row += `<td>${val(`a4_cand_${fila}_${i}_m`) || '0'} / ${val(`a4_cand_${fila}_${i}_h`) || '0'}</td>`;
                        }
                        row += '</tr>';
                        return row;
                    }).join('')}
                </tbody>
            </table>

            <!-- SECCIÓN 2: PROMOCIÓN -->
            <h2>2. Promoción</h2>
            <h3>Información Cualitativa</h3>
            <ul>
                <li>Procedimiento objetivo y transparente: <strong>${isChecked('a4_prom_proc_objetivo') ? 'SÍ' : 'NO'}</strong></li>
                <li>Se informa a toda la plantilla de las promociones: <strong>${isChecked('a4_prom_informa_plantilla') ? 'SÍ' : 'NO'}</strong></li>
                <li>Se fomenta la presentación del sexo subrepresentado: <strong>${isChecked('a4_prom_fomenta_subrep') ? 'SÍ' : 'NO'}</strong></li>
                <li>Equipo de evaluación mixto: <strong>${isChecked('a4_prom_equipo_mixto') ? 'SÍ' : 'NO'}</strong></li>
            </ul>
            <h3>Información Cuantitativa: Ascensos (Último año)</h3>
            <table>
                <thead><tr><th style="text-align: left;">Nivel Jerárquico</th><th>Mujeres ascendidas</th><th>Hombres ascendidos</th></tr></thead>
                <tbody>
                    ${['Directivo', 'Mando intermedio', 'Técnico', 'Administrativo', 'Operario'].map((nivel, idx) => {
                        return `<tr>
                            <td class="label">${nivel}</td>
                            <td>${val(`a4_prom_asc_${idx}_m`) || '0'}</td>
                            <td>${val(`a4_prom_asc_${idx}_h`) || '0'}</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>

            <!-- SECCIÓN 3: FORMACIÓN -->
            <h2>3. Formación</h2>
            <h3>Información Cualitativa</h3>
            <ul>
                <li>Mismas horas de formación para todas las personas: <strong>${isChecked('a4_form_horas_iguales') ? 'SÍ' : 'NO'}</strong></li>
                <li>Formación en igualdad para toda la plantilla: <strong>${isChecked('a4_form_toda_plantilla_igualdad') ? 'SÍ' : 'NO'}</strong></li>
                <li>Formación en horario laboral: <strong>${isChecked('a4_form_horario_laboral') ? 'SÍ' : 'NO'}</strong></li>
                <li>Equilibrio en cursos de habilidades directivas: <strong>${isChecked('a4_form_habilidades_equilibrio') ? 'SÍ' : 'NO'}</strong></li>
            </ul>
            <h3>Información Cuantitativa: Participación en Formación</h3>
            <table>
                <thead><tr><th style="text-align: left;">Datos de Formación</th><th>Mujeres</th><th>Hombres</th></tr></thead>
                <tbody>
                    <tr><td class="label">Personas que han recibido formación</td><td>${val('a4_form_recibido_m') || '0'}</td><td>${val('a4_form_recibido_h') || '0'}</td></tr>
                    <tr><td class="label">Horas totales de formación</td><td>${val('a4_form_horas_m') || '0'}</td><td>${val('a4_form_horas_h') || '0'}</td></tr>
                    <tr><td class="label">Personas con formación en igualdad</td><td>${val('a4_form_igualdad_m') || '0'}</td><td>${val('a4_form_igualdad_h') || '0'}</td></tr>
                </tbody>
            </table>

        </body>
        </html>
    `);
    ventana.document.close();
};
