// Map.ForEach,Filter,Find
const products=[
  {name:"laptop",price:32000,brand:'lenovo',color:'silver'},
  {name:"phone",price:10000,brand:'Xiomi',color:'black'},
  {name:"Watch",price:2000,brand:'Casio',color:'Gold'},
  {name:"Pc ",price:320000,brand:'Dell',color:'White'},
  {name:"Camera",price:45234523,brand:'Canon',color:'Black'}
];
const brands=products.map(product=>product.brand)
// console.log(brands);
const prices=products.map(product=>product.price)
// console.log(prices);

// products.forEach(product=>console.log(product.brand))
products.forEach(product=>{

})
// filter :jara shorto puron korbe suudu tader ke nibe.filter ekta array return korbe

const cheap=products.filter(product=>product.price<=5000);
// console.log(cheap)

// containing 
const specificName=products.filter(product=>product.name.includes('n'))
// console.log(specificName)
const special=products.find(p=>p.name.includes('n'))
console.log(special)