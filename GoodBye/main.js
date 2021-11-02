const music2 = new Audio('piano.mp3');

function textshow(){
	const music = new Audio('goodbye.mp3');
	music.play();
	
	console.log("HI");
	setTimeout(alertFunc, 3900);
}

function alertFunc() {
	document.getElementById('rick').style.display = "block";
	setTimeout(
		function () {
		document.getElementById('body').style.backgroundColor = "#fff";
		console.log("goodbye");
		window.close();
	}, 2000);
}
