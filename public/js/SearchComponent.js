Vue.component('search', {
    data() {
        return {
            userSearch: ''
        };
    },
    template: `
    <form class="main-header__search-form" action="#" method="post" @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <input class="main-header__search-input" type="text" name="search" id="search" placeholder="Search for Item..." v-model="userSearch">
        <div class="main-header__search-submit-container">
            <input class="main-header__search-submit" type="submit" value="">
            <i class="fa fa-search main-header__search-icon" aria-hidden="true"></i>
        </div>
    </form>`
});