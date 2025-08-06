// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

console.log(listaDeAmigos);
function agregarAmigo (){
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre == ""){
        alert("Por favor ingresa un nombre");
    }else{
        listaDeAmigos.push(nombre);
    }
    console.log(listaDeAmigos);
limpiarCaja();
}

function limpiarCaja(){
    document.querySelector("#amigo").value="";
    return;
}
