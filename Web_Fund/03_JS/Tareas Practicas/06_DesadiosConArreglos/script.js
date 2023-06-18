// 1.Siempre hambriento
function siempreHambriento(arr){

    for(i=0; i<arr.length; i++)

    if(arr[i] === "comida") {
        console.log("delicioso");
    }
    else(arr[i] != "comida")
        console.log("Tengo Hambre");    
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4,1,5,7,2]);

// 2.Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++)
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// 3. Mejor que el promedio
function reverse(arr) {
    var reversedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// 5.Arreglo de Fibonacci
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2; i<n; i++){
    var nextNum= fibArr[i-1]+fibArr[i-2]
    fibArr.push(nextNum);
}
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);

