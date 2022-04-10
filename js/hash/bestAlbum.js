function solution(genres, plays) {
  let answer = [];
  const songs = [];
  const hash = {};
  for (let i = 0; i < genres.length; i++) {
    songs[i] = { genre: genres[i], play: plays[i], idx: i };
  }
  // const sortedSongs = songs.sort((a, b) => {
  //   const [genreA, genreB] = [a.genre, b.genre];
  //   if (genreA < genreB) {
  //     return -1;
  //   }
  //   if (genreA > genreB) {
  //     return 1;
  //   }
  //   return 0;
  // });
  const sortedSongs = songs.sort((a, b) => {
    return b.play - a.play;
  });
  console.log(sortedSongs);
  for (let i = 0; i < sortedSongs.length; i++) {
    let song = sortedSongs[i];
    if (hash[song.genre]) {
      hash[song.genre] = [...hash[song.genre], song.idx];
    } else {
      hash[song.genre] = [song.idx];
    }
  }
  console.log(hash);
  for (let genre of Object.values(hash)) {
    answer.push(genre[0], genre[1]);
  }

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
