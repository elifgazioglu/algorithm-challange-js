function miniMaxSum(arr) {
    let minSum=0;
    let maksSum=0;
    
    arr.sort();
    for(let i = 1; i<arr.length; i++){
        maksSum += arr[i];
    }

    arr.reverse();
    for(let i = 1; i<arr.length; i++){
        minSum += arr[i];
    }
    
    console.log(minSum, maksSum);
}