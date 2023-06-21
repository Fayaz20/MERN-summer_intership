let a=10n;
console.log(a)
console.log(typeof a)
let str='sjsksl'
let str1="qhgsxjqsn"
let num1="21265";
let num2=20;
console.log("Addition of two numbers "+num1+" and "+num2+" is equal to "+(num1+num2));
console.log(`Addition of two
numbers ${num1} and
${num2} is ${num1+num2}`) 
let x=null;
console.log(x);
const bool=true;
console.log(sece);
var sece='college';
const user= Object.freeze({
    name :"Akilan",
    id:20,
    college:'sece',
    age:19,
    address:'qsxuvbu'

});
user.phoneNO=489621832
console.log(user.age)
console.log(user)
delete user.age;
const user1= Object.keys({
    name :"Akilan",
    id:20,
    college:'sece',
    age:19,
    address:'qsxuvbu'

});
const user2= Object.values({
    name :"Akilan",
    id:20,
    college:'sece',
    age:19,
    address:'qsxuvbu'

});
console.log(user1);
console.log(user2);
console.log(Object.keys(user));
const usery={
    ...user,
    name:'fayaz',
};//...spread operator
usery.age=30;
console.log(usery,user);
const details={
    /*address:{
        street:'second street',
        city:'coimbatore',
    }*/
    city:'coimbatore'
}
//console.log(details.address.city);
console.log(details.name);
console.log(details.address?.city);
for(const key in user){
   console.log(key,user[key]);
}
function sum(num1,num2){
    if(typeof num1==='number' && typeof num2==='number')
    {
        return num1+num2;
    }
    return 'invalid number';
}
console.log(sum(num1,num2));
//arrow
const sum1=(num1,num2) =>
{
    if(isNaN(num1) || isNaN(num2))
    {
       return "invalid number";
    }
    return num1+num2;
}
console.log(sum1(num1+num2));
const sum2=(num1,num2) => num1+num2
const sub=(num1,num2) => num1-num2
const mul=(num1,num2) => num1*num2
const div=(num1,num2) => num1/num2

//console.log(sum(num1,num2))
const calculator = (num1,num2,operation) =>{
    return operation(num1,num2)
}
console.log(calculator(10,20,sum2));
console.log(calculator(10,20,sub));
console.log(calculator(10,20,mul));
console.log(calculator(10,20,div));
//calculator higher oredr function;
//sum=call back fun;
let str2="  im studying at sece  "
console.log(str2.trim());
console.log(str2);
console.log(str2.replace('e','o'));
console.log(str2);
console.log(str2.replaceAll('e','o'));
console.log(str2);
let arr=[1,2,3,'1234','4',60.25];
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(12)
console.log(arr);
arr.shift();
console.log(arr);
arr.push((x,y)=>x*y)
console.log(arr);
console.log(arr[6](10,30))
console.log(arr);
arr.push({a:1,b:2,c:3,say_hello:()=>"hello"});
console.log(arr);
console.log(arr[7].say_hello());
arr.splice(arr.length-2,0,'A','B','C');//splice(start,del_count,values..)
console.log(arr);
let arr2=['a',...arr,'b','c'];
console.log(arr2);
let names=['anirudh','akilan','Fardeen','Jeeva','asvin'];
let sliced_name=names.slice(1,4);//slice(start,end)
console.log(names,sliced_name);
let names1=['Surya',...names,'Chandra','Fayaz']
console.log(names1);
let b1='harish';
console.log(b1.slice(1,b1.length));
let str5='sri eshwar college';
let str6=str5.split(" ");
console.log(str5,str6);
console.log(str6.join(''));
console.log(str6.join('').toUpperCase());
console.log(str6.join('').toLowerCase());
console.log(str5.toUpperCase());
console.log(str5.toLowerCase());
let nam="madhu akshya priya ishwarya saranya";
let nam1=nam.split(" ");
for(var i=0;i<nam1.length;i++)
{
    nam1[i]=nam1[i].charAt(0).toUpperCase()+nam1[i].slice(1);
}
let nam2=nam1.join(" ");
console.log(nam2);



