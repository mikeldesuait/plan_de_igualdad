// fase2.js - Estructura de la Fase 2

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('fase2-contenido');
    if (!contenedor) return;

    let html = '';

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
