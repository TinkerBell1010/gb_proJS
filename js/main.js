const products = [{
        id: 1,
        img: 'img/1.png',
        title: 'Notebook',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem fuga libero iure illum, in magni recusandae dicta officiis beatae praesentium ipsam dolores accusamus.',
        price: 2000
    },
    {
        id: 2,
        img: 'img/1.png',
        title: 'Mouse',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem fuga libero iure illum, in magni recusandae dicta officiis beatae praesentium ipsam dolores accusamus.',
        price: 20
    },
    {
        id: 3,
        img: 'img/1.png',
        title: 'Keyboard',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem fuga libero iure illum, in magni recusandae dicta officiis beatae praesentium ipsam dolores accusamus.',
        price: 200
    },
    {
        id: 4,
        img: 'img/1.png',
        title: 'Gamepad',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem fuga libero iure illum, in magni recusandae dicta officiis beatae praesentium ipsam dolores accusamus.',
        price: 50
    },
];

const renderProduct = item => {
    return `<div class="product-item">
                <img src="${item.img}">
                <h3>${item.title}</h3>
                <p class="item-desc">${item.description}</p>
                <p class="item-price">${item.price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    productsList.forEach((item) => {
        document.querySelector('.products-list').insertAdjacentHTML("beforeend", item);
    });
};

renderPage(products);