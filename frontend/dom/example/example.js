// const element = document.getElementById('heading');
// element.setAttribute('class', 'heading');
// console.log(element);

// const attribute = document.getElementById('heading').getAttribute('class');
// console.log(attribute);

// document.getElementById('heading').style.color = 'green';

// document.getElementById('heading').classList.add('hello');
// document.getElementById('heading').classList.remove('hello');
// document.getElementById('heading').classList.toggle('heading');

// document.getElementById('heading').onclick = function(){}
// document.getElementById('heading').addEventListener('click', () => {});

//lấy ra những giá trị được nhập từ ô inputs
//do mình thao tác nhiều lần và đặc biệt là với DOM mình sẽ thêm $ đằng trước tên biến
//Bài 1
// const $url = document.getElementById('urlText');
// const $width = document.getElementById('width');
// const $height = document.getElementById('height');
// const $radius = document.getElementById('radius');
// const $alt = document.getElementById('altText');
// const $img = document.querySelector('img');

// $url.onchange = function () {
//     const valueUrl = $url.value;
//     $img.scr =  valueUrl;
    
// };

// document.getElementById('width').oninput = () => {
//     const valueWidth = $width.value;
//     $img.style.width = valueWidth + 'px';
// };

// document.getElementById('height').oninput = () => {
//     const valueHeight = $height.value;
//     $img.style.height = valueHeight + 'px';
// };

// document.getElementById('radius').oninput = () => {
//     $img.style.borderRadius = $radius.value + 'px';
// };

// $alt.oninput = () => {
//     $img.alt = $alt.value;
// }

//Bài 3
const buttons = document.querySelectorAll('td button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('button').parentElement.parentElement.remove();
    });
});







