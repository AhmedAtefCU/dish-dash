import {DataTypes} from "sequelize";
import {connectDB} from "../config/db.js";

const sequelize = connectDB();

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cartData: {
        type: DataTypes.JSONB,
        defaultValue: {},
    },
}, {
    timestamps: true,
});

// Sync the User model with the database
sequelize.sync({force: false})
    .then(() => {
        console.log("User table created or already exists.");
    })
    .catch((error) => {
        console.error("Error creating table:", error);
    });

export default User;
