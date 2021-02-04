# Pasos para agregar Redux

1. Instalar: `npm i react-redux @reduxjs/toolkit`
2. Crear un archivo store.js dentro de la carpeta src.
3. En nuestro archivo `index.js`, crear el Provider y pasarle el estado
4. Crear nuestro primer slice. En clase, lo vamos a hacer en App.
5. En el componente que estamos implementando Redux, importamos useSelector y useDispatch.
6. En el mismo componente e importamos el valor que queremos gestionar desde el estado.
7. Creamos la constante dispatch (hook useDispatch)
8. Importamos los selectores y creamos una constante con el valor de ese selector (hook useSelector)
9. En el archivo `store.js` importamos nuestro Reducer y lo añadimos como Reducer.
10. Comenzamos a pasar las funciones que ya teníamos (normalmente las que gestionaban el estado del componente) a reducers en el archivo `appSlice`.
11. Tenemos que exportar cada función (reducer) de `appSlice.actions`.
12. Importamos en el componente que use las funciones del paso 11 y las ejecutaremos con dispatch.
13. Ya tenemos Redux funcionando con el reducer!!

