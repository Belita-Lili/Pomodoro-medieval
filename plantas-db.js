// ============================================================
//  CAMINO REAL · BASE DE DATOS DE PLANTAS MEDICINALES
//  Compartida por todos los pueblos
// ============================================================

const PLANTAS_DB = [
  // PUEBLO 1 – Aldea Serena (Manzanilla)
  {
    id: "manzanilla", nombre: "Manzanilla", emoji: "🌼",
    familia: "Asteraceae", origen: "Europa y Asia occidental",
    partes: "Flores y hojas",
    propiedades: ["Calmante", "Digestiva", "Antiinflamatoria", "Antibacteriana"],
    usos: [
      "Infusión para aliviar indigestión y espasmos intestinales",
      "Compresas cálidas para dolores musculares",
      "Vapores para congestión nasal",
      "Enjuague bucal para aftas"
    ],
    contraindicaciones: "Evitar si hay alergia a plantas de la familia Asteraceae.",
    preparacion: "1 cucharada de flores secas en 250 ml de agua caliente. Infusionar 5–8 min.",
    color_planta: "#f7d44a",
    color_borde: "#e0a800",
    icono_carta: "🌼",
    semillas_necesarias: 8,
    variantes: [
      { nombre: "Manzanilla Romana", emoji: "🌼", raro: false },
      { nombre: "Manzanilla Alemana", emoji: "💛", raro: false },
      { nombre: "Manzanilla Silvestre", emoji: "🌾", raro: true }
    ]
  },

  // PUEBLO 2 – Bosque Menta
  {
    id: "menta", nombre: "Menta", emoji: "🌿",
    familia: "Lamiaceae", origen: "Europa y Asia",
    partes: "Hojas y tallos",
    propiedades: ["Estimulante mental", "Digestiva", "Analgésica", "Antimicrobiana"],
    usos: [
      "Té para mejorar concentración y claridad mental",
      "Aceite esencial en sienes para cefaleas tensionales",
      "Inhalación de vapor para descongestionar vías respiratorias",
      "Cataplasma para picaduras de insectos"
    ],
    contraindicaciones: "No aplicar en niños menores de 2 años. Evitar dosis altas en embarazo.",
    preparacion: "8–10 hojas frescas en agua hirviendo. Infusionar 5 min tapado.",
    color_planta: "#6bcc55",
    color_borde: "#3a8a2a",
    icono_carta: "🌿",
    semillas_necesarias: 10,
    variantes: [
      { nombre: "Menta Piperita", emoji: "🌿", raro: false },
      { nombre: "Hierbabuena", emoji: "🍃", raro: false },
      { nombre: "Menta Marroquí", emoji: "✨", raro: true },
      { nombre: "Poleo Menta", emoji: "🌱", raro: false }
    ]
  },

  // PUEBLO 3 – Rincón del Romero
  {
    id: "romero", nombre: "Romero", emoji: "🍃",
    familia: "Lamiaceae", origen: "Cuenca mediterránea",
    partes: "Hojas y flores",
    propiedades: ["Estimulante circulatorio", "Antioxidante", "Neuroprotector", "Antiséptico"],
    usos: [
      "Infusión para mejorar memoria y concentración",
      "Aceite de romero en masajes para aliviar dolores articulares",
      "Enjuague capilar para estimular crecimiento del cabello",
      "Condimento medicinal en comidas"
    ],
    contraindicaciones: "Contraindicado en epilepsia. Precaución en embarazo y lactancia.",
    preparacion: "1–2 ramitas en 250 ml de agua. Hervir 2 min, infusionar 10 min.",
    color_planta: "#5a9a3a",
    color_borde: "#3a7a2a",
    icono_carta: "🍃",
    semillas_necesarias: 12,
    variantes: [
      { nombre: "Romero Común", emoji: "🍃", raro: false },
      { nombre: "Romero Rastrero", emoji: "🌲", raro: false },
      { nombre: "Romero de Hoja Ancha", emoji: "🌿", raro: true }
    ]
  },

  // PUEBLO 4 – Valle Lavanda
  {
    id: "lavanda", nombre: "Lavanda", emoji: "🌸",
    familia: "Lamiaceae", origen: "Mediterráneo occidental",
    partes: "Flores y esencias",
    propiedades: ["Ansiolítica", "Sedante suave", "Antiséptica", "Cicatrizante"],
    usos: [
      "Aromaterapia para reducir ansiedad y estrés",
      "Sachet aromático bajo la almohada para mejorar el sueño",
      "Aceite esencial diluido para quemaduras leves",
      "Baño relajante con flores secas"
    ],
    contraindicaciones: "No ingerir aceite esencial puro. Prueba de alergia antes de aplicar.",
    preparacion: "2 cucharadas de flores secas en 300 ml de agua caliente. Infusionar 7 min.",
    color_planta: "#9b59b6",
    color_borde: "#7d3c98",
    icono_carta: "🌸",
    semillas_necesarias: 10,
    variantes: [
      { nombre: "Lavanda Angustifolia", emoji: "🌸", raro: false },
      { nombre: "Lavanda Española", emoji: "💜", raro: false },
      { nombre: "Lavanda Dentada", emoji: "⭐", raro: true },
      { nombre: "Espliega", emoji: "🌾", raro: false }
    ]
  },

  // PUEBLO 5 – Aldea Albahaca
  {
    id: "albahaca", nombre: "Albahaca Sagrada", emoji: "🌱",
    familia: "Lamiaceae", origen: "India y Sudeste Asiático",
    partes: "Hojas, flores y semillas",
    propiedades: ["Adaptógena", "Antiestresante", "Inmunomoduladora", "Hipoglucemiante"],
    usos: [
      "Infusión del Tulsi para equilibrar energía y reducir cortisol",
      "Masticar hojas frescas para aftas y problemas bucales",
      "Vapores para congestión bronquial",
      "Jugo de hojas para picaduras e irritaciones de piel"
    ],
    contraindicaciones: "Precaución con medicamentos anticoagulantes. Evitar en embarazo avanzado.",
    preparacion: "5–8 hojas frescas o 1 cdta seca en agua hirviendo. Infusionar 5 min.",
    color_planta: "#4c9a2a",
    color_borde: "#2a7a10",
    icono_carta: "🌱",
    semillas_necesarias: 14,
    variantes: [
      { nombre: "Tulsi (Albahaca Sagrada)", emoji: "🌱", raro: false },
      { nombre: "Albahaca Morada", emoji: "💜", raro: false },
      { nombre: "Albahaca Limón", emoji: "🍋", raro: true },
      { nombre: "Albahaca Tailandesa", emoji: "✨", raro: true }
    ]
  },

  // PUEBLO 6 – Pueblo Valeriana
  {
    id: "valeriana", nombre: "Valeriana", emoji: "⭐",
    familia: "Valerianaceae", origen: "Europa y Asia",
    partes: "Raíz y rizoma",
    propiedades: ["Sedante", "Ansiolítica", "Espasmolítica", "Relajante muscular"],
    usos: [
      "Infusión nocturna para insomnio y nerviosismo",
      "Extracto para reducir ansiedad sin efectos secundarios graves",
      "Baño con raíz en polvo para tensión muscular",
      "Combinada con melisa para síndrome del colon irritable"
    ],
    contraindicaciones: "No combinar con alcohol ni sedantes. No conducir tras su uso. Evitar en embarazo.",
    preparacion: "1 cdta de raíz seca en 250 ml de agua fría. Macerar 8 horas (preparación en frío).",
    color_planta: "#8b6b4a",
    color_borde: "#6b4b2a",
    icono_carta: "⭐",
    semillas_necesarias: 14,
    variantes: [
      { nombre: "Valeriana Officinalis", emoji: "⭐", raro: false },
      { nombre: "Valeriana Mexicana", emoji: "🌟", raro: false },
      { nombre: "Valeriana de Jalisco", emoji: "💫", raro: true }
    ]
  },

  // PUEBLO 7 – Ciudad Ginkgo
  {
    id: "ginkgo", nombre: "Ginkgo Biloba", emoji: "🍀",
    familia: "Ginkgoaceae", origen: "China",
    partes: "Hojas",
    propiedades: ["Neuroprotector", "Vasodilatador", "Antioxidante potente", "Mejora cognitiva"],
    usos: [
      "Extracto estandarizado para mejorar memoria y concentración",
      "Infusión para vértigo y tinnitus",
      "Apoyo en prevención de deterioro cognitivo",
      "Mejora circulación periférica en extremidades"
    ],
    contraindicaciones: "No combinar con warfarina ni aspirina. Suspender 2 semanas antes de cirugías.",
    preparacion: "1 cdta de hojas secas trituradas en 250 ml de agua. Hervir 10 min, infusionar 5 min.",
    color_planta: "#7a9a5a",
    color_borde: "#5a7a3a",
    icono_carta: "🍀",
    semillas_necesarias: 16,
    variantes: [
      { nombre: "Ginkgo Estándar", emoji: "🍀", raro: false },
      { nombre: "Ginkgo Enano", emoji: "🌿", raro: false },
      { nombre: "Ginkgo Dorado", emoji: "✨", raro: true },
      { nombre: "Ginkgo Maidenhair", emoji: "🍃", raro: true }
    ]
  },

  // CASTILLO – Hipérico / Espino Blanco
  {
    id: "hipericum", nombre: "Hipérico", emoji: "🌻",
    familia: "Hypericaceae", origen: "Europa y Asia occidental",
    partes: "Flores y sumidades floridas",
    propiedades: ["Antidepresivo natural", "Antiinflamatorio", "Antiviral", "Cicatrizante"],
    usos: [
      "Infusión para depresión leve a moderada",
      "Aceite de hipérico para quemaduras y dolor muscular",
      "Extracto para ansiedad y trastornos del sueño",
      "Aplicación tópica para cicatización de heridas"
    ],
    contraindicaciones: "Fotosensibilizante: evitar sol directo. Interacciones con anticonceptivos y antirretrovirales.",
    preparacion: "1–2 cdtas de flores frescas o secas en 250 ml de agua. Infusionar 10 min en oscuridad.",
    color_planta: "#e8b45e",
    color_borde: "#c87a2a",
    icono_carta: "🌻",
    semillas_necesarias: 20,
    variantes: [
      { nombre: "Hipérico Perforatum", emoji: "🌻", raro: false },
      { nombre: "Hipérico Olimpo", emoji: "☀️", raro: true },
      { nombre: "Hipérico Calicinum", emoji: "🌟", raro: true }
    ]
  }
];

