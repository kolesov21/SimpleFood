<script>
// Объеденить с обычным листом
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
}
</script>

<template>
  <h1 class="label">{{ this.category }}</h1>
  <div class="wrapper">
    <div class="disheslist">
      <DisheCard 
        v-for="dishe in dishes"
        :key="dishe.id"
        :dishe="dishe"
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