<script>
import dishes from '@/assets/dishes';

export default{
  emits: [
    'disheAddedToBascket',
    'disheRemovedFromBascket'
  ],
  data(){
    return {
      dishes: dishes,
      curentCategory: "Все",
      filtredDishes: [],
      label: 'Предложение дня'
    }
  },
  methods:{
    addDisheToBascket(dishe){
      this.$emit('disheAddedToBascket', dishe);
    },
    removeDisheFromBascket(dishe){
      this.$emit('disheRemovedFromBascket', dishe);
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