# E Commerce App using Mern Stack

a full-stack web application built to revolutionize your online shopping experience! Powered by the MERN stack (MongoDB, Express.js, React, Node.js), Redux Toolkit for smooth state management, and the visually stunning Bootstrap, this project offers a seamless and feature-rich platform for both users and admins.

Deployed link : https://e-commerce-app-h242.onrender.com/

## Food Delivery App using MERN Stack

- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [📸 Screenshots](#screenshots)
- [Author](#author)

## Key Features

- User Registration : Allows users to register as Customers.
- Full-Featured Shopping Cart : Seamless shopping cart functionality for users to add, remove, and manage products.
- Product Pagination : Navigate through products efficiently with pagination.
- Product Search : offers a search functionality where customers can find products by Keywords.
- Product Search Feature : Easily search for products based on keywords.
- User Profile with Orders : Users can create profiles and track their order.
- Admin Dashboard : Comprehensive dashboard for administrators to manage products, and orders.
- Admin Product Management : Add, and delete products from the platform.
- Admin Order Details Page : Access detailed information about each order.
- Mark Orders as Delivered Option : Ability to update order status to Shipped.
- Cart System : Customers can add products to their cart for easy checkout.
- Checkout Process : Seamless checkout with options for shipping and payment methods.
- Shipping Options : Specify shipping area for product delivery
- Integration: Secure payment processing through Stripe.

## Technologies used

This project was created using the following technologies.

#### Frontend

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) - reduxjs/toolkit Redux Toolkit provides a simplified and opinionated approach to state management compared to plain Redux.
- [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap) - Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites

#### Backend

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [cors](https://www.npmjs.com/package/cors) - We cangive permission to frontend to connect with the database.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Using this we can use the environment variables in our projects.
- [Mongoose](https://mongoosejs.com/) - Help us to connect with the database
- [Nodemon](https://www.npmjs.com/package/nodemon) - Using this package when we will save our project, the server will be restarted.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Using this we will create the authentication system.
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Using this we will encrypt the users data and store in the data base.
- [Body Parser](https://www.npmjs.com/package/body-parser) - Using this we will parsethe data coming through the user.
- [Multer](https://www.npmjs.com/package/multer) - Using this multer we can create the image store system.
- [Stripe](https://www.npmjs.com/package/stripe?activeTab=readme) -Using this we will add the payment gateway on the web page.
- [Validater](https://www.npmjs.com/package/validator) - We will check the password and email idis valid or not.
- [cloudinary](https://www.npmjs.com/package/cloudinary) - Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery
- [socket.io](https://www.npmjs.com/package/socket.io) - Socket.IO enables real-time bidirectional event-based communication

#### Database

- [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

## Configuration and Setup

### Setup .env file

```shell

PORT = 8080
MONGO_URLS = ADD_YOUR_MONGO_URI_HERE
STRIPE_SECRET = DD_YOUT_STRIPE_KEY
CLOUD_NAME = CLOUDINARY_CLOUD_NAME
CLOUD_API_KEY = CLOUDINARY_API_KEY
CLOUD_API_SECRET = CLOUDINARY_API_SECRET

```

### Installation

```shell
Install dependencies for frontend
npm install

Install dependencies for backend
npm install

Run the frontend
npm start

Run the backend
npm start

Backend runs on http://localhost:8080 and frontend on http://localhost:3000/
```

## Screenshots

#### Sign Up

if new users, create accounts

![1  register](https://github.com/user-attachments/assets/3a3946a9-bd2b-45d0-89df-38d6e601be1a)

---

#### Login

If you already have an account , login here and enter your email id and password and login on this web page

![2  login](https://github.com/user-attachments/assets/1f5e2ad7-3d37-4d0d-aee5-cd0d7c882680)

---

#### Home Page

Here you can see the list of Products (Latest Products) that we can order from this website

![3  home page1](https://github.com/user-attachments/assets/57810449-7dd5-46f0-990c-83938b6ef31a)
![3  home page2](https://github.com/user-attachments/assets/40a6f9b1-0896-45fc-a2ab-cf77e0b657b6)

---

#### Product Categories

Technology
Phone
Laptop
Tablet

if we click on any one of categories (Technology , Phone, Laptop, Tablet) it will redirect to the category pages.

![4  category wise 2](https://github.com/user-attachments/assets/422c09cf-8f65-414a-a7b1-d332f406d905)
![4  category wise 4](https://github.com/user-attachments/assets/a0cb3243-f8e5-4794-875f-d4aa72a73b91)
![4  category wise1](https://github.com/user-attachments/assets/6fdae1f2-bc63-480e-b2a5-0c7dc796b638)
![4  category wise3](https://github.com/user-attachments/assets/67073382-949c-4ee4-b68c-8c53c82f9574)

---

#### Search Functionality

Easily search for products based on keywords

![5 search functionality](https://github.com/user-attachments/assets/e3e510eb-1053-4ae1-9a9d-128a7021c0d7)

---

#### Add Items to the Cart

Now we can add the product in our cart. Here we have the add to Cart button , click on it, this product will be added to the cart.
allowing users to select product quantity through a dropdown menu.

![6 item added to the cart](https://github.com/user-attachments/assets/7ba20425-aa30-4a6e-bf3f-3c4d166e65ab)

---

#### Proceed to checkout

Now we will open the cart page, so in this cart page we can see the Product image , Product price, quantity and here we have the total price and delivery charges.

Delivery Information
In this cart page we can see delivery information where user can enter address and country.

Payment
In this cart page we can see payment details that we have created using the stripe.
on this page also we can see the user information like (Card Number, Expiry Date, CVC, Zip Code). fill information and click on the pay button and complete.

![7 delivery information , checkout page](https://github.com/user-attachments/assets/f83c106b-7476-4da4-a7dd-5581cf2d661f)
![8 order is placed](https://github.com/user-attachments/assets/c384362f-ca4d-425e-8a18-ade3540c3100)

---

#### Order Pages

After successful payment, we can see the order details.
here is displaying the food details, quantity , total price , and the order status is processing.

![8 User menu - Cart - My order](https://github.com/user-attachments/assets/683af5a6-f5a5-4f14-9d31-9cab40cd1a1e)
![9 users order details](https://github.com/user-attachments/assets/7ceff00c-121d-4afb-8892-b1a4a9267185)

---

#### Admin Dashboard

Lets see the preview of our admin panel, here we have the four options
Create Products, Products, Orders, Clients

---

#### Admin Dashboard - Create Products

we can add the new products , by clicking on Create Product.

![10 Admin Dashboard - create product as per category](https://github.com/user-attachments/assets/bddacd29-5a4a-4f12-9375-93464f30c780)

---

#### Admin Dashboard – Products

Here we have the all the Product listed on our web page.
we can Delete and Update the Product.

![11 admin dashboard - product list - admin can delete or update product](https://github.com/user-attachments/assets/a676024d-aa8f-4b89-ab33-aeac2819aece)

---

#### Admin Dashboard – Orders

We can see the new order we have just placed on our website . order id, User Name,Items, Order Total, delivery address , Status, and option to change the status of the order .
status Shipped, Mark as shipped.
we can change status of the order (Mark as shipped) from the admin panel. and user will see status Shipped.

![12 admin dashboard - order details - we can change status - Shipped ](https://github.com/user-attachments/assets/2b9ce6ec-0be9-458e-a3fc-04a8f7aa5972)

---

#### Admin Dashboard - Users Details

Admin can see registed users details

![13 admin dashboard - users details](https://github.com/user-attachments/assets/01a5cfdd-3793-48c7-8e9e-1a247a2eac77)

---

## Author

- Portfolio: [monika163](----)
- Github: [monika163](https://github.com/monika163)
- Linkedin: [monika163](https://www.linkedin.com/in/monika-dewangan-78a427149/)
