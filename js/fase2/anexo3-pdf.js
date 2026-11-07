// anexo3-pdf.js - Generación del PDF oficial del Anexo III (Estilo App)

window.generarPDFAnexo3 = function() {
    const val = (id) => document.getElementById(id) ? document.getElementById(id).value : '';
    
    // Sumar total plantilla
    const mujeres = parseInt(val('a3_mujeres')) || 0;
    const hombres = parseInt(val('a3_hombres')) || 0;
    const total = mujeres + hombres;
    const rltM = parseInt(val('a3_rlt_m')) || 0;
    const rltH = parseInt(val('a3_rlt_h')) || 0;
    const rltTotal = rltM + rltH;

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Anexo III - Ficha de Identificación</title>
            <style>
                /* Importar la misma fuente que usa tu app */
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

                body { 
                    font-family: 'Plus Jakarta Sans', sans-serif; 
                    padding: 3rem; 
                    color: #1e293b; 
                    line-height: 1.6; 
                    max-width: 900px; 
                    margin: 0 auto; 
                    background-color: #ffffff;
                }
                
                h1 { 
                    text-align: center; 
                    color: #0f172a; 
                    font-size: 1.8rem;
                    letter-spacing: -0.03em;
                    border-bottom: 3px solid #4f46e5; 
                    padding-bottom: 1rem; 
                    margin-bottom: 2.5rem; 
                }
                
                table { 
                    width: 100%; 
                    border-collapse: collapse; 
                    margin-bottom: 1.5rem; 
                    font-size: 0.9rem; 
                }
                
                th, td { 
                    border: 1px solid #e2e8f0; 
                    padding: 0.75rem 1rem; 
                    text-align: left; 
                }
                
                /* Cabeceras de las secciones (Estilo índigo suave) */
                .header-row { 
                    background-color: #f0f4f8; 
                    color: #4f46e5; 
                    font-weight: 700; 
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.05em;
                }
                
                /* Columna de etiquetas (Estilo gris claro) */
                .label-col { 
                    background-color: #f8fafc; 
                    color: #334155; 
                    width: 30%; 
                    font-weight: 600; 
                }
                
                .sub-label { 
                    background-color: #f8fafc; 
                    width: 25%; 
                    color: #475569;
                    font-weight: 600;
                }

                /* Para que las cajas de texto parezcan inputs */
                .valor-campo {
                    color: #0f172a;
                    font-weight: 500;
                }

                @media print { 
                    body { padding: 0; } 
                    .no-print { display: none !important; } 
                    /* Asegurar que los colores se impriman */
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 12px 24px; background: #6366f1; color: white; border: none; border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4); transition: background 0.2s;">🖨️ Imprimir / Guardar PDF</button>
            </div>
            
            <h1>Anexo III. Ficha de identificación de la empresa</h1>
            
            <table>
                <tr><td colspan="4" class="header-row">DATOS DE LA EMPRESA</td></tr>
                <tr><td class="label-col">Razón social</td><td colspan="3" class="valor-campo">${val('a3_razon') || '-'}</td></tr>
                <tr><td class="label-col">NIF</td><td colspan="3" class="valor-campo">${val('a3_nif') || '-'}</td></tr>
                <tr><td class="label-col">Domicilio social</td><td colspan="3" class="valor-campo">${val('a3_domicilio') || '-'}</td></tr>
                <tr><td class="label-col">Forma jurídica</td><td colspan="3" class="valor-campo">${val('a3_forma') || '-'}</td></tr>
                <tr><td class="label-col">Año de constitución</td><td colspan="3" class="valor-campo">${val('a3_anio') || '-'}</td></tr>
                
                <tr><td colspan="4" class="header-row">Responsable de la Entidad</td></tr>
                <tr><td class="label-col">Nombre</td><td colspan="3" class="valor-campo">${val('a3_rep_nombre') || '-'}</td></tr>
                <tr><td class="label-col">Cargo</td><td colspan="3" class="valor-campo">${val('a3_rep_cargo') || '-'}</td></tr>
                <tr><td class="label-col">Telf.</td><td colspan="3" class="valor-campo">${val('a3_rep_telf') || '-'}</td></tr>
                <tr><td class="label-col">e-mail</td><td colspan="3" class="valor-campo">${val('a3_rep_email') || '-'}</td></tr>

                <tr><td colspan="4" class="header-row">Responsable de Igualdad</td></tr>
                <tr><td class="label-col">Nombre</td><td colspan="3" class="valor-campo">${val('a3_ig_nombre') || '-'}</td></tr>
                <tr><td class="label-col">Cargo</td><td colspan="3" class="valor-campo">${val('a3_ig_cargo') || '-'}</td></tr>
                <tr><td class="label-col">Telf.</td><td colspan="3" class="valor-campo">${val('a3_ig_telf') || '-'}</td></tr>
                <tr><td class="label-col">e-mail</td><td colspan="3" class="valor-campo">${val('a3_ig_email') || '-'}</td></tr>

                <tr><td colspan="4" class="header-row">ACTIVIDAD</td></tr>
                <tr><td class="label-col">Sector Actividad</td><td colspan="3" class="valor-campo">${val('a3_sector') || '-'}</td></tr>
                <tr><td class="label-col">CNAE</td><td colspan="3" class="valor-campo">${val('a3_cnae') || '-'}</td></tr>
                <tr><td class="label-col">Descripción de la actividad</td><td colspan="3" class="valor-campo">${val('a3_desc') || '-'}</td></tr>
                <tr><td class="label-col">Dispersión geográfica y ámbito de actuación</td><td colspan="3" class="valor-campo">${val('a3_dispersion') || '-'}</td></tr>

                <tr><td colspan="4" class="header-row">DIMENSIÓN</td></tr>
                <tr>
                    <td class="sub-label">Personas Trabajadoras</td>
                    <td class="valor-campo">Mujeres: <strong>${mujeres}</strong></td>
                    <td class="valor-campo">Hombres: <strong>${hombres}</strong></td>
                    <td class="valor-campo">Total: <strong>${total}</strong></td>
                </tr>
                <tr><td class="label-col">Centros de trabajo</td><td colspan="3" class="valor-campo">${val('a3_centros') || '-'}</td></tr>
                <tr><td class="label-col">Facturación anual (€)</td><td colspan="3" class="valor-campo">${val('a3_facturacion') || '-'}</td></tr>

                <tr><td colspan="4" class="header-row">ORGANIZACIÓN DE LA GESTIÓN DE PERSONAS</td></tr>
                <tr><td class="label-col">Disponen de departamento de personal</td><td colspan="3" class="valor-campo">${val('a3_depto') || '-'}</td></tr>
                <tr><td class="label-col">Certificados o reconocimientos de igualdad obtenidos</td><td colspan="3" class="valor-campo">${val('a3_certificados') || '-'}</td></tr>
                <tr>
                    <td class="sub-label">Representación Legal de Trabajadores y Trabajadoras</td>
                    <td class="valor-campo">Mujeres: <strong>${rltM}</strong></td>
                    <td class="valor-campo">Hombres: <strong>${rltH}</strong></td>
                    <td class="valor-campo">Total: <strong>${rltTotal}</strong></td>
                </tr>
            </table>
        </body>
        </html>
    `);
    ventana.document.close();
};
