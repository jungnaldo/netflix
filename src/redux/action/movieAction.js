import api from "../api";
function getMovies() {
  //api 호출 3대장  fetch , Ajax , axios: 조금 더 많은 기능 제공 (타임아웃 , baseUrl, 등등 ) , nodejs에서 쓸수도 있음
  return async (dispatch) => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const topRatedApi = api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upComingApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
    ///세개의 데이터가 다 올때까지만 await 그리고 데이터가 들어오면 동시에 보여준다
    let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);
    console.log(popularMovies);
    console.log(topRatedMovies);
    console.log(upComingMovies);
    ///이 데이터를 리듀서에 저장을 시켜야한다.
  };
}
export const movieAction = {
  getMovies,
};
