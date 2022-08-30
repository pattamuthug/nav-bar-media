var nav = document.getElementById('nav');

var icon = document.getElementById('icon');
var list = document.getElementById('list');

icon.addEventListener('click', ()=>{
    console.log('show');
    list.classList.toggle('show');
})