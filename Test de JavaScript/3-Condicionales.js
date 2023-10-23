const tipoDeSuscripcion = "free";

if (tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion!="Free" && tipoDeSuscripcion!="Basic" && tipoDeSuscripcion!="Expert" && tipoDeSuscripcion!="ExpertPlus"){
    console.log("Caso no Valido")
}
