<script>
import dishes from '@/assets/dishes';

export default{
  data(){
    return {
      dishes: dishes,
      curentCategory: "Все",
      filtredDishes: [],
      label: 'Предложение дня'
    }
  },
  methods:{
    updateCategory(categoryLabel){
      if (categoryLabel === this.curentCategory){
        this.curentCategory = "Все";
      }else{
        this.curentCategory = categoryLabel;
      }
      this.filtredDishes = this.dishes.filter(item => item.category === this.curentCategory);
    },
  }
}
</script>

<template>
  <CategoriesList
    :curentCategory="this.curentCategory"
    @updateCategory="updateCategory"
  >
  </CategoriesList>
  <Promo v-if = "curentCategory === 'Все'"></Promo>
  <DishesList
    v-if = "curentCategory === 'Все'"
    :dishes = "this.dishes"
    :label = "this.label"
  >
  </DishesList>
  <FiltredDishesList
    v-if = "curentCategory !== 'Все'"
    :dishes = "this.filtredDishes"
    :category = "this.curentCategory"
  ></FiltredDishesList>
</template>

<style scoped lang="sass">
</style>