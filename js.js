// --- 1. PREPARACION EXAMEN (PREGUNTAS DEL PDF) ---
const preguntas = [
    // --- EPÍGRAFE 1: MARKETING DIGITAL ---
    {
        pregunta: "1. ¿Qué significa descontar un efecto comercial?:",
        opciones: ["Pedir un anticipo al banco.", "Cobrarlo después de la fecha.", "Aplazar su pago.","Cancelarlo antes de tiempo"],
        respuestaCorrecta: "Pedir un anticipo al banco."
    },
    {
        pregunta: "2. Para calcular el capital final según la ley de la capitalización simple tenemos que ...:",
        opciones: ["Sumar los intereses totales al capital inicial.", "Restar los intereses totales al capital inicial.", "Multiplicar el tipo de interés por el capital final.","Multiplicar el tipo de interés por el plazo."],
        respuestaCorrecta: "Adapta las técnicas clásicas a entornos digitales y permite medir resultados en tiempo real."
    },
    {
        pregunta: "3. Cuando hablamos de un aplazamiento en el pago que un proveedor concede a una empresa estamos hablando de ...?",
        opciones: ["Aumentar la visibilidad online.", "Crear oportunidades comerciales.", "Eliminar la competencia en el mercado."],
        respuestaCorrecta: "Eliminar la competencia en el mercado."
    },
    {
        pregunta: "4. La mezcla de marketing está compuesta por:",
        opciones: ["Producto, precio, distribución y comunicación.", "Producto, logística, datos y métricas.", "Cliente, tecnología, posicionamiento y ventas."],
        respuestaCorrecta: "Producto, precio, distribución y comunicación."
    },
    {
        pregunta: "5. ¿Qué entendemos por e-commerce?",
        opciones: ["La compraventa de bienes y servicios a través de Internet.", "La creación de un plan de marketing digital.", "La fidelización de clientes en tienda física."],
        respuestaCorrecta: "La compraventa de bienes y servicios a través de Internet."
    },
    {
        pregunta: "6. Una de las características principales del e-commerce es:",
        opciones: ["Limita las ventas a un área geográfica pequeña.", "Elimina barreras físicas y permite acceder a mercados globales.", "No requiere coordinación logística."],
        respuestaCorrecta: "Elimina barreras físicas y permite acceder a mercados globales."
    },
    {
        pregunta: "7. El modelo B2C en comercio electrónico se refiere a:",
        opciones: ["Empresa a empresa.", "Empresa a consumidor final.", "Empresa a administración pública."],
        respuestaCorrecta: "Empresa a consumidor final."
    },
    {
        pregunta: "8. El modelo B2B en comercio electrónico implica:",
        opciones: ["Transacciones entre dos consumidores.", "Transacciones entre empresas.", "Transacciones entre empresa y gobierno."],
        respuestaCorrecta: "Transacciones entre empresas."
    },
    {
        pregunta: "9. ¿Qué diferencia al marketing digital del comercio electrónico?",
        opciones: ["El marketing digital es un canal de venta; el e-commerce es una estrategia de captación.", "El marketing digital es una estrategia de atracción y fidelización; el e-commerce es la operación de compraventa online.", "No existe ninguna diferencia."],
        respuestaCorrecta: "El marketing digital es una estrategia de atracción y fidelización; el e-commerce es la operación de compraventa online."
    },
    {
        pregunta: "10. Un ejemplo de acción de marketing digital sería:",
        opciones: ["Publicar un anuncio en Instagram con una oferta especial.", "El pago en Bizum en una tienda online.", "La gestión de stock en el almacén."],
        respuestaCorrecta: "Publicar un anuncio en Instagram con una oferta especial."
    },
    {
        pregunta: "11. ¿Qué herramienta se utiliza para analizar los factores externos que afectan a una empresa?",
        opciones: ["DAFO.", "PESTEL.", "ROI."],
        respuestaCorrecta: "PESTEL."
    },
    {
        pregunta: "12. En el análisis PESTEL, los factores tecnológicos incluyen:",
        opciones: ["El poder adquisitivo de la clientela.", "La innovación en medios de pago y el uso de redes sociales.", "La política fiscal del gobierno."],
        respuestaCorrecta: "La innovación en medios de pago y el uso de redes sociales."
    },
    {
        pregunta: "13. El análisis DAFO permite identificar:",
        opciones: ["Solo las amenazas externas.", "Debilidades, amenazas, fortalezas y oportunidades.", "El comportamiento de los clientes en Internet."],
        respuestaCorrecta: "Debilidades, amenazas, fortalezas y oportunidades."
    },
    {
        pregunta: "14. ¿Qué es un \"lead\"?",
        opciones: ["Una venta finalizada.", "Una oportunidad de venta: un cliente potencial que muestra interés dejando sus datos.", "Un producto estrella en el catálogo online."],
        respuestaCorrecta: "Una oportunidad de venta: un cliente potencial que muestra interés dejando sus datos."
    },
    {
        pregunta: "15. ¿Cuál es la fórmula del ROI (Return on Investment)?",
        opciones: ["ROI = Inversión / Beneficio * 100.", "ROI = (Beneficio - Inversión) / Inversión x 100.", "ROI = Ventas * Inversión / 100."],
        respuestaCorrecta: "ROI = (Beneficio - Inversión) / Inversión x 100."
    },
    {
        pregunta: "16. Si inviertes 100 € en anuncios y generas un beneficio neto de 150 €, ¿cuál es tu ROI?",
        opciones: ["150%.", "50%.", "100%."],
        respuestaCorrecta: "50%."
    },
    {
        pregunta: "17. La tasa de conversión mide:",
        opciones: ["El número de clientes fidelizados en un año.", "El porcentaje de visitantes que realizan una acción concreta (compra, registro, descarga).", "La cantidad de productos vendidos en un mes."],
        respuestaCorrecta: "El porcentaje de visitantes que realizan una acción concreta (compra, registro, descarga)."
    },
    {
        pregunta: "18. ¿Qué métrica indica el nivel de interacción del público con una marca en redes sociales?",
        opciones: ["Engagement.", "Tasa de rebote.", "Ticket medio."],
        respuestaCorrecta: "Engagement."
    },
    {
        pregunta: "19. La tasa de rebote en una web hace referencia a:",
        opciones: ["El número de usuarios que abandonan la página sin interactuar.", "Los clientes que vuelven a comprar repetidamente.", "El tiempo total de permanencia en una web."],
        respuestaCorrecta: "El número de usuarios que abandonan la página sin interactuar."
    },
    {
        pregunta: "20. Caso práctico: Una tienda online... invierte 200 €... beneficio neto de 300 €. ¿Cuál es el ROI?",
        opciones: ["50%.", "150%.", "100%."],
        respuestaCorrecta: "50%."
    },
    // --- EPÍGRAFE 2: EL CLIENTE DIGITAL ---
    {
        pregunta: "1. El target de una empresa es:",
        opciones: ["El grupo de proveedores habituales.", "El grupo de personas a las que la empresa dirige su oferta.", "El conjunto de empleados que desarrollan el plan de marketing."],
        respuestaCorrecta: "El grupo de personas a las que la empresa dirige su oferta."
    },
    {
        pregunta: "2. ¿Qué dato pertenece a la segmentación demográfica?",
        opciones: ["Estilo de vida.", "Edad.", "Actitudes frente a la innovación."],
        respuestaCorrecta: "Edad."
    },
    {
        pregunta: "3. ¿Qué dato corresponde a la segmentación psicográfica?",
        opciones: ["Nivel de ingresos.", "Lugar de residencia.", "Valores, creencias o intereses."],
        respuestaCorrecta: "Valores, creencias o intereses."
    },
    {
        pregunta: "4. ¿Cuál es un ejemplo de segmentación por comportamiento?",
        opciones: ["Estado civil.", "Hábitos de compra y canales preferidos.", "Nivel educativo."],
        respuestaCorrecta: "Hábitos de compra y canales preferidos."
    },
    {
        pregunta: "5. Un buyer persona es:",
        opciones: ["Una herramienta de gestión de almacén.", "Una representación ficticia del cliente ideal basada en datos reales.", "Un canal de comunicación entre empresa y clientes."],
        respuestaCorrecta: "Una representación ficticia del cliente ideal basada en datos reales."
    },
    {
        pregunta: "6. ¿Cuál de las siguientes opciones corresponde a un ejemplo de buyer persona?",
        opciones: ["\"Mujeres y hombres de entre 20 y 40 años que compran online\".", "\"Laura, 25 años, estudiante universitaria en Oviedo, busca ropa sostenible y económica, usa Instagram y Tik Tok a diario\".", "\"Consumidores urbanos con ingresos medios\"."],
        respuestaCorrecta: "\"Laura, 25 años, estudiante universitaria en Oviedo, busca ropa sostenible y económica, usa Instagram y Tik Tok a diario\"."
    },
    {
        pregunta: "7. El engagement mide:",
        opciones: ["El beneficio económico de la empresa.", "El grado de conexión e interacción del cliente con la marca.", "La tasa de devoluciones de un e-commerce."],
        respuestaCorrecta: "El grado de conexión e interacción del cliente con la marca."
    },
    {
        pregunta: "8. ¿Cuál de los siguientes NO es un indicador de engagement?",
        opciones: ["Comentarios en redes sociales.", "Compras repetidas.", "Coste del alquiler de un local comercial."],
        respuestaCorrecta: "Coste del alquiler de un local comercial."
    },
    {
        pregunta: "9. Un alto nivel de engagement indica que:",
        opciones: ["La comunidad consume y recomienda la marca.", "Los clientes solo compran por promociones.", "La empresa tiene mayor inversión en logística."],
        respuestaCorrecta: "La comunidad consume y recomienda la marca."
    },
    {
        pregunta: "10. Una motivación típica del cliente online es:",
        opciones: ["Desconfianza hacia el pago digital.", "Ahorro de tiempo y comodidad.", "Procesos de devolución complicados."],
        respuestaCorrecta: "Ahorro de tiempo y comodidad."
    },
    {
        pregunta: "11. Un freno habitual del cliente digital es:",
        opciones: ["Claridad en la política de devoluciones.", "Desconfianza ante páginas poco seguras.", "Rapidez en la entrega."],
        respuestaCorrecta: "Desconfianza ante páginas poco seguras."
    },
    {
        pregunta: "12. Entre las expectativas mínimas del cliente online se encuentra:",
        opciones: ["Atención rápida y transparente.", "Registro largo y complicado.", "Envíos sin información sobre plazos."],
        respuestaCorrecta: "Atención rápida y transparente."
    },
    {
        pregunta: "13. El comportamiento típico del cliente digital incluye:",
        opciones: ["Comprar siempre sin comparar precios.", "Consultar reseñas y unboxing en redes sociales antes de decidirse.", "Realizar compras exclusivamente en tiendas físicas."],
        respuestaCorrecta: "Consultar reseñas y unboxing en redes sociales antes de decidirse."
    },
    {
        pregunta: "14. ¿Qué dispositivo suele ser el principal canal de compra para el cliente digital?",
        opciones: ["Ordenador de sobremesa.", "Móvil.", "Tablet exclusivamente."],
        respuestaCorrecta: "Móvil."
    },
    {
        pregunta: "15. Un ejemplo de motivación racional en la compra online sería:",
        opciones: ["Reconocimiento social.", "Pertenencia a una comunidad.", "Ahorro económico."],
        respuestaCorrecta: "Ahorro económico."
    },
    {
        pregunta: "16. ¿Cuál de estas opciones sería una motivación emocional del cliente online?",
        opciones: ["Rapidez en la entrega.", "Calidad del producto.", "Estatus y reconocimiento."],
        respuestaCorrecta: "Estatus y reconocimiento."
    },
    {
        pregunta: "17. Si un cliente añade productos al carrito y espera a una promoción para finalizar la compra, se trata de:",
        opciones: ["Un comportamiento típico del cliente online.", "Una expectativa mínima.", "Un indicador de engagement."],
        respuestaCorrecta: "Un comportamiento típico del cliente online."
    },
    {
        pregunta: "18. ¿Cuál de las siguientes es una herramienta para conocer mejor al cliente digital?",
        opciones: ["Buyer persona.", "Carrito de compra.", "Código QR."],
        respuestaCorrecta: "Buyer persona."
    },
    {
        pregunta: "19. El abandono del carrito de compra suele estar relacionado con:",
        opciones: ["Transparencia en costes de envío.", "Procesos de pago largos o falta de métodos conocidos.", "Buen servicio posventa."],
        respuestaCorrecta: "Procesos de pago largos o falta de métodos conocidos."
    },
    {
        pregunta: "20. Caso práctico: ...abandonan el carrito cuando llegan a la página de pago. ¿Cuál sería la causa más probable?",
        opciones: ["La web ofrece métodos de pago poco conocidos y no informa con claridad sobre gastos de envío.", "Los clientes tienen un alto nivel de engagement.", "La tienda incluye promociones y cupones de descuento."],
        respuestaCorrecta: "La web ofrece métodos de pago poco conocidos y no informa con claridad sobre gastos de envío."
    },
    // --- EPÍGRAFE 3: ESTRATEGIAS DEL MARKETING DIGITAL ---
    {
        pregunta: "1. El marketing relacional busca principalmente:",
        opciones: ["Conseguir ventas rápidas sin fidelización.", "Establecer relaciones sólidas y duraderas con el cliente.", "Reducir costes logísticos en la empresa."],
        respuestaCorrecta: "Establecer relaciones sólidas y duraderas con el cliente."
    },
    {
        pregunta: "2. Un ejemplo de marketing relacional es:",
        opciones: ["Publicar un anuncio de Google Ads.", "El programa Starbucks Rewards.", "La venta de un producto en Amazon."],
        respuestaCorrecta: "El programa Starbucks Rewards."
    },
    {
        pregunta: "3. El email marketing consiste en:",
        opciones: ["Enviar correos electrónicos personalizados a clientes y leads.", "Enviar cartas postales a la clientela.", "Usar WhatsApp como canal de atención al cliente."],
        respuestaCorrecta: "Enviar correos electrónicos personalizados a clientes y leads."
    },
    {
        pregunta: "4. Una ventaja del email marketing es:",
        opciones: ["No requiere consentimiento del cliente.", "Permite segmentar mensajes y medir resultados.", "No tiene costes económicos."],
        respuestaCorrecta: "Permite segmentar mensajes y medir resultados."
    },
    {
        pregunta: "5. El marketing de proximidad utiliza principalmente:",
        opciones: ["Tecnologías de geolocalización como beacons, QR y notificaciones push.", "El envío de catálogos impresos al domicilio del cliente.", "Encuestas telefónicas masivas."],
        respuestaCorrecta: "Tecnologías de geolocalización como beacons, QR y notificaciones push."
    },
    {
        pregunta: "6. Un ejemplo de marketing de proximidad en Asturias sería:",
        opciones: ["Notificación push de la app de Alimerka cuando un cliente entra en el supermercado.", "Campaña de TV nacional de Zara.", "Un blog de recetas de Red Bull."],
        respuestaCorrecta: "Notificación push de la app de Alimerka cuando un cliente entra en el supermercado."
    },
    {
        pregunta: "7. El marketing one-to-one se apoya en:",
        opciones: ["CRM y Big Data para personalizar la experiencia de cada cliente.", "Estrategias de SEO para mejorar el posicionamiento.", "Programas de puntos tradicionales."],
        respuestaCorrecta: "CRM y Big Data para personalizar la experiencia de cada cliente."
    },
    {
        pregunta: "8. ¿Cuál es un ejemplo de marketing one-to-one?",
        opciones: ["Netflix recomendando series según historial de visualización.", "La LOPDGDD regulando protección de datos.", "Un anuncio genérico en televisión."],
        respuestaCorrecta: "Netflix recomendando series según historial de visualización."
    },
    {
        pregunta: "9. El marketing viral se caracteriza por:",
        opciones: ["Transmitirse masivamente gracias a la creatividad y la emoción.", "Garantizar la conversión directa en cada cliente.", "Requerir grandes presupuestos de publicidad televisiva."],
        respuestaCorrecta: "Transmitirse masivamente gracias a la creatividad y la emoción."
    },
    {
        pregunta: "10. Un ejemplo clásico de marketing viral es:",
        opciones: ["Ice Bucket Challenge.", "Aviso legal en una web.", "SEO local de una papelería."],
        respuestaCorrecta: "Ice Bucket Challenge."
    },
    {
        pregunta: "11. El cross marketing consiste en:",
        opciones: ["Ofrecer productos complementarios para aumentar el ticket medio.", "Vender un solo producto por pedido.", "Campañas de SEO en Google."],
        respuestaCorrecta: "Ofrecer productos complementarios para aumentar el ticket medio."
    },
    {
        pregunta: "12. ¿Qué significa SEO?",
        opciones: ["Social Email Optimization.", "Search Engine Optimization.", "System E-Commerce Operations."],
        respuestaCorrecta: "Search Engine Optimization."
    },
    {
        pregunta: "13. El SEM se diferencia del SEO en que:",
        opciones: ["El SEM requiere inversión en publicidad de pago en buscadores.", "El SEM es gratuito y orgánico.", "Ambos son idénticos."],
        respuestaCorrecta: "El SEM requiere inversión en publicidad de pago en buscadores."
    },
    {
        pregunta: "14. Un ejemplo de SEO local sería:",
        opciones: ["Optimizar palabras clave como \"papelería en Llanera\" en la web del negocio.", "Comprar anuncios de pago en Google Ads.", "Hacer un anuncio en radio local."],
        respuestaCorrecta: "Optimizar palabras clave como \"papelería en Llanera\" en la web del negocio."
    },
    {
        pregunta: "15. El marketing de afiliación se basa en:",
        opciones: ["Comisiones por ventas o clics generados a través de enlaces o códigos promocionales.", "Acuerdos exclusivos entre empresas competidoras.", "Enviar newsletters semanales."],
        respuestaCorrecta: "Comisiones por ventas o clics generados a través de enlaces o códigos promocionales."
    },
    {
        pregunta: "16. Un ejemplo de marketing de afiliación es:",
        opciones: ["Amazon Influencer Program.", "El programa Iberia Plus.", "La app de Zara."],
        respuestaCorrecta: "Amazon Influencer Program."
    },
    {
        pregunta: "17. El mobile marketing incluye:",
        opciones: ["Estrategias diseñadas específicamente para smartphones y tablets.", "Únicamente llamadas telefónicas de televenta.", "Publicidad en carteles exteriores."],
        respuestaCorrecta: "Estrategias diseñadas específicamente para smartphones y tablets."
    },
    {
        pregunta: "18. ¿Qué ejemplo corresponde al marketing de contenidos?",
        opciones: ["Blog de Shopify con guías de e-commerce.", "SMS promocional de una tienda.", "Banner publicitario en Google."],
        respuestaCorrecta: "Blog de Shopify con guías de e-commerce."
    },
    {
        pregunta: "19. El social media marketing consiste en:",
        opciones: ["Usar de forma planificada las redes sociales para atraer y fidelizar clientes.", "Crear páginas web básicas sin interacción.", "Publicar contenidos de forma aleatoria sin estrategia."],
        respuestaCorrecta: "Usar de forma planificada las redes sociales para atraer y fidelizar clientes."
    },
    {
        pregunta: "20. Caso práctico: ...reto con hashtag propio... ¿Qué estrategia está aplicando?",
        opciones: ["Marketing viral.", "SEO local.", "Marketing relacional."],
        respuestaCorrecta: "Marketing viral."
    },
    // --- EPÍGRAFE 4: NORMATIVA DEL E-COMMERCE ---
    {
        pregunta: "1. La LOPDGDD regula principalmente:",
        opciones: ["Los contratos de alquiler entre empresas.", "El tratamiento de datos personales y los derechos digitales.", "Los impuestos aplicables al comercio electrónico."],
        respuestaCorrecta: "El tratamiento de datos personales y los derechos digitales."
    },
    {
        pregunta: "2. ¿Qué norma europea complementa la LOPDGDD en España?",
        opciones: ["RGPD (Reglamento General de Protección de Datos).", "LSSI.", "LGDCU."],
        respuestaCorrecta: "RGPD (Reglamento General de Protección de Datos)."
    },
    {
        pregunta: "3. ¿Cuál de las siguientes obligaciones corresponde a la LOPDGDD?",
        opciones: ["Publicar un aviso legal en la web.", "Permitir al cliente ejercer sus derechos sobre sus datos (acceso, rectificación, supresión, portabilidad).", "Incluir la garantía mínima de 3 años en productos físicos."],
        respuestaCorrecta: "Permitir al cliente ejercer sus derechos sobre sus datos (acceso, rectificación, supresión, portabilidad)."
    },
    {
        pregunta: "4. El banner de cookies en una web responde a:",
        opciones: ["La obligación de transparencia establecida por la LOPDGDD y la LSSI.", "Un requisito voluntario de marketing digital.", "Una estrategia de fidelización."],
        respuestaCorrecta: "La obligación de transparencia establecida por la LOPDGDD y la LSSI."
    },
    {
        pregunta: "5. La LSSI regula principalmente:",
        opciones: ["Los servicios online y el comercio electrónico en España.", "La garantía mínima de los productos digitales.", "Los programas de fidelización y descuentos."],
        respuestaCorrecta: "Los servicios online y el comercio electrónico en España."
    },
    {
        pregunta: "6. Según la LSSI, un aviso legal en la web debe incluir:",
        opciones: ["Nombre de la empresa, NIF, domicilio y datos de contacto.", "Solo el correo electrónico del administrador.", "El catálogo de productos de la tienda."],
        respuestaCorrecta: "Nombre de la empresa, NIF, domicilio y datos de contacto."
    },
    {
        pregunta: "7. Una comunicación comercial por email debe:",
        opciones: ["Identificarse claramente como publicidad y permitir la baja inmediata.", "Incluir el nombre del destinatario en el asunto.", "No tener limitaciones legales si es gratuita."],
        respuestaCorrecta: "Identificarse claramente como publicidad y permitir la baja inmediata."
    },
    {
        pregunta: "8. ¿Qué derecho otorga la LGDCU a todo consumidor en compras online?",
        opciones: ["Derecho a desistir en un plazo de 14 días naturales.", "Derecho a un 20% de descuento en futuras compras.", "Derecho a elegir el método de pago siempre en efectivo."],
        respuestaCorrecta: "Derecho a desistir en un plazo de 14 días naturales."
    },
    {
        pregunta: "9. El derecho de desistimiento de la LGDCU significa que:",
        opciones: ["El cliente puede devolver un producto sin dar explicaciones en un plazo de 14 días.", "La empresa puede rechazar devoluciones sin condiciones.", "Solo se aplica en productos digitales."],
        respuestaCorrecta: "El cliente puede devolver un producto sin dar explicaciones en un plazo de 14 días."
    },
    {
        pregunta: "10. ¿Cuál de los siguientes es un ejemplo de excepción al derecho de desistimiento?",
        opciones: ["Una camiseta comprada online.", "Un producto personalizado.", "Un libro adquirido en una tienda física."],
        respuestaCorrecta: "Un producto personalizado."
    },
    {
        pregunta: "11. La garantía legal en España para productos físicos comprados online es de:",
        opciones: ["1 año.", "2 años.", "3 años."],
        respuestaCorrecta: "3 años."
    },
    {
        pregunta: "12. La garantía para contenidos digitales según la LGDCU es de:",
        opciones: ["1 año.", "2 años.", "5 años."],
        respuestaCorrecta: "2 años."
    },
    {
        pregunta: "13. El spam se define como:",
        opciones: ["Comunicación comercial enviada sin el consentimiento previo del destinatario.", "Mensajes enviados únicamente por WhatsApp.", "Correos internos de la empresa."],
        respuestaCorrecta: "Comunicación comercial enviada sin el consentimiento previo del destinatario."
    },
    {
        pregunta: "14. ¿Qué norma prohíbe el spam en España?",
        opciones: ["LSSI.", "LOPDGDD.", "LGDCU."],
        respuestaCorrecta: "LSSI."
    },
    {
        pregunta: "15. La Lista Robinson sirve para:",
        opciones: ["Excluir a personas que no desean recibir publicidad no solicitada.", "Registrar los clientes VIP de una empresa.", "Controlar las devoluciones de los consumidores."],
        respuestaCorrecta: "Excluir a personas que no desean recibir publicidad no solicitada."
    },
    {
        pregunta: "16. En caso de incumplir la normativa de protección de datos, la empresa puede enfrentarse a:",
        opciones: ["Multas económicas y sanciones de la AEPD.", "La retirada del producto del mercado.", "Una reducción del IVA aplicable."],
        respuestaCorrecta: "Multas económicas y sanciones de la AEPD."
    },
    {
        pregunta: "17. ¿Qué debe incluir toda web de e-commerce para cumplir la normativa?",
        opciones: ["Aviso legal, política de privacidad, política de cookies y política de devoluciones.", "Catálogo de productos y precios visibles únicamente.", "Fotos de los fundadores de la empresa."],
        respuestaCorrecta: "Aviso legal, política de privacidad, política de cookies y política de devoluciones."
    },
    {
        pregunta: "18. Un ejemplo de infracción de la LSSI sería:",
        opciones: ["Enviar correos masivos sin incluir un enlace de baja.", "Ofrecer atención al cliente por chat.", "Mostrar precios con IVA incluido."],
        respuestaCorrecta: "Enviar correos masivos sin incluir un enlace de baja."
    },
    {
        pregunta: "19. La LGDCU busca principalmente:",
        opciones: ["Proteger los derechos de los consumidores en compras presenciales y online.", "Regular las campañas de marketing digital.", "Fijar las comisiones que cobran los marketplaces."],
        respuestaCorrecta: "Proteger los derechos de los consumidores en compras presenciales y online."
    },
    {
        pregunta: "20. Caso práctico: ...Lista Robinson, sin identificarse... ni ofrecer enlace de baja. ¿Qué normativa está infringiendo...?",
        opciones: ["LSSI (prohibición de spam y obligación de baja).", "LGDCU.", "LOPDGDD."],
        respuestaCorrecta: "LSSI (prohibición de spam y obligación de baja)."
    }
];

