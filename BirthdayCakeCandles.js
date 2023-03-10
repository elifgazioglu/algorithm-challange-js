function birthdayCakeCandles(candles) {
    let maks = candles[0];
    let result = 0;
    candles.map((item,index) =>{
        if(item > maks){
            maks = item;
        }
        else if(maks == item){
            result ++;
        }
    })
    return result;
}
