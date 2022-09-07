Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `
        <div class="cart" v-show="visibility">
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item"></cart-item>
            <p class="cartSum">{{ cartItems.length == 0 ? "Ваша корзина пуста." : $root.cartSumProducts}}</p>
            <p class="cartSum">{{ cartItems.length == 0 ? "" : "Итого: "}}<span>{{ cartItems.length == 0 ? "" : $root.cartSumPrice}}</span></p>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
        <img :src="cartItem.img">
        <div class="cartItem-info">
            <h3>{{cartItem.product_name}}</h3>
            <p class="cartItem-quantity">Кол-во: {{cartItem.quantity}}</p>
            <p class="cartItem-price">Цена: <span>{{cartItem.price}}$</span></p>
        </div>
        <button class="del-btn" @click="$root.delProduct(cartItem)">&#128937;</button>
    </div>
    `
})