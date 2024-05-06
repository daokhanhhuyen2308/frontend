const success = document.querySelector('.success');
const error = document.querySelector('.error');
const warning = document.querySelector('.warning');
const showMessage = document.querySelector('#toasts');
const timeline = document.querySelector('.timeline');

success.addEventListener('click', () => {
    
    showMessage.style.display = 'block';
    setTimeout(() => {
        showMessage.style.display = 'none';
    }, 2500);
})


error.addEventListener('click', () => {
    
    showMessage.style.display = 'block';
    timeline.style.backgroundColor = 'red';
    setTimeout(() => {
        showMessage.style.display = 'none';
    }, 2500);
})


warning.addEventListener('click', () => {
    
    showMessage.style.display = 'block';
    timeline.style.backgroundColor = 'orange';
    setTimeout(() => {
        showMessage.style.display = 'none';
    }, 2500);
})