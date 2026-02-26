function createNumbersPattern2(n){
    for (let i = 1; i <= n; i++){
        let numbers = ""
        for(let j = 1; j <= i; j++){
            numbers = numbers + " " + j
        }
        console.log(numbers)
    }
}


createNumbersPattern2(5)

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5