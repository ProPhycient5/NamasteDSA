function createRightSideRightAngledTriangle(n){
    for (let i = n; i >= 1; i--){
        let star = ""
        for(let j = 1; j <= n; j++){
            if (j >= i){
                star = star + " " + "*"
            }else {
                star = star + " " + " "
            }
        }
        console.log(star)
    }
}


createRightSideRightAngledTriangle(5)

//          *
//        * *
//      * * *
//    * * * *
//  * * * * *