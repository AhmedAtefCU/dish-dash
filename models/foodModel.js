import { DataTypes } from "sequelize";
import { connectDB } from "../config/db.js";

const sequelize = connectDB();

const Food = sequelize.define("Food", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: false })
    .then(() => {
      console.log("Food table created or already exists.");
    })
    .catch((error) => {
      console.error("Error creating table:", error);
    });


export default Food;
