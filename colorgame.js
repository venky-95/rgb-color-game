var number=6;
var colors = generaterandomcolor(number);
var pickedcolor =  pickColor();
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var h1= document.querySelector("h1");
var message = document.getElementById("message");
var reset = document.querySelector(".reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");




easy.addEventListener("click",function(){
	number=3;
	colors=generaterandomcolor(number);
	pickedcolor=pickColor();
	colordisplay.textContent= pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display= "none";
		}
	}
	easy.classList.add("selected");
	hard.classList.remove("selected");
	h1.style.background="#FFFFFF";
	reset.textContent="new colors";
	message.textContent=" ";
});

hard.addEventListener("click",function(){
	number=6;
	colors=generaterandomcolor(number);
	pickedcolor=pickColor();
	colordisplay.textContent= pickedcolor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display= "block";
	}
	easy.classList.remove("selected");
	hard.classList.add("selected");
	h1.style.background="#FFFFFF";
	reset.textContent="new colors";
	message.textContent=" ";
});


reset.addEventListener("click",function(){
	colors=generaterandomcolor(number);
	pickedcolor= pickColor();
	colordisplay.textContent= pickedcolor;
	for(var i=0; i<number; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background="#FFFFFF";
	reset.textContent="new colors";
	message.textContent=" ";
});

colordisplay.textContent= pickedcolor;
for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
	
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		if (clickedcolor === pickedcolor){
			message.textContent="correct!!";
			reset.textContent="playagain?";
			changecolor(clickedcolor);
			
		}
		else{
			this.style.background= "#FFFFFF";
			message.textContent="try again";
		}
	});
}
	function changecolor(color){
		for (var i=0;i<squares.length;i++){
			squares[i].style.background = color;
		}

		h1.style.background= color;

	}
	function pickColor(){
		var random=Math.floor( Math.random() * colors.length);
		return colors[random];

	}
	function generaterandomcolor(num){
		var arr = [];
		for(var i=0;i<num;i++){
			var temp= randomcolor();
			arr.push(temp);
		}
		return arr;
	}

	function randomcolor(){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb("+r+", "+g+", "+b+")";
	}

