// acoso.js - Lógica para la página de Guía de Acoso

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('acoso-contenido');
    if (!contenedor) return;

    renderPaginaAcoso(contenedor);
});

function renderPaginaAcoso(contenedor) {
    let html = '';

    // --- 1. AVISO PREVIO OBLIGATORIO ---
    html += '<div style="background: #eef2ff; border-left: 6px solid #4f46e5; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">🛡️</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #3730a3; font-size: 1.05rem; font-weight: 700;">Tolerancia Cero</h4>';
    html += '<p style="margin: 0; color: #312e81; font-size: 0.95rem; line-height: 1.6;">';
    html += 'La empresa debe garantizar un entorno de trabajo seguro y libre de violencia. El protocolo frente al acoso sexual y por razón de sexo es <strong>obligatorio</strong> para todas las empresas (Art. 48 LO 3/2007 y Art. 12 LOGILS), independientemente de su tamaño, y debe negociarse con la representación legal de la plantilla.';
    html += '</p>';
    html += '</div></div></div>';

    // --- 2. TARJETAS INFORMATIVAS (Tipos de conductas) ---
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">';
    
    // Tarjeta 1: Acoso Sexual
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">🚫 Acoso Sexual</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Cualquier comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad de una persona y cree un entorno intimidatorio, degradante u ofensivo. Incluye insinuaciones, proposiciones, chantaje sexual (quid pro quo) y acoso ambiental.</p>';
    html += '</div>';

    // Tarjeta 2: Acoso por razón de sexo
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">⚧️ Acoso por razón de sexo</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Cualquier comportamiento realizado en función del sexo de una persona (por ser mujer, embarazo, maternidad, lactancia, o por asumir roles de cuidado) con el propósito de atentar contra su dignidad y crear un entorno hostil.</p>';
    html += '</div>';

    // Tarjeta 3: Violencia Digital
    html += '<div class="card" style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">';
    html += '<h4 style="margin: 0 0 0.75rem 0; color: #4f46e5; font-size: 1rem; font-weight: 700;">💻 Violencia Digital</h4>';
    html += '<p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Acoso sexual o por razón de sexo cometido a través de internet, redes sociales o mensajería: difusión de imágenes sin consentimiento (porno venganza), ciberflashing, doxing, outing, o creación de imágenes falsas con IA.</p>';
    html += '</div>';
    html += '</div>';

    // --- 3. RESUMEN DE DERECHOS Y ACTUACIÓN ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">¿Qué puedo hacer si sufro acoso?</h3>';
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';
    
    const pasos = [
        { icono: '📞', titulo: 'Llama al 016 o 900 191 010', desc: 'Servicios de información y asesoramiento gratuitos del Instituto de las Mujeres. También puedes contactar con tus representantes sindicales.' },
        { icono: '📄', titulo: 'Activa el protocolo interno', desc: 'Presenta una queja o denuncia a través del canal confidencial establecido en el protocolo de tu empresa.' },
        { icono: '⚖️', titulo: 'Denuncia ante la Inspección o Juzgado', desc: 'Puedes acudir a la Inspección de Trabajo, al Juzgado de lo Social o a la vía penal. Conserva todas las pruebas (correos, mensajes, testigos).' }
    ];

    pasos.forEach(p => {
        html += `<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; display: flex; gap: 0.75rem;">`;
        html += `<div style="font-size: 1.5rem; line-height: 1;">${p.icono}</div>`;
        html += `<div>`;
        html += `<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 0.25rem;">${p.titulo}</div>`;
        html += `<div style="font-size: 0.85rem; color: #64748b; line-height: 1.5;">${p.desc}</div>`;
        html += `</div></div>`;
    });
    html += '</div>';

    // --- 4. ENLACES A LOS DOCUMENTOS ---
    html += '<h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">Descarga los Documentos Oficiales</h3>';
    html += '<p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem;">Materiales completos del Ministerio de Igualdad y el Instituto de las Mujeres:</p>';

    html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">';

    // Botón 1: Protocolo
    html += '<a href="ministerio/Acososexualyacosoporrazóndesexo/Protocolo_Acoso_Sexual_Por_Razon_Sexo_2023.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📖</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Protocolo de Acoso (2023)</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Modelo completo oficial. Incluye declaración de principios y procedimiento.</div>';
    html += '</div></a>';

    // Botón 2: Conoce tus derechos
    html += '<a href="ministerio/Acososexualyacosoporrazóndesexo/Conoce_tus_derechos.pdf" target="_blank" style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📢</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">¡Conoce tus derechos!</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Infografía con los derechos de las víctimas y los recursos de ayuda.</div>';
    html += '</div></a>';

    // Botón 3: Modelo editable
    html += '<a href="ministerio/Acososexualyacosoporrazóndesexo/ModIProtEmpConPdI.docx" download style="display: flex; align-items: center; gap: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor=\'#4f46e5\'; this.style.boxShadow=\'0 4px 12px rgba(79,70,229,0.1)\';" onmouseout="this.style.borderColor=\'#e2e8f0\'; this.style.boxShadow=\'0 2px 4px rgba(0,0,0,0.02)\';">';
    html += '<div style="font-size: 2rem;">📝</div>';
    html += '<div>';
    html += '<div style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Modelo Editable (Word)</div>';
    html += '<div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">Plantilla del protocolo para adaptar a tu empresa.</div>';
    html += '</div></a>';

    html += '</div>';

    // --- 5. AVISO FINAL ---
    html += '<div style="background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 1.25rem; margin-top: 2rem; font-size: 0.9rem; color: #78350f; line-height: 1.6;">';
    html += '<strong>⚠️ Recuerda:</strong> El protocolo de acoso debe <strong>negociarse con la representación legal de la plantilla</strong> y formar parte del Plan de Igualdad. Su incumplimiento puede ser constitutivo de infracción grave o muy grave según la LISOS, con sanciones de hasta 225.018 €.';
    html += '</div>';

    // --- 6. FUENTE OFICIAL ---
    html += '<div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; text-align: center;">';
    html += '<p style="margin: 0;">Fuente oficial de los materiales: <a href="https://www.igualdadenlaempresa.es" target="_blank" rel="noopener noreferrer" style="color: #4f46e5; text-decoration: none; font-weight: 600;">Instituto de las Mujeres - Igualdad en la Empresa</a>.</p>';
    html += '<p style="margin: 0.25rem 0 0 0; font-size: 0.75rem;">Protocolo conforme al Art. 48 LO 3/2007 y Art. 12 LOGILS.</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}
