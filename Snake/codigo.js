const canvas = document.querySelector(".contenedor");
const jugar = document.querySelector(".jugar");
const arriba = document.querySelector(".arriba");
const abajo = document.querySelector(".abajo");
const derecha = document.querySelector(".derecha");
const izquierda = document.querySelector(".izquierda");


let contexto = canvas.getContext("2d");
//const contexto2 = canvas.getContext("2d");

contexto.lineWidth = 1; //2px
contexto.strokeStyle = "#000000";

for(let i=0;i<500;i+=20){
	contexto.moveTo(i,0);
	contexto.lineTo(i,500);
}
for(let y=0;y<500;y+=10){
	contexto.moveTo(0,y);
	contexto.lineTo(500,y);
}

contexto.stroke();


/*
//Posiciones
	let x = 0;
	let y = 0;

let jugador = { x:0 , y:0, ancho: 20, alto: 10};






/*setInterval(function mover(x,y){

	contexto.clearRect(0,0,canvas.width,canvas.height);
	contexto.fillRect(jugador.x,jugador.y,jugador.ancho,jugador.alto);

	jugador.y = y;
	
		y = y + 10;
}

,1000);


let z=0;
let t=0;

	arriba.addEventListener("click",()=>{
		t = -5;
		z = 0;
	})

	abajo.addEventListener("click",()=>{
		t = 5;
		z = 0;
	})

	derecha.addEventListener("click",()=>{
		z = 10;
		t=0
	})
	izquierda.addEventListener("click",()=>{
		z = -10;
		t=0;
	})




let fruta =  { x:20, y:60, ancho: 20, alto:10};

function frutaPosicion(){

	let numero = Math.random()*400;
	let numero2 = Math.round(numero);
	fruta.x = numero2;

	let numero3 = Math.random()*400;
	let numero4 = Math.round(numero3);
	fruta.y = numero4;

	contexto2.fillRect(fruta.x,fruta.y,fruta.ancho,fruta.alto)

}



	setInterval(()=>{
		mover(z,t);


	},250)

*/

/*let jugador = { x:0 , y:0, ancho: 20, alto: 10};
let fruta =  { x:20, y:60, ancho: 20, alto:10};
let x =0;
let z = 0;
let t =0;



function mover(z,t){
		if(jugador.x == canvas.width-20){
			x = canvas.width-20;
			console.log("Perdiste");

		}
		if(jugador.x == -10){
			x=-10;
			console.log("Perdiste")
			
		} 


		contexto.clearRect(0,0,canvas.width,canvas.height);
		contexto.fillRect(jugador.x,jugador.y,jugador.ancho,jugador.alto);

		posicionActualX = jugador.x;
		posicionActualY = jugador.Y;
		jugador.x = x;
		x = x + z;
		jugador.y = y;
		y = y + t;
}

	arriba.addEventListener("click",()=>{
		t = -5;
		z = 0;
	})

	abajo.addEventListener("click",()=>{
		t = 5;
		z = 0;
	})

	derecha.addEventListener("click",()=>{
		z = 10;
		t=0
	})
	izquierda.addEventListener("click",()=>{
		z = -10;
		t=0;
	})
	

setInterval(()=>{
		mover(z,t);

		contexto.fillRect(fruta.x,fruta.y,fruta.ancho,fruta.alto);

	
	},250);





	
	


*/





















	










