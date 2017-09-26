//Preguntar que comer
var whatToEat = prompt ("¿Que desea ordenar?");

//Función de disponibilidad del menu
var menu = function (availability){
  if (availability == true) {
    alert("Perfecto, este plato esta disponible");
  }
  else {
    alert("Este plato no esta disponible");
  }
}

//Disponibiliodd del menu
if (whatToEat === "ceviche") {
  menu(false)
}
else if (whatToEat === "taco al pastor") {
  menu(false)
}
else if (whatToEat === "empanada chilena") {
  menu(true)
}
else if (whatToEat === "hamburguesa") {
  menu(true)
}
else {
  alert("Lo sentimos, no esta en el menu");
}
