# Google Business Profile y Search Console

Guía operativa para A1 Motors Tico Swap. Son las dos tareas fuera del código que
más pesan para posicionar en *V8 Costa Rica*, *LS en Costa Rica* y *LS swap
Costa Rica*.

El orden importa: **primero la ficha de Google Business**. Para búsquedas
locales con intención de compra, el paquete local (el bloque de tres negocios
con mapa) aparece arriba de los resultados normales. Sin ficha verificada, el
sitio compite solo por los resultados de abajo.

---

## Parte 1 — Google Business Profile

### Antes de empezar: datos que tenés que tener a mano

| Dato | Estado |
| --- | --- |
| Dirección exacta del taller | **Falta.** El sitio solo dice "Grecia, Alajuela" |
| Teléfono | `+506 8994 8485` |
| Horario | L–V 7:00–17:00, Sáb 7:00–12:00 |
| Sitio web | `https://www.a1motorsticoswap.com` |
| Fotos del taller | Mínimo 10: fachada, interior, motores, proyectos terminados |

> **La dirección exacta es bloqueante.** Google necesita una dirección real para
> verificar. Anotala tal cual la vas a usar, porque después tiene que quedar
> **idéntica** en la ficha y en el sitio (eso es lo que se llama consistencia
> NAP: *Name, Address, Phone*). Una diferencia de formato entre ambas debilita
> la señal.

### 1. Crear la ficha

Entrá a **https://business.google.com/create**

- **Nombre del negocio:** `A1 Motors Tico Swap` — exactamente así, sin agregarle
  palabras clave. Poner "A1 Motors Tico Swap - Swaps LS Costa Rica" es motivo de
  suspensión y es una de las causas más comunes de fichas dadas de baja.
- **Categoría principal:** `Taller de reparación de automóviles`
- **Categorías secundarias:** agregá las que apliquen —
  `Taller de motores`, `Tienda de repuestos para automóviles`,
  `Servicio de personalización de vehículos`

La categoría principal es de las señales más fuertes para decidir en qué
búsquedas aparecés. No la cambies después sin razón.

### 2. Ubicación y área de servicio

Como tenés taller físico donde recibís clientes, elegí **sí, tengo una
ubicación que los clientes pueden visitar** y poné la dirección exacta.

Después agregá el **área de servicio**: Alajuela, San José, Heredia, Cartago,
Puntarenas, Guanacaste y Limón. Es la misma cobertura que ya declara el sitio en
el JSON-LD, así que las señales coinciden.

Ajustá el pin del mapa a mano hasta que caiga sobre el portón del taller. Google
lo usa para calcular distancia al usuario y muchas veces lo coloca mal.

### 3. Verificación

Google elige qué método te ofrece; no lo podés escoger vos. Los habituales:

- **Video** — el más común hoy para talleres. Grabás un recorrido continuo, sin
  cortes, mostrando: el rótulo con el nombre, la calle alrededor para ubicar el
  local, el interior con herramienta y equipo en uso, y algo que pruebe que lo
  administrás vos (llaves, caja, facturas). Preparalo antes: si lo cortás o se
  ve poco, lo rechazan y hay que repetir.
- **Postal** — llega en 1 a 2 semanas con un código.
- **Teléfono o correo** — solo en algunos casos.

Mientras no esté verificada, la ficha **no aparece en el mapa ni en el paquete
local**. Es el cuello de botella de todo el proceso.

### 4. Completar la ficha al 100%

Las fichas completas se posicionan mejor que las incompletas. Llená todo:

- **Descripción (750 caracteres).** Usá algo alineado con el sitio:

  > A1 Motors Tico Swap es un taller costarricense especializado en swaps de
  > motores V8 de la familia GM LS. Instalamos motores LS 5.3, 6.0 LQ4 y LQ9
  > rectificados, transmisiones automáticas GM 4L60E, 4L65E, 4L80E y 6L80E, y
  > calibramos la ECU con HP Tuners. El taller está en Grecia, Alajuela, y
  > atendemos proyectos de todo Costa Rica.

- **Servicios.** Cargalos uno por uno, con los mismos nombres que el sitio:
  *Swap LS completo*, *Venta de motores LS rectificados*,
  *Instalación de transmisiones automáticas GM*,
  *Programación y afinación de ECU con HP Tuners*.
- **Horario.** Incluí los feriados cuando cierren.
- **Fotos.** Subí de a poco, no todas de golpe, y seguí subiendo cada mes. Las
  fichas con fotos recientes reciben más interacciones. Nombrá los archivos de
  forma descriptiva antes de subirlos (`swap-ls-toyota-land-cruiser.jpg`).
- **Atributos.** Marcá los que apliquen (estacionamiento, accesibilidad).
- **Mensajes.** Activalos solo si vas a responder rápido; si no, dejalos
  apagados, porque un tiempo de respuesta alto se muestra al público.

### 5. Reseñas

Es la palanca más grande después de la verificación, y la única que no se puede
apurar por código.

- Pedila **al entregar cada proyecto**, que es cuando el cliente está contento.
- Mandá el link corto de reseña que te da la ficha, por WhatsApp.
- **Respondé todas**, buenas y malas. Google lo cuenta como señal de actividad.
- Nunca compres reseñas ni las pidas a cambio de descuentos: es penalizable y en
  talleres pequeños se detecta fácil por el patrón de fechas.

No puedo agregar `aggregateRating` al JSON-LD del sitio hasta que existan
reseñas reales. Declarar una calificación inventada es motivo de penalización
manual.

### 6. Publicaciones

