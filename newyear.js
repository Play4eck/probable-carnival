var i = 0;
function addBall(e) {
	var n = Math.ceil(Math.random()*5);
	new Insertion.Bottom("content", "<img src=\"ball1_" + n + ".gif\" id=\"ball_" + i + "\" alt=\"шарик\"></img>");
	var mouseCoord = getMouseCoord(e);
	var ballLeft = mouseCoord[0] - 10;
	var ballTop = mouseCoord[1] - 10;
	Element.setStyle("ball_" + i, {top: ballTop + "px", left: ballLeft + "px"});
	i = i + 1;
}

function getMouseCoord(e) {
	var IE = document.all?true:false;
	if (IE) { // определяем положение курсора в IE
	tempX = event.clientX + document.body.scrollLeft;
	tempY = event.clientY + document.body.scrollTop;
	}
	else {  // определяем положение курсора в NS
	tempX = e.pageX;
	tempY = e.pageY;
	}
	return [tempX, tempY];
}