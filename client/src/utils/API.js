import axios from "axios";

export default {

    getCity: function (searchedCity) {
        return axios.get(`https://api.teleport.org/api/urban_areas/slug:${searchedCity}/scores`);
    },
   
    saveCity: function (cityData) {
        return axios.post("/api/posts", cityData).then(result => result.data);
    },

    savedCities: function () {
        return axios.get("/api/posts").then(result => result.data);
    }
 };

