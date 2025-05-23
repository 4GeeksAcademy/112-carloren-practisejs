const numbers = [1, 2, 3]

// const response = []

// for (let i = 0; i < numbers.length; i++) {      //Esto sería con un for
//     response.push(numbers[i] * 2)
// }

const response = numbers.map(num => num * 2)      //Lo mismo que el for pero en mucho menos código

console.log(response);


const matriz = [
    [1, 2],                        //Queremos que los números de cada fila queden con +1
    [3, 4]
]

const masUno = matriz.map(fila => fila.map(num => num + 1))
                                                                //Con un map anidado podemos recorrer los array (fila) dentro del array matriz
console.log(masUno);
