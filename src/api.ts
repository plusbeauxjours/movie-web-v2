const API_KEY = "01da2a336a604956c260900d1835847f";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => console.log(response.json())
  );
}
