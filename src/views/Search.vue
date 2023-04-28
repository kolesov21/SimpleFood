<script>
import dishes from '@/assets/dishes';

export default{
  data() {
    return {
      searchInput: "",
      foundDishes: [],
      text: 'Найдите блюдо, которое любите именно вы!',
    };
  },
  methods: {
    search() {
      this.foundDishes = [];
      dishes.forEach(item => {
        if (item.name.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1
            || item.category.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1
            || item.description.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1) {
          this.foundDishes.push(item);
        }
      });
      this.foundDishes.length === 0 ? this.text = 'Извините, кажется такого блюда у нас ещё нет' : '';
    }
  },
}
</script>

<template>
  <h1 class="label">Поиск</h1>
  <div class="wrapper search">
    <MyInput v-model="searchInput"></MyInput>
    <MyButton @click="search">Искать</MyButton>
    <p 
      v-if="foundDishes.length === 0" 
      class="search__text"
    >
      {{ text }}
    </p>
    <DishesList 
      v-if="foundDishes.length !== 0"
      :label="'Вот что нам удалось найти'"
      :dishes="this.foundDishes"
    ></DishesList>
  </div>
</template>

<style scoped lang="sass">
.search
  flex-direction: column
  gap: 16px
  &__text
    padding-top: 20px
    font-weight: 400
    font-size: 32px
    line-height: 44px
    text-align: center
</style>