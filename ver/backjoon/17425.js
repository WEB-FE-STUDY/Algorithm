//백준 약수의 합 https://www.acmicpc.net/problem/17425 골드4

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

const answer = [];
let f = new Array(1000001).fill(1);
let g = new Array(1000001);
f[0] = 0;
g[0] = 0;

for (let i = 2; i <= 1000000; i++) {
	for (let j = 1; i * j <= 1000000; j++) {
		f[i * j] += i;
	}
}

for (let i = 1; i <= 1000000; i++) {
	g[i] = g[i - 1] + f[i];
}

input.shift();

input.forEach((num) => answer.push(g[num]));

console.log(answer.join("\n"));
