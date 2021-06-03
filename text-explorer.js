const prompt = require("prompt-sync")();

let x = 0;
let y = 0;

console.log(`Welcome to the fantastical world of Coordinates!
Your goal is to find the Enchanted Mouse.`);

console.log(
	`Your find yourself in a town. Head in any direction to explore the world.
    Your coordinates are: ( ${x} , ${y} ).
     Would you like to go "up", "right", "down", or "left"? `
);
direction = prompt("> ");

while (!(x === 4 && y === 3)) {
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

	// Center of the map =========================================================================================================================
	if (
		(x === -2 || x === -1 || x === 0 || x === 1 || x === 2) &&
		(y === -2 || y === -1 || y === 0 || y === 1 || y === 2)
	) {
		console.log(
			`You are in town. Head in any direction to explore the world. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -2 || x === -1 || x === 0 || x === 1 || x === 2) &&
		(y === 3 || y === 4 || y === 5 || y === 6)
	) {
		console.log(
			`You are in Red Plains. Head in any direction to explore the world. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -2 || x === -1 || x === 0 || x === 1 || x === 2) &&
		(y === 7 || y === 8 || y === 9 || y === 10)
	) {
		console.log(
			`You are in Endless Desert. Head in any direction to explore the world. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -2 || x === -1 || x === 0 || x === 1 || x === 2) &&
		(y === -3 || y === -4 || y === -5 || y === -6)
	) {
		console.log(
			`You are in Green Woods. Head in any direction to explore the world. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -2 || x === -1 || x === 0 || x === 1 || x === 2) &&
		(y === -7 || y === -8 || y === -9 || y === -10)
	) {
		console.log(
			`You are in Endless Desert. Head in any direction to explore the world. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}

	// Left side of the map =========================================================================================================================
	if (
		(x === -3 || x === -4 || x === -5 || x === -6) &&
		(y === -2 || y === -1 || y === 0 || y === 1 || y === 2)
	) {
		console.log(
			`You have entered a Green Meadow. There is grass everywhere. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -7 || x === -8 || x === -9 || x === -10) &&
		(y === -2 || y === -1 || y === 0 || y === 1 || y === 2)
	) {
		console.log(
			`You enter a Fairy Garden. Wisps and Fairies zip all around you. 
                You cannot proceed any further left!
                Your coordinates are ( ${x} , ${y} ).
                Would you like to go "up", "right", or "down"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -3 || x === -4 || x === -5 || x === -6) &&
		(y === 3 || y === 4 || y === 5 || y === 6)
	) {
		console.log(
			`You have entered a Elves Retreat. You see nimble elves all around you. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -7 || x === -8 || x === -9 || x === -10) &&
		(y === 3 || y === 4 || y === 5 || y === 6)
	) {
		console.log(
			`You enter a Impossible Cliffs. Steep cliffs drop away in front of you.
            You cannot proceed any further left! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", or "down"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -3 || x === -4 || x === -5 || x === -6) &&
		(y === 7 || y === 8 || y === 9 || y === 10)
	) {
		console.log(
			`You have entered a Scorched Lands. Desolation and smoke surround you.
            You cannot proceed any further up!        
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -7 || x === -8 || x === -9 || x === -10) &&
		(y === 7 || y === 8 || y === 9 || y === 10)
	) {
		console.log(
			`You enter a Ocean crags. Tall rocks and a vast ocean spread out in front of you.
            You cannot proceed any further left or up! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "right" or "down"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -3 || x === -4 || x === -5 || x === -6) &&
		(y === -7 || y === -8 || y === -9 || y === -10)
	) {
		console.log(
			`You have entered a Scorched Lands. Desolation and smoke surround you.
            You cannot proceed any further down!        
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -7 || x === -8 || x === -9 || x === -10) &&
		(y === -7 || y === -8 || y === -9 || y === -10)
	) {
		console.log(
			`You enter a Ocean crags. Tall rocks and a vast ocean spread out in front of you.
            You cannot proceed any further left or down! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up" or "right"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -3 || x === -4 || x === -5 || x === -6) &&
		(y === -3 || y === -4 || y === -5 || y === -6)
	) {
		console.log(
			`You have entered a Green Woods. Beautiful green trees soar towards the sky.
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === -7 || x === -8 || x === -9 || x === -10) &&
		(y === -3 || y === -4 || y === -5 || y === -6)
	) {
		console.log(
			`You enter a Orc Encampment. Ugly Pig-faced monsters charge in your direction.
            You cannot proceed any further left! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", or "down"? `
		);
		direction = prompt("> ");
	}

	// Right side of the map =========================================================================================================================
	if (
		(x === 3 || x === 4 || x === 5 || x === 6) &&
		(y === -2 || y === -1 || y === 0 || y === 1 || y === 2)
	) {
		console.log(
			`You have entered a Golden Meadow. There is grass everywhere. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 7 || x === 8 || x === 9 || x === 10) &&
		(y === -2 || y === -1 || y === 0 || y === 1 || y === 2)
	) {
		console.log(
			`You enter a River Run. Wisps and Fairies zip all around you. 
                You cannot proceed any further right!
                Your coordinates are ( ${x} , ${y} ).
                Would you like to go "up", "left", or "down"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 3 || x === 4 || x === 5 || x === 6) &&
		(y === 3 || y === 4 || y === 5 || y === 6)
	) {
		console.log(
			`You have entered a Dark Forest. You see nimble elves all around you. 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 7 || x === 8 || x === 9 || x === 10) &&
		(y === 3 || y === 4 || y === 5 || y === 6)
	) {
		console.log(
			`You enter a Troll Cave. Steep cliffs drop away in front of you.
            You cannot proceed any further right! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "left", or "down"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 3 || x === 4 || x === 5 || x === 6) &&
		(y === 7 || y === 8 || y === 9 || y === 10)
	) {
		console.log(
			`You have entered a Scorched Lands. Desolation and smoke surround you.
            You cannot proceed any further up!        
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 7 || x === 8 || x === 9 || x === 10) &&
		(y === 7 || y === 8 || y === 9 || y === 10)
	) {
		console.log(
			`You enter a Ocean crags. Tall rocks and a vast ocean spread out in front of you.
            You cannot proceed any further right or up! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "left" or "down"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 3 || x === 4 || x === 5 || x === 6) &&
		(y === -7 || y === -8 || y === -9 || y === -10)
	) {
		console.log(
			`You have entered a Scorched Lands. Desolation and smoke surround you.
            You cannot proceed any further down!        
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 7 || x === 8 || x === 9 || x === 10) &&
		(y === -7 || y === -8 || y === -9 || y === -10)
	) {
		console.log(
			`You enter a Ocean crags. Tall rocks and a vast ocean spread out in front of you.
            You cannot proceed any further right or down! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up" or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 3 || x === 4 || x === 5 || x === 6) &&
		(y === -3 || y === -4 || y === -5 || y === -6)
	) {
		console.log(
			`You have entered a Green Woods. Beautiful green trees soar towards the sky.
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "right", "down", or "left"? `
		);
		direction = prompt("> ");
	}
	if (
		(x === 7 || x === 8 || x === 9 || x === 10) &&
		(y === -3 || y === -4 || y === -5 || y === -6)
	) {
		console.log(
			`You enter a River Run. Ugly Pig-faced monsters charge in your direction.
            You cannot proceed any further right! 
            Your coordinates are ( ${x} , ${y} ). 
            Would you like to go "up", "left", or "down"? `
		);
		direction = prompt("> ");
	}
	console.log(
		`Congratulations you have found the Enchanted Mouse! Game over, you win!`
	);
}
