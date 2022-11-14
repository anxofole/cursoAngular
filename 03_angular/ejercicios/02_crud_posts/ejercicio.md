* [Login] formulario de login, con usuario y clave (test/test)
    * mostrar error devuelto en caso de login incorrecto
    * (Opcional) Deshabilitar botón de login mientras se está resolviendo la petición de login
    * (Opcional) Campos usuario / clave requeridos y mostrar errores

* [Dashboard] Crear dashboard al que solo se pueda acceder autenticado
    * Opciones: Posts, Logs, Logout que muestra usuario actual
    * Siempre visible
    * (Opcional) Mostrar opción activa

* [Logout] Llamar al authenticationService para hacer logout y redirigir a la ventana de login

* [Login] Después del login, redirigir a la url original a la que se quería navegar (posts o logs)

* [Posts] Listado
    * Enviar token de autorización mediante interceptor Http (para todas las peticiones)
    * Si el servidor devuelve algún error:
        * 401, hacer logout y redirigir a login
        * (Opcional) feedback al usuario

* [Posts] Borrar

* [Posts] Alta 
    * Indicar:
        * userId: numérico, obligatorio
        * titulo: string, máxima longitud 200
        * body: máxima longitud 5000, en textarea

* [Logs] Auditar todos los cambios realizados por el usuario (borrar, alta, edición) y el login/logout

* [Posts] Filtro en listado:
    * Input de texto para filtrar por título
    * Select con los usuarios
    
* [Posts] Obligar a que confirmen si se marchan de la edición/alta si no han salvado.

* [Posts] Edición


## NOTAS
* Crear jerarquía de rutas
    * login
    * dashboard
        * posts: listado, alta y edición
        * logs

## API
* Autenticación
    * Enviar en cada request el header 'Authorization' con el token del usuario actual

* Posts
    * Listado: 	GET			http://localhost:8000/posts
    * Detalle: 	GET			http://localhost:8000/posts/{id}
    * Borrado:	DELETE		http://localhost:8000/posts/{id}
    * Alta:		POST		http://localhost:8000/posts
    * Edición:	PUT			http://localhost:8000/posts/{id}


