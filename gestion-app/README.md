## Aplicación de Gestión de Encuestas en Angular para el GI2T

### Descripción del Proyecto
Este proyecto es una aplicación web desarrollada en Angular para la gestión de encuestas, preguntas y tipos de preguntas, con funcionalidades completas de CRUD (Create, Read, Update, Delete) en fase beta para el Grupo de Investigación e Innovación Tecnológica [GI2T](https://gi2t.org/inicio).

### Características Principales

#### 1. Autenticación
- Página de login con campos de usuario y contraseña
- Redireccionamiento a página principal tras autenticación

#### 2. Estructura de la Aplicación
- Página principal (Home) con menú de navegación
- Gestión de tres entidades principales:
  * Encuestas
  * Preguntas
  * Tipo de Preguntas

#### 3. Funcionalidades por Módulo
- Listado de registros
- Agregar nuevos registros
- Editar registros existentes
- Eliminar registros (con confirmación modal)

### Requerimientos Técnicos
- Desarrollo en Angular
- Estructura modular
- Configuración de routing
- Servicios para gestión de datos
- Componentes reutilizables

### Tecnologías Utilizadas
- Angular
- TypeScript
- HTML
- CSS

### Instalación

#### Clonar repositorio
```bash
git clone https://github.com/CodeDeveloperExpert/GI2T.git
```
#### Instalar dependencias
```bash
npm install
npm install json-server
npm install bootstrap @popperjs/core
npm install uuid
```

#### En el archivo angular.json línea 34:
```json
"styles": [
  "src/styles.sass",
  "node_modules/bootstrap/scss/bootstrap.scss"
],
"scripts": [
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

#### Iniciar servidor de desarrollo en dos terminales diferentes
```bash
ng serve
npx json-server db.json
```

### Autores
- Jonatan Ocoro Perea
- Jaime Riascos Guapi
- Danny Perlaza Herman

### Licencia
Este proyecto está bajo la licencia GNU General Public License v3.0 - consulte el archivo LICENSE para más detalles.
