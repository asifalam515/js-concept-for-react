// how to declare a variable using let and const
const name="asibul alam"  
let season="winter"
// 6 basics conditions:(>,<,===<!==,<=,>=)
// multiple conditions:&&,||
if(name==="asibul alam" || season==="rainy"){

}
// 3.array and its index,length,push,pop

const numbers=[343,57678,787,345]

// 4.Loop for loop
for(let i=0;i<numbers.length;i++){
  const number=numbers[i]
  // console.log(number)
}
// 5.Function:
function multiply(num1,num2){
   return num1*num2;
   
}
const ans=multiply(3453,76)
// console.log(ans)

// 6.object:
// 3 ways to acccess properties by name
const student={
  name:'sakib khane',
  age:32,
  movies:["king khan","Dhakar Mastan"]
}

const myVariable='age'
console.log(student.age)//direct by properties
console.log(student["age"]);//access via property name string
console.log(student[myVariable])