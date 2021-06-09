import rawAxios from "axios";
import { api } from "./axios.config";

const API_URL = api.apiUrl;
const ACCESS_KEY = api.accessKey;
const RANDOM_IMAGES = "/photos/random";
const SEARCH_IMAGES = "/search/photos";

export async function getImages(count) {
  const QUERY = `?client_id=${ACCESS_KEY}&count=${count}&orientation=squarish`;
  return await rawAxios.get(API_URL + RANDOM_IMAGES + QUERY);
}

export async function searchImages(searchTerm) {
  const QUERY = `?client_id=${ACCESS_KEY}&page=1&orientation=squarish&query=${searchTerm}`;
  return await rawAxios.get(API_URL + SEARCH_IMAGES + QUERY);
}