// --- 2. REFERENCIAS A ELEMENTOS DEL DOM ---
const preguntaEl = document.getElementById('pregunta');
const opcionesRespuestaEl = document.getElementById('opciones-respuesta');
const feedbackEl = document.getElementById('feedback');
const siguienteBtn = document.getElementById('siguiente-btn');
const progresoEl = document.getElementById('progreso');
const correctasEl = document.getElementById('correctas');
const incorrectasEl = document.getElementById('incorrectas');
const quizContainerEl = document.getElementById('quiz-container');

// --- 3. ESTADO DEL JUEGO (Variables Globales) ---
let indicePreguntaActual = 0;
let preguntasCorrectas = 0;
let preguntasIncorrectas = 0;
let totalPreguntas = 0;
let primerIntento = true; // Variable clave para contar errores solo una vez

// --- 4. FUNCIONES DEL JUEGO ---

/**
 * Función para cargar la pregunta actual y sus opciones.
 */
function cargarPregunta() {
    // Restablecer el estado para la nueva pregunta
    primerIntento = true;
    const preguntaActual = preguntas[indicePreguntaActual];

    // Limpiar el estado anterior
    opcionesRespuestaEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = ''; // Limpiar clases 'correct' o 'incorrect'
    siguienteBtn.style.display = 'none'; // Ocultar botón "Siguiente"

    // Actualizar la UI
    preguntaEl.textContent = preguntaActual.pregunta;
    progresoEl.textContent = `Pregunta ${indicePreguntaActual + 1} de ${totalPreguntas}`;

    // Crear un botón por cada opción
    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        // Asignar el evento onclick para llamar a seleccionarRespuesta
        boton.onclick = seleccionarRespuesta; 
        opcionesRespuestaEl.appendChild(boton);
    });
}

