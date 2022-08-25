const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products-list') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                this.render();
                document.querySelectorAll('.buy-btn').forEach(btn => btn.addEventListener('click', (e) => cart.changeProduct(e.target.getAttribute('data-id'), 'add')));
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
        this.getPriceSum();
    }

    getPriceSum() {
        let sum = 0;
        this.goods.forEach(product => sum += product.price);
        document.querySelector('main').insertAdjacentHTML("beforeend", `<p class="sum">Сумма всех товаров: <span>${sum}$</span></p>`);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = 'img/1.png';
        this.description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem fuga libero iure illum, in magni recusandae dicta officiis beatae praesentium ipsam dolores accusamus.';
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p class="item-desc">${this.description}</p>
                <p class="item-price">${this.price}$</p>
                <button class="buy-btn" data-id="${this.id}">Купить</button>
            </div>`;
    }
}

let list = new ProductList();

class CartList {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data.contents;
                this.render();
            });
    }

    _getProducts() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    getSum() {
        let sumPrice = 0;
        let sumQuantity = 0;
        this.goods.forEach(product => {
            sumPrice += product.price * product.quantity;
            sumQuantity += product.quantity;
        });
        document.querySelector('.cart').insertAdjacentHTML("beforeend", `<p class="cartSum">Количество товаров: ${sumQuantity}</p><p class="cartSum">Итого: <span>${sumPrice}$</span></p>`);
    }

    addProduct() {}
    delProduct() {}

    changeProduct(id, action) {
        let index = this.goods.findIndex((good) => good.id_product == id);
        if (action == "add") {
            this.goods[index].quantity++;
        }
        if (action == "del" && this.goods[index].quantity > 0) {
            this.goods[index].quantity--;
        }
        document.querySelector('.cart').innerHTML = '';
        this.render();
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductCart(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
        this.getSum();
        document.querySelectorAll('.del-btn').forEach(btn => btn.addEventListener('click', (e) => cart.changeProduct(e.target.getAttribute('data-id'), 'del')));
    }
}

class ProductCart {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = 'img/1.png';
        this.quantity = product.quantity;
    }
    render() {
        return `<div class="cart-item">
                    <img src="${this.img}">
                    <div class="cartItem-info">
                        <h3>${this.title}</h3>
                        <p class="cartItem-quantity">Кол-во: ${this.quantity}</p>
                        <p class="cartItem-price">Цена: <span>${this.price}$</span></p>
                    </div>
                    <button class="del-btn" data-id="${this.id}">&#128937;</button>
                </div>`;
    }
}

let cart = new CartList();

document.querySelector('.cart-button').addEventListener('click', () => {
    document.querySelector('.cart').classList.toggle('show');
});

console.log(cart);