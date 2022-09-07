Vue.component('products', {
   props: ['products'],
   template: `<div class="products-list">
                <product v-for="item of products" 
                :key="item.id_product" 
                :product="item"></product>
               </div>`
});
Vue.component('product', {
    props: ['product'],
    template: `
            <div class="product-item">
                <img :src="product.img" alt="Some img">
                <h3>{{product.product_name}}</h3>
                <p class="item-desc">{{product.description}}</p>
                <p class="item-price">{{product.price}}$</p>
                <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
            </div>
    `
})