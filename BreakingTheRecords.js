function breakingRecords(scores) {
    let min=0;
    let max=0;
    let highest = scores[0];
    let lowest= scores[0];
    
    scores.map((item,index) => {
        if(item > highest){
            max++;
            highest = item;
        }
        if(item < lowest){
            min++;
            lowest = item;
        }
    });
    return [max,min];
}
