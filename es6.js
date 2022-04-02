// template String
const numbers=[34,56,4343,56576,343];
const student={
name:"Shakib Khan",
age:32,
movies:["king khan","Dhakar mastan",'apu tumi kar']
}
const about=`My name is ${student.name} age of ${student.age} has number of ${numbers[1]} also liked  movies ${student.movies[0]}` 
console.log(about);

// Arrow function:
const getFiftyFive=()=>55;
const addSixtyFive=(num)=>{
  num+65;
}
const  isEven=x=>x%2==0;
const addthree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{
  const sum=num1+num2
    return sum;
}
// spread operator


// create a new array from a older aray and add an element
const currentArray=[...numbers,34,435]
console.log(currentArray);