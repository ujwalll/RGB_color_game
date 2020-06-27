//alert("Connected");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

var squares = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");



for(let i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
	//click listeners
	squares[i].addEventListener("click",function() {
		let clickedColor = this.style.backgroundColor;
		//Check whether color is same or not
		if(clickedColor === pickedColor)
		{
			message.textContent = "You won! Excellent";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			reset.textContent="Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}
	})
}


for(let i = 0;i < mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "EASY"){
			numSquares=3;
		}
		else{
			numSquares=6;
		}
		resetall();
	})
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(let i=0;i<squares.length;i++){
// 		if(colors[i]){
// 		squares[i].style.backgroundColor=colors[i];}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// 	h1.style.backgroundColor="steelblue";
// })

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(let i=0;i<squares.length;i++){
// 		squares[i].style.backgroundColor=colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	h1.style.backgroundColor="steelblue";
// })

reset.addEventListener("click",function(){
	resetall();
})


function changeColors(color)
{
	for(let i =0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	let arr = [];
	for(let i=0;i<num;i++){
		//Generate random color and push into the array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", "+ b + ")";
}

function resetall(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i=0;i<squares.length;i++){
 		if(colors[i]){
 		squares[i].style.display="block";
 		squares[i].style.backgroundColor=colors[i];
 		}
 		else{
 			squares[i].style.display="none";
 		}
 	}
	h1.style.backgroundColor="steelblue";
	message.textContent = "";
	reset.textContent = "New Colors";
}