const findNextMultipleOfFive = (num) =>{
  const remainder = num % 5;
  const nextMultiple = num + (5 - remainder);
  return nextMultiple;
};
//console.log(findNextMultipleOfFive(19));

const gradingStudents = (grades)=>{
  let newGrades = [];
  for (let i=0; i<grades.length; i++){
    const nextMultiple = findNextMultipleOfFive(grades[i]);
    if (grades[i] < 40){
      if (nextMultiple >=40 && nextMultiple - grades[i] < 3){
        newGrades.push(nextMultiple);
      } else {
        newGrades.push(grades[i]);
      }
    } else {
      if (nextMultiple - grades[i] < 3){
        newGrades.push(nextMultiple);
      } else {
        newGrades.push(grades[i]);
      }
    }
  }
  return newGrades;
};
console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([37, 33]));
/*
const gradingStudents = (grades) =>{
  let newGrades = []; 
  for (let i = 0; i<grades.length; i++){
    //console.log(grades[i]);
    if (grades[i]< 40){
      newGrades.push(grades[i]);
    } else {
      let count = 1;
      console.log("grades[i]: ", grades[i]);
      console.log("grades[i] + count: ", grades[i] + count);
      console.log("grades[i] + count)%5 === 0: ", (grades[i] + count)%5 === 0);
      while (count < 3 ){
        console.log("count: ", count);
        if ((grades[i] + count)%5 === 0){
          newGrades.push(grades[i] + count);          
        } 
        count++;
      }
      if (count === 3 && (grades[i] + count)%5 !== 0){
        newGrades.push(grades[i]);
      }      
    }
  }
  console.log("newGrades: ",newGrades);
  return newGrades;
};
console.log(gradingStudents([73, 67, 38, 33]));
*/