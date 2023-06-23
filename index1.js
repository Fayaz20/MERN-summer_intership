/*function palindrome(string)
{
   for(var i=0;i<=string.length/2;i++)
   {
      if(string[i]!=string[string.length-i-1])
      {
           return 'not a palindrome';
      }
      return "It is palindrome";
    }
}
const string=prompt('Enter the string');
const vale=palindrome(string)
console.log(vale);
function palin(string1)
{
 let pal=string1.split('').reverse();
 let ans=pal.join();
 if(pal==ans)
    console.log('true')
 else 
    console.log('false')
}
const string1=prompt('Enter the string');
const value=palindrome(string1)
console.log(value);
let obj2={
    a:1,
    b:'dnn',
    c:2
}

for(let key in obj2){
    console.log(key,obj2[key]);
}
let obj3=[1,'dnn',2];
for(let key of obj3){
    console.log(key)
}
let sece_names=['akialn','alan','sad','Uchiha', 'itachi','Hatke',' kakashi'];
let num_arr=[1,2,3,4,5];

num_arr.forEach((ele)=>{
    console.log(ele*ele*ele); //if only one parametre is passed in arrow function bracket is not needed;
})

sece_names.forEach(ele =>{
    console.log(ele);
})
num_arr.forEach((ele)=> console.log(ele*ele));
let ser=sece_names.map(ele => ele.repeat(4));
console.log(ser);

let ans_filter=num_arr.filter(ele =>  !(ele%2));
console.log(ans_filter);
let ans_filter1=num_arr.filter(ele =>  'shsmm');
console.log(ans_filter1);
let names_obj=[
    {
        name:'Akjialn',
        dob:2002
    },
    {
        name:'Anirudh',
        dob:2004
    },
    {
        name:'Fayaz',
        dob:2003
    },
    {
        name:'Jeeva',
        dob:2005
    }
]
let ans_fil=names_obj.filter(ele => ele.dob>2002).map(ele => ele.name);
console.log(ans_fil);

//shallow copy
const array=[1,2,3,4,5];
const array1=[...array]
const array2=array
array[3]=500;
console.log(array,array1,array2)

const obj_cp={
    name:'sece',
    year:2023
}

const obj_cp2={...obj_cp};
obj_cp.year=2024;
console.log(obj_cp,obj_cp2);

obj_cp1={
    name:'sece',
    year:2023,
    name:'fata nsj'
}
console.log(obj_cp1)

//task: employee name age salary phone number

let emp_details=[
    {
        name:prompt('enter name'),
        age:prompt("Enter age"),
        salary:24000,
        phone_no:13364661646
    },
    {
        name:prompt('enter name'),
        age:prompt("Enter age"),
        salary:74000,
        phone_no:525522556

    },
    {
        name:prompt('enter name'),
        age:prompt("Enter age"),
        salary:26000,
        phone_no:14155625
    },
    {
        name:prompt('enter name'),
        age:prompt("Enter age"),
        salary:90000,
        phone_no:908031475
    },
    {
        name:prompt('enter name'),
        age:prompt("Enter age"),
        salary:40000,
        phone_no:13354645
    }
]

let ans5=emp_details.filter(ele =>ele.salary>25000).map(ele =>({name:ele.name,age:ele.age}))
console.log(ans5)
//destructure
let stuc_num=[1,2,4,3,5];
let [a1,a2,a3,a4,a5]=stuc_num;
console.log(a1,a2,a3,a4,a5);

let stuc1_num=[1,2,4,3,5,6,7,8];
let [b1,b2,b3,b4,...b5]=stuc1_num;// rest operator
console.log(b5)

let sut=[10,20,30,40,50,60,70,80,90,100];
let [c1,c2,,c3,c4,...c5]=sut;
console.log(c1,c2,c3,c4,c5)

//object destructuring
let st_obj={
    clg_name:'sece',
    age:25,
    year:2023,
    address:'jzab',
    avg_sal:25000,
    aim:455
}
let{clg_name:coll,age,year,address,color="green",...rest}=st_obj;//rename operator
console.log(coll,age,year,address,color,rest)
setTimeout(()=> console.log('Hello World'),3000)// setTimeout to print in interval
setInterval(()=> console.log('Hello World'),5000)// java script is an asynchronous language
console.log('hi')
setTimeout(function ab(){
    console.log('there');
},3000);
console.log("Dog");
//promise bending resolve reject
const abc=fetch('https://jsonplaceholder.typicode.com/todos')
abc
.then((Response) => Response.json())
.then((data)=> console.log(data))
.catch((error)=>{console.log('error',error)});

const user1={
    name:'user',
    age:25
}

const promises=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        reject('resolved')
    },4000)
})

promises
.then((value)=>console.log(value))
.catch(()=>console.log('error'));

const apiCall=async()=>{
    try{
    const promise_from_api = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data=await promise_from_api.json();
    console.log(data);
    }catch(error)
    {
        console.log('error')
    }
}
apiCall();*/

import { user_data,addUser,deleteUser,editMultipleUser,editUser } from "./useModule.js";
addUser({id:2,name:'akilan',age:20,email:"djkq25jzak@jkds.com"},{id:3,name:'ani',age:18,email:"425q25jzak@jkds.com"})
editUser(1,'age',12)
console.log(user_data)
editMultipleUser()
deleteUser(3)
document.body.innerText='hello'