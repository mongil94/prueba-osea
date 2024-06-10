const jsonServer = require("json-server");
const songsData = require("../server/data");

const middlewares = jsonServer.defaults();
const server = jsonServer.create();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/api/songs", (req, res) => {
  res.status(200).send(songsData.getSongs);
});

server.get("/api/artists", (req, res) => {
  res.status(200).send(songsData.getArtists);
});

server.get("/api/companies", (req, res) => {
  res.status(200).send(songsData.getCompanies);
});

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
