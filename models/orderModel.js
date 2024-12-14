import { DataTypes } from "sequelize";
import { connectDB } from "../config/db.js"; // Ensure this is your SQLite connection file

const sequelize = connectDB();

// Define the Order model
const Order = sequelize.define("Order", {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    items: {
        type: DataTypes.JSONB, // You can use JSON or TEXT if your items array is complex
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    address: {
        type: DataTypes.JSONB, // You can use JSON or TEXT for the address object
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "Food Processing",
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    payment: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

// Sync the Order model with the database
sequelize.sync({ force: false })
    .then(() => {
        console.log("Order table created or already exists.");
    })
    .catch((error) => {
        console.error("Error creating table:", error);
    });

export default Order;
