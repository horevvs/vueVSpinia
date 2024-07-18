// импортируем нашу пиню чтобы она была подключена
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    const posts: any = ref(null)
    const result: any = ref(null)
    const username: any = ref(null)
    const password: any = ref(null)
    const addtobasketpost: any = ref([])
    const addToposts2: any = ref([])
    const addToposts3: any = ref([])
    const addToposts4: any = ref([])
    const adress: any = ref(null)
    const name: any = ref(null)
    const email: any = ref(null)
    const num: { value: number; } = ref(5)
    const modal: { value: boolean; } = ref(false)
    const modalunder: { value: boolean; } = ref(false)
    const access: { value: boolean; } = ref(true)
    const dataAfterfetch: { value: any; } = ref(null)
    const show: { value: boolean; } = ref(true)
    const hide: { value: boolean; } = ref(false)

    const doubleCount = computed(() => {
        let result = 0
        result = addToposts3.value.reduce(function (sum: number, elem: { quantity: number; id: number; }) {
            return (sum + elem.quantity * elem.id);
        }, 0);
        console.log('dd')
        return result
  
    })
    // дорендеринг с апи
    async function fetchPosts() {
        const session = num.value
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${session}`);
        const result = await response.json();
        result.forEach((item: { quantity: number; }) => { item.quantity = 0 });
        posts.value = result
    }

    //добавление к списку
    async function addlist() {
        num.value = num.value + 5
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit= ${num.value}`);
        const result = await response.json();
        result.forEach((item: { quantity: number; }) => { item.quantity = 0 });
        posts.value = result
    }

    //добавление в корзину
    async function addtoBasket(id: any) {
        // console.log(id)
        addtobasketpost.value.push(posts.value.filter((item: { id: any; }) => item.id == id))

        addtobasketpost.value.every((item: {
            [x: string]: any; quantity: number;
        }[]) => {
            if (item[0].id == id) {
                item[0].quantity++
                return false;
            } else {
                return true;
            }
        });

        addtobasketpost.value.forEach((item: any[]) => addToposts2.value.push(item[0]))
        addToposts3.value = addToposts2.value.filter((obj: { id: any; }, index: any) => {
            return index === addToposts2.value.findIndex((o: { id: any; }) => obj.id === o.id)
        });
    }

    // прибавить в корзине
    function quantityMinus(id: any) {
        addToposts3.value.every((item: { id: any; quantity: number; }) => {
            if (item.id == id) {
                if (item.quantity > 0) {
                    item.quantity--
                    return false;
                }
            } else {
                return true;
            }
        })
    }

    //вычесть
    function quantityPlus(this: any, id: any) {
        addToposts3.value.every((item: { id: any; quantity: number; }) => {
            if (item.id == id) {
                if (item.quantity > 0) {
                    item.quantity++
                    return false;
                }
            } else {
                return true;
            }
        })
        console.log(addToposts3.value)
    }
    // легкий элемент улучшения ui убирает отображение количнства в корине товаров
    function hidebasketlabel() {
        show.value = !show.value
    }

    //проверка входа
    function provideaccess() {
        if (username.value === 'user01' && password.value === 'pass') {
            access.value = !access.value
        } else {
            alert(' Вы ввели на правильный пароль, попробуйте еще раз')
        }
    }

    //отправить заказ
    function sendorder() {
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

    return {
        username, doubleCount,
        addlist, fetchPosts, addtoBasket, quantityMinus, quantityPlus, hidebasketlabel, provideaccess, sendorder,
        num, show, hide, access, posts, result, password, addtobasketpost, addToposts2, addToposts3, addToposts4, adress, name, email, modal, modalunder, dataAfterfetch
    }
})

