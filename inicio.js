console.log("Primer programa funcional....");

const numeros = [10, 20, 30, 40, 50, 60, 70, 1, 11, 15, 7];

//programacion imperativa 
for(var i=0; i<numeros.length; i++)
{
    console.log(numeros[i]);
}

//programacion funcional 
numeros.forEach( data => {
    console.log("Elemento : ", data);
});

numeros.forEach (function(item){
    console.log("Elemento => ", item)
});

//listar los elementos pares del vector de numeros 
//utilice la funcion filter
const pares = numeros.filter(data=> {
    return data%2==0;
});
const paresv2 = numeros.filter (data=> data%2==0);
console.log("Elementos pares del vector: ", pares);

const arreglo=[1,2,3,4,5,6,7,8,9];
//elementos impares del vector numeros
const impares=function getImpares(array){
    return array.filter(data=> {
        return data%2==1;
    });
}

console.log("Impares del vector numeros: ", impares(numeros));
console.log("Impares del vector arreglo: ", impares(arreglo));

//se tiene un vector de ciudades. Se pide imprimir cada ciudad 
const ciudades = ["Esmeraldas", "Quito", "Guayaquil", "Portoviejo", "Manabí"] 
ciudades.forEach (data => {
    console.log(data);
});

//Se tiene un párrafo cada palabra esta separada por un espacio
// en blanco. Se pide, utilizando la funcion split, immprimir cada
//palabra del parrafo:
//Bienvenido a la PUCE sede Esmeraldas
 const parrafo = "Bienvenidos a la Puce Esmeraldas";
 function getPalabras(str){
     str.split(" ").forEach(data => {
         console.log(data);
     })
}

getPalabras(parrafo);
