# Dynamic Page Renderer

Este es un proyecto que permite renderizar páginas web dinámicamente a partir de archivos JSON.

## Estructura del Proyecto

El proyecto sigue una estructura de monorepo con los siguientes componentes:

- `packages/ui`: Biblioteca de componentes UI reutilizables
- `app`: Aplicación Next.js que renderiza las páginas dinámicamente
- `data`: Archivos JSON que definen la estructura de cada página

## Cómo funciona

1. Cada ruta de la aplicación (slug) se corresponde con un archivo JSON en la carpeta `data`
2. El archivo JSON define qué componentes se renderizan y con qué propiedades
3. El sistema carga dinámicamente los componentes necesarios y los renderiza según la estructura definida

## Estructura del JSON

Cada archivo JSON tiene la siguiente estructura:

```json
{
  "title": "Título de la página",
  "description": "Descripción para SEO",
  "components": [
    {
      "type": "NombreComponente",
      "props": {
        "propiedad1": "valor1",
        "propiedad2": "valor2"
      },
      "children": "Contenido de texto" // O un array de componentes hijos
    }
  ]
}
```

## Componentes disponibles

- **Básicos**: Button, Input, Card, Container
- **Layout**: Section, Hero
- **Especializados**: Feature, Pricing, ContactForm, FAQ

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm run start
```
