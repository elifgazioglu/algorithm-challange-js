var isPalindrome = function(x) {
    if(x === Number(String(x).split("").reverse().join(""))){
        return true;
    }
    else{
        return false;
    }
};