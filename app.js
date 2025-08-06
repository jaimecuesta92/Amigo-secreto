// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

console.log(listaDeAmigos);
function agregarAmigo (){
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre == "" || !isNaN(nombre)){
        alert("Por favor ingresa un nombre");
    }else{
        listaDeAmigos.push(nombre);
    }
    console.log(listaDeAmigos);
limpiarCaja();
agregarAmigosALista();
}

function limpiarCaja(){
    document.querySelector("#amigo").value="";
    return;
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
//Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function agregarAmigosALista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
for (let i = 0; i < listaDeAmigos.length; i++) {
    let elemento = document.createElement("li");
    elemento.textContent = listaDeAmigos[i];
    //Agrega el elemento a la lista.
    lista.appendChild(elemento);
    }

}

