// const element = document.getElementById('fruits');
// const firstChild = element.firstElementChild
// firstChild.style.backgroundColor = 'salmon';


// const ulElements = document.querySelectorAll('ul');
// ulElements.forEach(element => {
//     const firstChild = element.firstElementChild;
//     firstChild.style.backgroundColor = 'lightgreen';
//  });

// const element = document.getElementById('fruits');
// const siblingElement = element.nextElementSibling;
// siblingElement.style.backgroundColor = 'lightblue';


// const element = document.getElementById('fruits');
// const previous = element.previousElementSibling;
// previous.style.backgroundColor = 'skyblue';

//children, parentElement

//step 1
//const newH1 = document.createElement('h1');
//step 2
// newH1.innerHTML = 'I like pizza!';
// newH1.id = 'heading';
// newH1.style.color = 'tomato';
// newH1.style.textAlign = 'center';
// newH1.style.margin = '0';
//step 3
// document.body.appendChild(newH1); //thêm vào sau element đang có sẵn
// document.body.prepend(newH1); //thêm vào trước 

// document.getElementById('box1').append(newH1);

// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[2]);

// const newListItem = document.createElement('li');

// newListItem.id = 'starfruit';
// newListItem.style.color = 'green';
// newListItem.style.fontWeight = 'bold';

// newListItem.innerHTML = 'starfruit';
// // document.body.append(newListItem);
// document.getElementById('fruits').prepend(newListItem);
// //document.querySelector('#fruits').append(newListItem);
// const orange = document.getElementById('orange');

// orange.style.color = 'orange';

// document.getElementById('fruits').insertBefore(orange, newListItem);

//EventListener
//
//let buttons = document.querySelectorAll('.button');

// buttons.forEach(button => {
//     button.style.backgroundColor = 'salmon';
//     button.textContent += ' 😁';
// });

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.style.backgroundColor = 'salmon';
//         event.target.textContent += ' 😁';
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('mouseover', event => {
//         event.target.style.backgroundColor = 'hsl(210, 100%, 40%)';
//     });
// });


// buttons.forEach(button => {
//     button.addEventListener('mouseout', event => {
//         event.target.style.backgroundColor = 'hsl(210, 100%, 60%)';
//     });
// });

// const button = document.createElement('button');
// button.textContent = 'Button 5';
// button.classList = 'button';

// document.body.appendChild(button);

// buttons = document.querySelectorAll('.button');
// console.log(buttons);

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.remove();
//     });
// });


const myButton = document.getElementById('myButton');
myButton.classList.add('enable');

// myButton.addEventListener('mouseover', () => {

//     myButton.classList.add('hover');

// });

// myButton.addEventListener('mouseout', () => {
//     myButton.classList.remove('hover');
// });

myButton.addEventListener('click', () => {

    myButton.classList.replace('enable', 'disable');
});
