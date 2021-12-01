const music = new Audio('sounds/gunsForHire.mp3');

function realPlayMusic() {
	music.loop = true;
	music.volume = 0.3;
	if(document.querySelector("#checker").checked == true) {
		music.play();
	}else{
		music.pause();
	}
}

document.onmousemove = function(e) { 
    var x = e.clientX; 
    var y = e.clientY; 
    document.getElementById('light').style.marginLeft  = (x-600)+"px";
    document.getElementById('light').style.marginTop  = (y-400)+"px";
}