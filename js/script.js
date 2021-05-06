const countOfProducts = document.querySelector('.top-cart-info__item').firstElementChild;
const sumOfProducts = document.querySelector('.top-cart-info__item').lastElementChild;

// Task 1
let counter = 0;
let sum = 0;
countOfProducts.innerText = counter;
sumOfProducts.innerText = sum;

document.addEventListener('click', e => {
    if (e.target.classList.contains('product-box__btn')) {
        counter++;
        countOfProducts.innerText = counter;

        sum += parseInt(e.target.parentNode.firstElementChild.textContent);
        sumOfProducts.innerText = sum;
    }
});

//Task 2

const categoriesSel = document.getElementById('categories');
const priceSel = document.getElementById('price');
const metaData = document.querySelectorAll('.product-box__meta');

document.addEventListener('change', toggleClass);

function toggleClass(e) {
    if (e.target.id != 'categories' && e.target.id != 'price') {
        return;
    }
    metaData.forEach(elem => {
        elem.parentNode.style.display = 'flex';
        if (
            categoriesSel.value != 0 && 
            !elem.parentNode.classList.contains(categoriesSel.value) ||
            priceSel.value != 0 &&
            parseInt(elem.firstElementChild.textContent) > priceSel.value) {
            elem.parentNode.style.display = 'none';
        }
    });
}

// Task 3

const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]'),
    submitBtn = document.querySelector('.btn'),
    modalInput = document.querySelectorAll('.modal__input');

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    }
    modalTrigger.addEventListener('click', () => {
        closeModal();

    });

    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });

    submitBtn.addEventListener('click', (e) => {
            if(modalInput[0].value.trim() == '' || modalInput[1].value.trim() == '') {
                alert('You have entered invalid data');
                e.preventDefault();
            } else {
                alert('Thank you. We will call you soon');
            }
    });