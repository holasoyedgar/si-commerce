# SI-Commerce
## Descripción del proyecto

Este proyecto fue realizado para la comisión 39595 de React en Coderhouse.
Es un e-commerce en el que se puede ser capaz de visualizar distintos productos, agregar al carrito,
ejecutar una compra y ver compras anteriores.

El sitio posee estas opciones de navegabilidad:
- **Home**, donde si se oprime, se va a la vista de todos los productos
- **Categorías**, que es una lista desplegable, donde se puede seleccionar distintas categorías
como Smartphones, Laptops, Fragancias, Cuidado de la piel, Comestibles y Decoración del hogar.
    Al dar click en una categoría, muestra solo productos de la misma.
- **Mis compras**, donde se pueden visualizar las compras realizadas con anterioridad y ver el estado de ellas.
- **Carrito**, donde se puede acceder al carrito para realizar la compra.


Se pueden agregar productos al carrito de compra de dos formas, la primera es oprimiendo el botón **Agregar al carrito**
en la vista de todos los productos, esto agregará un solo producto al carrito,
también se pueden agregar productos yendo al detalle de cada uno, seleccionando una cantidad
y oprimiendo el botón **Agregar al carrito** con la cantidad solicitada.

En este detalle se muestra una fotografía del producto, el nombre del mismo, la descripción, el precio, el stock,
y los controles para agregar elementos al carrito.

Se hizo una validación para comprobar que el producto existe, sino, se regresa una vista de error.

En la barra de navegación hay un widget del carrito, que muestra la cantidad de elementos en el carrito
y que incrementa cada vez que se agrega un nuevo producto al carrito de compra.

Al ingresar al carrito, se muestra de cada producto una fotografía, su título, precio unitario, cantidad
y precio final de ese producto, igualmente se muestra un total de la compra final y finalmente un formulario, 
donde el usuario debe ingresar datos como su nombre, apellidos, teléfono, email y confirmación de email.
Se agregaron validaciones para que estos campos deban estar llenos para la creación de la orden, además,
ambos correos deben coincidir.

Cuando se da click al botón **Comprar**, se crea una nueva orden y se muestra el id de la orden en pantalla,
3 segundos después, se vuelve a la vista principal.

Finalmente, si se va a **Mis órdenes**, se pueden visualizar las órdenes previamente realzadas, y se puede
acceder a un detalle de la orden dando click en **Ver orden**, aquí se muestra el id de la orden, la fecha
de la misma, y el detalle de los productos ordenados.

## Librerías importantes utilizadas
- Bootstrap y React bootstrap: Se agregó para usar estilos de la página, como la barra de navegación, 
los botones, el widget, íconos, formularios, y tarjetas.

- dayjs: Es una librería que sirve para manejo de fechas, en este caso se usó dayjs para manejar las fechas de 
firebase, ya que tienen un formato específico, además de convertir las fechas en un formato requerido.

- Firebase: Se utilizó el servicio de Firestore como base de datos para almacenar los productos y las órdenes
realizadas.

- React router dom: Para la navegabilidad del sitio, renderizando cierto componente si se va a una ruta, además
del uso de Link y NavLink que sirven para moverse entre sitios sin tener que cargar toda la página.

- React loading: Para renderizar pequeñas animaciones mientras los datos cargan en la vista, por ejemplo, cuando
se obtienen los productos, el carrito, entre otros.

# Otros apuntes
- Para renderizar los elementos en listas se uso de map, y se renderizaron los componentes correspondientes.

- Se hizo uso de distintos eventos como onClick, cuando se hacía click en algún botón o onSubmit, cuando se envía
el formulario.

- Se hizo uso de contexto de React en el carrito de compras, para hacer accesible la lista de producto a lo
largo de diferentes componentes, por ejemplo el widget del carrito, en los componentes donde se agregan elementos
al carrito y en la vista del carrito.

- Para la navegabilidad se hizo uso de los distintos componentes de React router dom, como BrowserRouter, Routes, Route.

- También se uso el renderizado condicional para renderizar componentes dependiendo de condiciones, por ejemplo,
cuando se estaban cargando los documentos de firebase se mostró una animación de cargando, una vez que cargaban estos
documentos, se mostraba el componente requerido.

- Agrupé todas las operaciones de base de datos de Firebase en el archivo src/util/databaseUtils.js para mantener
eso apartado de la lógica de los componentes.

- También otras pequeñas funciones como calcular totales, formatos de moneda, entre otros los agregué a src/util/utils.js
para igualmente apartar esta lógica de los componentes.

- Lo más complicado fue el manejo del carrito, porque se validaron distintos escenarios, donde si había elementos 
existentes del mismo producto en el carrito, se incrementaba la cantidad de ese mismo producto, o si no,
se agregaba un nuevo elemento al carrito, con esto se vio mucho el manejo del estado, y del contexto.

- Se almacenaron las credenciales de Firebase en un archivo .env para que no sean accesibles cuando se suba 
esa configuración a github.

- [Video](https://www.youtube.com/watch?v=3pGnTS-tFHY) de la demostración de la aplicación.
