function kangaroo(x1, v1, x2, v2) {
    for(let i=0; ;i++){
        x1 += v1;
        x2 += v2;
        if(x1 == x2){
            return "YES";
        }
        if(x1<x2 && v2>v1 || (x2-x1)%(v2-v1)!=0){
            return "NO";
        }
    }

}