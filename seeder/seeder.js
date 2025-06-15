 
require("dotenv").config();


const mongoose = require("mongoose");
const Product = require("../models/Product"); // Pastikan file ini pakai module.exports
const products = require("./data");           // Pastikan file ini juga pakai module.exports

// Ganti ini dengan URI kamu atau pakai dotenv
//const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

const seedProducts = async () => {
  try {
     
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Product.deleteMany();
    console.log("✅ All products deleted.");

    await Product.insertMany(products);
    console.log("✅ Products seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeder error:", error.message);
    process.exit(1);
  }
};

seedProducts();
