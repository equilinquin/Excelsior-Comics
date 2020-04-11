import axios from "axios";

export default {
  isLoggedIn : function(setLoading) {
    axios.get('/api/checkToken')
      .then(res => {
        if (res.status !== 200) {
          this.logout();
        }
        setLoading(true);
      })
      .catch(err => {
        this.logout();
      });		
},
logout: function() {
  axios
    .get("/api/logout")
    .then(res => {
      window.location = '/';
    })
    .catch(err => {
      console.log(err);
    })
},

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