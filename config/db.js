import { Sequelize } from "sequelize";

export const connectDB = () => {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite", 
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("SQLite database connected.");
    })
    .catch((err) => {
      console.error("Failed to connect to SQLite:", err.message);
    });

  return sequelize;
};
