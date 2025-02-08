const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});

// Define a model
const Item = mongoose.model('Item', itemSchema);

// GET request to fetch all items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST request to create a new item
app.post('/items', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});