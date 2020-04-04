const Marvel = require("marvel");

const marvel = new Marvel(
    {
        publicKey: "4ec17a1ab75056cbf248564f7f463990",
        privateKey: "f6588b5911e153c8d42e62044dc91d2af43e8b90"
    }
);

marvel.characters
    .name("Hulk")
    .get(function (err, resp) {
        if (err) { console.log("Error: ", err) }
        else { console.log(resp) }
    });
