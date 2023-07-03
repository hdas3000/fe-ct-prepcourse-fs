/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:

   var nuevoObjeto = {
      nombre: nombre,
      edad: edad,
      meow: function(){
         return "Meow!";
      }
   };
   console.log(nuevoObjeto);
   return nuevoObjeto;
};
crearGato('Hetor', 19);

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:

   var datosPersonales = {
      nombre: nombre,
      email: email,
      password: password};

      console.log(datosPersonales);
      return datosPersonales;
}
nuevoUsuario('Héctor', 'hdas3000@gmail.com', 75090030);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:

   objeto[propiedad] = null;
   console.log(objeto);
   return objeto;

}

var RecibObjeto = {};
agregarPropiedad(RecibObjeto,'Propiedad');

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:

   objeto[metodo] = function(){
      console.log('No retornar nada');
   }
   objeto[metodo]();
}
var objetoCreado = {};
invocarMetodo(objetoCreado, 'metodo');

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var numeroMisterioso = objetoMisterioso.numeroMisterioso;
   var resultado = numeroMisterioso * 5;
   return resultado;
 }
 // Ejemplo de uso
 var objeto = {
   numeroMisterioso: 20
 };
 
 var resultadoMultiplicacion = multiplicarNumeroDesconocidoPorCinco(objeto);
 console.log(resultadoMultiplicacion); // Salida: 100


function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

   objeto[propiedad] = 20;
   delete objeto[propiedad];
   console.log(objeto); 
   return objeto;

}
var objetoPro = {};
eliminarPropiedad(objetoPro,'propi');

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario){
      console.log(true);
      return true;
   }else {
      console.log(false);
      return false;
   }
}
var objeto = {email: 'praxis@gmail.com'};
tieneEmail(objeto.email);

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var tiene = objeto.hasOwnProperty('propiedad');
   if(tiene){
      console.log(tiene);
      return tiene; 
   } else {
      console.log(false);
      return false;
   }
}
var objetorecibido = {propiedad: 20};
tienePropiedad(objetorecibido, 'propirdad')

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (password === 'password'){
      console.log(true);
      return true;
   }else {
      console.log(false);
      return false;
   }
}
var objetof = {password: 25654};
verificarPassword(objetof, 'password');

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:

   objetoUsuario.password = nuevaPassword;

   console.log(objetoUsuario);
   return objetoUsuario;

}
var objetoclave = {password: 2222};
actualizarPassword(objetoclave, 3333);

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   console.log(objetoUsuario);
   return objetoUsuario;

}
var objetoUsd = {amigos: [] }
agregarAmigo(objetoUsd, 'Pedrito' );

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (var i = 0; i <objetoMuchosUsuarios.length; i++){
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;

}
var arregloUsuarios = [
   {esPremium: false},
   {esPremium: false},
   {esPremium: false}
];

pasarUsuarioAPremium(arregloUsuarios);


function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var totallikes = 0;

   for (var i = 0; i <objetoUsuario.posts.length; i++) {
      totallikes += objetoUsuario.posts[i].like;
                           
   }
   console.log(totallikes);
   return totallikes;

};

var objetoUsuario = {
   posts:[
      {like: 10},
      {like: 4},
      {like: 45}
   ]
}
var total = sumarLikesDeUsuario(objetoUsuario);
console.log(total);

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
//    objetoProducto.calcularPrecioDescuento = function(){
//       var decuento = (objetoProducto.precio)*(objetoProducto.porcentaDescuento);
//       return decuento;
//    };
//    var precioFinal = (objetoProducto.precio) - objetoProducto.calcularPrecioDescuento();
//    //var  PrecioFinalProducto = objetoProducto.calcularPrecioDescuento();
//    console.log(precioFinal);
//    return precioFinal;
// }
// var gregarPropiedad ={precio: 10, porcentaDescuento: 0.2};
// agregarMetodoCalculoDescuento(gregarPropiedad);

objetoProducto.calcularPrecioDescuento = function(){
   var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   var precioFinal = objetoProducto.precio - descuento;
   return precioFinal;
};
console.log(objetoProducto);
}

var producto1 = { precio: 100, porcentajeDeDescuento: 0.1 };
agregarMetodoCalculoDescuento(producto1);

var precioFinalProducto1 = producto1.calcularPrecioDescuento();
console.log("Precio final del producto 1:", precioFinalProducto1);

var producto2 = { precio: 50, porcentajeDeDescuento: 0.2 };
agregarMetodoCalculoDescuento(producto2);

var precioFinalProducto2 = producto2.calcularPrecioDescuento();
console.log("Precio final del producto 2:", precioFinalProducto2);
//var precioFinalProducto = gregarPropiedad

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
