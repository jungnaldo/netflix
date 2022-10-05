import api from "../api";
function getMovies() {
  //api 호출 3대장  fetch , Ajax , axios: 조금 더 많은 기능 제공 (타임아웃 , baseUrl, 등등 ) , nodejs에서 쓸수도 있음
  return async (dispatch) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const popularMovieApi = await api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  };
}
export const movieAction = {
  getMovies,
};