Publicá algo cada 7–10 días: un swap terminado, un motor que entró, una feria.
Sirve como señal de que el negocio está activo y aparece en la ficha.

---

## Parte 2 — Google Search Console

### Qué propiedad crear

Entrá a **https://search.google.com/search-console**

Google ofrece dos tipos y la elección importa:

| Tipo | Qué cubre | Cómo se verifica |
| --- | --- | --- |
| **Dominio** *(recomendado)* | `a1motorsticoswap.com` **y** `www`, http y https, todos los subdominios | Registro DNS TXT |
| Prefijo de URL | Solo el host exacto que escribas | Meta tag, HTML, DNS, Analytics |

**Usá la propiedad de tipo Dominio.** El sitio vive en `www` pero el apex
redirige hacia allá, y una propiedad de Dominio captura ambos en un solo lugar.
Con prefijo de URL tendrías que crear dos propiedades separadas y los datos
quedarían partidos.

Valor a ingresar, sin `https://` y sin `www`:

```
a1motorsticoswap.com
```

### Verificación por DNS

1. Google te da un registro TXT tipo `google-site-verification=abc123...`
2. Andá al panel de tu registrador de dominios
3. Agregá el registro:

   | Tipo | Nombre | Valor |
   | --- | --- | --- |
   | `TXT` | `@` | `google-site-verification=...` |

4. Esperá de 15 minutos a 1 hora y dale **Verificar** en Search Console

> El código de verificación por meta tag que está comentado en
> [`app/layout.jsx`](../app/layout.jsx) **solo funciona con propiedades de tipo
> prefijo de URL**, no con las de Dominio. Si seguís esta guía y usás Dominio,
> ese comentario se queda sin usar y está bien: no hace falta tocar el código.

### Enviar el sitemap

En Search Console → **Sitemaps**, escribí solo la ruta:

```
sitemap.xml
```

El sitemap completo es **https://www.a1motorsticoswap.com/sitemap.xml** y hoy
declara estas 7 URLs:

```
https://www.a1motorsticoswap.com/
https://www.a1motorsticoswap.com/catalogo
https://www.a1motorsticoswap.com/guia-swap-ls-costa-rica
https://www.a1motorsticoswap.com/personalizar
https://www.a1motorsticoswap.com/nosotros
https://www.a1motorsticoswap.com/contacto
https://www.a1motorsticoswap.com/privacidad
```

### Forzar el primer indexado

Con el sitio recién publicado, Google puede tardar semanas en pasar solo. Usá
**Inspección de URLs** (la barra de arriba) y pedí indexación manualmente, en
este orden de prioridad:

1. `https://www.a1motorsticoswap.com/`
2. `https://www.a1motorsticoswap.com/guia-swap-ls-costa-rica`
3. `https://www.a1motorsticoswap.com/catalogo`
4. `https://www.a1motorsticoswap.com/contacto`

Hay un límite diario de solicitudes, por eso van priorizadas. Las dos restantes
(`/personalizar`, `/nosotros`) las agarra solo desde el sitemap.

### Qué revisar después

| Cuándo | Qué mirar |
| --- | --- |
| A los 3–7 días | **Páginas** → que las 7 URLs estén indexadas y sin errores |
| A los 3–7 días | Que no aparezca "Página alternativa con etiqueta canónica" en las páginas principales |
| Semanal, primer mes | **Rendimiento** → en qué consultas aparecés y en qué posición |
| Mensual | **Core Web Vitals** y **Usabilidad móvil** |

En **Rendimiento**, filtrá por las consultas objetivo (`v8`, `ls`, `swap`) para
ver la posición promedio real. Ese es el número contra el cual medir si esto
está funcionando, no las impresiones totales.

---

## Parte 3 — Validar lo que ya está implementado

Herramientas para confirmar que el trabajo del sitio quedó bien leído:

| Qué valida | URL |
| --- | --- |
| Datos estructurados y resultados enriquecidos | https://search.google.com/test/rich-results |
| Schema.org en crudo | https://validator.schema.org/ |
| Core Web Vitals y rendimiento | https://pagespeed.web.dev/ |

Pegá `https://www.a1motorsticoswap.com/guia-swap-ls-costa-rica` en la primera:
debería detectar `Article`, `HowTo`, `BreadcrumbList` y `AutoRepair`.

---

## Parte 4 — Bing Webmaster Tools

Vale la pena por GEO: Bing alimenta a Copilot y a parte de ChatGPT.

1. Entrá a **https://www.bing.com/webmasters**
2. Elegí **Importar desde Google Search Console** — copia la verificación y el
   sitemap solos, toma dos minutos
3. Si no, verificá con el mismo registro DNS y enviá el sitemap a mano

---

## Parte 5 — Cerrar el círculo con el código

Una vez que la ficha exista y esté verificada, hay tres cosas del repo que
quedan pendientes de actualizar con los datos reales. Están todas en
[`lib/site.js`](../lib/site.js):

1. **Dirección exacta.** El objeto `address` no tiene `streetAddress`. Agregarlo
   ahí y en el `PostalAddress` del JSON-LD para que coincida con la ficha.
2. **Coordenadas.** `geo` apunta hoy al centro de Grecia, no al taller. Sacá las
   reales de la ficha (clic derecho sobre el pin en Google Maps) y reemplazalas.
3. **Enlace a la ficha.** `maps.place` y `maps.directions` apuntan a enlaces
   provisionales. Reemplazalos por los de la ficha nueva; el `sameAs` del
   JSON-LD los usa para que Google conecte el sitio con el negocio.

Cuando tengás esos tres datos, pasámelos y los dejo aplicados.
