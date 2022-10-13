
const cantidadEntradas = document.getElementById('cantidadEntrada');

const categoria = document.getElementById('floatingSelectGrid');

const botonCalcular = document.getElementById('botonCalcular');

const totalCompra = document.getElementById('totalCompra');

const botonBorrar = document.getElementById('botonBorrar');


function resumen(){
    //console.log("categoria: " + categoria.value);
    //console.log("cantidad de entradas: " + cantidadEntradas.value);
    let valorFinal = 0;

    if(categoria.value == "estudiante" && cantidadEntradas.value > 0){
        valorFinal = cantidadEntradas.value * 200;
        let porcentaje = valorFinal * 0.80;
        console.log("El 80% del total es: " + porcentaje);
        valorFinal -= porcentaje;
    }else if(categoria.value == "trainee" && cantidadEntradas.value > 0){
        valorFinal = cantidadEntradas.value * 200;
        let porcentaje = valorFinal * 0.50;
        console.log("El 50% del total es: " + porcentaje);
        valorFinal -= porcentaje;
    }else if(categoria.value == "junior" && cantidadEntradas.value > 0){
        valorFinal = cantidadEntradas.value * 200;
        let porcentaje = valorFinal * 0.15;
        console.log("El 15% del total es: " + porcentaje);
        valorFinal -= porcentaje;
    }

    totalCompra.innerText = valorFinal
}

function borrar(){
    cantidadEntradas.value = 0;
    totalCompra.innerText = '';
}