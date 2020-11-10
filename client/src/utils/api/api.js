import axios from "axios";

function API (searchedCity) {
    var queryURL = "https://api.teleport.org/api/urban_areas/slug:" + searchedCity + "/scores";

    return axios.get(queryURL)
}

export default API;