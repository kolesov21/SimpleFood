<script>
import dishes from './assets/dishes';

export default{
  data(){
    return {
      dishes: dishes,
      bascket: [],
      curentCategory: "Все",
      filtredDishes: [],
    }
  },
  methods:{
    addDisheToBascket(dishe){
      this.bascket.push(dishe);
    },
    removeDisheFromBascket(dishe){
      const index = this.bascket.indexOf(dishe);
      this.bascket.splice(index, 1);
    },
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
  <Navigation></Navigation>
  <CategoriesList
    :curentCategory="this.curentCategory"
    @updateCategory="updateCategory"
  >
  </CategoriesList>
  <Promo v-if = "curentCategory === 'Все'"></Promo>
  <DishesList
    v-if = "curentCategory === 'Все'"
    :dishes = "this.dishes"
    @disheAddedToBascket = "addDisheToBascket"
    @disheRemovedFromBascket = "removeDisheFromBascket"
  >
  </DishesList>
  <FiltredDishesList
    v-if = "curentCategory !== 'Все'"
    :dishes = "this.filtredDishes"
    :category = "this.curentCategory"
  ></FiltredDishesList>
  <Footer></Footer>
</template>

<style scoped lang="sass">
</style>