function lectorArray(array){
    console.log(array[0])
}

lectorArray([1,2,3,4,5])

// Ejercicio 2

function lectorArray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}

lectorArray([1,2,3,4,5])

// Ejercicio 3


function lectorObject(object){
    for(let key in object){
        console.log(object[key])
    }
}

let person={
    firstName:"John",
    lastName: "Doe"
}

lectorObject(person)



