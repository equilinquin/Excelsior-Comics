// Client side interface for favorites API
import axios from "axios";

// change this variable appropriately depending on which environment you're running this script in
const baseUrl = "http://localhost:3001";

function axiosPost(api, param, cb) {
    axios.post(`${baseUrl}/api/${api}`, { body: { id: param } })
        .then(response => cb(null, data))
        .catch(error => cb(error));
}

function axiosGetOne(api, param, cb) {
    axios.get(`${baseUrl}/api/${api}/${param}`)
        .then(response => cb(null, data))
        .catch(error => cb(error));
}

function axiosGetAll(api, cb) {
    axios.get(`${baseUrl}/api/${api}`)
        .then(response => cb(null, data))
        .catch(error => cb(error));
}

const favoritesApi = {
    // Add a favorite comic to favorites, using ID from Marvel API
    addFavoriteComic: (comicId, cb) => {
        axiosPost("favorites/comics", comicId, cb);
    },

    getFavoriteComics: cb => {
        axiosGetAll("favorites/comics", cb);
    },

    favoriteComicById: (comicId, cb) => {
        axiosGetOne("favorites/comics", comicId, cb);
    }
};

export default favoritesApi;
