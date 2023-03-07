var verde = document.getElementById("verde");
var cajas = document.querySelector(".cajas");
var boton = document.querySelector("#verde");
var cajaAEliminar = document.querySelector(".caja");

let articulo = document.getElementById("articulo");
let precio = document.getElementById("precio");
let listaArticulos = document.getElementById("listaArticulos");
let totalMSG = document.getElementById("total"); 
let total = 0;

function agregarATicket() {
    let articuloTexto = articulo.value;
    let precioTexto = precio.value;


     let elementoLista = document.createElement("li");
     elementoLista.innerHTML=articuloTexto + "  $" + precioTexto;

     listaArticulos.appendChild(elementoLista);
     
     articulo.value="";
     precio.value="";

     var numerico = parseInt(precioTexto); 
     total = total + numerico
     console.log(total);

     totalMSG.innerHTML= "Total: $" + total;

     cajaAEliminar.style.removeProperty("display");
    }

function cerrarCaja(caja){
    cajaAEliminar.style.display = "none"; 
}