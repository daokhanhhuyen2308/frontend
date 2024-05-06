const input = document.getElementById('textInput');
const button = document.getElementById('addButton');
const listContainer = document.getElementById('list-container');

button.addEventListener('click', () => {

    const inputValue = input.value;

    if (inputValue === "") {
        alert('Please enter a value');
    }
    else {
        const li = document.createElement('li');
        li.textContent = inputValue;
        listContainer.appendChild(li);

        const span = document.createElement('span');
        span.textContent = "\u00d7";
        li.appendChild(span);
        saveData();


    }

    clearInput();
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    const list = document.querySelector('li');
    console.log(list);
    // const list = Array.from(listContainer);
    //lưu dữ liệu vào trong cục bộ
    localStorage.setItem('data', JSON.stringify(listContainer));
}

function showData() {
    const datas = JSON.parse(localStorage.getItem("data"));
    listContainer.innerHTML = datas;
}
showData();


// function saveData() {
//     // Lấy nội dung của tất cả các phần tử li trong listContainer
//     const liContents = Array.from(listContainer.querySelectorAll('li')).map(li => li.textContent);

//     // Lưu mảng liContents vào localStorage dưới tên 'data'
//     localStorage.setItem('data', JSON.stringify(liContents));
// }

// function showData() {
//     // Lấy dữ liệu từ localStorage dưới dạng chuỗi JSON
//     const dataString = localStorage.getItem("data");

//     // Chuyển chuỗi JSON thành mảng
//     const liContents = JSON.parse(dataString) || [];

//     // Tạo các phần tử li từ nội dung trong mảng liContents và thêm chúng vào listContainer
//     liContents.forEach(content => {
//         const li = document.createElement('li');
//         li.textContent = content;
//         listContainer.appendChild(li);
//     });
// }

// showData();

function clearInput() {
    input.value = "";
}