import Food from "../models/foodModel.js";

const seedFoodData = async () => {
    try {
        await Food.bulkCreate([
            {
                name: "Pizza Margherita",
                description: "Classic pizza with mozzarella and tomato.",
                price: 9.99,
                category: "Pizza",
                image: "pizza.png",
            },
            {
                name: "Cheeseburger",
                description: "Juicy beef burger with cheese and toppings.",
                price: 5.99,
                category: "Burger",
                image: "3.png",
            },
            {
                name: "Caesar Salad",
                description: "Fresh salad with Caesar dressing and croutons.",
                price: 7.99,
                category: "Salad",
                image: "caesar_salad.jpg",
            },
        ]);
        console.log("Food items seeded successfully!");
    } catch (error) {
        console.error("Error seeding food data:", error);
    }
};

export default seedFoodData;
