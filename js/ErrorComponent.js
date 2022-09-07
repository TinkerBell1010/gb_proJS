Vue.component('error', {
    template: `
        <div class="error" v-show="$parent.showError"><p>Ошибка: не удается выполнить запрос к серверу</p></div>
    `
});