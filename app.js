const start=document.querySelector(".btn .start")
const stops=document.querySelector(".btn .stop")
const goster=document.querySelector(".goster")

let nub=0
let dayanacaq
let cludin=true
start.addEventListener("click",function(){
    dayanacaq=setInterval(() => {
    nub++
    goster.innerText=nub
},1000);
})

stops.addEventListener("click",function(){
    
    clearInterval(dayanacaq)
    })

    

