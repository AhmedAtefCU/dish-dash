import User from "../models/userModel.js";

const addToCart = async (req, res) => {
    try {

        const user = await User.findOne({ where: { id: req.body.userId } });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = user.cartData || {};

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        // Update user's cart data
        user.cartData = cartData;
        await user.save();

        res.json({ success: true, message: "Added to cart", data: user });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding to cart" });
    }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        // Find the user by userId
        const user = await User.findOne({ where: { id: req.body.userId } });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Get current cart data
        let cartData = user.cartData || {};

        // Decrease the item quantity if greater than 0
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        // Update user's cart data
        user.cartData = cartData;
        await user.save();

        res.json({ success: true, message: "Removed from cart", data: user });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error removing from cart" });
    }
};

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        // Find the user by userId
        const user = await User.findOne({ where: { id: req.body.userId } });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Get cart data
        const cartData = user.cartData || {};

        res.json({ success: true, cartData });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching cart data" });
    }
};

export { addToCart, removeFromCart, getCart };
