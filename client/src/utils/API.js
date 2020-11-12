import axios from "axios";

export default {

    getCity: function (searchedCity) {
        return axios.get(`https://api.teleport.org/api/urban_areas/slug:${searchedCity}/scores`);
    },

    getImage: function (searchedCity) {
        return axios.get(`https://api.teleport.org/api/urban_areas/slug:${searchedCity}/images`); 
    },
   
    saveCity: function (cityData) {
        return axios.post("/api/posts", cityData).then(result => result.data);
    },

    savedCities: function () {
        return axios.get("/api/posts").then(result => result.data);
    },

    saveSurvey: function (surveyData) {
        return axios.post("/api/survey", surveyData);
    },

    findSurvey: function (surveyData) {
        return axios.get("/api/survey", surveyData);
    }
 };

