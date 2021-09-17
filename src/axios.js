import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-d0e2c.cloudfunctions.net/apicd",
});

export default instance;
