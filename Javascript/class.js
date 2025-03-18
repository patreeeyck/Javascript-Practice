// CLASS = provides a more structured and cleaner way to work
//         with objects compared to traditional constructor
//         function ex. static keyword, encapsulation, inheritance.

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log("_______");
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Short", 69.69);
const product3 = new Product("socks", 96.96);
const prodcut4 = new Product("Bag", 12.34);
const product5 = new Product("Iphone", 15.15);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price with tax: $${total.toFixed(2)}`);


