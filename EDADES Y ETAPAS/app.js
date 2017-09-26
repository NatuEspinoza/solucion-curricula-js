var age = parseInt (prompt("¿cuantos años tienes?"));

if (age <4) {
  alert ("toddler");
}
else if (age >3 && age <6) {
  alert ("Preschool");
}
else if (age >5 && age <13) {
  alert ("Gradeschooler");
}
else if (age >12 && age <19) {
  alert ("Teenager");
}
else if (age >18 && age <22) {
  alert ("Young Adult");
}
else if (age >21) {
  alert ("Adult");
}
else {
  alert ("ERROR!")
}
