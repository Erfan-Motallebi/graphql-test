const app = require("./app");

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "localhost";

const serverListening = app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}/graphql`);
});


module.exports =
    {
        serverListening
    }