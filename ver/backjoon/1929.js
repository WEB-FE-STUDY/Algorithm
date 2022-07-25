// 백준 소수구하기 실버3 https://www.acmicpc.net/problem/1929 15분
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);

const solution = (input) => {
	const [m, n] = input;
	const answer = [];
	for (let i = m; i <= n; i++) {
		if (i === 1) continue;
		if (i !== 2 && i % 2 === 0) continue;

		const set = new Set();
		for (let j = 1; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				set.add(j);
				set.add(i / j);
				if ([...set].length > 2) break;
			}
		}
		if ([...set].length === 2) answer.push(i);
	}
	console.log(answer.join("\n"));
};

solution(input);
