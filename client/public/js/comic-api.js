// Client side interface for Node server comic search API

// change this variable appropriately depending on which environment you're running this script in
const baseUrl = "http://localhost:3001";

// Example: retrieves characters whos names start with "tho"
getCharacters("tho", result => {
    console.log(result);
});


// Search for characters by name
function getCharacters(name, cb) {
    callApi("characters", name, cb);
}

// Search for comics by title
function getComics(title, cb) {
    callApi("comics", title, cb);
}

// Helper function used by above functions. Shouldn't be called directly
function callApi(api, param, cb) {
    fetch(baseUrl + "/api/" + api + "/" + encodeURIComponent(param.trim()))
        .then(response => response.json())
        .then(data => {
            if (cb && (typeof cb === "function")) {
                return cb(data);
            }
        })
        .catch(error => {
            console.log(error);
        });
}