var verde = document.getElementById("verde");
var cajas = document.querySelector(".cajas");
var boton = document.querySelector("#verde");
var cajaAEliminar = document.querySelector(".caja");

let articulo = document.getElementById("articulo");
let precio = document.getElementById("precio");
let listaArticulos = document.getElementById("listaArticulos");
let totalMSG = document.getElementById("total"); //mensaje de pantalla de total, no el total calculado
let total = 0;

//función para agregar el total/calcularlo
function agregarATicket() {
    //se obtienen los valores 
    let articuloTexto = articulo.value;
    let precioTexto = precio.value;


     //se agregan a la lista 
     let elementoLista = document.createElement("li");
     elementoLista.innerHTML=articuloTexto + "  $" + precioTexto;

     listaArticulos.appendChild(elementoLista);
     
     articulo.value="";
     precio.value="";

     //calculo del precio total de la lista
     var numerico = parseInt(precioTexto); 
     total = total + numerico
     console.log(total);//lo imprimo en la consola

     //imprimo el total
     totalMSG.innerHTML= "Total: $" + total;

     //la siguiente linea es para mostrar la caja de texto cada que se agregue un elemento
     cajaAEliminar.style.removeProperty("display");
    }

//se cierra la caja
function cerrarCaja(caja){
    cajaAEliminar.style.display = "none"; 
}