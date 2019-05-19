let circle = function (x, y, radius, fillCircle) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	if (fillCircle) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
}

let drawBee = function (x, y) {
	ctx.lineWidth = 2;
	ctx.strokeStyle = "Black";
	ctx.fillStyle = "Gold";

	circle(x, y, 8, true);
	circle(x, y, 8, false);
	circle(x - 5, y - 11, 5, false);
	circle(x + 5, y - 11, 5, false);
	circle(x - 2, y - 1, 2, false);
	circle(x + 2, y - 1, 2, false);

}

let update = function (coordinate) {
	let offset = Math.random() * 8 - 4;
	coordinate += offset;

	if (coordinate > 600) {
		coordinate == 600;
	}
	if (coordinate < 0) {
		coordinate == 0;
	}
	return coordinate;
}

let canvas = document.getElementById("bees");
let ctx = canvas.getContext("2d");

let x = 300;
let y = 300;

setInterval(function () {
	ctx.clearRect(0, 0, 600, 600);

	drawBee(x, y);
	x = update(x);
	y = update(y);

	ctx.strokeRect(0, 0, 600, 600);
}, 30);