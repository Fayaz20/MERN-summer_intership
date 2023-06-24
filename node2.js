/*const add=(a,b)=>{ return (a+b)};
const diff=(a,b)=>{ return (a-b)};
const mul=(a,b)=>{ return (a*b)};
const div=(a,b)=>{ return (a/b)};*/
// const{add,diff,mul,div}=require('./node.js')

// let a=parseInt(process.argv[2])
// let b=parseInt(process.argv[3])
// let sign=process.argv[4]
// switch(sign){
//     case '+':
//         console.log(add(a,b));
//         break;
//     case  '-':
//         console.log(diff(a,b));
//         break;
//     case  '*':
//         console.log(mul(a,b));
//         break;
//     case  '/':
//         console.log(div(a,b));
//         break; 
//     default:
//         console.log("Invalid Operator")           

// }

const fs=require('fs')
// fs.readFile(`${__dirname}/states.txt`, (err, data) => {
//     if (err) console.log('Error not Found');
//     else console.log(data.toString());
//   });


//  fs.writeFile(`${__dirname}/file.txt`,inputData,(err, data) => {
//     if (err) console.log('Error not Found');
//     else console.log("Write function done");
//   });

//   fs.readFile(`${__dirname}/file.txt`,(err, data) => {
//     if (err) console.log('Error not Found');
//     else console.log("Read function done");
//   }); 
//   fs.appendFile(`${__dirname}/file.txt`,update,(err, data) => {
//     if (err) console.log('Error not Found');
//     else console.log("Value is changed");
//   });



//   const name='Akilan';
//   console.log(`Hellow ${name}! How are you?`)

//   console.log(__dirname+"states.txt")

//   const promises=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         reject('resolved')
//     },4000)
// })

// promises
// .then((value)=>console.log(value))
// .catch(()=>console.log('error'));

// const apiCall=async()=>{
//     try{
//     const promise_from_api = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data=await promise_from_api.json();
//     console.log(data);
//     }catch(error)
//     {
//         console.log('error')
//     }
// }
// apiCall();
// filePath="C:\Users\bhoop\OneDrive\Desktop\node\states.txt"
function write(filePath){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,inputData,(err, data) => {
            if (err){
                reject("The append didnt work")
            }
            else {
                resolve(data)
                console.log("Append is fine")

            }
          });

    })
}
const inputData="Anirudh";
const update="1225"
function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err, data) => {
            if (err){
                reject("the read didnt work");
            }
            else{
                resolve(data);
                console.log("Read worked")
            }
          });

    })
}
function append(filePath,update){
    return new Promise((resolve,reject)=>{
        fs.appendFile(filePath,update,(err, data) => {
            if (err){
                reject("The append didnt work")
            }
            else {
                resolve(data)
                console.log("append is fine")

            }
          });

    })
}



// read('file.txt').then((data)=>{
//     console.log(data.toString());
//          return write('file.txt',inputData).then((data)=>{
//             console.log("Value is appended")
//                 return append('file.txt',update).then((data)=>{
//                     console.log(`Appended data is ${update}`)
//                 }).catch((err)=>console.log(err))
//             }).catch((err)=>console.log(err))
        
// }).catch((err)=> console.log(err))

const filOperation=async()=>{
    try{
        const states=await read('states.txt')
        console.log(states.toString())
        const result=await write('file.txt','akil')
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
filOperation();