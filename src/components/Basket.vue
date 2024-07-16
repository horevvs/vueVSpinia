<template>

  <div class="mt-3">

    <div class="d-flex flex-wrap justify-content-evenly">
      <button type="button" class="btn btn-danger  mt-3 ">
        <router-link class="link-light" :to="'/sendorder'"> Оформить заказ </router-link>
      </button>

      <div class="mt-4 fs-3"> Итого {{ store.doubleCount }} руб. </div>

      <button @:click="store.hidebasketlabel()" type="button" class="btn btn-danger text-danger m-3 ">
        <router-link class="link-light" :to="'/'"> На главную </router-link>
      </button>

    </div>


    <div class="d-flex flex-column" v-if="store.addToposts3.length !== 0">


      <div tag="div" v-for="(item, index) in store.addToposts3" v-bind:key="index">
        <div class="card  m-3" style="width: 18rem;">
          <div class="card-body text-center">
            <p class="card-text"> {{ item.title }}</p>
            <p class="card-text">id - {{ item.id }}</p>
            <p class="card-text">price - {{ item.id }} руб.</p>
          </div>

          <div class="d-flex mb-2 justify-content-center">
            <button @:click="store.quantityMinus(item.id)" type="button" className="btn btn-dark btn-sm mx-2 px-2"> -
            </button>
            <p class="card-text"> {{ item.quantity }} -шт</p>
            <button @:click="store.quantityPlus(item.id)" type="button" className="btn btn-dark btn-sm mx-2 px-2">
              + </button>
          </div>

        </div>
      </div>

    </div>

    <div v-else>
      <header class="header mt-5">
        <span class="header-text ">
          <h2> Добавьте пожалуста товары в корзину. </h2>
        </span>
      </header>
    </div>


  </div>

</template>
<script setup>


import { useStore } from "../store/Store";
const store = useStore();


</script>