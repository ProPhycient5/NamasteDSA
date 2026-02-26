function createDecrementPattern(n){
    for (let i = n; i >= 1; i--){
        let numbers = ""
        for(let j = 1; j <= i; j++){
            numbers = numbers + " " + j
        }
        console.log(numbers)
    }
}


createDecrementPattern(5)

//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1