var cnv = {
	canMove: false,
	motionType: canvasRelativeMotion,
	setMotionType(type) { cnv.motionType = type;}
}

var mouse =  {
	lastX: 0,
	lastY: 0,
	getCursorX(canvas, e) { return e.clientX - canvas.offsetTop + 31; },
	getCursorY(canvas, e) { return e.clientY - canvas.offsetLeft - 31; },
	getLastClick(e) { 
		var canvas = document.getElementById("canvas");
		this.lastX = this.getCursorX(canvas, e);
		this.lastY = this.getCursorY(canvas, e);
	}
}

var grid = {
		exists: false,
		posX: 0,
		posY: 0,
		width: 200,
		height: 200	
}

var axes = {
	x0: 300,
	y0: 400
}

function changeAxes(x, y) {
	axes.x0 = x;
	axes.y0 = y;
}

function makeGrid(posX, posY, width, height, canvas, context) {
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.save();
		context.beginPath();
		change(context);
		context.translate(posX, posY);
		context.strokeStyle = "red";
		for (var x=0; x <= width; x+=10) {
				context.moveTo(x, 0);
				context.lineTo(x, height);	
		}	
		for (var y=0; y <= height; y+=10) {	
			context.moveTo(0, y);
			context.lineTo(width, y);
		}	
		context.closePath();		
		context.stroke();
		context.restore();
	}
}

function makeAxes(canvas, oX, oY) {	
	if (canvas.getContext) {		
		var ctx = canvas.getContext('2d');	
		ctx.save();
//		oY = oY * (-1);
		ctx.strokeStyle = "#000000";
//		ctx.globalAlpha = 0.7;
		ctx.beginPath();
		ctx.moveTo(oX, 0);
		ctx.lineTo(oX, canvas.height);
		ctx.moveTo(0, oY);
		ctx.lineTo(canvas.width,  oY);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
}

function backgroundGrid(canvas) {
	width = canvas.width;
	height = canvas.height;	
	if (canvas.getContext) {		
		var ctx = canvas.getContext('2d');
		ctx.save();
		ctx.beginPath();
		ctx.globalsAlpha= 0.1;
		ctx.strokeStyle = "lightBlue";		
		for (var x=0; x <= width; x+=10) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, height);
		}
		for (var y=0; y <= height; y+=10) {
			ctx.moveTo(0, y);
			ctx.lineTo(width, y);
		}
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}	
}


function draw() {
	clearCanvas()
	var x0 = axes.x0;
	var y0 = axes.y0;
	var gridPosX = grid.posX;
	var gridPosY = grid.posY;	
	var gridWidth = grid.width;
	var gridHeight= grid.height;
	
	
	var canvas = document.getElementById("canvas");	
	if (canvas.getContext) {
		backgroundGrid(canvas);
		makeAxes(canvas, x0, y0);
		
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.save();
		ctx.translate(x0, y0);
		ctx.scale(1, -1);		
		if (grid.exists == false) {
			makeGrid(gridPosX, gridPosY, gridWidth, gridHeight, canvas);
			grid.exists = true;			
		}
		ctx.restore();
	}
}


function matrixNumbers() {
	var nums = [];
	for (var i=1; i<7; i++) {
		var n = Number (document.getElementById("td"+i).value);
		nums.push(n);
	}
	return nums;
}

function change(context) {
	var nums = matrixNumbers()
	context.transform(nums[0], nums[1], nums[2], nums[3], nums[4], nums[5]);
}


function clearCanvas() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		grid.exists = false;
	}	
}

function canvasAbsolteMove(e) {
	if (cnv.canMove){
		var a = document.getElementById("canvas");
		var b = document.getElementById("coods");
//		var x = (e.clientX - a.offsetTop + 31);
//		var y = (e.clientY - a.offsetLeft - 31);
		var x = mouse.getCursorX(canvas, e) - 27;
		var y = mouse.getCursorY(canvas, e) + 24;
		b.innerHTML  = ("X: " + x + "<br/>");
		b.innerHTML += ("Y: " + y);
	
		changeAxes(x, y);
		draw();		
	}
}

function canvasRelativeMotion(e) {
	if (cnv.canMove) {
		var canvas = document.getElementById("canvas");
		var coods = document.getElementById("coods");
		
		var newX =  ((mouse.getCursorX(canvas, e) - mouse.lastX)) + axes.x0 ;
		var newY =  ((mouse.getCursorY(canvas, e) - mouse.lastY)) + axes.y0 ;
		
		coods.innerHTML = "x: " + newX + " - y: " + newY;
		draw();		
		changeAxes(newX, newY);
		mouse.getLastClick(e);
	}
}

function canvasReverseRelativeMotion(e) {
	if (cnv.canMove) {
		var canvas = document.getElementById("canvas");
		var coods = document.getElementById("coods");

		var newX =  -((mouse.getCursorX(canvas, e) - mouse.lastX)) + axes.x0;
		var newY =  -((mouse.getCursorY(canvas, e) - mouse.lastY)) + axes.y0;
		coods.innerHTML = "x: " + newX + " - y: " + newY;
		draw();		
		changeAxes(newX, newY);
		mouse.getLastClick(e);
		
	}
}

function stopMoving (){ cnv.canMove = false;}  
function startMoving(){ cnv.canMove = true; }

document.getElementById("canvas").addEventListener("mousedown", function(e){ startMoving(e)});
document.getElementById("canvas").addEventListener("mousedown", function(e){ mouse.getLastClick(e)});
document.getElementById("canvas").addEventListener("mousemove", function(e){ cnv.motionType(e) });
document.getElementById("canvas").addEventListener("mouseup", stopMoving);
document.getElementById("canvas").addEventListener("mouseout", stopMoving);


