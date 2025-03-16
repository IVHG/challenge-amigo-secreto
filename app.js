let arrayAmigos = [];

//agrega amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    //Verifica si nombre esta vacio
    nombre == '' ? alert('Por favor, ingrese un nombre.') : arrayAmigos.push(nombre);
    
    //Actualiza la lista de amigos
    nombre !== '' && actualizarListaAmigos(arrayAmigos);

    //Limpia el campo
    limpiarCampo();
    return;    
    
}

//limpia el campo de entrada
function limpiarCampo(){
    document.getElementById('amigo').value = '';
}

//Actualiza la lista de amigos en el DOM
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < arrayAmigos.length; i++) {
        listaAmigos.innerHTML += `<li>${arrayAmigos[i]}</li>`;
    }
}

//Sortea un amigo
function sortearAmigo(){
    if (arrayAmigos.length <= 1 || arrayAmigos == undefined){
        alert('Por favor agrega mas amigos ');
    } else {
        let sorteo = Math.floor(Math.random()*arrayAmigos.length);
        let amigoElegido = arrayAmigos[sorteo];
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = `<li> ${amigoElegido} <li>`
    }
}