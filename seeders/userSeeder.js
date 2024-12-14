import User from "../models/userModel.js";

const seedUserData = async () => {
    try {
        await User.bulkCreate([
            {
                name: "John Doe",
                email: "johndoe@example.com",
                password: "hashedpassword1", // In practice, hash the password before storing
                cartData: {
                    items: [
                        { productId: 1, quantity: 2 },
                        { productId: 2, quantity: 1 },
                    ],
                },
            },
            {
                name: "Jane Smith",
                email: "janesmith@example.com",
                password: "hashedpassword2", // In practice, hash the password before storing
                cartData: {
                    items: [
                        { productId: 3, quantity: 1 },
                    ],
                },
            },
            {
                name: "Mike Johnson",
                email: "mikejohnson@example.com",
                password: "hashedpassword3", // In practice, hash the password before storing
                cartData: {
                    items: [
                        { productId: 1, quantity: 1 },
                        { productId: 3, quantity: 2 },
                    ],
                },
            },
        ]);
        console.log("User items seeded successfully!");
    } catch (error) {
        console.error("Error seeding user data:", error);
    }
};

export default seedUserData;
