# Character Counter

> Proyecto frontend desarrollado con React y Vite.
>
> Aplicación de análisis de texto en tiempo real, enfocada en buenas prácticas de componentización, diseño responsive, manejo de estado y estilización moderna con temas claro/oscuro.

---

## Tecnologías Utilizadas

| Tecnología     | Uso                                      |
|----------------|-------------------------------------------|
| React          | Componentización y manejo de estado       |
| Vite           | Bundler y entorno de desarrollo           |
| Context API    | Gestión del tema claro/oscuro             |
| CSS3           | Estilos y diseño visual                   |
| Flexbox / Grid | Distribución de elementos                 |
| CSS Variables  | Gestión de colores y temas                |
| Media Queries  | Adaptación responsive                     |
| Google Fonts   | Tipografía Space Grotesk                  |

---

## Estructura del Proyecto

```bash
character-counter-utn/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WriteArea.jsx
│   │   ├── Controlls.jsx
│   │   ├── Stats.jsx
│   │   ├── LetterDensity.jsx
│   │   └── ProgressBar.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

##  Secciones Desarrolladas

### Header
- Logo e identidad del sitio.
- Botón para alternar entre tema claro y oscuro.

### Hero Principal
- Título principal.
- Área de texto (`textarea`) estilizada para ingresar el contenido a analizar.

### Controles
- Checkbox "Exclude Spaces".
- Checkbox "Set Character Limit" con input numérico asociado.
- Tiempo estimado de lectura, calculado en tiempo real.

### Métricas
Tres tarjetas informativas, actualizadas en tiempo real:
- Total Characters
- Word Count
- Sentence Count

### Letter Density
- Listado de letras ordenado por frecuencia.
- Barras de progreso personalizadas.
- Cantidad y porcentaje por letra.
- Botón "See more / See less" para expandir el listado completo.

---

## Desafíos Encontrados

Durante el desarrollo surgieron algunos desafíos:

- Sincronizar el cálculo de estadísticas (caracteres, palabras, oraciones, tiempo de lectura) con el estado del `textarea` en tiempo real.
- Implementar un sistema de temas claro/oscuro persistente usando Context API y `localStorage`.
- Adaptar el diseño a dispositivos móviles sin perder jerarquía visual.
- Lograr una distribución equilibrada de las tarjetas de métricas y del listado de densidad de letras.

---

## Aprendizajes

Gracias a este proyecto se reforzaron conocimientos sobre:

- Componentización en React.
- Manejo de estado con `useState` y Context API.
- Variables CSS y temas dinámicos.
- Responsive Design.
- Organización de proyectos Frontend con Vite.
- Buenas prácticas de maquetación y estilización.

---

## Autor

Desarrollado por **Raquel Campos**

Proyecto académico de práctica de desarrollo frontend con React.
