function birthdayCakeCandles(candles) {
    let maks = candles[0];
    let result = 0;
    for(let i=0; i<candles.length; i++){
        if(candles[i] > maks){
            maks = candles[i];
        }
        else if(maks == candles[i]){
            result ++;
        }
    }
    
    return result;
}
