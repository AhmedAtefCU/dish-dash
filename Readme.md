# Dish-Dash


## Introduction
Dish Dash is a full-stack food ordering web application built using the MERN stack (Express, React, Node.js) and sqlite.

## Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Database:** Sqlite
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS
- 
## Features
- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Stripe Payment Integration: Secure and reliable payment processing using Stripe.
- Order tracking
- Admin panel to manage menu items, orders

## Installation
### Prerequisites
- Node.js
- sqlite
- react

### Clone the Repository
```sh
git clone https://github.com/AhmedAtefCU/dish-dash.git
cd dish-dash
```

## Backend Setup
Navigate to the backend branch:

```sh
git checkout main

```
Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="sk_test_51JhWAiRXoTvIuM91beRv8XldfL3GGKyuLhzabkSwNeIXryY51G9UKnwNUFcotg0N6k4UAGhiprjJd4XhAF85JCN4004TC42zkl"
```

Start the backend server:

```sh
npm run server
```
## Frontend Setup
Navigate to the frontend branch:

```sh

git checkout frontend
```

Install dependencies:
```sh

npm install
```

Start the frontend server:
```sh

npm run dev
```

## Admin App Setup

Navigate to the admin directory:
```sh

cd admin
```

Install dependencies:

```sh
npm install
```

Start the admin app :
```sh
npm start
```




