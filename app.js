var username = document.getElementById("nombre");
var ingresarNombre = document.getElementById("ingresarNombre");
var mensaje = document.getElementById("ingresarNombre");
var jugar = document.getElementById("jugar");
var pregunta1 = document.getElementById("pregunta1");
var pregunta2 = document.getElementById("pregunta2");
var pregunta3 = document.getElementById("pregunta3");
var contC = 0;
var contI = 0;


function	inicio(){
	mensaje.innerHTML = username.value;

}

function siJuega (e) {
  event.preventDefault(e);
  jugar.style.display = "none";
  pregunta1.style.display ="block";
}

function primerPregunta (e) {
  event.preventDefault(e);
  var respuesta1 = document.getElementById("respuesta1").value;
  if (respuesta1 === 3) {
    contC += 1;
  }else {
    contI +=1;
  }
  document.getElementById('pregunta1').style.display = "none";
  pregunta2.style.display ="block"
}

function segundaPregunta (e) {
  event.preventDefault(e);
  var respuesta2 = document.getElementById("respuesta2").value;
  if (respuesta2 === 2) {
    contC += 1;
  }else {
    contI +=1;
  }
  pregunta2.style.display = "none";
  pregunta3.style.display ="block"
}

function terceraPregunta (e) {
    event.preventDefault(e);
    var respuesta3 = document.getElementById("respuesta3").value;
    if(respuesta3 === 3) {
        contC +=1;
    }else {
        contI +=1;
    }
    pregunta3.style.display = "none";
    respuestas.style.display = "block";
    console.log(contC, contI);
    respuestasC.innerHTML = "Correctas: " + contC + " Así se hace, muy bien :D ";
    respuestasI.innerHTML = "Incorrectas: " + contI + " Suerte para la proxima!!";
}




function noJuega () {
  //console.log(no.value);
  contenido.innerHTML = "Nos vemos pronto";
}
