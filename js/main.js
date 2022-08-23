class ProductList {
    constructor(container = '.products-list') {
        this.container = container;
        this.goods = [];
        this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
        this.render(); //вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [{
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
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getPriceSum() {
        let sum = 0;
        this.goods.forEach(product => sum += product.price);
        document.querySelector('main').insertAdjacentHTML("beforeend", `<p class="sum">Сумма всех товаров: <span>${sum}$</span></p>`);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
        this.description = product.description;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p class="item-desc">${this.description}</p>
                <p class="item-price">${this.price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.getPriceSum();

class CartList {
    addProduct() {

    }
    delProduct() {

    }
    changeProduct() {

    }
    render() {

    }
}

class ProductCart {
    render() {

    }
}