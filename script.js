window.onload=()=>{

setTimeout(()=>{

document.querySelector(".loader").style.display="none";

},1500);

}

const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveal.forEach(box=>{

const top=box.getBoundingClientRect().top;

if(top<window.innerHeight-100){

box.classList.add("active");

}

});

let progress=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;

document.querySelector(".progress").style.width=progress+"%";

});

gsap.from(".content h1",{

y:80,

opacity:0,

duration:1.5

});

gsap.from(".content p",{

y:50,

opacity:0,

delay:.5,

duration:1.2

});

gsap.from(".btn",{

opacity:0,

scale:.8,

delay:1,

duration:1

});

/* Background Music */

const music=document.getElementById("bgMusic");

window.addEventListener("click",()=>{

if(music){

music.play().catch(()=>{});

}

},{once:true});


/* Image Zoom */

gsap.utils.toArray(".chapter").forEach(section=>{

gsap.from(section.querySelector("img"),{

scale:1.3,

opacity:0,

duration:1.4,

scrollTrigger:{

trigger:section,

start:"top 80%"

}

});

});


/* Text Animation */

gsap.utils.toArray(".text").forEach(box=>{

gsap.from(box,{

x:100,

opacity:0,

duration:1,

scrollTrigger:{

trigger:box,

start:"top 80%"

}

});

});


/* Parallax */

gsap.to(".hero",{

backgroundPosition:"50% 100%",

ease:"none",

scrollTrigger:{

trigger:".hero",

scrub:true

}

});

/* ========================= */
/* Custom Cursor */
/* ========================= */

const cursor=document.querySelector(".cursor");

if(cursor){

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

}

/* ========================= */
/* Typewriter */
/* ========================= */

const message="Thank You ❤️";

let index=0;

function typeWriter(){

if(index<message.length){

const typing=document.getElementById("typing");

if(typing){

typing.innerHTML+=message.charAt(index);

}
index++;

setTimeout(typeWriter,120);

}

}

window.addEventListener("load",()=>{

setTimeout(typeWriter,1000);

});


/* ========================= */
/* GSAP Ending Animation */
/* ========================= */

gsap.from(".ending-content",{

opacity:0,

y:100,

duration:2,

scrollTrigger:{

trigger:".ending",

start:"top 70%"

}

});


gsap.from(".glow",{

scale:0,

duration:2,

scrollTrigger:{

trigger:".ending",

start:"top 80%"

}

});