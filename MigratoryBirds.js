function migratoryBirds(arr) {
    let birdCount = Array(6).fill(0);
    let maks = 0;
    let mostFrequentBird = 0;
    
    for(let i=0; i<arr.length; i++){
        let birdType = arr[i];
        birdCount[birdType] += 1;
        
        if(birdCount[birdType] > maks){
            maks = birdCount[birdType];
            mostFrequentBird = birdType;
        }
        
        else if(birdCount[birdType] == maks && birdType < mostFrequentBird){
            mostFrequentBird = birdType;
        }
    }
    
    return mostFrequentBird;
}