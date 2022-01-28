console.log('Hola mundo');
// JAVA SCRIPT ES DE TIPADO DEBIL OSEA QUE UNA VARIABLE PUEDES CAMBIAR DE STRING A INT ETC
// ES DINAMICO, SIGNIFICA QUE NO TIENES QUE ASIGNAR QUE TIPO DE VARIABLE ES 

//VARIABLES PRIMITIVAS,-, son inmutables SUS ASIGNACIONES NUNCA CAMBIAN 
// SE PUEDEN CRAR COPIAS PARA MUTAR
//EJEMPLO CON STRING 
 const firstname = 'Roberto'
firstname.toUpperCase()
console.log(firstname)// no se pone mayuscula 
//--------------------------------
const pname = 'Roberto'
const mayustring=pname.toUpperCase()
console.log(mayustring)// aqui se pone mayuscula 
/*
1-String
2-Int
3-Boolean 
4-undefined
5-null 
------------
6-OBJETOS (SON MUTABLES)



----------

7-BigInt = no muy importante 
8-Symbol = no muy importante 

*/
//1 forma declarar variables string
let name = 'Alex'

// 2 forma declarar Variable constante, no se puede cambiar despues 
const lastname = 4 


// DECLARAR UN ARRAY y METER ELEMENTOS ......ESTE ARRAY ES MUTABLE
let list = []

list.push(5)
list.push(6)
list.push(7)

console.log(list)
console.log(list[2])

// ARRAY INMUTABLE
let list2 = []
listnew=list2.concat(4,5,7)
console.log(listnew)

