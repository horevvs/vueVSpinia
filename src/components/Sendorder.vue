<template>
    <div>
        <header class="header mt-5">
            <span class="header-text d-flex   mx-5">
                <h2>Оформление заказа </h2>
                <button type="button" @:click="hidebasketlabel" class="btn btn-primary m-3">
                    <router-link class="link-light" :to="'/'">
                        На главную
                    </router-link> </button>
                <button type="button" class="btn btn-primary  m-3">
                    <router-link class="link-light" :to="'/basket'">
                        В корзину
                    </router-link> </button>
            </span>
        </header>
        <div class="  fs-5 mt-5">
            <div class="mb-3 w-25">
                <label for="exampleFormControlInput1" class="form-label">adress</label>
                <input type="text" v-model='store.adress' class="form-control" id="exampleFormControlInput1"
                    placeholder=" enter your adress">
            </div>
            <div class="mb-3 w-25">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" v-model='store.name' class="form-control" id="exampleFormControlInput1"
                    placeholder="enter your Name">
            </div>
            <div class="mb-3 w-25">
                <label for="exampleFormControlInput1" class="form-label">e-mail</label>
                <input type="e-mail" v-model='store.email' class="form-control" id="exampleFormControlInput1"
                    placeholder="enter your e-mail">
            </div>
            <div tag="div" v-for="(item, index) in store.addToposts3" v-bind:key="index">
                <div class="  mb-3" style="width: 55rem;">
                    <span class="fs-4"> Наименование: </span> <span class="fs-5"> {{ item.title }} - {{ item.quantity }}
                        шт. </span>
                </div>
            </div>
            <button @click="store.sendorder()" type="button" class="btn btn-primary mb-5">Сделать заказ</button>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from "../store/Store";
const store = useCounterStore();
const { hidebasketlabel } = store
</script>