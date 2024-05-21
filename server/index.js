const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Schema = mongoose.Schema;
const app = express();
const port = 8080;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const DB_URL =
  "mongodb+srv://Selling:azmp101@cluster0.wgobdrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ProductSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  imageUrl: {type: String, require: true}
});

const SellingModel = mongoose.model("Selling", ProductSchema);

app.get("/products", async (req, res) => {
  try {
    const product = await SellingModel.find({});
    if (product.length > 0) {
      res.status(200).send({ message: "Success", data: product });
    } else {
      res.status(204).send({ message: "Data Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/products/id", async (req, res) => {
  const { id } = req.body;
  try {
    const products = await SellingModel.findById(id);
    if (products) {
      res.status(200).send({ message: "Success", data: products });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/products/id", async (req, res) => {
  const { id } = req.body;
  try {
    const selling = await SellingModel.findByIdAndDelete(id);
    if (selling) {
      res.status(200).send({ message: "Success", data: selling });
    } else {
      res.status(404).send({ message: "Do`nt deleted" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/products", async (req, res) => {
  try {
    const newProducts = new SellingModel({ ...req.body });
    await newProducts.save();
    res.status(200).send({message: "Success", data: newProducts})
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});
