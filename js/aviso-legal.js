// aviso-legal.js - Inyecta el modal de Aviso Legal completo

document.addEventListener('DOMContentLoaded', () => {
    const modalHTML = `
        <div id="modalPrivacidad" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15, 23, 42, 0.6); z-index:9999; align-items:center; justify-content:center; padding: 1rem; backdrop-filter: blur(4px);">
            <div style="background:#ffffff; max-width:850px; width:100%; border-radius:16px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; max-height: 90vh;">
                
                <div style="background:#f8fafc; padding:1.5rem; display:flex; justify-content:space-between; align-items:center; border-radius: 16px 16px 0 0; border-bottom: 1px solid #e2e8f0;">
                    <h3 style="margin:0; font-size: 1.2rem; color: #1e293b;">⚖️ Aviso Legal y Privacidad</h3>
                    <button onclick="document.getElementById('modalPrivacidad').style.display='none'" style="background:none; border:none; color:#64748b; font-size:1.5rem; cursor:pointer;">✕</button>
                </div>
                
                <div style="padding:2rem; font-size:0.9rem; overflow-y:auto; line-height: 1.6; color: #475569;">
                    
                    <h4 style="color: #0f172a; margin-top: 0; margin-bottom: 0.5rem;">1. Información General (LSSI)</h4>
                    <p>En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI), se informa que esta aplicación web es una herramienta de carácter personal, creada por <strong>Miguel Ángel García Rodríguez</strong> para facilitar la gestión interna del Plan de Igualdad en el seno de la comisión negociadora. Para cualquier consulta o duda, puede contactar en: <strong>mikeldesuait@gmail.com</strong>. Esta herramienta no tiene carácter comercial ni ánimo de lucro.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">2. Protección de Datos (RGPD)</h4>
                    <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD, se informa que los datos personales introducidos en esta aplicación (nombres de las personas que forman parte de la comisión, asistencias, notas, etc.) son tratados de forma estrictamente local con la única finalidad de gestionar el Plan de Igualdad (amparado por el RD 901/2020). La persona responsable del tratamiento de estos datos es la propia persona usuaria que los introduce (la comisión negociadora).</p>
                    <p>Los derechos de acceso, rectificación, supresión y oposición pueden ejercerse simplemente borrando los datos desde la propia aplicación o contactando con el correo indicado arriba.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">3. Almacenamiento 100% Local (Sin Servidores)</h4>
                    <p><strong>Esta aplicación no dispone de base de datos en la nube ni envía información a ningún servidor.</strong> Todos los datos que usted introduce se guardan exclusivamente en el almacenamiento local de su propio navegador (LocalStorage e IndexedDB). El creador de la herramienta no tiene acceso, en ningún momento, a los datos de la empresa ni de las personas trabajadoras. La pérdida de datos por borrado de caché es responsabilidad de la persona usuaria, por lo que se recomienda el uso de las copias de seguridad (.json).</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">4. Política de Cookies</h4>
                    <p>Esta web <strong>no utiliza cookies</strong> propias de análisis, publicidad ni rastreo. Únicamente utiliza el almacenamiento técnico necesario para el funcionamiento de la herramienta. Al no utilizar cookies propias de terceros, no se requiere el consentimiento explícito mediante banner.</p>
    <p><strong>Nota sobre YouTube:</strong> La aplicación incluye enlaces externos a vídeos alojados en YouTube (por ejemplo, el seminario web oficial del Instituto de las Mujeres). Al hacer clic en esos enlaces, abandonas esta aplicación y accedes a un sitio web de Google (YouTube), que puede utilizar sus propias cookies y recopilar datos según su política de privacidad. Te recomendamos revisar la política de privacidad de YouTube antes de interactuar con esos contenidos.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">5. Propiedad Intelectual y Fuentes</h4>
                    <p>Esta herramienta ha utilizado como referencia los textos legales y guías oficiales publicados por el <strong>Ministerio de Igualdad</strong> y el <strong>Instituto de las Mujeres</strong> en su web (<a href="https://www.igualdadenlaempresa.es" target="_blank" rel="noopener noreferrer" style="color: #4f46e5;">www.igualdadenlaempresa.es</a>), cuyo contenido es susceptible de reutilización citando la fuente. Los textos legales (BOE) son de dominio público. El código fuente de esta aplicación es de creación propia y se ofrece sin ánimo de lucro para uso interno de la comisión negociadora.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">6. Exención de Responsabilidad</h4>
                    <p>Esta aplicación es una <strong>herramienta de apoyo a la gestión interna</strong> y no sustituye el asesoramiento legal, laboral o administrativo profesional. La información generada (actas, informes, medidas) debe ser revisada y validada por las personas que forman parte de la comisión negociadora. El creador de la app no se hace responsable del uso que se haga de los documentos generados ni de las decisiones adoptadas a partir de ellos.</p>
                    <p>La información contenida no podrá ser alegada en procesos contradictorios con la Administración Pública. Únicamente se consideran auténticos los textos legales publicados en el BOE.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">7. Alojamiento (GitHub Pages) y Enlaces Externos</h4>
                    <p>El código fuente de esta aplicación está alojado en GitHub Pages. Al acceder a la web, GitHub puede registrar la dirección IP del visitante por motivos técnicos de seguridad (logs), sin que el creador de esta app tenga acceso a dichos datos.</p>
                    <p>Esta herramienta incluye enlaces a sitios web externos, entre ellos:</p>
    <ul style="margin: 0.5rem 0 1rem 1.5rem; padding: 0; font-size: 0.85rem;">
        <li><strong>Normativas oficiales</strong>: BOE, Ministerio de Igualdad, Instituto de las Mujeres.</li>
        <li><strong>Recursos de apoyo</strong>: el seminario web de valoración de puestos alojado en <strong>YouTube</strong> (canal del Instituto de las Mujeres), y documentos descargables en formato PDF o Excel.</li>
    </ul>
    <p>Al hacer clic en cualquiera de estos enlaces, la persona usuaria <strong>abandona esta aplicación</strong> y accede a sitios web externos cuyas políticas de privacidad y de cookies son ajenas a este proyecto. En particular, al acceder a <strong>YouTube</strong> (propiedad de Google LLC), se aplican los términos y políticas de privacidad de dicha plataforma, sobre los que el creador de esta herramienta no tiene control ni responsabilidad.</p>

                </div>
                
                <div style="padding: 1rem 2rem; background:#f8fafc; text-align:right; border-top:1px solid #e2e8f0; border-radius: 0 0 16px 16px;">
                    <button onclick="document.getElementById('modalPrivacidad').style.display='none'" style="padding: 0.6rem 1.5rem; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">He leído y entiendo</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Configurar el footer (Versión + Aviso Legal)
    const footer = document.querySelector('.main-footer');
    if (footer) {
        footer.innerHTML = '';

        footer.style.display = 'flex';
        footer.style.justifyContent = 'space-between';
        footer.style.alignItems = 'center';
        footer.style.padding = '1.5rem 2rem';
        footer.style.borderTop = '1px solid #e2e8f0';
        footer.style.backgroundColor = '#ffffff';
        footer.style.flexWrap = 'wrap';
        footer.style.gap = '1rem';

        const divIzq = document.createElement('div');
        divIzq.style.display = 'flex';
        divIzq.style.alignItems = 'center';
        divIzq.style.gap = '0.75rem';
        divIzq.innerHTML = `
            <span style="color: #64748b; font-size: 0.85rem;">&copy; 2026 Plan de Igualdad</span>
            <span style="background: #f1f5f9; color: #64748b; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Versión 2.0</span>
        `;

        const divDer = document.createElement('div');
        const enlace = document.createElement('a');
        enlace.href = '#';
        enlace.style = 'color: #4f46e5; text-decoration: none; font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.4rem; transition: color 0.2s;';
        enlace.innerHTML = '<span style="font-size: 1rem;">⚖️</span> Aviso Legal y Privacidad';
        enlace.onclick = (e) => {
            e.preventDefault();
            document.getElementById('modalPrivacidad').style.display = 'flex';
        };
        enlace.onmouseover = () => enlace.style.color = '#4338ca';
        enlace.onmouseout = () => enlace.style.color = '#4f46e5';
        
        divDer.appendChild(enlace);

        footer.appendChild(divIzq);
        footer.appendChild(divDer);
    }
});
