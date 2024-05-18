//Part 1: Basic Arrays - Product Inventory
// 2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.
var products = [
    {
        name: "Watch",
        price: 500,
        inventory: {
            stock: 15,
            colorOptions: ["black", "white", "pink"]
        }
    },
    {
        name: "T-Shirt",
        price: 1000,
        inventory: {
            stock: 20,
            colorOptions: ["blue", "purple"]
        }
    },
    {
        name: "Shoes",
        price: 2000,
        inventory: {
            stock: 20,
            colorOptions: ["black", "brown", "white", "pink"]
        }
    }
];
console.log(products);
// 3. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.changeColor = function (newColor) {
        this.color = newColor;
        if (newColor.toLowerCase() === "red") {
            this.price *= 1.10; // increase 10%
        }
        else if (newColor.toLowerCase() === "blue") {
            this.price *= 0.95; // increase 5%
        }
        return this;
    };
    return Product;
}());
var product = new Product();
product.color = "blue";
product.price = 100;
product = product.changeColor("pink");
console.log("New price: " + product.price);
// Change color to red - price increases by 10%
product = product.changeColor("red");
console.log("New price: " + product.price);
// Change color to blue - price decreases by 5%
product = product.changeColor("blue");
console.log("New price: " + product.price);
// 4. Display each product's name, price, stock, and available colors. Iterate through the products array and print each product's details.
var Products = [
    {
        name: "Scarf",
        price: 2000,
        stock: 50,
        availableColors: ["pink", "blue", "blue"]
    },
    {
        name: "Abaya",
        price: 5000,
        stock: 100,
        availableColors: ["black", "gray", "white"]
    },
    {
        name: "Hijab",
        price: 2000,
        stock: 80,
        availableColors: ["black"]
    }
];
// Function to display product details
function displayProductDetails(products) {
    var details = '';
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product_1 = products_1[_i];
        console.log("Product Name: ".concat(product_1.name));
        console.log("Price: ".concat(product_1.price));
        console.log("Stock: ".concat(product_1.stock));
        console.log("Available Colors: ".concat(product_1.availableColors));
    }
    return details;
}
// Call the function product details and print 
var productDetails = displayProductDetails(Products);
console.log(productDetails);