/**
 * Función que se ejecuta al hacer clic en una opción.
 * (VERSIÓN ARREGLADA: Siempre avanza después del primer intento)
 */
function seleccionarRespuesta(evento) {
    // Si no es el primer intento, no hagas nada (evita clics extra)
    if (!primerIntento) return; 

    const botonSeleccionado = evento.target;
    const respuestaSeleccionada = botonSeleccionado.textContent;
    const respuestaCorrecta = preguntas[indicePreguntaActual].respuestaCorrecta;

    // --- LÓGICA MODIFICADA ---

    // 1. Deshabilitar todos los botones inmediatamente
    Array.from(opcionesRespuestaEl.children).forEach(btn => {
        btn.disabled = true;
        // Resaltar la respuesta correcta para que el usuario la vea
        if (btn.textContent === respuestaCorrecta) {
            btn.classList.add('correct');
        }
    });

    // 2. Comprobar si la respuesta fue correcta o incorrecta
    if (respuestaSeleccionada === respuestaCorrecta) {
        // --- RESPUESTA CORRECTA ---
        feedbackEl.textContent = "¡Correcto!";
        feedbackEl.className = 'correct';
        
        preguntasCorrectas++; // Solo contamos en el primer intento
        correctasEl.textContent = `Correctas: ${preguntasCorrectas}`;
        
    } else {
        // --- RESPUESTA INCORRECTA ---
        feedbackEl.textContent = `¡Incorrecto! La respuesta correcta era: ${respuestaCorrecta}`;
        feedbackEl.className = 'incorrect';
        
        // Marcar la que el usuario eligió mal (además de la correcta)
        botonSeleccionado.classList.add('incorrect'); 

        preguntasIncorrectas++; // Solo contamos en el primer intento
        incorrectasEl.textContent = `Incorrectas: ${preguntasIncorrectas}`;
    }

    // 3. Marcar que el primer intento ya pasó
    primerIntento = false;

    // 4. Mostrar SIEMPRE el botón "Siguiente Pregunta"
    siguienteBtn.style.display = 'block';
}


