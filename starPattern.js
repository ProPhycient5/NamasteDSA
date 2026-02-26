function createStarPattern(n){
    for (let i = 0; i < n; i++){
        let star = ""
        for(let j = 0; j < n; j++){
            star = star + " " + "*"
        }
        console.log(star)
    }
}

createStarPattern(5)
