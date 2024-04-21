class Animal{
    alive = true;

    eat(){
        console.log(`This is ${this.name} is eating`);
    }

    sleep() {
        console.log(`This is ${this.name} sleeping`);

    }
}

class Dog extends Animal{
    name = 'Rabbit'

}

class Cat extends Animal{
    name = 'Kitty'
}   

class Fish extends Animal{
    name = 'Tuna'

}

const dog  = new Dog();
const cat = new Cat();
const fish = new Fish();

console.log(dog.alive);
dog.sleep();
dog.eat();
cat.eat();
fish.eat();