function plusMinus(arr) {
    let positive =0, negative=0, zero = 0
    
    arr.forEach(number =>{
        if(number>0) positive++;
        else if(number<0) negative ++;
        else zero ++;
    })
    
    console.log(positive/arr.length)
    console.log(negative/arr.length)
    console.log(zero/arr.length)
}