// Hongos medicinales (bonus drops en pueblos)
const HONGOS_DB = [
  { id: "reishi", nombre: "Reishi", emoji: "🍄", propiedades: ["Inmunomodulador", "Adaptógeno", "Hepatoprotector"], color: "#8b0000" },
  { id: "chaga", nombre: "Chaga", emoji: "🍄‍🟫", propiedades: ["Antioxidante extremo", "Anticancerígeno", "Antiviral"], color: "#4a3320" },
  { id: "melena", nombre: "Melena de León", emoji: "🦁", propiedades: ["Neuroprotector", "Regenera nervios", "Mejora memoria"], color: "#f5a623" },
  { id: "cordyceps", nombre: "Cordyceps", emoji: "🌾", propiedades: ["Energizante", "Adaptógeno", "Mejora resistencia"], color: "#8b6914" }
];

// Frutas medicinales (bonus drops)
const FRUTAS_DB = [
  { id: "acai", nombre: "Açaí", emoji: "🫐", propiedades: ["Antioxidante", "Energía", "Antiinflamatorio"], color: "#4b0082" },
  { id: "camu", nombre: "Camu Camu", emoji: "🍒", propiedades: ["Vitamina C extrema", "Antidepresivo", "Antiviral"], color: "#cc2244" },
  { id: "morinda", nombre: "Noni", emoji: "🍈", propiedades: ["Antibacteriano", "Anticancerígeno", "Analgésico"], color: "#7a9a3a" },
  { id: "schisandra", nombre: "Schisandra", emoji: "🍇", propiedades: ["Adaptógeno", "Hepatoprotector", "5 sabores"], color: "#8b0055" }
];

