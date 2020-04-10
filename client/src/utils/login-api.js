import axios from "axios";

export default {
  login: function(data) {
    return axios.post("/user/login", data);
  },
  signup: function(newUser) {
    return axios.post("/user/signup", newUser);
  },
  getUsers: () => {
    return axios.get("/user/signup");
  }
};