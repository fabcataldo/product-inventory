# Product Inventory App

Product Inventory App es una aplicación en Angular 14, diseñada para gestionar información sobre el inventario de productos de talleres mecánicos. Se ejecuta en un entorno Dockerizado para facilitar la configuración y despliegue.

## Características

- Aplicación frontend desarrollada con **Angular 14**.
- Contenedor **Docker** para ejecutar la app sin necesidad de configuraciones locales.
- **Live Reload** habilitado con volúmenes en Docker.
- Accesible en `localhost:4200` desde cualquier navegador.

---

## Instalación y Configuración

### 1️ **Requisitos previos**

Asegúrate de tener instalados:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2️ **Clonar el repositorio**

```sh
git clone https://github.com/fabcataldo/product-inventory.git
cd product-inventory
```

### 3 **Ejecución**

Primero "levantar" el entorno de Docker, y luego ejecutar por terminal:

```sh
docker-compose up --build
```

### Si quieres "apagar" el contenedor del frontend:

```sh
docker-compose down
```

### Si quieres ejecutar los tests (fuera del contenedor, levantando en localhost)

```sh
ng test
```
