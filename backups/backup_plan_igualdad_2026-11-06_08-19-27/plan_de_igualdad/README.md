📋 Gestor de Plan de Igualdad
Herramienta web local (sin servidores) para la gestión completa del Plan de Igualdad de una empresa, basada en el Real Decreto 901/2020 y las guías oficiales del Ministerio de Igualdad.

🎯 Objetivo del Proyecto
Facilitar al comité de igualdad (RLPT y empresa) la creación, auditoría, seguimiento y registro del Plan de Igualdad, generando automáticamente los documentos legales exigidos (Anexos del Ministerio) y permitiendo la firma digital corporativa.

Todo el trabajo se guarda exclusivamente en el navegador del usuario (localStorage), garantizando la privacidad y el cumplimiento del RGPD sin necesidad de servidores externos.

🛠️ Stack Tecnológico
Frontend: HTML5, CSS3 (Vanilla + Soft UI), JavaScript (ES6+).

Persistencia: localStorage del navegador (100% local).

Backend: Ninguno.

Entorno: Ubuntu Linux (terminal), servidor local con python3 -m http.server.

Diseño: Estilo Soft UI / Neumorfismo suave (sombras, relieve, colores claros e índigo).

📂 Estructura del Proyecto
plan_de_igualdad/
├── index.html # Dashboard principal
├── configuracion.html # Datos de empresa, comité y fechas
├── cumplimiento.html # Fases 1 a 5 (asistente paso a paso)
├── seguridad.html # Copias de seguridad (Backup JSON)
├── css/
│ └── styles.css # Todo el diseño (Soft UI + magia CSS)
├── js/
│ ├── modelo.js # Cerebro de datos (get/save Config, Comité, etc.)
│ ├── nav.js # Menú superior
│ ├── usuario-selector.js # Selector "Documento actualizado por:"
│ ├── configuracion.js # Lógica del formulario de configuración
│ ├── cumplimiento.js # Lógica de fases, generación de PDFs y alertas
│ ├── fases-ui.js # Lógica de las tarjetas desplegables (acordeón)
│ ├── seguridad.js # Exportar/Importar Backup JSON
│ ├── aviso-legal.js # Inyecta el modal legal y el footer
│ └── toast.js # (Pendiente) Notificaciones flotantes
├── ministerio/ # Carpeta con todos los PDFs oficiales del Ministerio
│ ├── plandeigualdad/
│ ├── auditoríasretributivas/
│ └── ...
└── README.md

🚦 Estado Actual del Desarrollo
✅ Fase 1: Puesta en Marcha (TERMINADA)
☑ Configuración inicial: Datos de empresa, CIF, dirección, etc.
☑ Comisión Negociadora: Miembros separados por Empresa y Trabajadores, con cargos estandarizados y género.
☑ Detección de Paridad: Alerta si hay menos del 40% o más del 60% de mujeres en algún bando, con justificación en el PDF.
☑ Fechas configurables: Fecha de inicio de negociación, fecha de constitución, fecha de reunión.
☑ Anexo I (Apertura): Generación automática en PDF con datos de la empresa y materias a negociar.
☑ Anexo II (Constitución): Acta de constitución con miembros, funciones, calendario, sistema de sustitución y recomendaciones (formación, circular, lenguaje inclusivo).
☑ Lista de asistencia: Marcar por cada miembro si está Presencial, Telemático o No asiste (con tachado en el PDF).
☑ Modalidad de la reunión: Presencial, 100% Telemática, Mixta o Asíncrona.
☑ Paso 3 (Recomendado): Generación de Circular Informativa para la plantilla.
☑ Aviso Legal y Privacidad: Modal completo (LSSI, RGPD, propiedad intelectual, exención de responsabilidad).
☑ Footer: Versión 1.0 y enlace visible al Aviso Legal.
☑ Seguridad: Descargar y restaurar Copia de Seguridad (.json).
⏳ Pendiente de Desarrollo
□ Fase 2 (Diagnóstico): Herramienta de análisis cuantitativo (datos de plantilla) y cualitativo (encuestas).
□ Fase 3 (Diseño y Registro): Definición de medidas (tabla CRUD) y Acta de Aprobación.
□ Fase 4 (Implantación): Fichas de seguimiento y estados.
□ Fase 5 (Evaluación): Informe final de evaluación.
□ Módulo de Reuniones (Libro de Actas): Gestión de actas con firmas digitales y exportación/importación en cadena.
□ Generador de Informe Final: PDF completo con auditoría, medidas y firmas.
□ Guía de uso: Página de ayuda para el usuario.
□ Módulo de notificaciones (Toast): Notificaciones flotantes en lugar de alert().
📝 Método de Trabajo (Para nuevos chats)
NO usar nano para código largo. Usar siempre cat > archivo << 'EOF' o Python (python3 - << 'PYEOF') para evitar cortes y errores de comillas.

Verificar sintaxis siempre con node --check archivo.js antes de probar en el navegador.

El diseño es prioritario: Respetar las clases CSS existentes (card, btn-generar, info-box, fase-tarjeta, grid-form). Usar Soft UI.

Los datos nunca salen del navegador. No añadir dependencias externas ni llamadas a APIs.

Cada fase es una tarjeta horizontal que se despliega. No hacer scrolls infinitos.

No usar páginas del Ministerio directamente en la app (solo enlazar a los PDFs de la carpeta ministerio/).

Para nuevas fases: Añadir las tarjetas en cumplimiento.html y la lógica en cumplimiento.js. Mantener el mismo estilo de bloques de información (¿Qué hacemos?, ¿Por qué?, Base Legal).

Al añadir campos nuevos: Asegurarse de guardarlos en localStorage con guardarFecha() y recuperarlos al cargar.

🚀 Cómo arrancar en local
En un terminal nuevo:

cd ~/Escritorio/"NCR Atleos"/plan_de_igualdad
python3 -m http.server 8081

Abrir en el navegador: http://localhost:8081

🔐 Seguridad y Privacidad
No hay cookies de rastreo.

No hay servidores. Todos los datos viven en localStorage del navegador.

Recomendación: Hacer copias de seguridad periódicas desde la pestaña "Seguridad" y guardar el archivo .json en un lugar seguro.

Última actualización: Versión 1.0 - Noviembre 2026
