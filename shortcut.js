// false value:'',0,false,null,undefined
// truthy:
// check truthy
let myVar=5;
// check any truthy
if(myVar){
  myVar=myVar*100;
}
else{
  myVar=0;
}

let myMoney=50;
// you check negative or falsy anything
if(!myMoney){

}
const money=800;
let food;

if(money>100){
  food='biriyani'
}
else{
  food='cha biscuit'
}

// ternary operator;
let food1=money>100 ?'biriyani' :"cha biscuit"
console.log(food1);

let drink=(money>100 && myVar>100)?'coke ':'filter water'
console.log(drink);
// 
const num1=52;
console.log(num1);
const numStr=num1+'';
console.log(numStr);
// String to number
const input="560";
const inputNum=+input
console.log(inputNum);
// 
const isActive=true;
const showUser=()=>console.log("display user");
const hiddenUser=()=>console.log("hide user")
// isActive?showUser():hiddenUser()
// use && if hte left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hiddenUser();

// toggle boolean value
isActive=!isActive