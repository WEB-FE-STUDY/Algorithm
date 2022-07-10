function solution(s) {
  const subsets = s
    .slice(2, -2)
    .split("},{")
    .map((str) =>
      str
        .split(",")
        .map((v) => Number(v))
    ); // 2차원 배열로 파싱

  subsets.sort((a, b) => a.length - b.length);
  // const ans = subsets[subsets.length - 1];  // 마지막 요소에 다 포함되어 있는거 아닌가??
  const ans = subsets.reduce((acc, subset) => {
    const value = subset.filter((v) => !acc.includes(v))[0];
    acc.push(value);
    return acc;
  }, []);

  return ans;
}
const s1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
const s2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
const s3 = "{{20,111},{111}}";

console.log(solution(s1));
// const answer = [];
// const sArray = s.split("},{");
// return sArray;
