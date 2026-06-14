particlesJS("particles-js",{
particles:{
number:{value:100},
color:{value:"#38bdf8"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
move:{enable:true,speed:2}
}
});

window.addEventListener("scroll",()=>{
document.querySelectorAll(".card").forEach(card=>{
card.classList.add("show");
});
});