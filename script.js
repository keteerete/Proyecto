const data = {
"A00": {"Descripción": "Localización de avería/elaboración de presupuesto sin reparación de la misma", "Importe": 31.96},
"A06": {"Descripción": "Tapado con enlucido, m²", "Importe": 49.34, "Precio Especial": 39.48},
"A07": {"Descripción": "Tapado de cala con escayola, m²", "Importe": 57.13, "Precio Especial": 45.70},
"A08": {"Descripción": "Tapado con solado, m²", "Importe": 56.37, "Precio Especial": 45.11},
"A09": {"Descripción": "Tapado con terrazo/mármol, m²", "Importe": 69.54, "Precio Especial": 55.63},
"A10": {"Descripción": "Tapado con alicatado, m²", "Importe": 56.22, "Precio Especial": 44.98},
"A11": {"Descripción": "Tapado con hormigón, m²", "Importe": 98.44, "Precio Especial": 78.75},
"A12": {"Descripción": "Tapado de hueco sin terminación o enfoscado, m²", "Importe": 34.39, "Precio Especial": 27.52},
"A13": {"Descripción": "Sustitución de placas prefabricadas y de estructura, m²", "Importe": 56.06},
"A25": {"Descripción": "Alicatado/Solado de daños directos, m²", "Importe": 30.05, "Precio Especial": 26.07},
"A26": {"Descripción": "Tapado con pladur, incluyendo vendas, m²", "Importe": 77.07, "Precio Especial": 61.64},
"A43": {"Descripción": "Sólo sustitución de placas prefabricadas, m²", "Importe": 9.73},
"A44": {"Descripción": "Rehacer mocheta con escayola", "Importe": 69.40, "Precio Especial": 54.90},
"A45": {"Descripción": "Rehacer mocheta con alicatado", "Importe": 68.49, "Precio Especial": 54.18},
"A35": {"Descripción": "Tapado con fibra de vidrio, m²", "Importe": 60.87},
"A01": {"Descripción": "Picado en techo con escayola o enlucido", "Importe": 6.36},
"A02": {"Descripción": "Picado en paramentos verticales", "Importe": 9.56},
"A03": {"Descripción": "Picado en paramentos verticales con alicatado/enfoscado", "Importe": 9.38},
"A04": {"Descripción": "Picado en suelos con gres, terrazo o similares", "Importe": 12.71},
"A05": {"Descripción": "Picado en suelos de hormigón hasta 10 cm de espesor", "Importe": 15.44},
"A30": {"Descripción": "Apertura de zanjas, m³", "Importe": 36.16},
"A32": {"Descripción": "Levantado de mármol, m²", "Importe": 15.93},
"A33": {"Descripción": "Levantado de pavimento de corcho, sintasol, moqueta o PVC, m²", "Importe": 4.92},
"A14": {"Descripción": "Alicatado de superficies, precio por metro cuadrado hasta 3 m²", "Importe": 32.27, "Precio Especial": 32.27},
"A15": {"Descripción": "Solado de superficies, precio por metro cuadrado hasta 3 m²", "Importe": 32.27, "Precio Especial": 32.27},
"A16": {"Descripción": "Solado de superficies con terrazo o mármol, precio por metro cuadrado hasta 3 m²", "Importe": 35.02, "Precio Especial": 35.02},
"A34": {"Descripción": "Plus por colocación de revestimiento con malla, m²", "Importe": 6.99},
"A17": {"Descripción": "Picado, tendido y enlucido de superficies (acompañado de otros trabajos), m²", "Importe": 21.58},
"A18": {"Descripción": "Sólo picado, tendido y enlucido de superficies (único trabajo), precio hasta 3 m²", "Importe": 64.75, "Precio Especial": 21.58},
"A22": {"Descripción": "Raspado de superficies de escayola y enlucido de las mismas mediante pasta de escayola, m²", "Importe": 7.52},
"A31": {"Descripción": "Demolición y posterior reconstrucción de falso techo de escayola/yeso laminado, precio por m² hasta 5 m²", "Importe": 35.68, "Precio Especial": 32.11},
"A19": {"Descripción": "Moldura de escayola (incluye material), precio por metro lineal, hasta 3 metros", "Importe": 34.06, "Precio Especial": 11.36},
"A36": {"Descripción": "Desmontaje y montaje de placa prefabricada, m²", "Importe": 9.73},
"A37": {"Descripción": "Sólo desmontaje o montaje de placas prefabricadas, m²", "Importe": 4.87},
"A23a": {"Descripción": "Abrillantado de terrazo/mármol, hasta 20 m²", "Importe": 150.79, "Precio Especial": 7.76},
"A23b": {"Descripción": "Pulido y abrillantado de terrazo/mármol, hasta 20 m²", "Importe": 210.16, "Precio Especial": 10.71},
"C01": {"Descripción": "Localización de avería/elaboración de presupuesto sin reparación de la misma", "Importe": 47.41},
"C63": {"Descripción": "Intervención mínima trabajos de carpintería y carpintería metálica", "Importe": 46.19},
"C200": {"Descripción": "Sustitución de puerta de trastero de chapa galvanizada estándar", "Importe": 247.01, "Precio Especial": 247.01},
"C201": {"Descripción": "Sustitución de puerta de paso interior lisa calidad estándar maciza, MDF o aglomerado", "Importe": 371.79, "Precio Especial": 350.76},
"C203": {"Descripción": "Sustitución de puerta de paso interior lisa calidad estándar de tablero hueco", "Importe": 341.01, "Precio Especial": 319.97},
"C204": {"Descripción": "Sustitución de hoja de puerta de paso interior lisa calidad estándar maciza, MDF o aglomerado", "Importe": 245.28, "Precio Especial": 224.23},
"C206": {"Descripción": "Sustitución de hoja de puerta de paso interior lisa calidad estándar de tablero hueco", "Importe": 214.48, "Precio Especial": 198.56},
"C207": {"Descripción": "Suplemento moldura", "Importe": 30.81},
"C208": {"Descripción": "Suplemento modelos con vidrieras en puertas de interior (no incluye cristales)", "Importe": 63.11},
"C209": {"Descripción": "Sustitución de puerta de paso interior o sustitución de puerta de trastero (sólo mano de obra)", "Importe": 109.49, "Precio Especial": 79.90},
"C210": {"Descripción": "Sustitución de puerta de entrada maciza lisa estándar, sapelly o roble, cerradura incluida", "Importe": 749.23},
"C211": {"Descripción": "Sustitución de puerta de entrada blindada lisa estándar, sapelly o roble, cerradura incluida", "Importe": 826.60},
"C212": {"Descripción": "Sustitución de puerta de entrada acorazada lisa estándar, sapelly o roble, cerradura incluida", "Importe": 1227.12},
"C213": {"Descripción": "Sustitución de puerta de entrada (sólo mano de obra)", "Importe": 192.89},
"C207": {"Descripción": "Suplemento moldura", "Importe": 30.81},
"C70": {"Descripción": "Desmontaje y montaje de tapajuntas/jambas 1 ó 2 caras", "Importe": 38.85},
"C71": {"Descripción": "Desmontaje y montaje de cerco/bastidor", "Importe": 65.28},
"C72": {"Descripción": "Desmontaje y montaje de conjunto de cerco y jambas", "Importe": 97.61},
"C33": {"Descripción": "Desmontaje y montaje de hoja de puerta de paso", "Importe": 37.87},
"C34": {"Descripción": "Desmontaje y montaje de hoja de puerta de entrada", "Importe": 52.68},
"C600": {"Descripción": "Cepillado de puerta interior", "Importe": 41.98, "Precio Especial": 30.89},
"C610": {"Descripción": "Cepillado de puerta de entrada", "Importe": 75.91, "Precio Especial": 60.72},
"C611": {"Descripción": "Ajuste de puerta interior descolgada, incluso sustitución de bisagras en caso de ser necesario", "Importe": 42.78, "Precio Especial": 20.07},
"C621": {"Descripción": "Sustitución de mueble de lavabo estándar, hasta 65 cm", "Importe": 333.57},
"C622": {"Descripción": "Sustitución de mueble de lavabo estándar, hasta 90 cm", "Importe": 416.17},
"C623": {"Descripción": "Sustitución de mueble de lavabo estándar, hasta 100 cm", "Importe": 446.05},
"C624": {"Descripción": "Sustitución de mueble de lavabo estándar, hasta 120 cm", "Importe": 476.36},
"C620": {"Descripción": "Desmontaje y montaje de mueble de lavabo", "Importe": 88.75},
"C01": {"Descripción": "Localización de avería/elaboración de presupuesto sin reparación de la misma", "Importe": 47.41},
"C63": {"Descripción": "Intervención mínima trabajos de carpintería y carpintería metálica", "Importe": 46.19},
"F01": {"Descripción": "Localización de avería sin reparación de la misma", "Importe": 35.91},
"F44": {"Descripción": "Localización de avería acompañada de reparación de daños, desmontaje y montajes o mejora", "Importe": 20.70},
"F39": {"Descripción": "Localización con aparato termográfico (alquiler y uso), hora adicional", "Importe": 19.81},
"F08": {"Descripción": "Reparación de manguetón (incluye material)", "Importe": 61.60},
"F09": {"Descripción": "Reparación de bote sifónico (incluye material)", "Importe": 52.03},
"F10": {"Descripción": "Reparación de desagüe/sifón (incluye material)", "Importe": 34.70},
"F13": {"Descripción": "Reparación de válvula (incluye material)", "Importe": 20.05},
"F14": {"Descripción": "Reparación de tubería con soldadura o gebo hasta 1\" (incluye material)", "Importe": 59.41},
"F41": {"Descripción": "Reparación de filtraciones mediante lechada, por m² (incluye material)", "Importe": 12.92},
"F42": {"Descripción": "Sellado de banda de bañera/plato de ducha mediante cordón de silicona, por elemento (incluye material)", "Importe": 44.59},
"F43": {"Descripción": "Desatranco de inodoro, desagüe o bote sifónico, manual o con guía (no incluye líquido desatascador), hora", "Importe": 34.77},
"F52": {"Descripción": "Reparación de tubería con gebo de más de 1\" (incluye material)", "Importe": 66.11},
"F55": {"Descripción": "Cierre de tapones ciegos (incluye material)", "Importe": 26.23},
"F56": {"Descripción": "Reparación de tubería con manguito (incluye material)", "Importe": 47.14},
"F20": {"Descripción": "Sustitución de manguetón PVC (incluye d/m de sanitario, tramo de desagüe y modificaciones) (incluye material)", "Importe": 157.78},
"F21": {"Descripción": "Sustitución de manguetón PLOMO (incluye d/m de sanitario, tramo de desagüe y modificaciones) (incluye material)", "Importe": 157.78},
"F22": {"Descripción": "Sustitución de válvula sin rebosadero (incluye material)", "Importe": 42.92},
"F23": {"Descripción": "Sustitución de válvula y rebosadero (incluye material)", "Importe": 61.54},
"F24": {"Descripción": "Sustitución de bote sifónico PVC (empalmes y soldaduras hasta 5 salidas) (incluye material)", "Importe": 123.83},
"F25": {"Descripción": "Sustitución de bote sifónico PLOMO (empalmes y soldaduras hasta 5 salidas) (incluye material)", "Importe": 125.24},
"F26": {"Descripción": "Sustitución de bote sifónico GRAN CAPACIDAD (empalmes y soldaduras hasta 5 salidas) (incluye material)", "Importe": 151.81},
"F27": {"Descripción": "Sustitución de Y ó T, incluido tramo de tubería hasta 1 m (incluye material)", "Importe": 78.81},
"F29": {"Descripción": "Sustitución de sifón (incluye material)", "Importe": 43.56},
"F30": {"Descripción": "Sustitución o ajuste de grifería o mecanismo de cisterna (no incluye material)", "Importe": 36.89},
"F31": {"Descripción": "Sustitución de juego de latiguillos causando daños propios o a terceros (incluye material)", "Importe": 24.98},
"F50": {"Descripción": "Sustitución de llave y detentor de radiador (incluye material)", "Importe": 37.93},
"F51": {"Descripción": "Sustitución de llave de escuadra (incluye material)", "Importe": 47.34},
"F53": {"Descripción": "Sustitución de llave de corte (no incluye material)", "Importe": 47.34},
"F54": {"Descripción": "Sustitución de manguetón flexible o excéntrica, sin desmontaje de sanitario (incluye material)", "Importe": 33.95},
"F03": {"Descripción": "Picado en techo con escayola o enlucido (incluye material)", "Importe": 4.91},
"F04": {"Descripción": "Picado en paramentos verticales (incluye material)", "Importe": 6.50},
"F05": {"Descripción": "Picado en paramentos verticales con alicatado/enfoscado (incluye material)", "Importe": 6.50},
"F06": {"Descripción": "Picado en suelos con gres, terrazo o similares (incluye material)", "Importe": 6.50},
"F07": {"Descripción": "Picado en suelos de hormigón hasta 10 cm de espesor (no incluye material)", "Importe": 9.28},
"F57": {"Descripción": "Levantado de mármol, m²", "Importe": 15.90},
"F58": {"Descripción": "Levantado de pavimento de corcho, sintasol, moqueta o PVC, m²", "Importe": 4.91},
"D01": {"Descripción": "Desmontaje y montaje de inodoro (incluso cisterna), lavabo, bidet o fregadero", "Importe": 33.66},
"D04": {"Descripción": "Desmontaje y montaje de radiador", "Importe": 34.45},
"D05": {"Descripción": "Desmontaje y montaje de muebles de cocina/baño", "Importe": 26.76},
"D06": {"Descripción": "Desmontaje y montaje de encimera de aglomerado, m lineal", "Importe": 24.88},
"D07": {"Descripción": "Desmontaje y montaje de mampara", "Importe": 115.47},
"D10": {"Descripción": "Desmontaje y montaje de aparato de ósmosis", "Importe": 35.41},
"F46": {"Descripción": "Desatranco mediante máquina de presión o máquina eléctrica, primera hora de mano de obra (incluye material)", "Importe": 57.05},
"FC30": {"Descripción": "Reparación de bajante o injerto sin sustitución (incluye material)", "Importe": 48.67},
"FC31": {"Descripción": "Sustitución de bajante, hasta 3 m lineales (incluye material)", "Importe": 138.08},
"FC32": {"Descripción": "Sustitución de bajante, m lineal adicional (*) (incluye material)", "Importe": 40.16},
"FC33": {"Descripción": "Sustitución de injerto sencillo (incluye material)", "Importe": 123.17},
"FC34": {"Descripción": "Sustitución de injerto doble (incluye material)", "Importe": 137.25},
"FC35": {"Descripción": "Sustitución de codo de bajante (incluye material)", "Importe": 79.53},
"FC36": {"Descripción": "Sustitución de codo de bajante doble -derivación de bajante- (incluye material)", "Importe": 73.26},
"FC37": {"Descripción": "Suplemento para diámetros superiores a 125 mm (*)", "Importe": 8.64},
"FC40": {"Descripción": "Reparación de tubería general mediante soldadura (incluye material)", "Importe": 72.71},
"FC41": {"Descripción": "Reparación de tubería general mediante gebo hasta 2\" (incluye material)", "Importe": 89.31},
"FC42": {"Descripción": "Reparación de tubería general de plomo mediante soldadura (incluye material)", "Importe": 47.14},
"FC43": {"Descripción": "Sustitución de tubería general hasta 2\" y hasta 1 m lineal (incluye material)", "Importe": 100.39},
"FC44": {"Descripción": "Sustitución de tubería general hasta 2\" y hasta 3 m lineales (incluye material)", "Importe": 123.65},
"FC45": {"Descripción": "Sustitución de tubería general hasta 2\", m lineal adicional (*) (incluye material)", "Importe": 42.79},
"FC46": {"Descripción": "Suplemento por utilización de enlace gebo en sustituciones (*) (incluye material)", "Importe": 36.05},
"FC47": {"Descripción": "Sustitución de T de derivación de acometida (incluye material)", "Importe": 100.39},
"FC48": {"Descripción": "Suplemento para diámetros superiores a 2\" (*)", "Importe": 12.15},
"FC50": {"Descripción": "Vaciado y posterior llenado de circuito comunitario (hasta 3 horas) (incluye material)", "Importe": 35.77},
"MAF01": {"Descripción": "Cisterna: Mecanismo de descarga", "Importe": 22.33},
"MAF02": {"Descripción": "Cisterna: Mecanismo de alimentación", "Importe": 16.44},
"MAF03": {"Descripción": "Cisterna: Mecanismo completo", "Importe": 39.98},
"MAF04": {"Descripción": "Gebo tapa poros 1\"", "Importe": 19.99},
"MAF05": {"Descripción": "Válvulas sifónicas", "Importe": 21.17},
"MAF06": {"Descripción": "Manguetón tipo \"Wirkin\"", "Importe": 14.10},
"MAF07": {"Descripción": "Llave de corte 1\"", "Importe": 17.65},
"MAF13": {"Descripción": "Silicona SIKA (de uso exclusivo para Mutua Madrileña Hogar)", "Importe": 4.89},
"S00": {"Descripción": "Localización de avería/elaboración de presupuesto sin reparación de la misma", "Importe": 28.57},
"S01": {"Descripción": "Sustitución de inodoro (incluso cisterna), lavabo, bidet o fregadero", "Importe": 54.61},
"S04": {"Descripción": "Sustitución de mampara", "Importe": 135.51},
"S05": {"Descripción": "Modificación de tomas de sanitario", "Importe": 20.77},
"S40": {"Descripción": "Sólo sustitución de tapa o asiento de sanitario", "Importe": 32.97},
"S20": {"Descripción": "Retirada de plato de ducha antiguo", "Importe": 27.31},
"S21": {"Descripción": "Conexión de desagües de plato de ducha, modificando tomas si es necesario", "Importe": 42.76},
"S22": {"Descripción": "Recibido, nivelación y sellado de plato de ducha", "Importe": 47.29},
"S23": {"Descripción": "Reconstrucción de faldón de plato de ducha y/o alicatado de perímetro (1.ª banda de azulejos)", "Importe": 69.82},
"S30": {"Descripción": "Retirada de bañera antigua", "Importe": 39.23},
"S31": {"Descripción": "Conexión de desagües de bañera, modificando tomas si es necesario", "Importe": 43.05},
"S32": {"Descripción": "Recibido, nivelación y sellado de bañera", "Importe": 55.81},
"S33": {"Descripción": "Reconstrucción de faldón de bañera y/o alicatado de perímetro (1.ª banda de azulejos)", "Importe": 44.17},
"R01": {"Descripción": "Localización de avería/elaboración de presupuesto sin reparación de la misma", "Importe": 46.20},
"R02": {"Descripción": "Sustitución de persiana de PVC lama estándar o mini, venecianas o alicantinas estándar", "Importe": 81.84},
"R03": {"Descripción": "Sustitución de persiana de aluminio estándar", "Importe": 111.57},
"R04": {"Descripción": "Reparación de persiana estándar de PVC sustituyendo hasta 3 lamas (material incluido)", "Importe": 42.66},
"R05": {"Descripción": "Reparación de persiana estándar de aluminio sustituyendo hasta 3 lamas (material incluido)", "Importe": 58.68},
"R06": {"Descripción": "Reparación de cinta de persiana estándar (material incluido)", "Importe": 39.06},
"P00": {"Descripción": "Localización de avería/elaboración de presupuesto sin reparación de la misma", "Importe": 32.18},
"P05": {"Descripción": "Temple liso", "Importe": 56.22},
"P06": {"Descripción": "Temple picado", "Importe": 61.89},
"P07": {"Descripción": "Plástico liso o gota temple", "Importe": 65.40},
"P08": {"Descripción": "Gotelé acabado plástico", "Importe": 71.39},
"P09": {"Descripción": "Picado plástico, pasta rayada, arpillera o pétrea", "Importe": 76.54},
"P10": {"Descripción": "Tixotrópica o esmalte", "Importe": 74.15},
"P13": {"Descripción": "M² pintura a la cal para exteriores", "Importe": 74.01},
"P14": {"Descripción": "M² plástica exteriores", "Importe": 74.01},
"P30": {"Descripción": "M² de pintura, sólo mano de obra", "Importe": 40.10},
"P20": {"Descripción": "Suplemento por utilización de pinturas comerciales colores personalizados", "Importe": 9.10},
"MNT01": {"Descripción": "Colocación de cordón de impermeabilización de la banda de bañera, ducha o fregadero", "Importe": 49.54},
"MNT03": {"Descripción": "Reparación de grifos y llaves de paso", "Importe": 46.44},
"MNT04": {"Descripción": "Sustitución de grifos y llaves de paso (no incluye material)", "Importe": 46.44},
"MNT05": {"Descripción": "Ajuste de elementos sanitarios (inodoros, tapas, lavabos o bidé)", "Importe": 47.99},
"MNT06": {"Descripción": "Ajuste o sustitución de válvulas de desagües o rebosadero", "Importe": 47.60},
"MNT07": {"Descripción": "Ajuste o sustitución de latiguillos de tomas de agua y desagües de electrodomésticos", "Importe": 43.74},
"MNT09": {"Descripción": "Reparación de fuga en radiadores sin vaciado de circuito", "Importe": 52.63},
"MNT10": {"Descripción": "Desatasco de tuberías", "Importe": 57.28},
"MNT20": {"Descripción": "Reparación de mecanismos de cisterna sin sustitución", "Importe": 49.54},
"MNT21": {"Descripción": "Sustitución de pulsador, mecanismo de descarga o de alimentación", "Importe": 72.33},
"MNT22": {"Descripción": "Sustitución de mecanismo de cisterna completo", "Importe": 84.95},
"MNT31": {"Descripción": "Reparación de cerradura o cilindro sin sustitución", "Importe": 55.92},
"MNT32": {"Descripción": "Ajuste por cierres defectuoso de ventanas, puertas de armario, de paso o de acceso", "Importe": 55.92},
"MNT33": {"Descripción": "Reparación de persianas", "Importe": 65.25},
"MM01": {"Descripción": "Servicio de mantenimiento de fontanería (no incluye material)", "Importe": 39.14},
"MM02": {"Descripción": "Servicio de mantenimiento de carpintería (no incluye material)", "Importe": 52.32},
"MM03": {"Descripción": "Servicio de mantenimiento de cerrajería (no incluye material)", "Importe": 33.20},
"MM04": {"Descripción": "Servicio de mantenimiento de mecanismo de cisterna (no incluye material)", "Importe": 39.14},
"J00": {"Descripción": "Localización de avería/elaboración de presupuesto sin aceptación del mismo", "Importe": 28.81},
"J10": {"Descripción": "Sustitución de canalón de aluminio, metro (material incluido)", "Importe": 46.25},
"J11": {"Descripción": "Sustitución de canalón de cobre, metro (material incluido)", "Importe": 68.11},
"J12": {"Descripción": "Limpieza de canalón de PVC", "Importe": 26.58},
"J13": {"Descripción": "Sustitución de canalón de PVC, metro (material incluido)", "Importe": 38.11},
"J15": {"Descripción": "Sustitución de sumidero de terraza", "Importe": 112.47},
"M01": {"Descripción": "Tarifa por hora general", "Importe": 20.71},
"M02": {"Descripción": "Tarifa por hora general ayudante", "Importe": 14.89},
"M09": {"Descripción": "Tarifa por hora limpieza", "Importe": 17.90},
"M10": {"Descripción": "Mano de obra oficial tejados", "Importe": 21.91},
"M11": {"Descripción": "Mano de obra ayudante tejados", "Importe": 14.75},
"CUN": {"Descripción": "Recargo servicio prestado en nocturno o festivo", "Importe": 35.09},
"CPD01": {"Descripción": "Suplemento por plus de peligrosidad en trabajos descolgados", "Importe": 193.36},
"CPE": {"Descripción": "Plus de peligrosidad para trabajos en altura sin medios auxiliares (andamio, escalera, grúa/máquina elevadora)", "Importe": 84.95},
"CPA": {"Descripción": "Plus de peligrosidad para trabajos en altura con uso de medios auxiliares (andamio, escalera, grúa/máquina elevadora)", "Importe": 39.67},
"D02": {"Descripción": "Desmontaje y montaje de plato de ducha", "Importe": 54.67},
"D03": {"Descripción": "Desmontaje y montaje de bañera", "Importe": 86.11},
"D04": {"Descripción": "Desmontaje y montaje de radiador", "Importe": 34.45},
"D05": {"Descripción": "Desmontaje y montaje de muebles de cocina/baño", "Importe": 26.76},
"D07": {"Descripción": "Desmontaje y montaje de mampara", "Importe": 115.47},
"D10": {"Descripción": "Desmontaje y montaje de aparato de ósmosis", "Importe": 35.41},
"TC22": {"Descripción": "Desmontaje y montaje, sin sustitución, de campana extractora convencional", "Importe": 62.87},
"TC34": {"Descripción": "Desmontaje y montaje, sin sustitución, de campana extractora decorativa", "Importe": 59.27},
"TC12": {"Descripción": "Desmontaje y montaje, sin sustitución, de placa de cocina o vitrocerámica", "Importe": 62.87},
"CD02": {"Descripción": "Desmontaje y montaje de caldera", "Importe": 290.60},
"CD04": {"Descripción": "Desmontaje y montaje de calentador", "Importe": 145.30},
"BFL01": {"Descripción": "Bricofácil Fontanería (incluye hasta 2 horas de mano de obra)", "Importe": 31.68},
"BFL03": {"Descripción": "Bricofácil Cristalería (incluye hasta 2 horas de mano de obra)", "Importe": 32.77},
"BFL11": {"Descripción": "Bricofácil Cristalería, hora adicional", "Importe": 14.11},
"BFL04": {"Descripción": "Bricofácil Electricidad (incluye hasta 2 horas de mano de obra)", "Importe": 44.84},
"BFL05": {"Descripción": "Bricofácil Persianas (incluye hasta 2 horas de mano de obra)", "Importe": 46.41},
"BFL06": {"Descripción": "Bricofácil Albañilería (incluye hasta 2 horas de mano de obra)", "Importe": 32.15},
"Q30": {"Descripción": "Sellado de arquetas con limpieza de marco, incluido el material", "Importe": 13.89},
"Q31": {"Descripción": "Arreglo simple, tipo lámparas, bricofácil", "Importe": 21.98}

};