/**
 * Función para pasar a la siguiente pregunta o finalizar el juego.
 * (VERSIÓN ACTUALIZADA CON SWEETALERT)
 */
function siguientePregunta() {
    indicePreguntaActual++; // Avanza a la siguiente pregunta

    if (indicePreguntaActual < totalPreguntas) {
        // Si hay más preguntas
        cargarPregunta();
    } else {
        // Si se acabaron las preguntas, usamos SweetAlert2
        Swal.fire({
          title: "¡Final!!",
          text: "¡Has completado el examen!",
          icon: "success",
          draggable: true, 
          confirmButtonText: 'Ver Puntuación'
        }).then(() => {
          // Esto se ejecuta cuando el usuario pulsa "Ver Puntuación"
          mostrarPantallaDeResultados(); // Cambiado de 'mostrarResultados'
        });
    }
}

/**
 * Muestra la PANTALLA final del juego (la puntuación).
 * (Esta era tu antigua función 'mostrarResultados', con la felicitación)
 */
function mostrarPantallaDeResultados() {
    // Variable para el mensaje de felicitación
    let mensajeFelicidad = '';

    // Comprobar si todas las respuestas fueron correctas
    if (preguntasCorrectas === totalPreguntas) {
        mensajeFelicidad = `
            <span class="felicitacion">
                ¡Felicidades! ¡Respondiste todo perfectamente!
            </span>
        `;
    }

    // Limpiar el contenedor del quiz y mostrar los resultados
    quizContainerEl.innerHTML = `
        <h1>¡Fin del juego!</h1>
        <p>Tu puntuación final es:</p>
        <p class="resultado"><strong>${preguntasCorrectas} correctas</strong> de ${totalPreguntas}.</p>
        <p class="resultado"><strong>${preguntasIncorrectas} incorrectas</strong> (en el primer intento).</p>
        
        ${mensajeFelicidad} 

        <button onclick="location.reload()" class="reiniciar">Volver a jugar</button>
    `;
    // (Asegúrate de tener los estilos para .reiniciar y .felicitacion en style.css)
}

/**
 * Función inicial para configurar el juego.
 */
function iniciarJuego() {
    totalPreguntas = preguntas.length;

    // Actualizar contadores iniciales en el HTML
    correctasEl.textContent = `Correctas: 0`;
    incorrectasEl.textContent = `Incorrectas: 0`;
    
    // Cargar la primera pregunta
    cargarPregunta();
}

// --- 5. INICIAR EL JUEGO ---

// Asignar el evento al botón "Siguiente"
siguienteBtn.onclick = siguientePregunta;

// Iniciar el juego cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', iniciarJuego);
