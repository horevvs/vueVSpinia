// импортируем нашу пиню чтобы она была подключена
import { defineStore } from "pinia";
import { computed, ref } from "vue";
// организуем нашу стору
export const useCounterStore = defineStore('counter', () => {
    
// создаем переменный чтобы работать с сотоянием
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

// наше вычисляемео свойство чтобы отображать количество в корзине
    const doubleCount = computed(() => {
        let result = 0
        result = addToposts3.value.reduce(function (sum: number, elem: { quantity: number; id: number; }) {
            return (sum + elem.quantity * elem.id);
        }, 0);
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

// вычесть в корзине
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
      
    }
// скрыть корзину
    function hidebasketlabel() {
        show.value = !show.value
    }

    // выход с приложения
    function exit() {
        window.location.reload();
    }

// проверка входа
    function provideaccess() {
        if (username.value === 'user01' && password.value === 'pass') {
            access.value = !access.value
        } else {
            alert(' Вы ввели на правильный пароль, попробуйте еще раз')
        }
    }

// отправить заказ
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

// возврашаем со сторы, чтобы могли в компоненту импортировтаь
    return {
        username, doubleCount,num, show, hide, access, posts, 
        result, password, addtobasketpost, addToposts2, addToposts3, 
        addToposts4, adress, name, email, modal, modalunder, dataAfterfetch,

        exit,addlist, fetchPosts, addtoBasket, quantityMinus, 
        quantityPlus, hidebasketlabel, provideaccess, sendorder,
    }
})

