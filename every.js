//every: verifica que todos los elementos del array cumplan con la mismo
//condicion. Si todos los elemntos cumplen con la condicion, devuelve 
//verdadero; si uno de ellos no la cumple devuelve falso
const numeros = [10,20,30,40,50];
//determinar si todos los elementos del array de numeros son positivos 
const soloPositivos = numeros.every(data => {
    return data>0;
});

const soloPositivosv2 = numeros.every(data =>data>0);
console.log(soloPositivos);

//forEach - every - filter
//verificar si todos los elementos de una matriz son positivos 
const matrizSoloPositivos = [[1,2,3], [4,5,6], [7,8,9]];
function matrizSoloPositivos(array){
    var res =[];
    array.forEach(element =>{
       res.push(element.every(item =>{ 
            return item > 0;
        }));
    });
    //console.log(res);
    return res.every(data => data==true);
}
const z = matrizSoloPositivo(matriz);
if(z)
console.log("La matriz tiene solo positivos: ", z);
else
console.log("La matriz tiene solo negativos: ", z);
