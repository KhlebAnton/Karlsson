const modal = document.querySelector('.modal-buy');
const orderForm = modal.querySelector('.buy-form');
const endPrices = document.querySelector('.all-prices');
const coinShop = document.querySelector('.coin-shop');
const catalogCards = document.querySelectorAll('.catalog-card');
const search = document.getElementById('search');


let searchInp = '';
search.addEventListener('keyup', () => {
    searchInp = search.value;
    searchCard(searchInp)
});

function searchCard(str) {

    catalogCards.forEach((card) => {
        if (str != '') {

            card.style.display = 'none';
            let cardName = card.querySelector('.car-title').textContent;
            if (cardName.toLowerCase().search(str.toLowerCase()) >= 0) {
                card.style.display = '';
            }  
        } else {
            card.style.display = '';
        }

    })

}




const buyButtons = document.querySelectorAll('.btn-buy');
buyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {

        addShop(btn);


    });
});
function addShop(btn) {
    if (btn.textContent != 'В корзине') {
        let order = modal.querySelector('.title-order');
        let card = btn.closest('.catalog-card');
        let price = card.querySelector('.new-price').textContent;
        let name = card.querySelector('.car-title').textContent;
        let imgSrc = card.querySelector('img').src;
        let dataCard = card.getAttribute('data-card');

        let newOrder = `<div class="order" data-order = '${dataCard}'>
    <img class="order-car-img" src="${imgSrc}" alt="заказ">
    <div class="title-car-order">${name}</div>
    <div class="price-car-order">${price}</div>
    <div class="delete" onclick="deleteOrder(this)">x</div>
</div>`;
        order.insertAdjacentHTML('afterend', newOrder);
        btn.style.backgroundColor = "grey";
        btn.textContent = 'В корзине';
        allPrices();
        addCoinShop();
    }

}
function allPrices() {
    let orders = orderForm.querySelectorAll('.order');
    let prices = 0;
    orders.forEach((order) => {
        prices += +order.querySelector('.price-car-order').textContent.replace(/[^0-9]/g, "");
    });
    endPrices.innerHTML = `${prices}р.`;

}
function addCoinShop() {
    let orders = orderForm.querySelectorAll('.order');
    coinShop.textContent = orders.length;
}
function openModal() {
    document.body.classList.add('pop-open');
    modal.classList.remove('close-modal')
};
function closeModal() {
    document.body.classList.remove('pop-open');
    modal.classList.add('close-modal')
};

function deleteOrder(elem) {

    let order = elem.closest('.order');
    let dataOrder = order.getAttribute('data-order');
    console.log(dataOrder);

    replaceShop(dataOrder)
    order.remove();
    addCoinShop();
    allPrices();
}

function replaceShop(data) {
    catalogCards.forEach((card) => {
        if (card.getAttribute('data-card') === data) {
            let btn = card.querySelector('.btn');
            btn.style.backgroundColor = "";
            btn.textContent = 'В корзину';
        }
    });
}
