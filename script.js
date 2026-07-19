
function scrollToMessage(){

document
.getElementById("message")
.scrollIntoView();

}



// Stars animation


const canvas=document.getElementById("stars");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



let stars=[];


for(let i=0;i<150;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2

});

}



function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle="white";


stars.forEach(s=>{

ctx.beginPath();

ctx.arc(
s.x,
s.y,
s.size,
0,
Math.PI*2
);

ctx.fill();


s.y+=0.3;


if(s.y>canvas.height){

s.y=0;

}

});


requestAnimationFrame(animate);

}


animate();



// Falling hearts


setInterval(()=>{


let heart=document.createElement("div");

heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=Math.random()*100+"%";

heart.style.top="-20px";

heart.style.fontSize="20px";

heart.style.animation="fall 5s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},5000);



},500);

