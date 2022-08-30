let text = document.querySelector('.text');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    text.innerHTML = text.innerHTML.replace(/\B'/g, '"');
});

let form = document.querySelector('.form');
let userName = document.querySelector('.username');
let phone = document.querySelector('.phone');
let email = document.querySelector('.email');

class Error {
    constructor(message, field) {
        this.message = message;
        this.field = field;
    }

    render() {
        this.field.classList.add('red');
        this.field.insertAdjacentHTML('afterEnd', `<div class="error"><p>${this.message}!</p></div>`);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if (document.querySelector('.error')) document.querySelector('.error').remove();
    if (document.querySelector('.success')) document.querySelector('.success').remove();
    if (document.querySelector('.red')) document.querySelector('.red').classList.remove('red');

    let regexpName = new RegExp("^[а-яА-ЯёЁa-zA-Z]+$", 'i');
    let regexpPhone = /^\+7\((\d{3})\)(\d{3})-(\d{4})$/iu;
    let regexpEmail = /^[a-zа-я0-9\._-]+@[a-z0-9-_]+\.[a-z0-9-_]{2,4}/iu;

    if (!regexpName.test(userName.value)) {
        let err = new Error('Имя должно содержать только буквы', userName);
        err.render();
    } else if (!regexpPhone.test(phone.value)) {
        let err = new Error('Телефон должен быть указан в следующем формате: +7(000)000-0000', phone);
        err.render();
    } else if (!regexpEmail.test(email.value)) {
        let err = new Error('Введите корректный адрес электронной почты', email);
        err.render();
    } else {
        form.insertAdjacentHTML('afterbegin', `<div class="success"><p>Форма заполнена верно!</p></div>`)
    }
});