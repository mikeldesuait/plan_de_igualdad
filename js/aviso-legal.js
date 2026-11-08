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
                    <p>En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI), se informa que esta aplicación web es una herramienta privada, accesible en el dominio <strong>portalrlpt.es</strong>, diseñada para ayudar a las <strong>Representaciones Legales de las Personas Trabajadoras (RLPT)</strong> y a las <strong>empresas</strong> en la gestión del Plan de Igualdad y en la negociación colectiva. La herramienta podrá ampliarse en el futuro con nuevas funcionalidades y áreas de gestión relacionadas con la igualdad y las relaciones laborales. Para cualquier consulta o duda, puede contactar en: <strong>info@portalrlpt.es</strong>. Actualmente, esta herramienta es de acceso libre y gratuito.</p>
                    
                    <details style="margin-top: 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0;">
                        <summary style="cursor: pointer; font-size: 0.85rem; color: #475569; font-weight: 500; padding: 0.75rem 1rem; list-style: none; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 0.7rem; color: #94a3b8;">▶</span> Datos identificativos del titular
                        </summary>
                        <div style="padding: 0 1rem 0.75rem 1rem; font-size: 0.85rem; color: #475569; line-height: 1.6; border-top: 1px solid #f1f5f9;">
                            <p style="margin: 0.75rem 0 0.25rem 0;"><strong>Nombre y apellidos:</strong> Miguel Ángel García Rodríguez</p>
                            <p style="margin: 0 0 0.25rem 0;"><strong>NIF:</strong> [TU DNI AQUÍ]</p>
                            <p style="margin: 0 0 0.25rem 0;"><strong>Domicilio:</strong> [TU CIUDAD O APARTADO DE CORREOS AQUÍ]</p>
                            <p style="margin: 0;"><strong>Correo electrónico:</strong> info@portalrlpt.es</p>
                        </div>
                    </details>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">2. Protección de Datos (RGPD)</h4>
                    <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD, se informa que los datos personales introducidos en esta aplicación (nombres de las personas que forman parte de la comisión, asistencias, notas, etc.) son tratados de forma estrictamente local con la única finalidad de gestionar el Plan de Igualdad (amparado por el RD 901/2020). La persona responsable del tratamiento de estos datos es la propia persona usuaria que los introduce (la comisión negociadora).</p>
                    <p>Los derechos de acceso, rectificación, supresión y oposición pueden ejercerse simplemente borrando los datos desde la propia aplicación o contactando con el correo indicado arriba.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">3. Almacenamiento 100% Local y Logs del Servidor</h4>
                    <p><strong>Esta aplicación no dispone de base de datos en la nube ni envía la información que introduces a ningún servidor.</strong> Todos los datos que introduces (empresa, comité, reuniones, actas, etc.) se guardan exclusivamente en el almacenamiento local de tu propio navegador (LocalStorage). <strong>Ni el titular de la aplicación ni el proveedor de alojamiento web tienen acceso, en ningún momento, a los datos que introduces en la herramienta.</strong> La pérdida de datos por borrado de caché es responsabilidad de la persona usuaria, por lo que se recomienda el uso de las copias de seguridad (.json).</p>
                    <p><strong>Importante:</strong> El proveedor de alojamiento web (hosting) únicamente genera <strong>logs de acceso al sitio web</strong> (dirección IP, navegador, fecha/hora, páginas solicitadas), con la finalidad de garantizar la seguridad y el funcionamiento técnico del servicio. <strong>Estos logs no incluyen, en ningún caso, los datos personales o laborales que introduces en la aplicación</strong> (nombres, salarios, actas, etc.), ya que esa información nunca llega al servidor. El titular de esta aplicación no tiene acceso a dichos logs ni los utiliza para identificar a personas concretas. La base legal para el tratamiento de los logs es el interés legítimo en el mantenimiento y la seguridad del servicio (Art. 6.1.f RGPD).</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">4. Política de Cookies</h4>
                    <p>Esta web <strong>no utiliza cookies</strong> propias de análisis, publicidad ni rastreo. Únicamente utiliza el almacenamiento técnico necesario para el funcionamiento de la herramienta. Al no utilizar cookies propias de terceros, no se requiere el consentimiento explícito mediante banner.</p>
    <p><strong>Nota sobre YouTube:</strong> La aplicación incluye enlaces externos a vídeos alojados en YouTube (por ejemplo, el seminario web oficial del Instituto de las Mujeres). Al hacer clic en esos enlaces, abandonas esta aplicación y accedes a un sitio web de Google (YouTube), que puede utilizar sus propias cookies y recopilar datos según su política de privacidad. Te recomendamos revisar la política de privacidad de YouTube antes de interactuar con esos contenidos.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">5. Propiedad Intelectual y Fuentes</h4>
                    <p>Esta herramienta ha utilizado como referencia los textos legales y guías oficiales publicados por el Ministerio de Igualdad y el Instituto de las Mujeres en su web (www.igualdadenlaempresa.es), cuyo contenido es susceptible de reutilización citando la fuente. Los textos legales (BOE) son de dominio público. El código fuente, el diseño y el contenido de esta aplicación son de creación propia y están protegidos por los derechos de propiedad intelectual de su autor. Se ofrece de forma gratuita para uso interno de la comisión negociadora, quedando prohibida su reproducción, distribución o modificación sin autorización expresa.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">6. Exención de Responsabilidad</h4>
                    <p>Esta aplicación es una <strong>herramienta de apoyo a la gestión interna</strong> y no sustituye el asesoramiento legal, laboral o administrativo profesional. La información generada (actas, informes, medidas) debe ser revisada y validada por las personas que forman parte de la comisión negociadora. El creador de la app no se hace responsable del uso que se haga de los documentos generados ni de las decisiones adoptadas a partir de ellos.</p>
                    <p>La información contenida no podrá ser alegada en procesos contradictorios con la Administración Pública. Únicamente se consideran auténticos los textos legales publicados en el BOE.</p>

                    <h4 style="color: #0f172a; margin-top: 1.5rem; margin-bottom: 0.5rem;">7. Alojamiento y Enlaces Externos</h4>
                    <p>Esta aplicación está alojada en un proveedor de servicios de alojamiento web bajo el dominio <strong>portalrlpt.es</strong>. Dicho proveedor puede generar registros (logs) de acceso que incluyen direcciones IP, navegador, fecha/hora y páginas solicitadas, con la finalidad de garantizar la seguridad y el correcto funcionamiento del servicio. El titular de esta aplicación no tiene acceso a esos logs ni los utiliza para identificar a personas concretas.</p>
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

