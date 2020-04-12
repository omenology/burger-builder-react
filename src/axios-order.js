import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-512a4.firebaseio.com/"
});


export default instance;
