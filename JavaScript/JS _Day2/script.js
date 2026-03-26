const nums = [3, 10, 24, 90];

// const result = map(e => e * 10 +1);

// function map(fn){
//     const result = [];

//     for(let i=0; i<nums.length; i++){
//         const currElement = nums[i];
//         const num = fn(currElement);
//         result.push(num);
//     }
//     return result;
// }

// nums.forEach((ele)=> console.log(ele));

const nums2 = [3, 10, 24, 90, 80, 32, 67];
const result2 = nums2.forEach(function(e){
    if(e % 2 == 0){
        console.log(e);
    }
})

console.log(result2);