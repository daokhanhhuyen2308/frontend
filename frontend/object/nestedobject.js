

// const person = {
//     fullName: 'Spongebob',
//     age: 30,
//     hobbies: ['cooking', 'eating', 'swimming'],
//     address: {
//         street: '124 Conch Street',
//         city: 'Bikini Bottom',
//         country: 'Int. Water'
//     },
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     }
    
// }

// // console.log(person);
// // console.log(person.fullName);
// // console.log(person.hobbies[2]);
// //  console.log(person.address['street']);

// for(let property in person.address){

//     console.log(property + ': '+ person.address[property]);

// }

class Person{
    constructor(fullName, age,...address){
        this.fullName = fullName;
        this.age = age;
        this.address = new Address(...address);
    
        // this.address = new Address(address[0], address[1], address[2]);
}
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }


}

const person1 = new Person('SpongeBob', 30,
            '124 Conch Street',
            'Bikini Bottom',
            'Int. Water');
        

            const person2 = new Person('Squidward', 25,
            '124 Conch Street',
            'Bikini Bottom',
            'Int. Water');

console.log(person1.address);



