console.log("Mi ejercicio de formulario con storage");

//Definir variables
let miNombre = "";

//Prevenir que se realice la acción SUBMIT
document.getElementById('form')
    .addEventListener(
            'submit', 
            function formSumbit(event){
              event.preventDefault();
            }
    );

//Agregar un evento al boton enviar "btnEnviar"
let buttonEnviar = document.getElementById('btnEnviar');
buttonEnviar.addEventListener('click', capturarDatos);
function capturarDatos(){
    console.log("El evento CLICK se está disparando");
    //Captura la información del input relacionado con el Nombre;
    miNombre = document.getElementById("inputNombre").value;

    //imprimir lo que se captura del input
    console.log(miNombre);

    //invocar a la función para guardar información en local storage
    guardarInformacionEnLocalStorage(miNombre);
}

//Almacenar en local storage las variables del formulario
function guardarInformacionEnLocalStorage(nombreStorage){

    //JSON Javascript Object Notation {'Nombre' : nombreStorage}
    //localStorage.setItem(Colocar el key , y el valor de la key)
    localStorage.setItem('Nombre' , nombreStorage);

    mostrarInformacionEnHTML();
}

//Mostrar el nombre en mi HTML
function mostrarInformacionEnHTML(){
    let nombreObtenidoDeStorage = localStorage.getItem('Nombre');
    document.getElementById('resultadoForm').innerHTML = "El nombre es " + nombreObtenidoDeStorage;
}