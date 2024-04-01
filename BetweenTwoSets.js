function getTotalX(a, b) {
    let count = 0;

    for(let i = Math.max(...a); i<=Math.min(...b); i++){
        const aCount = a.every(aNum => i%aNum ===0)
        const bCount = b.every(bNum => bNum%i ===0)
        
        if(aCount && bCount){
            count++
        }
    }
    return count;
}
