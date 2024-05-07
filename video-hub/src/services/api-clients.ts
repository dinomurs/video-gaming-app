import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "610efb2bb3af4fb690c4e744d91e95e2",
  },
});
