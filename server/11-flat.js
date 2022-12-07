const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const flated = matriz.flat(3)

console.log(flated)

function recursiva(arr){
    let newArr = []
    if(!Array.isArray(arr)) return arr
    arr.forEach(item => {
        newArr = newArr.concat(recursiva(item))
    })
    
    return newArr
}
const newMatriz = recursiva(matriz)
console.log(newMatriz)