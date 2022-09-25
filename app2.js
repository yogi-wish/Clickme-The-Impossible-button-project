// The impossible button Demo!

const movingBtn = document.querySelector('#moving');

movingBtn.addEventListener('mouseover', function(){
    const h = Math.random()*window.innerHeight;
    const w = Math.random()*window.innerWidth;
    movingBtn.style.top =  `${h}px`;
    movingBtn.style.left = `${w}px`;
})

movingBtn.addEventListener('click',function(){
    movingBtn.innerText = "You Got Me!!";
    document.body.style.backgroundColor = "green";

})