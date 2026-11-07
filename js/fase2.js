// fase2.js - Estructura de la Fase 2

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('fase2-contenido');
    if (!contenedor) return;

    let html = '';

    // --- CARTEL DE AVISO PREVIO (VPT -> Registro -> Auditoría) ---
    html += '<div id="aviso-fase2" style="background: #fffbeb; border-left: 6px solid #f59e0b; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem;">';
    html += '<div style="font-size: 1.8rem; line-height: 1;">⚠️</div>';
    html += '<div>';
    html += '<h4 style="margin: 0 0 0.5rem 0; color: #92400e; font-size: 1.05rem; font-weight: 700;">Requisito Previo Obligatorio (RD 902/2020)</h4>';
    html += '<p style="margin: 0 0 0.75rem 0; color: #78350f; font-size: 0.95rem; line-height: 1.6;">';
    html += 'Para que el diagnóstico de esta Fase 2 sea válido, es necesario haber completado previamente las tres obligaciones retributivas en este orden:';
    html += '</p>';
    html += '<ol style="margin: 0 0 1rem 0; padding-left: 1.5rem; color: #78350f; font-size: 0.95rem; line-height: 1.6;">';
    html += '<li><strong>Valoración de Puestos de Trabajo</strong>: agrupa los puestos de igual valor (obligatorio para empresas de +50 personas trabajadoras).</li>';
    html += '<li><strong>Registro Retributivo</strong>: refleja promedios y medianas por sexo y grupo profesional, incluyendo las agrupaciones de igual valor.</li>';
    html += '<li><strong>Auditoría Retributiva</strong>: analiza la brecha salarial y propone un plan de actuación. Su resultado forma parte de este diagnóstico.</li>';
    html += '</ol>';
    html += '<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">';
    html += '<a href="valoracion.html" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem; background: #ffffff; border: 1px solid #fcd34d; border-radius: 6px; color: #92400e; font-size: 0.85rem; font-weight: 600; text-decoration: none;">⚖️ 1. Valoración de Puestos</a>';
    html += '<a href="registro.html" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem; background: #ffffff; border: 1px solid #fcd34d; border-radius: 6px; color: #92400e; font-size: 0.85rem; font-weight: 600; text-decoration: none;">💰 2. Registro Retributivo</a>';
    html += '<a href="auditoria.html" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem; background: #ffffff; border: 1px solid #fcd34d; border-radius: 6px; color: #92400e; font-size: 0.85rem; font-weight: 600; text-decoration: none;">🔍 3. Auditoría Retributiva</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // --- PASO 1: METODOLOGÍA ---
    html += '<div class="paso-bloque">';
    html += '<div class="paso-titulo">1. Metodología del Diagnóstico</div>';
    html += '<div class="info-grid">';
    html += '<div class="info-box"><strong>¿Qué hacemos?</strong><p>Definir el proceso, las fechas, las herramientas y las personas que van a realizar el diagnóstico.</p></div>';
    html += '<div class="info-box"><strong>¿Por qué es importante?</strong><p>El diagnóstico debe ser riguroso y trazable. Sin fechas ni responsables, no tiene validez legal.</p></div>';
    html += '<div class="info-box"><strong>¿Para qué sirve?</strong><p>Formaliza la metodología que se incluirá en el Informe Diagnóstico (Anexo VII).</p></div>';
    html += '<div class="info-box"><strong>Base Legal</strong><p>RD 901/2020, Art. 7.2.</p></div>';
    html += '</div>';
    if (typeof window.renderPaso1 === 'function') html += window.renderPaso1();
    html += '</div>';

    // --- PASO 2: FICHA DE LA EMPRESA (ANEXO III) ---
    html += '<div class="paso-bloque" style="border-top: 1px solid #e2e8f0; padding-top: 2rem; margin-top: 2rem;">';
    html += '<div class="paso-titulo">2. Ficha de Identificación de la Empresa (Anexo III)</div>';
    html += '<div class="info-grid">';
    html += '<div class="info-box"><strong>¿Qué hacemos?</strong><p>Recopilar los datos básicos de identificación, actividad, dimensión y organización de la empresa.</p></div>';
    html += '<div class="info-box"><strong>¿Por qué es importante?</strong><p>Es la base del informe diagnóstico. Sin estos datos, no se puede contextualizar el análisis.</p></div>';
    html += '<div class="info-box"><strong>¿Para qué sirve?</strong><p>Formaliza la información básica que se incluirá en el Informe Diagnóstico (Anexo VII).</p></div>';
    html += '<div class="info-box"><strong>Base Legal</strong><p>RD 901/2020, Anexo III.</p></div>';
    html += '</div>';
    if (typeof window.renderAnexo3 === 'function') html += window.renderAnexo3();
    html += '</div>';

    // --- PASO 3: ANÁLISIS DE GESTIÓN (ANEXO IV) ---
    html += '<div class="paso-bloque" style="border-top: 1px solid #e2e8f0; padding-top: 2rem; margin-top: 2rem;">';
    html += '<div class="paso-titulo">3. Análisis Cuantitativo y Cualitativo de Gestión (Anexo IV)</div>';
    html += '<div class="info-grid">';
    html += '<div class="info-box"><strong>¿Qué hacemos?</strong><p>Analizar los procesos de selección, formación y promoción con perspectiva de género.</p></div>';
    html += '<div class="info-box"><strong>¿Por qué es importante?</strong><p>Detecta sesgos en los procesos de Recursos Humanos que afectan a la igualdad de oportunidades.</p></div>';
    html += '<div class="info-box"><strong>¿Para qué sirve?</strong><p>Permite identificar en qué áreas hay desequilibrios y diseñar medidas correctoras.</p></div>';
    html += '<div class="info-box"><strong>Base Legal</strong><p>RD 901/2020, Anexo IV.</p></div>';
    html += '</div>';
    if (typeof window.renderAnexo4 === 'function') html += window.renderAnexo4();
    html += '</div>';

    // --- PASO 4: ENCUESTAS (ANEXOS V Y VI) ---
    html += '<div class="paso-bloque" style="border-top: 1px solid #e2e8f0; padding-top: 2rem; margin-top: 2rem;">';
    html += '<div class="paso-titulo">4. Análisis Cualitativo: Encuestas de Opinión (Anexos V y VI)</div>';
    html += '<div class="info-grid">';
    html += '<div class="info-box"><strong>¿Qué hacemos?</strong><p>Recoger la percepción de la plantilla y de la dirección sobre la igualdad en la empresa mediante encuestas anónimas.</p></div>';
    html += '<div class="info-box"><strong>¿Por qué es importante?</strong><p>Los datos numéricos no son suficientes. La percepción del clima laboral y los sesgos culturales solo se detectan preguntando.</p></div>';
    html += '<div class="info-box"><strong>¿Para qué sirve?</strong><p>Complementa el diagnóstico cuantitativo y da voz a la plantilla en el proceso.</p></div>';
    html += '<div class="info-box"><strong>Base Legal</strong><p>Guía del Ministerio, Fase 2. Anexos V y VI.</p></div>';
    html += '</div>';
    if (typeof window.renderAnexo56 === 'function') html += window.renderAnexo56();
    html += '</div>';

    // --- PASO 5: ANÁLISIS RETRIBUTIVO (ANEXO VIII) ---
    html += '<div class="paso-bloque" style="border-top: 1px solid #e2e8f0; padding-top: 2rem; margin-top: 2rem;">';
    html += '<div class="paso-titulo">5. Análisis Retributivo y Brecha Salarial</div>';
    html += '<div class="info-grid">';
    html += '<div class="info-box"><strong>¿Qué hacemos?</strong><p>Analizar los datos del registro retributivo y calcular la brecha salarial entre mujeres y hombres por grupos de igual valor.</p></div>';
    html += '<div class="info-box"><strong>¿Por qué es importante?</strong><p>La igualdad retributiva es una obligación legal. La brecha salarial es la manifestación más clara de la desigualdad.</p></div>';
    html += '<div class="info-box"><strong>¿Para qué sirve?</strong><p>Permite identificar si existe discriminación retributiva y diseñar medidas para corregirla.</p></div>';
    html += '<div class="info-box"><strong>Base Legal</strong><p>RD 902/2020, Arts. 5, 6 y 7.</p></div>';
    html += '</div>';
    if (typeof window.renderAnexo8 === 'function') html += window.renderAnexo8();
    html += '</div>';

    contenedor.innerHTML = html;
});
