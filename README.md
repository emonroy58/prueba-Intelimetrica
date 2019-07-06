# PRUEBA-INTELIMETRICA

El proyecto se ha integrado a React con Google Maps.

Todos hemos tenido la oportunidad de usar e interactuar con mapas de Google, buscando direcciones, viendo nuestra ubicación actual, solicitando taxis o estimando la distancia y el tiempo de un punto a otro, es por ello que se decicdio integrar la aplicación con Google Maps.

### Proyecto
El alcance del desarrollo para este proyecto se ha efectuado de la siguiente forma:

-Se obtuvo un mapa general de la ciudad de México mediante la libreria google-maps-react y agregando el componente de mapa a su función   render, asi como la API_KEY del la plataforma de Google [https://console.cloud.google.com/] https://console.cloud.google.com/.
-Se localizo cada uno de los restaurantes en mapa de Google maps, obteniendo del archivo .JSON su respectiva latitud y longitud, para lo cual se agrego un marcador con icono personalizado.
-Al dar click sobre cada uno de los marcadores, se muestra un moda con: Numero de lugares cercanos a 80 km, el nombre de la persona que representa el lugar, direccion y ranking.
-En la parte izquierda se coloco un buscador que arroja como datos: Numero de lugares cercanos a 80 km, el nombre de la persona que representa el lugar, direccion y ranking, y de manera inicial el listado que contiene el archivo JSON.

A continuación se muestra el resultado de la aplicacion la cual se puede validar en: [https://proy-restaurant-010719.firebaseapp.com/] https://proy-restaurant-010719.firebaseapp.com/
[https://i.ibb.co/3BN9KsV/2019-07-06-2.png] https://i.ibb.co/3BN9KsV/2019-07-06-2.png

### Instalación
- Clonar el repositorio :
```
git clone https://github.com/emonroy58/prueba-Intelimetrica.git
```

- Ir a la raíz del directorio ejecutando:
```
cd prueba-Intelimetrica
```
-Ir a la rama master:
```
git checkout master
```
- Install all project dependencies by running:
```
npm install o yarn install
```
-Iniciar la aplicación
### `npm start` o `yarn start`

La aplicación se ejecuatra en:
[http://localhost:3000](http://localhost:3000).

Autor: Elizabeth Monroy.
