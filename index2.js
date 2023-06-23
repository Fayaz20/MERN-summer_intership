document.body.style.backgroundColor='cyan'
console.log(document.body.children)
const allChild=document.body.children
setTimeout(()=>{
    allChild[0].innerHTML='<h1>CRIMSON</h1>'
    allChild[0].style.color='crimson'}
,200)
setTimeout(()=>{
    allChild[1].innerHTML='<h1>BLUE</h1>'
    allChild[1].style.color='blue'},200)
setTimeout(()=>{
    allChild[2].innerHTML='<h1>YELLOW</h1>'
    allChild[2].style.color='yellow'},200)
document.body.style.backgroundColor='black' 
let refresh_value=true 
setInterval(()=>{
    allChild[0].style.color=(refresh_value?"green":"orange");
    refresh_value!=refresh_value
},2000)
var i = 0;
function change() {
    var color = ["red", "blue", "yellow", "violet"];
    allChild[0].style.color = color[i];
    allChild[1].style.color = color[i];
    allChild[2].style.color = color[i];
    i = (i + 1) % color.length;
    }
    setInterval(change, 100);
document.body.style.backgroundColor='ivory'
const cla=document.getElementsByClassName('csa');
cla[0].innerText='Selector has been changed';
console.log(cla)

const id=document.getElementById(1)
console.log(id)

const button=document.getElementById('login-button')
const username=document.getElementById('user')
const password=document.getElementById('word')
const form=document.getElementById("login")
button.addEventListener('click',(event)=>{
    console.log('click')
})
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('submit',username.value,password.value)
})