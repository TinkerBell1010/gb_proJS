Vue.component('products', {
    data() {
        return {
            filtered: [],
            products: []
        };
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.name));
        }
    },
    template: `<div class="fetured-items__cards">
                 <product v-for="item of filtered" 
                 :key="item.id" 
                 :product="item"
                 @add-product="$parent.$refs.cart.addProduct"
                 ></product>
                </div>`
    //@add-product="$parent.$refs.cart.addProduct"
});
Vue.component('product', {
    props: ['product'],
    template: `
            <div class="fetured-items__card">
                <a href="#" class="fetured-items__card-link">
                    <div class="fetured-items__card-img">
                        <img :src="product.img" alt="product photo">
                    </div>
                    <div class="fetured-items__card-text">
                        <h4 class="fetured-items__card-name">{{product.name}}</h4>
                        <p class="fetured-items__card-price">&dollar;{{product.price}}.00</p>
                        <div class="fetured-items__card-stars">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
                <div class="fetured-items__card-cart-button">
                    <button class="fetured-items__card-cart-button-link"  @click="$emit('add-product', product)">
                        <img class="fetured-items__card-cart-button-img" src="img/cart.svg" alt="cart">
                        <p class="fetured-items__card-cart-button-text">Add to Cart</p>
                    </button>
                    <div class="fetured-items__card-cart-button-set">
                        <a href="#" class="fetured-items__card-cart-button-link">
                            <img class="fetured-items__card-cart-button-img" src="img/change.svg" alt="cart">
                        </a>
                        <a href="#" class="fetured-items__card-cart-button-link">
                            <img class="fetured-items__card-cart-button-img" src="img/heart.svg" alt="cart">
                        </a>
                    </div>
                </div>
             </div>
     `
});