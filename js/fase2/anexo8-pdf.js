// anexo8-pdf.js - Generación del PDF del Anexo VIII (Brecha Salarial)

window.generarPDFAnexo8 = function() {
    const val = (id) => document.getElementById(id) ? document.getElementById(id).value : '';
    
    const sm = parseFloat(val('a8_sal_muj')) || 0;
    const sh = parseFloat(val('a8_sal_hom')) || 0;
    const cm = parseFloat(val('a8_comp_muj')) || 0;
    const ch = parseFloat(val('a8_comp_hom')) || 0;
    const em = parseFloat(val('a8_extra_muj')) || 0;
    const eh = parseFloat(val('a8_extra_hom')) || 0;

    const totalMuj = sm + cm + em;
    const totalHom = sh + ch + eh;
    
    let brechaGlobal = 0;
    if (totalHom > 0) {
        brechaGlobal = ((totalHom - totalMuj) / totalHom) * 100;
    }

    const grupos = ['Personas directivas', 'Mandos Intermedios', 'Técnicos', 'Administrativos', 'Operarios'];
    let filasGrupos = '';
    grupos.forEach((grupo, idx) => {
        const m = parseFloat(val(`a8_g_${idx}_m`)) || 0;
        const h = parseFloat(val(`a8_g_${idx}_h`)) || 0;
        let brecha = 0;
        if (h > 0) brecha = ((h - m) / h) * 100;

        filasGrupos += `<tr>
            <td class="label">${grupo}</td>
            <td>${m.toFixed(2)} €</td>
            <td>${h.toFixed(2)} €</td>
            <td>${brecha.toFixed(1)} %</td>
        </tr>`;
    });

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Anexo VIII - Brecha Salarial</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                body { font-family: 'Plus Jakarta Sans', sans-serif; padding: 3rem; color: #1e293b; line-height: 1.6; max-width: 900px; margin: 0 auto; background-color: #ffffff; }
                h1 { text-align: center; color: #0f172a; font-size: 1.8rem; letter-spacing: -0.03em; border-bottom: 3px solid #4f46e5; padding-bottom: 1rem; margin-bottom: 2.5rem; }
                h2 { color: #4f46e5; font-size: 1.3rem; margin-top: 3rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; }
                h3 { color: #334155; font-size: 1.1rem; margin-top: 2rem; }
                
                table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem; }
                th, td { border: 1px solid #e2e8f0; padding: 0.75rem; text-align: center; }
                th { background-color: #f0f4f8; color: #4f46e5; font-weight: 700; }
                td.label { text-align: left; font-weight: 600; background-color: #f8fafc; color: #334155; }
                
                .resultado-destacado { background-color: #eef2ff; border: 1px solid #c7d2fe; padding: 2rem; border-radius: 12px; text-align: center; margin: 2rem 0; }
                .resultado-destacado h3 { margin: 0; color: #4f46e5; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; }
                .resultado-destacado .numero { font-size: 3.5rem; font-weight: 800; color: #0f172a; margin: 0.5rem 0; }
                .resultado-destacado p { margin: 0; color: #64748b; font-size: 0.9rem; }
                
                .nota-legal { font-size: 0.85rem; color: #64748b; font-style: italic; margin-top: 2rem; border-top: 1px solid #e2e8f0; padding-top: 1rem; }
                
                @media print { body { padding: 0; } .no-print { display: none !important; } * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 12px 24px; background: #6366f1; color: white; border: none; border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4); transition: background 0.2s;">🖨️ Imprimir / Guardar PDF</button>
            </div>
            
            <h1>Anexo VIII. Análisis de la Brecha Salarial</h1>
            
            <p>De conformidad con lo establecido en el <strong>Real Decreto 902/2020</strong>, de 13 de octubre, de igualdad retributiva entre mujeres y hombres, se presenta el análisis de la brecha salarial de la empresa, calculada sobre la retribución total media (Salario Base + Complementos + Percepciones Extrasalariales).</p>

            <div class="resultado-destacado">
                <h3>Brecha Salarial Global de la Empresa</h3>
                <div class="numero">${brechaGlobal.toFixed(1)} %</div>
                <p>Porcentaje que representa la diferencia entre la retribución media de los hombres y las mujeres respecto a la de los hombres.</p>
            </div>

            <h2>1. Datos Globales (Retribución Media Anual)</h2>
            <table>
                <thead>
                    <tr><th class="label">Concepto</th><th>Mujeres (€)</th><th>Hombres (€)</th></tr>
                </thead>
                <tbody>
                    <tr><td class="label">Salario Base Medio</td><td>${sm.toFixed(2)} €</td><td>${sh.toFixed(2)} €</td></tr>
                    <tr><td class="label">Complementos Salariales Medios</td><td>${cm.toFixed(2)} €</td><td>${ch.toFixed(2)} €</td></tr>
                    <tr><td class="label">Percepciones Extrasalariales Medias</td><td>${em.toFixed(2)} €</td><td>${eh.toFixed(2)} €</td></tr>
                    <tr style="background: #f1f5f9; font-weight: bold;"><td class="label">TOTAL RETRIBUCIÓN MEDIA</td><td>${totalMuj.toFixed(2)} €</td><td>${totalHom.toFixed(2)} €</td></tr>
                </tbody>
            </table>

            <h2>2. Desglose por Grupos Profesionales / Puestos de Igual Valor</h2>
            <table>
                <thead>
                    <tr><th class="label">Grupo / Puesto</th><th>Mujeres (€)</th><th>Hombres (€)</th><th>Brecha (%)</th></tr>
                </thead>
                <tbody>
                    ${filasGrupos}
                </tbody>
            </table>
            
            <p class="nota-legal">Nota: Los valores negativos en la brecha indican que el salario medio de las mujeres es superior al de los hombres en ese grupo específico. Según el RD 902/2020, la valoración de los puestos de trabajo debe realizarse con criterios de adecuación, totalidad y objetividad, y utilizando el Sistema de Valoración de Puestos de Trabajo (SVPT) con perspectiva de género.</p>

        </body>
        </html>
    `);
    ventana.document.close();
};
