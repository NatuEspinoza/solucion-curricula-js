//preguntar nombre y apellido
var name = prompt ("¿Cuál es tu nombre y apellido?");
// obteniendo primera inicial
var firstInitial = name.slice(0,1);
//buscando posicion de segudo caracter
var secondInitialPosition = name.indexOf(" ") +1;
//obteniendo segunda inicial
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
//mostrando resultado en la web
document.write("Tus iniciales son " + firstInitial.toUpperCase()+secondInitial.toUpperCase());
