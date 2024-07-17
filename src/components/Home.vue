<template>
  <div>
ddd {{ posts }}
    <div v-for="(item, index) in posts" v-bind:key="index">

      <div class="movie">
        <img :src=item.url class="movie-img" />
        <div>
          <div class="movie-name ">
            <span> {{ item.title }} </span>

            <span> стоимость {{ Math.round(item.id) }} руб. </span>
          </div>

          <div class="movie-buttons">
            <button type="button" class="btn btn-danger text-danger mt-1"> <router-link
                class="link-light" :to="'/' + item.id"> Посмотреть товар</router-link></button>
            <button  @click="store.addtoBasket(item.id)" class="btn btn-primary m-2 "> В корзину</button>

          </div>
        </div>

      </div>
    </div>
    <button @click="store.addlist()"
      class="btn btn-danger  position-absolute top-100 start-50 translate-middle m-5">Добавить список</button>
  </div>
</template>

 <script setup>
import { useCounterStore } from '../store/Store'
import { storeToRefs } from 'pinia'
// import { computed } from 'vue'

const store = useCounterStore();
// store.fetchPosts()
const {posts } = storeToRefs(store)

// eslint-disable-next-line no-undef
// const Message = computed(() => {return store.fetchPosts()})
// const { access } = storeToRefs(store)
// const { username } = storeToRefs(store)
// const { password } = storeToRefs(store)

// const { provideaccess } = store
// const { hidebasketlabel } = store



</script>


<!-- <script setup>



import { useStore } from "../store/Store";
const store = useStore();
store.fetchPosts()
</script> -->


<!-- <style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 30%;

}

.movie-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style> -->