function agregarFila() {
    const table = document.querySelector('#presupuesto table tbody');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.innerHTML = '<input type="text" class="codigo">';
    cell2.innerHTML = '<input type="text" class="descripcion">';
    cell3.innerHTML = '<input type="number" class="precio">';
    cell4.innerHTML = '<input type="number" class="cantidad" value="1">';
    cell5.innerHTML = '<span class="total">0</span> €';
    cell6.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';

    actualizarTotales();
}

function eliminarFila(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    actualizarTotales();
}

function buscarCodigo() {
    const modal = document.getElementById('modalBusqueda');
    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById('modalBusqueda');
    modal.style.display = "none";
}

function search() {
    console.log("prueba");
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = ''; // Clear previous results

    for (let code in data) {
        if (data[code].Descripción.toLowerCase().includes(searchInput)) {
            const row = resultsTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.textContent = code;
            cell2.textContent = data[code].Descripción;
            cell3.textContent = data[code].Importe.toFixed(2) + ' €';

            row.onclick = function() {
                agregarCodigo(code, data[code].Descripción, data[code].Importe);
                cerrarModal();
            };
        }
    }
}

function agregarCodigo(codigo, descripcion, precio) {
    const table = document.querySelector('#presupuesto table tbody');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.innerHTML = '<input type="text" class="codigo" value="' + codigo + '" readonly>';
    cell2.innerHTML = '<input type="text" class="descripcion" value="' + descripcion + '" readonly>';
    cell3.innerHTML = '<input type="number" class="precio" value="' + precio.toFixed(2) + '" readonly>';
    cell4.innerHTML = '<input type="number" class="cantidad" value="1">';
    cell5.innerHTML = '<span class="total">' + precio.toFixed(2) + '</span> €';
    cell6.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';

    actualizarTotales();
}