// --- MANUAL DE USO (Modal) ---
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('modalManualUso')) return;

    const manualHTML = `
        <div id="modalManualUso" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15, 23, 42, 0.6); z-index:9999; align-items:center; justify-content:center; padding: 1rem; backdrop-filter: blur(4px);">
            <div style="background:#ffffff; max-width:900px; width:100%; border-radius:16px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; max-height: 90vh;">
                <div style="background:#f8fafc; padding:1.5rem; display:flex; justify-content:space-between; align-items:center; border-radius: 16px 16px 0 0; border-bottom: 1px solid #e2e8f0;">
                    <h3 style="margin:0; font-size: 1.2rem; color: #1e293b;">📖 Guía de Uso</h3>
                    <button onclick="cerrarManualUso()" style="background:none; border:none; color:#64748b; font-size:1.5rem; cursor:pointer;">✕</button>
                </div>
                <div style="padding:2rem; overflow-y:auto; line-height: 1.6; color: #475569;">
                    <h4 style="color: #4f46e5; margin-top: 0;">¿Qué es esta herramienta?</h4>
                    <p>Es una aplicación web para gestionar el Plan de Igualdad y la negociación colectiva, diseñada para que <strong>la RLPT y la empresa</strong> trabajen de forma conjunta y documentada.</p>

                    <h4 style="color: #4f46e5;">¿Cómo funciona?</h4>
                    <ul style="padding-left: 1.5rem;">
                        <li><strong>Configuración:</strong> Introduce los datos de la empresa y los miembros de la comisión.</li>
                        <li><strong>Pasos del Plan:</strong> Sigue las 5 fases oficiales (constitución, diagnóstico, diseño, implantación y evaluación).</li>
                        <li><strong>Herramientas preceptivas:</strong> La Valoración de Puestos, el Registro Retributivo y la Auditoría Retributiva son las herramientas que alimentan el diagnóstico.</li>
                        <li><strong>Reuniones y Actas:</strong> Registra las reuniones y genera actas vinculadas a cada una.</li>
                    </ul>

                    <h4 style="color: #4f46e5;">🔒 Confidencialidad y Privacidad</h4>
                    <p><strong>Tus datos son 100% privados.</strong> Esta herramienta <strong>no tiene servidores</strong>: toda la información que introduces (empresa, comité, salarios, actas, etc.) se guarda exclusivamente en el <strong>almacenamiento local de tu navegador</strong> (LocalStorage). Ni el titular de la app ni el proveedor de alojamiento tienen acceso a esos datos.</p>
                    <p>Puedes hacer copias de seguridad (y restaurarlas) desde la pestaña <strong>Configuración → Copia de Seguridad</strong>.</p>

                    <h4 style="color: #4f46e5;">📚 Recursos oficiales</h4>
                    <p>Esta herramienta se basa en las guías del <strong>Instituto de las Mujeres</strong> y en los Reales Decretos 901/2020 y 902/2020. Puedes descargar las guías y herramientas oficiales desde las pestañas correspondientes.</p>
                </div>
                <div style="padding: 1rem 2rem; background:#f8fafc; text-align:right; border-top:1px solid #e2e8f0; border-radius: 0 0 16px 16px;">
                    <button onclick="cerrarManualUso()" style="padding: 0.6rem 1.5rem; background: #4f46e5; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Entendido</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', manualHTML);
});

window.abrirManualUso = function() {
    const modal = document.getElementById('modalManualUso');
    if (modal) modal.style.display = 'flex';
};

window.cerrarManualUso = function() {
    const modal = document.getElementById('modalManualUso');
    if (modal) modal.style.display = 'none';
};
