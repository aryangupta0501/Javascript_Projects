const btn= document.getElementById('openModal')
const model= document.querySelector('.modal')
btn.addEventListener('click',()=>{
    model.classList.add('open')
})
btn.addEventListener('click',()=>{
    model.classList.remove('open')
})