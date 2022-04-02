// JSON =>strigify,parse
const student={
  name:'shakib khan',
  age:32,
  movies:['king khan','dhakar mastan']
}
const studentJSON=JSON.stringify(student)
// console.log(student);
// console.log(studentJSON);
const studentObj=JSON.parse(studentJSON)
// console.log(studentObj)

// // Fetch:
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data))

// keys,values
const keys=Object.keys(student)
const values=Object.values(student)
console.log(keys);

// forEach
const numbers=[23,654,676,4535]
numbers.forEach(num=>console.log(num))
numbers.map(number=>number*2)

// for of on array like object

// looop on an object using for in

// add or remove from an array
const products=[
  {name:"laptop",price:32000,brand:'lenovo',color:'silver'},
  {name:"phone",price:10000,brand:'Xiomi',color:'black'},
  {name:"Watch",price:2000,brand:'Casio',color:'Gold'},
  {name:"Pc ",price:320000,brand:'Dell',color:'White'},
  {name:"Camera",price:45234523,brand:'Canon',color:'Black'}
];
const newProduct={name:'webcam',price:700,brand:"Lal"}
// copy products array and then add newProduct
const newProducts=[...products,newProduct];
console.log(newProducts);
// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining=products.filter(product.name!=="phone")