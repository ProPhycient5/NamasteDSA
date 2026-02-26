
function createStarPattern2(n){
    for (let i = 0; i <= n; i++){
        let star = ""
        for(let j = 0; j < i; j++){
            star = star + " " + "*"
        }
        console.log(star)
    }
}


createStarPattern2(4)

//*
//* *
//* * *
//* * * *