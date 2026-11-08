// seed-fase2.js - Cargar datos ficticios de ejemplo para la Fase 2

window.cargarDatosEjemplo = function() {
    if (!confirm('⚠️ Se van a cargar datos de ejemplo en la Fase 2. ¿Continuar? (No se borrarán tus datos actuales, solo se añadirán los de ejemplo donde falten)')) {
        return;
    }

    const datos = {
        p1_inicio_recogida: '2026-01-15',
        p1_fin_recogida: '2026-02-15',
        p1_inicio_diag: '2026-02-16',
        p1_fin_diag: '2026-03-15',
        p1_personas: 'Comisión Negociadora y consultora externa Igualdad S.L.',
        p1_herr_analisis: true,
        p1_herr_cuestionarios: true,
        p1_herr_entrevistas: false,
        a3_forma: 'S.L.',
        a3_anio: '2010',
        a3_rep_nombre: 'Carlos Pérez',
        a3_rep_cargo: 'Director General',
        a3_rep_telf: '912345678',
        a3_rep_email: 'carlos@empresa.com',
        a3_ig_nombre: 'Laura García',
        a3_ig_cargo: 'Responsable de RRHH',
        a3_ig_telf: '912345679',
        a3_ig_email: 'laura@empresa.com',
        a3_sector: 'Tecnología',
        a3_cnae: '6201',
        a3_desc: 'Desarrollo de software y consultoría tecnológica.',
        a3_dispersion: 'Madrid y Barcelona',
        a3_mujeres: '120',
        a3_hombres: '148',
        a3_centros: '2',
        a3_facturacion: '5000000',
        a3_depto: 'Sí, departamento de RRHH con 3 personas.',
        a3_certificados: 'Distintivo Igualdad en la Empresa (DIE) 2024',
        a3_rlt_m: '4',
        a3_rlt_h: '3',
        a4_sel_crit_objetivos: true,
        a4_sel_equipo_mixto: true,
        a4_sel_formacion_igualdad: true,
        a4_sel_preguntas_neutras: true,
        a4_prom_proc_objetivo: true,
        a4_prom_informa_plantilla: true,
        a4_prom_fomenta_subrep: true,
        a4_prom_equipo_mixto: true,
        a4_form_horas_iguales: true,
        a4_form_toda_plantilla_igualdad: true,
        a4_form_horario_laboral: true,
        a4_form_habilidades_equilibrio: true,
        a5_q0: '4', a5_q1: '4', a5_q2: '4', a5_q3: '4', a5_q4: '4', a5_q5: '4', a5_q6: '4',
        a6_q0: '3', a6_q1: '3', a6_q2: '3', a6_q3: '3', a6_q4: '3', a6_q5: '3', a6_q6: '3',
        a8_sal_muj: '25000',
        a8_sal_hom: '27000',
        a8_comp_muj: '3000',
        a8_comp_hom: '4500',
        a8_extra_muj: '1000',
        a8_extra_hom: '1200',
        a8_g_0_m: '45000', a8_g_0_h: '48000',
        a8_g_1_m: '32000', a8_g_1_h: '35000',
        a8_g_2_m: '28000', a8_g_2_h: '29000',
        a8_g_3_m: '22000', a8_g_3_h: '22000',
        a8_g_4_m: '18000', a8_g_4_h: '18500'
    };

    const existentes = JSON.parse(localStorage.getItem('pi_fechas_fases') || '{}');
    const fusionados = { ...existentes, ...datos };
    localStorage.setItem('pi_fechas_fases', JSON.stringify(fusionados));

    alert('✅ Datos de ejemplo cargados. La página se recargará para verlos.');
    location.reload();
};

window.borrarDatosEjemplo = function() {
    if (!confirm('⚠️ Se van a borrar TODOS los datos de la Fase 2 (los reales y los de ejemplo). ¿Continuar?')) {
        return;
    }
    localStorage.removeItem('pi_fechas_fases');
    alert('✅ Datos borrados. La página se recargará.');
    location.reload();
};
