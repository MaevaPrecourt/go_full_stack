const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://MaevaPrecourt:<password>@gofullstack.awg8dn5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

const express = require("express");
const app = express();
app.use(express.json());

app.use(function(request, response, next){
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.post("/api/stuff", (request, response, next) => {
  console.log(request.body);
  response.status(201).json({
    message: "Objet créé."
  });
});

app.get("/api/stuff", (request, response, next) => {
    const stuff = [
      {
        _id: "oeihfzeoi",
        title: "Mon premier objet",
        description: "Les infos de mon premier objet",
        imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
        price: 4900,
        userId: "qsomihvqios",
      },
      {
        _id: "oeihfzeomoihi",
        title: "Mon deuxième objet",
        description: "Les infos de mon deuxième objet",
        imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
        price: 2900,
        userId: "qsomihvqios",
      },
    ];
    response.status(200).json(stuff);
  }
);

module.exports = app;