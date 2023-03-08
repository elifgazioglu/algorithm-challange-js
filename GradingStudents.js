function gradingStudents(grades) {
    for(let i = 0; i<grades.length; i++){
        if(grades[i] > 37){
            if(grades[i]%10==3 || grades[i]%10==8){
                grades[i] +=2;
            }
            else if(grades[i]%10==4 || grades[i]%10==9){
                grades[i] +=1;
            }
        }
    }
    
    return grades;
}