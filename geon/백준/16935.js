const [_, ...lines] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const cmds = lines.pop().split(" ").map(Number);
let arr = lines.map((line) => line.split(" ").map(Number));

const calcs = {
  arr: arr,
  divide: function () {
    const [nlen, mlen] = [this.arr.length, this.arr[0].length];

    const upper = this.arr.slice(0, nlen / 2);
    const lower = this.arr.slice(nlen / 2);

    const g1 = upper.map((l) => l.slice(0, mlen / 2));
    const g2 = upper.map((l) => l.slice(mlen / 2));
    const g3 = lower.map((l) => l.slice(mlen / 2));
    const g4 = lower.map((l) => l.slice(0, mlen / 2));

    return [g1, g2, g3, g4];
  },
  1: function () {
    this.arr = this.arr.reverse();
  },
  2: function () {
    this.arr = this.arr.map((line) => line.reverse());
  },
  3: function () {
    const temp = [];
    for (let i = 0; i < this.arr[0].length; i++) {
      temp.push([]);
      for (let j = this.arr.length - 1; j >= 0; j--) {
        temp[i].push(this.arr[j][i]);
      }
    }
    this.arr = temp;
  },
  4: function () {
    const temp = [];
    for (let i = 0; i < this.arr[0].length; i++) {
      temp.push([]);
      for (let j = 0; j < this.arr.length; j++) {
        temp[i].push(this.arr[j][this.arr[0].length - i - 1]);
      }
    }
    this.arr = temp;
  },
  5: function () {
    const [g1, g2, g3, g4] = this.divide();
    const temp = [];
    const nlen = this.arr.length;
    for (let i = 0; i < nlen; i++) {
      if (i < nlen / 2) {
        temp.push([...g4[i], ...g1[i]]);
      } else {
        temp.push([...g3[i - nlen / 2], ...g2[i - nlen / 2]]);
      }
    }
    this.arr = temp;
  },
  6: function () {
    const [g1, g2, g3, g4] = this.divide();
    const temp = [];
    const nlen = this.arr.length;
    for (let i = 0; i < nlen; i++) {
      if (i < nlen / 2) {
        temp.push([...g2[i], ...g3[i]]);
      } else {
        temp.push([...g1[i - nlen / 2], ...g4[i - nlen / 2]]);
      }
    }
    this.arr = temp;
  },
};

for (const cmd of cmds) {
  calcs[cmd]();
}
console.log(calcs.arr.map((line) => line.join(" ")).join("\n"));
