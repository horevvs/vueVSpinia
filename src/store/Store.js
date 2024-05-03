// импортируем нашу пиню чтобы она была подключена
import { defineStore } from "pinia";



export const useStore = defineStore("Store", {

    state: () => ({

        posts: null,
        username: null,
        password: null,
        addtobasketpost: [],
        addToposts2: [],
        addToposts3: [],
        addToposts4: [],
        adress: null,
        name: null,
        email: null,
        num: 5,
        modal: false,
        modalunder: true,
        access: true,
        dataAfterfetch: null,
        show: true,
        hide: false,

    }),
    getters: {
        doubleCount: (state) => {
            let result = 0
            result = state.addToposts3.reduce(function (sum, elem) {
                return (sum + elem.quantity * elem.id);
            }, 0);
            return result
        }
    },


    actions: {

        // запуск 1й фетч запрос с сервера и первый рендеринг
        async fetchPosts() {
            let session = this.num
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${session}`);
            const result = await response.json();
            result.forEach((item) => { item.quantity = 0 });
            this.posts = result

        },
        // дорендериваем при клике по 5 штук
        async addlist() {
            this.num = this.num + 5
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit= ${this.num}`);
            const result = await response.json();
            result.forEach((item) => { item.quantity = 0 });
            this.posts = result
        },

        //  фильтруем добавляем в корзину в зависимости от количества кликов
        async addtoBasket(id) {
            console.log(id)
            this.addtobasketpost.push(this.posts.filter(item => item.id == id))
            this.addtobasketpost.every(item => {
                if (item[0].id == id) {
                    item[0].quantity++
                    return false;
                } else {
                    return true;
                }
            });
            this.addtobasketpost.forEach((item) => this.addToposts2.push(item[0]))
            this.addToposts3 = this.addToposts2.filter((obj, index) => {
                return index === this.addToposts2.findIndex(o => obj.id === o.id)
            });
        },
        // добавить
        quantityMinus(id) {
            console.log(id)
            this.addToposts3.every(item => {
                if (item.id == id) {
                    if (item.quantity > 0) {
                        item.quantity--
                        return false;
                    }
                } else {
                    return true;
                }
            })
        },

        //вычесть
        quantityPlus(id) {
            this.addToposts3.every(item => {
                if (item.id == id) {
                    if (item.quantity > 0) {
                        item.quantity++
                        return false;
                    }
                } else {
                    return true;
                }
            })
        },
        // легкий элемент улучшения ui убирает отображение количнства в корине товаров
        hidebasketlabel() {
            this.show = !this.show
        },

        provideaccess() {
            if (this.username === 'user01' && this.password === 'pass') {
                this.access = !this.access
            } else {
                alert(' Вы ввели на правильный пароль, попробуйте еще раз')
            }
        },
        sendorder() {
            alert('С input берем значения, формирем с учетом того в каком виде должен быть JSON и постим туда, по аналогии по идеи надо отправить массив объектов с адресом, именем, почтой, тип товаров и цена')
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

        }



    },
});





