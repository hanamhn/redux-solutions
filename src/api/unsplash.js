import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0A7j3Li_NA6K3c0DLMM6a2gjBWzmBkMh68qcK1Jy4rM",
  },
});
