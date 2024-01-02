const button = document.getElementById('btn')
const heading = document.getElementById('head')
const span = document.getElementById('spaan')
button.addEventListener('click',()=>{
    var call_fun=prompt('alert!')
    span.textContent=call_fun
})