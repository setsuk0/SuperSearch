const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const { responsePathAsArray } = require("graphql");
const  apikey = "27a4d05ba647f10d437afb9b12241fe55c6ea083";
// Other dependencies you may need

const app = express();
app.use(cors())
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
app.get("/character", (req, res) => { 
  fetch(`http://comicvine.gamespot.com/api/characters?api_key=${apikey}&format=json`).then((r) =>{ 
    return r.json()

  }).then( (re) => {
    res.json(re.results)

  })
})
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
