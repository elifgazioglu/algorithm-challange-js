function diagonalDifference(arr) {
    let sumLeft=0;
    let sumRight=0;
    let arrLength = arr.length;
    
    for(let i=0; i<arr.length; i++){
        arrLength -= 1;
        sumLeft = sumLeft + arr[i][i];
        sumRight = sumRight + arr[i][arrLength];
    }
    
    const result = Math.abs(sumLeft-sumRight);
    return result;
}