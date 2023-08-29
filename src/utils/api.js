import axios from "axios";
const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '23d6312e0fmsh2fb3926ac169d6dp1b7c3cjsnb61b88fdd83a',
    'X-RapidAPI-Host':'youtube138.p.rapidapi.com'
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
