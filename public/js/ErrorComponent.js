Vue.component('error', {
    data() {
        return {
            text: ''
        };
    },
    computed: {
        isVisible() {
            return this.text !== '';
        }
    },
    template: `
    <div class="error-block container" v-if="isVisible">
        <p class="error-msg">
        <button class="close-error-btn" @click="text=''">&times;</button>
        {{ text }}
</p>
</div>
    `
});