import fs from 'fs';
import Food from '../models/foodModel.js'; // Sequelize model

// Add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = await Food.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        res.json({ success: true, message: 'Food Added', data: food });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// All food list
const listFood = async (req, res) => {
    try {
        const foods = await Food.findAll(); // Fetches all rows from the Food table
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching food list" });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await Food.findOne({ where: { id: req.body.id } });
        if (food) {
            fs.unlink(`uploads/${food.image}`, () => {});
            await food.destroy(); // Delete the food record
            res.json({ success: true, message: 'Food Removed' });
        } else {
            res.json({ success: false, message: 'Food not found' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

export { addFood, listFood, removeFood };
