import axios from "axios";

const KEY = "AIzaSyBfSd0MJLHlzCjBFnGlZlqKn8bxr8Y2uyQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
