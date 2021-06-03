const prompt = require("prompt-sync")();

let x = 0;
let y = 0;
console.log(
	`Your coordinates are ( ${x} , ${y} ). Would you like to go "up", "right", "down", or "left"? `
);
direction = prompt("> ");

while (direction != "stop") {
	if (direction === "left") {
		x = x - 1;
	}
	if (direction === "right") {
		x = x + 1;
	}
	if (direction === "up") {
		y = y + 1;
	}
	if (direction === "down") {
		y = y - 1;
	}
	console.log(
		`Your coordinates are ( ${x} , ${y} ). Would you like to go "up", "right", "down", or "left"? `
	);
	direction = prompt("> ");
}
