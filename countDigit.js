function countDigit(n){
    let str = String(Math.abs(Math.floor(n)));
    return str.split("").length;
}

function countDigit2(n){
    n = Math.abs(n);
    if (n === 0) return 1;
    
    let count=0; 
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigit(-32324.672))