const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        cart: [],
        userSearch: '',
        cartSumPrice: '',
        cartSumProducts: '',
        show: false
    },
    methods: {
        filter(){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));

        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
                let find = this.cart.find(item => product.id_product == item.id_product);
                if (find) {
                    find.quantity++;
                } else {
                    this.$set(product, 'quantity', 1);
                    this.cart.push(product);
                }
                this.getSum();
        },
        delProduct(product){
            let i = this.cart.findIndex(item => product.id_product == item.id_product);
            this.cart.splice(i,1);
            this.getSum();
        },
        getSum() {
            let sumPrice = 0;
            let sumQuantity = 0;
            this.cart.forEach(item => {
                sumPrice += item.price*item.quantity;
                sumQuantity += item.quantity;
            });
            this.cartSumPrice = sumPrice+"$";
            this.cartSumProducts = "Количество товаров: "+sumQuantity;
        }
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                    el.img = 'img/1.png';
                    el.description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quidem fuga libero iure illum, in magni recusandae dicta officiis beatae praesentium ipsam dolores accusamus.'
                    this.products.push(el);
                    this.filtered.push(el);
               }
           });
    }
})

