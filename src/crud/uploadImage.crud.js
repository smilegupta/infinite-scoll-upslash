import rawAxios from "axios";
import { api } from "./axios.config";

const API_URL = api.s3Upload;
const UPLOAD_IMAGE = "/upload";

export async function uploadImage(uploadImageUrl) {
  const payload = {
    url: uploadImageUrl,
  };
  return await rawAxios.post(API_URL + UPLOAD_IMAGE, payload);
}
