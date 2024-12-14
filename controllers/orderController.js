import Order from './../models/orderModel.js'; // Sequelize model
import User from './../models/userModel.js';   // Sequelize model

// Placing user order for frontend
const placeOrder = async (req, res) => {
    try {
        // Create a new order using Sequelize
        const newOrder = await Order.create({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        // Update the user's cart data to empty after placing the order
        await User.update(
            { cartData: {} },
            { where: { id: req.body.userId } }
        );

        // Prepare line items for Stripe
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "lkr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 * 300
            },
            quantity: item.quantity
        }));

        // Add delivery charges
        line_items.push({
            price_data: {
                currency: "lkr",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 2 * 100 * 80
            },
            quantity: 1
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Verify order payment status
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === 'true') {
            await Order.update({ payment: true }, { where: { id: orderId } });
            res.json({ success: true, message: "Paid" });
        } else {
            await Order.destroy({ where: { id: orderId } });
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error verifying order" });
    }
};

// Get user orders for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { userId: req.body.userId } });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching user orders" });
    }
};

// List all orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching orders" });
    }
};

// Update order status
const updateStatus = async (req, res) => {
    try {
        await Order.update({ status: req.body.status }, { where: { id: req.body.orderId } });
        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error updating status" });
    }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
