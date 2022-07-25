//백준 최대공약수와 최소공배수 브론즈1 https://www.acmicpc.net/problem/2609 35분
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// const getDivisors = (num) => {
// 	const set = new Set();
// 	for (let i = 1; i <= Math.sqrt(num); i++) {
// 		if (num % i === 0) {
// 			set.add(i);
// 			set.add(num / i);
// 		}
// 	}
// 	return [...set].sort((a, b) => a - b);
// };

// const getLeastMultiple = (a, b) => {
// 	let num = 1;

// 	while (true) {
// 		if (num % a === 0 && num % b === 0) {
// 			break;
// 		}
// 		num++;
// 	}
// 	return num;
// };

// const solution = (input) => {
// 	const answer = [];
// 	const [A, B] = input;
// 	const divisorsA = getDivisors(A).reverse();
// 	const divisorsB = getDivisors(B).reverse();
// 	answer.push(divisorsA.find((num) => divisorsB.find((num2) => num2 === num)));
// 	answer.push(getLeastMultiple(A, B));
// 	return answer.join("\n");
// };

// rl.on("line", (line) => {
// 	console.log(solution(line.trim().split(" ").map(Number)));
// 	rl.close();
// });

//두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

const getDivisors = (num) => {
	const set = new Set();
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			set.add(i);
			set.add(num / i);
		}
	}
	return [...set].sort((a, b) => a - b);
};

const getLeastMultiple = (a, b) => {
	let num = 1;

	while (true) {
		if (num % a === 0 && num % b === 0) {
			break;
		}
		num++;
	}
	return num;
};

const solution = (input) => {
	const answer = [];
	const [A, B] = input;
	const divisorsA = getDivisors(A).reverse();
	const divisorsB = getDivisors(B).reverse();
	answer.push(divisorsA.find((num) => divisorsB.find((num2) => num2 === num)));
	answer.push(getLeastMultiple(A, B));
	return answer.join("\n");
};

console.log(solution(input));

//a * b / 최대공약수 = 최소공배수 유클리드 호제법
