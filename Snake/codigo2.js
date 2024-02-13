const pantalla = document.querySelector(".pantalla");
const puntaje = document.querySelector(".numero");
let puntos = 0;



let jugador = {x:20, y:20};
let velocidad = {x:0, y:0};
let fruta = {x:10, y:4};

const cambiarUbicacionFruta = ()=>{
	fruta.x = Math.floor((Math.random()*30)+1);
	fruta.y = Math.floor((Math.random()*30)+1);
	console.log(fruta.x)
	console.log(fruta.y)

}


const cambiarUbicacion = (e)=>{
	//console.log(e)
	
	if(e.key==='d'){
		velocidad.x = 1;
		velocidad.y = 0;
	}
	if(e.key==='a'){
		velocidad.x = -1;
		velocidad.y = 0;
	}
	if(e.key==='w'){
		velocidad.x = 0;
		velocidad.y = -1;
	}
	if(e.key==='s'){
		velocidad.x = 0;
		velocidad.y = 1;
	}
	if(e.key==="Control"){
		velocidad.x = 0;
		velocidad.y = 0;
	}
	
	
}
let  body = [];

	
function colision(){
		if(jugador.x == fruta.x && jugador.y==fruta.y){
			body.push([fruta.x,fruta.y])
			cambiarUbicacionFruta();
			puntos++;
			
		}
};	




const jugando = ()=>{



	let marca = `<div class="fruta" style="grid-area: ${fruta.y} / ${fruta.x}"></div>`;
		
	colision();
		puntaje.innerHTML = `Puntaje: ${puntos}`;

	for(let i = body.length-1;i>0;i--){
		body[i]= body[i-1];
	}

	body[0]=[jugador.x,jugador.y]

	jugador.x += velocidad.x;
	jugador.y += velocidad.y;
	for(let i = 0;i<body.length;i++){
		marca +=`<div class="jugador" style="grid-area: ${body[i][1]} / ${body[i][0]}"></div>`;
	}

	
		pantalla.innerHTML = marca;




}







setInterval(jugando,200);
document.addEventListener("keydown",cambiarUbicacion)

