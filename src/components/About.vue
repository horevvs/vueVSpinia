<template>

  <div>


    <button type="button" class="btn btn-danger text-danger m-3"> <router-link class="link-light" :to="'/'"> На
        главную</router-link></button>

    <div class="   container containers mt-5  ">
      <h1>Карточка товара</h1>
      <div v-for="(item, index) in   store.dataAfterfetch" v-bind:key="index">
        <div class="card m-1" style="width: 22rem;">
          <img :src=item.url class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">номер id - {{ item.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { useStore } from "../store/Store";
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

export default {
  setup() {
    const store = useStore();
    store.fetchPosts()
    const route = useRoute()
    const ara = route.params.id

    onMounted(() => {
      store.dataAfterfetch = store.posts.filter(item => item.id == ara)
      console.log(store.dataAfterfetch)
    })
    return { store, ara }
  },

 
}
</script>
