import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=100&nat=us&inc=name,%20email,%20login,%20phone&seed=b1e242795bb97b37");
  },
};
