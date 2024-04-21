
//const colors = ['red', 'green', 'blue', 'white', 'black'];

//swap elements in an array

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);


// const [firstColor, secondColor, thirdColor, ...extractColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// //white black
// console.log(extractColors);


const person1 = {
    name: 'Spongebob',
    age: 30,
    gender: 'Male',
    job: 'Developer',
    
}

const person2 = {
    name: 'Larry',
    age: 20,
    gender: 'Female',
    
}

const {name, age, gender, job='Unemployed'} = person2;

console.log(name);
console.log(age);
console.log(gender);
console.log(job);

function displaPerson({name, age, gender, job}) {

    console.log(`${name} ${age} ${gender} ${job}`);

}

displaPerson(person1);

console.log(person1);