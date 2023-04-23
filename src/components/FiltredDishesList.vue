<script>
// Объеденить с обычным листом
//
// 1
// 4
// 5
import DisheCard from './DisheCard.vue';
export default{
  name: 'FiltredDishesList',
  props:{
    dishes: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  components: {
    DisheCard,
  },
  emits: [
    'disheAddedToBascket', 
    'disheRemovedFromBascket'
  ],
  methods: {
    addDisheToBascket(dishe){
      this.$emit('disheAddedToBascket', dishe);
    },
    removeDisheFromBascket(dishe){
      this.$emit('disheRemovedFromBascket', dishe);
    }
  }
}
</script>

<template>
  <h1 class="label">{{ this.category }}</h1>
  <div class="wrapper">
    <div class="disheslist">
      <DisheCard 
        v-for="dishe in dishes"
        :key="dishe.id"

        :id="dishe.id"
        :name="dishe.name"
        :price="dishe.price"
        :description="dishe.description"
        :imgPath="dishe.imgPath"

        @disheAddedToBascket="addDisheToBascket"
        @disheRemovedFromBascket="removeDisheFromBascket"
      >
      </DisheCard>
    </div>
  </div>
</template>

<style scoped lang="sass">
.disheslist
  display: flex
  gap: 16px
  max-width: 984px
  flex-wrap: wrap
  padding-left: 20px
  padding-right: 20px
  min-width: 984px
  margin-bottom: 20px
</style>
// 2