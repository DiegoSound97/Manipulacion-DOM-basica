Planes=["Free","Basic","Expert","ExpertPlus"];
DescripcionPlan=[
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]
const tipoDeSuscripcion = "Expert";

for (let i=0;i<Planes.length;i++){
    if(tipoDeSuscripcion==Planes[i]){
        console.log(DescripcionPlan[i])
    }
}