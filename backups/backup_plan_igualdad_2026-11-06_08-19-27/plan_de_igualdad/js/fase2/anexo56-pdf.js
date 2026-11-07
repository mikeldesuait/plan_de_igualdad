// anexo56-pdf.js - Generación de PDFs para Encuestas

window.generarPDFAnexo56 = function() {
    const fechas = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');
    
    const preguntasDir = [
        "La igualdad se reconoce como principio básico de la empresa.",
        "La dirección de la empresa tiene sensibilidad real y compromiso hacia la igualdad.",
        "Se busca la forma de reequilibrar situaciones donde un sexo está subrepresentado.",
        "La dirección está dispuesta a impulsar el plan incluso con cambios sustanciales.",
        "Hay protocolos de actuación para casos de acoso sexual y/o por razón de sexo.",
        "Tu departamento ofrece las mismas oportunidades a hombres y a mujeres.",
        "Consideras necesario un plan de igualdad en la empresa."
    ];

    const preguntasPlant = [
        "En la empresa hay igualdad de trato y de oportunidades entre mujeres y hombres.",
        "La dirección está sensibilizada y comprometida con la igualdad.",
        "La selección de personal se realiza de forma objetiva, con las mismas oportunidades.",
        "A la hora de promocionar a puestos directivos se ofrecen las mismas posibilidades.",
        "La retribución se establece desde criterios de igualdad.",
        "Se favorece el ejercicio corresponsable de la vida personal y familiar.",
        "Las personas que se acogen a medidas de conciliación tienen las mismas oportunidades."
    ];

    const generarFilas = (preguntas, prefix) => {
        return preguntas.map((p, i) => {
            const val = fechas[`${prefix}_q${i}`] || '';
            return `<tr>
                <td style="text-align: left;">${i+1}. ${p}</td>
                <td>${val === '1' ? 'X' : ''}</td>
                <td>${val === '2' ? 'X' : ''}</td>
                <td>${val === '3' ? 'X' : ''}</td>
                <td>${val === '4' ? 'X' : ''}</td>
                <td>${val === 'ns' ? 'X' : ''}</td>
            </tr>`;
        }).join('');
    };

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Anexos V y VI - Encuestas de Opinión</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                body { font-family: 'Plus Jakarta Sans', sans-serif; padding: 3rem; color: #1e293b; line-height: 1.6; max-width: 900px; margin: 0 auto; background-color: #ffffff; }
                h1 { text-align: center; color: #0f172a; font-size: 1.8rem; letter-spacing: -0.03em; border-bottom: 3px solid #4f46e5; padding-bottom: 1rem; margin-bottom: 2.5rem; }
                h2 { color: #4f46e5; font-size: 1.3rem; margin-top: 3rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; }
                
                table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.85rem; }
                th, td { border: 1px solid #e2e8f0; padding: 0.75rem; text-align: center; }
                th { background-color: #f0f4f8; color: #4f46e5; font-weight: 700; }
                
                @media print { body { padding: 0; } .no-print { display: none !important; } * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="text-align: right; margin-bottom: 2rem;">
                <button onclick="window.print()" style="padding: 12px 24px; background: #6366f1; color: white; border: none; border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4); transition: background 0.2s;">🖨️ Imprimir / Guardar PDF</button>
            </div>
            
            <h1>Resultados de Encuestas de Opinión</h1>
            
            <h2>Anexo V. Cuestionario para la Dirección</h2>
            <table>
                <thead><tr><th style="text-align: left; width: 50%;">Afirmación</th><th>1</th><th>2</th><th>3</th><th>4</th><th>Ns/Nc</th></tr></thead>
                <tbody>${generarFilas(preguntasDir, 'a5')}</tbody>
            </table>

            <h2>Anexo VI. Cuestionario para la Plantilla</h2>
            <table>
                <thead><tr><th style="text-align: left; width: 50%;">Afirmación</th><th>1</th><th>2</th><th>3</th><th>4</th><th>Ns/Nc</th></tr></thead>
                <tbody>${generarFilas(preguntasPlant, 'a6')}</tbody>
            </table>
        </body>
        </html>
    `);
    ventana.document.close();
};
