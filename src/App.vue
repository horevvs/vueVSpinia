<template>

  <div v-if="store.access" class="container d-flex flex-column ">


    <header class="header mt-5">
      <span class="header-text  ">
        <h2>имитируем вход в личный кабинет </h2>

      </span>
    </header>

    <div class="  fs-45 mt-5">
      <div class="mb-3 w-25">
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input type="text" v-model='store.username' class="form-control" id="exampleFormControlInput1"
          placeholder=" enter this username Username=user01">
      </div>
      <div class="mb-3 w-25">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="password" v-model='store.password' class="form-control" id="exampleFormControlInput1"
          placeholder="enter this Password Password=pass">
      </div>
      <button @:click="store.provideaccess()" type="button" class="btn btn-primary">Войти</button>

    </div>

  </div>

  <div v-else>

    <header class="header mt-5">
      <button @:click="store.provideaccess()" type="button" class="btn btn-primary px-2 mx-5">Выход</button>
      <span class="header-text text-center ">
        <h2 class="pb-5"> Пример SPA c применением Pinia </h2>
      </span>

      <div class="position-absolute top-0 end-0 m-5 ">
        <button type="button" class="btn btn-primary position-relative" v-if="store.show">
          <router-link @:click="store.hidebasketlabel()" class="link-light" :to="'/basket'">
            {{ Message }}
          </router-link>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
            {{ store.addtobasketpost.length }}
            <span class="visually-hidden">unread messages</span></span>
        </button>

      </div>
    </header>
    <div class="position-relative">

      <main class="container">
        <RouterView />
      </main>
    </div>

  </div>




</template>

<script setup>

import { computed } from 'vue'
// import { useStore } from "../store/Store";
// const store = useStore();
// store.fetchPosts()

const Message = computed(() => {

  return store.addtobasketpost.length !== 0 ? `Открыть корзину` : 'В корзине пусто'
})




import { useStore } from "./store/Store";
const store = useStore();
// store.fetchPosts()
</script>
