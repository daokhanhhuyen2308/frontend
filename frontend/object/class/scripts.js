
//Contructor

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = () => {
//         console.log('I am driving a '+ this.make +' ' + this.model +' car');
//     }

// }

// const car1 = new Car('Ford', 'Mustang', '2024', 'Red');
// const car3= new Car('Chevrolet', 'Camaro', '2025', 'Blue');
// const car2 = new Car('Dodge', 'Charger', '2026', 'Black');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.drive();

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(saleTax){
        return this.price + (this.price * saleTax);
    }
}

const product1 = new Product('Shirt', '$19.99');
const product2 = new Product('Underwear', '$30.99');
product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(0.05);
console.log(`Total: ${total}`);

console.log(`Total: ${product2.calculateTotal(0.5)}`);