// ─── ESTADO GLOBAL DEL JUEGO (localStorage) ─────────────────────────────────
const SAVE_KEY = "caminoRealV2";

function cargarEstado() {
  const raw = localStorage.getItem(SAVE_KEY);
  const defaults = {
    semillas: 3,
    pomodorosCompletados: 0,
    timerRestante: 25 * 60,
    timerModo: "estudio", // estudio | descanso
    timerActivo: false,
    pueblosDesbloqueados: [0], // índices desbloqueados
    pueblosCompletados: [],    // índices completados
    plantasAprendidas: [],     // IDs de plantas aprendidas
    plantasPorPueblo: {},      // { "0": [{id, variante, x, y, timestamp}], ... }
    logEventos: []
  };
  if (!raw) return defaults;
  try { return { ...defaults, ...JSON.parse(raw) }; }
  catch { return defaults; }
}

function guardarEstado(estado) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(estado));
}

function resetearJuego() {
  if (confirm("⚠️ ¿Reiniciar todo el progreso? Esta acción no se puede deshacer.")) {
    localStorage.removeItem(SAVE_KEY);
    location.reload();
  }
}

// Calcula cuántas semillas necesita el siguiente pueblo
function semillasParaPueblo(indicePueblo) {
  return PLANTAS_DB[indicePueblo]?.semillas_necesarias ?? 10;
}

