
function createBinary(n){
    for (let i = 1; i <= n; i++){
        let star = ""
        for(let j = 1; j <= i; j++){
            if (j%2 !== 0){
                star = star + " " + "1"
            }else {
                star = star + " " + "0"
            }
        }
        console.log(star)
    }
}


createBinary(5)

//1
//1 0
//1 0 1
//1 0 1 0
//1 0 1 0 1


