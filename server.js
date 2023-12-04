const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/DB");
const product = require("./models/productModel");
dotenv.config();

//middleware 
app.use(express.json());

//middleware for forms not json
app.use(express.urlencoded({extended: false}));

// setting route
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/blog", (req, res) => res.send("Hello blog"));

//fectching  all from database
app.get("/products", async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//fectching one from database

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneproduct = await product.findById(id);
    res.status(200).json(oneproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post data to databse
app.post("/products", async (req, res) => {
  try {
    const newproduct = await product.create(req.body);
    res.status(200).json(newproduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update product
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await product.findByIdAndUpdate(id, req.body);
    // no product found in DATABASE
    if (!updateProduct) {
      return res
        .status(404)
        .json({ message: `we cannot find any product with ID ${id}` });
    }
    
      // respond with an updated product
    const updatedProd = await product.findById(id)
    res.status(200).json(updatedProd);


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//delete from Database
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await product.findByIdAndDelete(id);
    // if no product found in DATABASE
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ message: `we cannot find any product with ID ${id}` });
    }
    
    // respond with a deleted product
    const deletededProd = await product.findById(id)
    res.status(200).json(deletededProd);


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




const PORT = process.env.PORT || 3000;

// setting port
app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));

// Connect to MongoDB
connectDB();
