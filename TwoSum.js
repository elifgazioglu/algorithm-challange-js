var twoSum = function(nums, target) {
    for(let j=0; j<nums.length; j++){
        let temp = nums[j]
        for(let i=j+1; i<nums.length; i++){
            if(temp + nums[i] === target){
                return [j,i]
            }
        }
    }
};