// Verifica si un pueblo está completado (bosque lleno)
function puebloCompletado(indicePueblo) {
  const estado = cargarEstado();
  const plantas = estado.plantasPorPueblo[String(indicePueblo)] || [];
  return plantas.length >= semillasParaPueblo(indicePueblo);
}

// Devuelve info del pueblo por índice
const PUEBLOS_INFO = [
  { id: 0, nombre: "Aldea Serena",       archivo: "pueblo1.html", planta: "manzanilla", x_mapa: 12,  y_mapa: 35, emoji: "🏕️" },
  { id: 1, nombre: "Bosque Menta",        archivo: "pueblo2.html", planta: "menta",      x_mapa: 24,  y_mapa: 42, emoji: "🌲" },
  { id: 2, nombre: "Rincón del Romero",   archivo: "pueblo3.html", planta: "romero",     x_mapa: 37,  y_mapa: 28, emoji: "⛰️" },
  { id: 3, nombre: "Valle Lavanda",        archivo: "pueblo4.html", planta: "lavanda",    x_mapa: 50,  y_mapa: 55, emoji: "🌸" },
  { id: 4, nombre: "Aldea Albahaca",      archivo: "pueblo5.html", planta: "albahaca",   x_mapa: 63,  y_mapa: 38, emoji: "🌱" },
  { id: 5, nombre: "Pueblo Valeriana",    archivo: "pueblo6.html", planta: "valeriana",  x_mapa: 75,  y_mapa: 48, emoji: "⭐" },
  { id: 6, nombre: "Ciudad Ginkgo",       archivo: "pueblo7.html", planta: "ginkgo",     x_mapa: 87,  y_mapa: 35, emoji: "🍀" },
  { id: 7, nombre: "Castillo Real",       archivo: "castillo.html", planta: "hipericum",  x_mapa: 95,  y_mapa: 42, emoji: "👑", esCastillo: true }
];
