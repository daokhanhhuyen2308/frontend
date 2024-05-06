
let listProducts = JSON.parse(localStorage.getItem('products'));

let listCart = JSON.parse(localStorage.getItem('cart'));

let listCartHTML = document.querySelector('.list');
let totalQuantityHTML = document.querySelector('.totalQuantity');
let totalPriceHTML = document.querySelector('.totalPrice');
let checkout = document.querySelector('.return .checkout');

let keepShopping = document.querySelector('.returnCart a');



// let fullname = document.querySelector('.group fullname').value;
// console.log(fullname);

keepShopping.addEventListener('click', (event) => {
    keepShopping.href = 'index.html';
})

let name = document.getElementById('fullname');
let phone = document.getElementById('phone');
let address = document.getElementById('address');

let costumer = [];

let toast = document.querySelector('.toast');



function showToast() {

    //     let content = document.createElement('div');
    //     content.classList.add('content');

    //     let icon = document.createElement('.icon');
    //     icon.classList.add('icon');
    //     icon.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
    //     width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    //     <path fill-rule="evenodd"
    //         d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
    //         clip-rule="evenodd" />
    // </svg>`;
    //     content.appendChild(icon);

    //     let title = document.createElement('div');
    //     title.classList.add('title');
    //     title.textContent = 'Đặt hàng thành công';
    //     content.appendChild(title);
    //     toast.appendChild(content);
    toast.classList.toggle('show-toast');
}

checkout.addEventListener('click', () => {

    let fullnameValue = name.value;
    let phoneValue = phone.value;
    let addressValue = address.value;
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = hour + ':' + minute + ':' + second;

    if (fullnameValue == '' || phoneValue == '' || addressValue == '') {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }

    costumer.push({
        fullname: fullnameValue,
        phone: phoneValue,
        address: addressValue,
        date: day + '/' + month + '/' + year,
        time: time
    })

    showToast();

    setTimeout(() => {
        toast.classList.toggle('show-toast');
    }, 2000);


    localStorage.setItem('costumer', JSON.stringify(costumer));

    fullnameValue = '';
    phoneValue = '';
    addressValue = '';


})

function addToCartHTML() {
    let totalQuantity = 0;
    let totalPrice = 0;
    listCartHTML.innerHTML = '';

    if (listCart) {
        listCart.map((cart) => {
            if (cart) {
                let position = listProducts.findIndex((value) => value.id == cart.product_id);
                let info = listProducts[position];
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `<img src="${info.image}" alt="">
                <div class="info">
                    <div class="name">${info.name}</div>
                    <div class="price">${(info.price).toLocaleString()}</div>
                </div>
                <div class="quantity">${cart.quantity}</div>
                <div class="returnPrice">${(cart.quantity * info.price).toLocaleString()}đ</div>`;

                listCartHTML.appendChild(newProduct);
                totalQuantity += cart.quantity;
                totalPrice += (cart.quantity * info.price);
            }
        })
    }

    totalQuantityHTML.innerHTML = totalQuantity;
    totalPriceHTML.innerHTML = totalPrice.toLocaleString();
}

addToCartHTML();