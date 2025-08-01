function solve(arr){
    let arr2= [];
     for(let i = 0;i<arr.length;i++){
         if(arr[i].gender === "male" && arr[i].age>=18){
             arr2.push(arr[i])
         }
     }
     return arr2;
 }
const users = [{
    name:"priyanvi",
    age:19,
    gender:"female"
},{
    name:"ram",
    age:20,
    gender:"male"
},{
    name:"shiva",
    age:21,
    gender:"male"
},{
    name:"Surendra",
    age:17,
    gender:"male"
}
]
// initialise a new array, push to a new array
// you can use filter function inside an array

const ans = solve(users)
console.log(ans)