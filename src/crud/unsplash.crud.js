import rawAxios from "axios";
import { api } from "./axios.config";

const API_URL = api.apiUrl;
const ACCESS_KEY = api.accessKey
const RANDOM_IMAGES = "/photos/random";

export function getImages(count) {
    const QUERY = `?client_id=${ACCESS_KEY}&count=${count}`;
    return rawAxios.get(API_URL + RANDOM_IMAGES + QUERY );
  }