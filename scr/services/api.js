import axios from "axios";

//URL filmes em cartaz
///movie/now_playing?api_key=084d8b33d5c7e8f3df070d71f10f7827&language=pt-BR&page=1

export const key = '084d8b33d5c7e8f3df070d71f10f7827'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;