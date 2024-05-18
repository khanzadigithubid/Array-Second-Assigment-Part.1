//Part 1: Basic Arrays - Product Inventory

//Challenge:

// You are tasked with creating a Product Inventory system. Implement functions and logic to manage object manipulation effectively.
// 1. Define a type alias named Product to represent a product with the following properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.

type differentProducts = {
    name: string;
    price: number;
    inventory: {
      stock: number;
      colorOptions: string[];
    };
};

// 2. Create an array named products containing at least three product objects. Each product object should include a name, price, and inventory details.

let products: differentProducts[] = [
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
  console.log(products)

// 3. Implement a function named changeColor that takes a product object and a new color as input. This function should update the color property of the product and adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).

class Product {
    color: string;
    price: number;
  
    changeColor(newColor: string): Product {
      this.color = newColor;
  
      if (newColor.toLowerCase() === "red") {
        this.price *= 1.10; // increase 10%
      } else if (newColor.toLowerCase() === "blue") {
        this.price *= 0.95; // increase 5%
      }
      return this;
    }
  }
  let product = new Product();
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

let Products = [
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
  function displayProductDetails(products: { name: string; price: number; stock: number; availableColors: string[] }[]): string {
    let details = '';
  
    for (const product of products) {
      console.log(`Product Name: ${product.name}`);
      console.log(`Price: ${product.price}`);
      console.log(`Stock: ${product.stock}`);
      console.log(`Available Colors: ${product.availableColors}`);
    }
  
    return details;
  }
  
  // Call the function product details and print 
  let productDetails = displayProductDetails(Products);
  console.log(productDetails);
  
  

