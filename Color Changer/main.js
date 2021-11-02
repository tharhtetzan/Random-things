var temp = 0;

function colorChange(color) {
	switch (color.id) {
		case "1":
			document.documentElement.style.setProperty('--glowvar', '#F3FF00');
		break;
		case "2":
			document.documentElement.style.setProperty('--glowvar', '#4DFF00');
		break;
		case "3":
			document.documentElement.style.setProperty('--glowvar', '#FF4D00');
		break;
		default:
			document.documentElement.style.setProperty('--glowvar', '#fff');
	}
	if(temp == 0){
		console.log(temp);
	}else{
	if(document.getElementById(temp).classList.contains("active")){
		document.getElementById(temp).classList.remove("active");
	}}

	document.getElementById(color.id).classList.add("active");
	temp = color.id;
}