const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter product name'],
      maxLength: [200, 'Product name cannot exceed 200 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter product price'],
      maxLength: [10, 'Product price cannot exceed 10 digits'],
    },
    description: {
      type: String,
      required: [true, 'Please enter product description'],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please enter category'],
      enum: {
        values: ["Electronics", "Cameras", "Headphones", "Laptops", "Accessories", "Food"],
        message: 'Please select correct category',
      },
    },
    seller: {
      type: String,
      required: [true, 'Please enter product seller'],
    },
    stock: {
      type: Number,
      required: [true, 'Please enter product stock'],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        rating: {
          type: String,
          required: true,
        },
        comments: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
