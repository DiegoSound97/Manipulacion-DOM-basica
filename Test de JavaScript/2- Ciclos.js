for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let i=0
while (i<5){
    console.log("El valor de i es: " + i);
    i++
}

let c=10
while (c>=2 && c<=11){
    console.log("El valor de i es: " + c);
    c--
}

let suma=4
let Resultado=0
while(Resultado!=suma){
    Resultado=prompt("Ingrese el resultado de la suma 2+2:")
    if (Resultado==suma){
        console.log("felicitaciones")
    }else{
        console.log("vuelve a ingresar un resultado valido")
    }
}




