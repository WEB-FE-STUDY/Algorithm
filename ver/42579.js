//프로그래머스 베스트앨범 Level3 50분

function solution(genres, plays) {
  var temp = [];
  const answer = [];
  const hashed = {};
  for (let i = 0; i < genres.length; i++) {
    if (!hashed[genres[i]]) {
      hashed[genres[i]] = [];
      hashed[genres[i]].push(plays[i]);
    } else {
      hashed[genres[i]].push(plays[i]);
    }
  }

  const arr = [];
  for (let key in hashed) {
    hashed[key].sort((a, b) => b - a);
    //{ classic: [ 800, 500, 150 ], pop: [ 2500, 600 ] }
    arr.push([key, hashed[key].reduce((acc, cur) => acc + cur)]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  //[ [ 'pop', 3100 ], [ 'classic', 1450 ] ]

  arr.forEach((v) => {
    temp.push(hashed[v[0]][0]);
    if (hashed[v[0]][1]) temp.push(hashed[v[0]][1]);
    //[ 2500, 600, 800, 500 ]
    //ex)[500, 1000, 150, 800, 1000]
    //[ 1000, 1000, 800, 500]
    //[1, 4, 3, 0] 이렇게 나와야하잖아
  });

  // temp.forEach((v) => {
  //   let index = plays.indexOf(v);
  //   answer.push(index);
  //   //[4, 1, 3, 0]
  // });

  for (let i = 0; i < temp.length; i++) {
    //play가 같은 경우
    if (temp[i] === temp[i - 1]) {
      let index = plays.lastIndexOf(temp[i]);
      answer.push(index);
      continue;
    }
    let index = plays.indexOf(temp[i]);
    answer.push(index);
  }

  return answer;
}
