const toastBox = document.getElementById("toastBox");

const buttons = document.querySelectorAll(".buttons button");

let successMsg =
  "<box-icon type='solid' name='check-circle'></box-icon> Successfully submitted";

let errorMsg =
  " <box-icon name='info-circle' type='solid'></box-icon> Please fix the error";
let invalidMsg =
  " <box-icon type='solid' name='error'></box-icon> Invalid input, check again";

function showToast(messageType) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = messageType;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].classList.contains("success")) {
      showToast(successMsg);
    } else if (buttons[i].classList.contains("error")) {
      // buttons[i].classList.toggle('.toast.error');
      showToast(errorMsg);
    } else if (buttons[i].classList.contains("invalid")) {
      showToast(invalidMsg);
    }
  });
}

const a = "fsdffdfdf";

const b = "dfdfdfdf";
