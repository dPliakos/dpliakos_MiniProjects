var axes = {
	x0: 0,
	y0: 0	
}

var point = {
	x: 0,
	y: 0
}

function main() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');			
	}
	drawAxes();
	drawX();
}

function drawAPoint(type) {
	point.x = document.getElementById("pointX").value;
	point.y = document.getElementById("pointY").value;
	if (type== 1) drawPoint(point.x, point.y);
	else drawDashedPoint(point.x, point.y);
		
}

function drawPoint(x, y) {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.save();
		ctx.translate(axes.x, axes.y);	
		ctx.scale(1, -1);
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.arc (x, y, 2, 0, 2*Math.PI);
		ctx.stroke();
		ctx.restore();
		main();
//		ctx.arc(0, 0, radius, 0 , 2*Math.PI)
		
	}
}

function drawDashedPoint(x, y) {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.save();
		ctx.translate(axes.x, axes.y);	
		ctx.scale(1, -1);
		ctx.beginPath();
		ctx.save();
		ctx.setLineDash([15, 15]);
		ctx.moveTo(axes.x0, y);
		ctx.lineTo(x, y);		
		ctx.moveTo(x, axes.y0);
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.restore();
		ctx.moveTo(x, y);
		ctx.arc (x, y, 2, 0, 2*Math.PI);
		ctx.stroke();
		ctx.restore();
		main();		
	}
}


function drawX() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(canvas.width, 0);
		ctx.lineTo(0, canvas.height);
		ctx.stroke();
		ctx.closePath();
	}
}

function drawAxes() {
	var userX = document.getElementById("inX").value;
	var userY = document.getElementById("inY").value;
	axes.x = userX;
	axes.y = userY;	
	
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.moveTo( axes.x, 0);
		ctx.lineTo( axes.x, canvas.height);
		ctx.moveTo( 0, axes.y);
		ctx.lineTo( canvas.width, axes.y);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
}





















