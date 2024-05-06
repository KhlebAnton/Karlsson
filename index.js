const modal = document.querySelector('.modal-buy');

const buyButtons = document.querySelectorAll('.btn-buy');
buyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let card = btn.closest('.catalog-card');
        let price = card.querySelector('.new-price').textContent;
        let name = card.querySelector('.car-title').textContent;
        let imgSrc = card.querySelector('img').src;
        console.log(imgSrc.src)

        modal.querySelector('.order-car-img').src = imgSrc;
        modal.querySelector('.title-car-order').textContent = name;
        modal.querySelector('.price-car-order').textContent = price;

        document.body.classList.add('pop-open');
        modal.classList.remove('close-modal')
    });
});
function closeModal() {
    document.body.classList.remove('pop-open');
    modal.classList.add('close-modal')
}


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;



// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}


// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}