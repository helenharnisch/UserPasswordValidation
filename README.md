[![Sourcegraph for Repo Reference Count](https://img.shields.io/badge/Release%20Date-February-brightgreen.svg?style=flat-square)]()

# Librería User/Password_Validation 

* User/Password_Validation es una librería para la validación de los campos de formulario por parte del cliente, verifica que las entradas sean del tipo correcto y que esten completas con datos, antes que el formulario sea enviado.
* Los campos de formulario son una tarea de programación necesaria, aunque muchas veces es un proceso molesto. 
* En javascript facilitan la programación y mejora la interfaz del usuario. Esto te ahorrará una tarea importante.

## Instalación
> Instalado node.js , procederemos a descargar los archivos de la librería mediante:
```sh
$ npm install userpasswordvalidation
```

## Uso
> Posterior a la instalación, crear un documento HTML en su editor de texto favorito , que contenga dos campos a llenar o inputs.
* Enlazamos los archivos name-app.js (para el campo usuario) y password-app.js (para el campo contraseña) al final del body de nuestro documento.
```sh
   <script type="text/javascript" src="assets/libreria/js/name-app.js"></script>
   <script type="text/javascript" src="assets/libreria/js/password-app.js"></script>
```
> Uso de id:

* Dentro del input o campo para comprobar el nombre de usuario se debe poner un ```id ='user'``` y dentro del input o campo  para comprobar la contraseña del usuario se debe poner un ```id ='password'```.

```sh
   <input type="text" id="user" placeholder="Usuario">
   <input type="password" id="password" placeholder="Contraseña">
```

* Se debe llamar a la función ```validateUser()``` para validar el campo del nombre usuario, y/o a la función ```validatePassword() ``` para validar el campo contraseña puede asociarse a un evento click a un botón o un evento key-down para óptimo funcionamiento.

>La función bloqueará campos sin llenar, nombres de usuarios menores a 3 caracteres y que no sean letras mayúsculas o minúsculas; en el caso de las contraseñas bloqueará campos sin llenar, contraseñas menores a 3 carácteres , mayores a 7 y que no correspondan a números.

## Licencia

* User/Password_Validation es libremente distribuible bajo los términos de la licencia del MIT.

## Requerimientos Técnicos
[![Hackage-Deps](https://img.shields.io/hackage-deps/v/lens.svg?style=flat-square)]()

* En esta librería fueron utilizadas e instaladas las siguientes dependencias de NPM:

* Dependencias de desarrollo para testeo (Mocha v.5.0.0 - Chai v.4.1.2)
* ESLint 4.15.0

## Test
* User/Password_Validation fue probado con Mocha-Chai. Ejecutar desde la línea de comando, dentro de la carpeta test, el comando mocha test-name.js o mocha test-password.js para ejecutar el banco de pruebas.

## Metodología de trabajo

* Slack fue utilizado para mantener la comunicación entre el equipo.
* Se utilizó el método SCRUM para mantener una buena organización y mejorar los tiempos de entrega del producto.
* Se utilizaron ISSUES y MILESTONES en GITHUB para definir tareas , encargados y plazos para finalizar.
