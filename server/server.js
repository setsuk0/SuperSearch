const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
// Other dependencies you may need

const app = express();

mongoose
  .connect("your-mongodb-uri", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
