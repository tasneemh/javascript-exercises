/**
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids. arr = [1,1,2,2,3]. There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.
 */

const migratoryBirdsSightings = (arr) =>{
  let result = {};
  for (let i=0; i<arr.length; i++){
    if (result[arr[i]]){
      result[arr[i]]++;
    } else{
      result[arr[i]] = 1;
    }
  }
  //console.log(result);
  const freq = Object.values(result);
  //console.log("freq: ", freq);
  const max = freq.reduce((acc, curr)=>{
    if (curr > acc){
      acc = curr;
    }
    return acc;
  }, 0);
  //console.log(max);
  const newArr = [];
  for (let ele in result){
    // console.log("ele: ",ele);
    // console.log("result[ele]: ", result[ele]);
    if (result[ele] === max){
      newArr.push(ele);
    }
  }
  //console.log(newArr);
  return newArr[0];
};
console.log(migratoryBirdsSightings([1,1,2,2,3]));
console.log(migratoryBirdsSightings([1,4,4,4,5,3]));