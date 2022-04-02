// array dsetructuring
const numbers=[34,45,676,];
const [x,y]=numbers;
console.log(x,y);
function boxify(num1,num2){
  const nums=[num1,num2]
  return nums
}
const[fist,second,third,forth] =boxify(90,34)
const a=boxify(34,56)
// console.log(fist);
// object destructuring
const {name,age,salary} ={name:"alu",age:14,salary:343432}
console.log(age,name,salary);
const employee={
  ide:"Vs code",
  designation:"developer",
  machine:'mac',
  lanaguage:['html','css','js','java'],
  specification:{
height:66,
weight:67,
address:'kumarkhali',
drink:'water',
watch:{
  color:'black',
  price:500,
  brand:'casio'
}
  }
}
const {machine,ide}=employee;
const {weight,address}=employee.specification;
const {color,brand,price}=employee?.specification.watch
console.log(machine,address,weight,brand,price);
