function birthday(s, d, m) {
    let count=0;
    
    for(let i=0; i<s.length; i++){
        let sum=0;
        
        for(let a=0; a<m; a++){
            sum += s[i]
            i++;
        }
        i-=m;
        
        if(sum === d){
        count++;
        }
    }
    return count;
}