const app = require("./app");

const PORT = process.env.PORT || 4001;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}/graphql`);
});
