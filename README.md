# EmpleatePY

## Descripción

EmpleatePY es una aplicación web desarrollada para facilitar la búsqueda de proveedores de servicios locales. La plataforma permite a los usuarios encontrar profesionales de distintas categorías, consultar su información, visualizar su calificación y acceder rápidamente a sus datos de contacto.

El proyecto fue desarrollado como parte del challenge de Penguin Academy, aplicando buenas prácticas de desarrollo frontend, diseño responsive y consumo de datos desde una fuente desacoplada mediante archivos JSON y la API Fetch.

---

## Características

* Listado dinámico de proveedores mediante JSON y Fetch API.
* Búsqueda de proveedores por nombre.
* Filtro por categoría.
* Ordenamiento por nombre y calificación.
* Página individual para cada proveedor.
* Proveedor destacado generado dinámicamente.
* Inicio de sesión básico utilizando LocalStorage.
* Botón de llamada telefónica mediante enlaces `tel:`.
* Diseño responsive para dispositivos móviles, tablets y computadoras.
* Estados de carga, error y ausencia de resultados.

---

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* LocalStorage
* DiceBear Avatars API
* Google Fonts

---

## Estructura del proyecto

```text
ServiPY/
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── data/
│   └── proveedores.json
│
├── img/
│
├── js/
│   ├── inicio.js
│   ├── login.js
│   ├── proveedor.js
│   ├── proveedores.js
│   └── sesion.js
│
├── index.html
├── proveedores.html
├── proveedor.html
└── login.html
```

---



## Uso

La aplicación permite:

* Explorar proveedores de servicios.
* Buscar profesionales por nombre.
* Filtrar por categoría.
* Ordenar los resultados.
* Consultar el perfil completo de cada proveedor.
* Iniciar una sesión local mediante LocalStorage.

---

## Despliegue

El proyecto puede desplegarse en:

* GitHub Pages
* Netlify

---

## Resultados de Lighthouse

Se realizó una evaluación del proyecto utilizando Lighthouse con el objetivo de analizar el rendimiento, la accesibilidad, las buenas prácticas y el SEO de la aplicación.

### Resultados obtenidos

| Categoría      | Puntaje |
| -------------- | ------: |
| Performance    |      90 |
| Accessibility  |      95 |
| Best Practices |     100 |
| SEO            |      91 |

### Mejoras implementadas

Tras analizar los resultados de Lighthouse, se realizaron las siguientes mejoras:

1. **Mejora de accesibilidad:** se incorporaron textos alternativos (`alt`) descriptivos en las imágenes de la aplicación para facilitar su interpretación por lectores de pantalla y mejorar la accesibilidad.

2. **Optimización de la carga de contenido:** la información de los proveedores se centralizó en un único archivo JSON consumido mediante Fetch API, evitando la duplicación de datos en el HTML y permitiendo generar dinámicamente el proveedor destacado, lo que mejora el mantenimiento y la eficiencia de la aplicación.

---

## Autor

Tobías Emanuel Viera

Proyecto desarrollado para Penguin Academy.

