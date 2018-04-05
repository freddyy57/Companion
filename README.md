# Companion

# Tracker

APP de Geolocalización en tiempo real y guardado de coordenadas en firebase para seguimiento en un mapa.


Esta app trabaja en conjunto con la app para móvil tracker-ionic que se encuentra en este mismo repositorio y que muestra en tiempo real en un mapa la geo localización de los dispositivos conectados a la base de datos.

Podrá seguir en tiempo real a cualquier dispositivo simplemente seleccionandolo en el lado izquierdo del mapa.


Necesita una api key de google maps que podrá encontrar en la web (https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key)

Cuando tenga esa API KEY copiela y peguela en el archivo : src/app/app.module.ts  linea: 22

Pegue las mismas credenciales que ha creado para la APP Tracker-Ionic de este mismo repositorio. Copie y pegue esas credenciales en: src/config/firebase.config.ts linea 2 a 7.


Navegue en su consola a la carpeta de este proyecto e instale las dependencias

```
npm install

```

Cuando termine de instalar las dependencias escriba el comando

```
ng serve

```

Para arrancar el proyecto.


Abra su navegador en localhost:4200



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
