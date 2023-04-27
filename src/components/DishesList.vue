<script>
// Прокидывать индекс, не искать
import DisheCard from './DisheCard.vue';
export default{
  name: 'DishesList',
  props:{
    dishes:{
      type: Array,
      required: true,
    },
    label:{
      type: String,
      required: true,
    }
  },
  components: {
    DisheCard,
  },
  emits:[
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
  <h1 class="label">{{ this.label }}</h1>
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
  margin-bottom: 20px
</style>