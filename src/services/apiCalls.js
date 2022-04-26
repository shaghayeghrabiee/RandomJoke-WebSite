import { baseUrl } from "../config";
import axios from "axios";

export const getALLcategories = () =>
  axios({
    method: "GET",
    url: baseUrl + "/categories",
  });

export const getRandomCategory = (category) =>
  axios({
    method: "GET",
    url: baseUrl + "random?category=" + category,
  });

export const searchQuery = (query) =>
  axios({
    method: "GET",
    url: baseUrl + "search?query=" + query,
  });
