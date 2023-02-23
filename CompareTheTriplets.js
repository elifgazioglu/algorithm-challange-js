let alice = 0;
    let bob =0;
    
    for(let i=0; i<length; i++){
        if(a[i] > b[i]){
            alice +=1;
        }
        else if(a[i] < b[i]){
            bob +=1;
        }
    }
    
    return [alice, bob];