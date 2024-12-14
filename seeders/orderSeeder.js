import Order from "../models/orderModel.js";

const seedOrderData = async () => {
    try {
        await Order.bulkCreate([
            {
                userId: "user1",
                items: [
                    { productId: 1, quantity: 2 },
                    { productId: 3, quantity: 1 },
                ],
                amount: 23.97,
                address: {
                    street: "123 Pizza St",
                    city: "Foodtown",
                    zip: "12345",
                },
                status: "Food Processing",
                payment: false,
            },
            {
                userId: "user2",
                items: [
                    { productId: 2, quantity: 1 },
                    { productId: 3, quantity: 2 },
                ],
                amount: 21.97,
                address: {
                    street: "456 Burger Ave",
                    city: "Burger City",
                    zip: "67890",
                },
                status: "Delivered",
                payment: true,
            },
            {
                userId: "user3",
                items: [
                    { productId: 1, quantity: 1 },
                    { productId: 2, quantity: 3 },
                ],
                amount: 38.95,
                address: {
                    street: "789 Salad Rd",
                    city: "Salad Town",
                    zip: "11223",
                },
                status: "Food Processing",
                payment: false,
            },
        ]);
        console.log("Order items seeded successfully!");
    } catch (error) {
        console.error("Error seeding order data:", error);
    }
};

export default seedOrderData;
