const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const solution = (input) => {
	const [A, B, C] = input;
	let answer = [];
	answer.push((A + B) % C);
	answer.push(((A % C) + (B % C)) % C);
	answer.push((A * B) % C);
	answer.push(((A % C) * (B % C)) % C);
	return answer;
};

rl.on("line", (line) => {
	let input = [];
	line.split(" ").forEach((v) => input.push(Number(v)));
	solution(input).forEach((v) => console.log(v));
	rl.close();
});
