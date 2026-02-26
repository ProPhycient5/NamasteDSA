
function alternativeBinary(n){
    let count = 1;
    for (let i = 1; i <= n; i++){
        let star = ""
        for(let j = 1; j <= i; j++){
            if (count%2 !== 0){
                star = star + " " + "1"
            }else {
                star = star + " " + "0"
            }
           count++; 
        }
        console.log(star)
    }
}

alternativeBinary(5)

//1
//0 1
//0 1 0
//1 0 1 0
//1 0 1 0 1


