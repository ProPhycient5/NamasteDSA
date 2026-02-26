
function createNumbersPattern2(n){
    for (let i = 1; i <= n; i++){
        let numbers = ""
        for(let j = 1; j <= i; j++){
            numbers = numbers + " " + i
        }
        console.log(numbers)
    }
}


createNumbersPattern2(5)

//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5