function actualizarTotales() {
    const rows = document.querySelectorAll('#presupuesto table tbody tr');
    let totalPresupuesto = 0;

    rows.forEach(row => {
        const precio = parseFloat(row.querySelector('.precio').value);
        const cantidad = parseFloat(row.querySelector('.cantidad').value);
        const total = precio * cantidad;
        row.querySelector('.total').textContent = total.toFixed(2);
        totalPresupuesto += total;
    });

    document.getElementById('totalPresupuesto').textContent = totalPresupuesto.toFixed(2) + ' €';
}

// Listener para detectar cambios en la cantidad y actualizar totales automáticamente
document.addEventListener('input', function(event) {
    if (event.target && event.target.classList.contains('cantidad')) {
        actualizarTotales();
    }
});

function imprimirPresupuesto() {
    actualizarTotales();
    const cliente = document.getElementById('cliente').value;
    const direccion = document.getElementById('direccion').value;
    const tablaPresupuesto = document.querySelector('#presupuesto table').outerHTML;
    const totalPresupuesto = document.getElementById('totalPresupuesto').textContent;
    const ventana = window.open('', '', 'height=600,width=800');

    ventana.document.write(`
        <html>
        <head>
            <title>Presupuesto</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #333; }
                table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                tbody tr:nth-child(even) { background-color: #f9f9f9; }
                .total-row { font-weight: bold; }
                th:nth-child(6), td:nth-child(6) { display: none; }
            </style>
        </head>
        <body>
            <h1>Presupuesto</h1>
            <p><strong>Cliente:</strong> ${cliente}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            ${tablaPresupuesto}
            <p><strong>Total:</strong> ${totalPresupuesto}</p>
        </body>
        </html>
    `);

    ventana.document.close();
    ventana.print();
}
