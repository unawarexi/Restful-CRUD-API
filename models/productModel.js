const mongoose = require("mongoose");


//creating schema
// time stamps for updating the database
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true
  }
);


// creating models
// used for saving data in mongoDB
const product = mongoose.model("product", productSchema)

module.exports = product;
