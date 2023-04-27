<script>
export default{
  data(){
    return{
      bascket: [],
    }
  },
  methods:{
    addDisheToBascket(dishe){
      this.bascket.push(dishe);
    },
    removeDisheFromBascket(dishe){
      const index = this.bascket.indexOf(dishe);
      this.bascket.splice(index, 1);
    }
  }
}
</script>

<template>
  <Navigation></Navigation>
  <router-view 
    @disheAddedToBascket="addDisheToBascket"
    @disheRemovedFromBascket = "removeDisheFromBascket"
  ></router-view>
</template>

<style scoped lang="sass">
</style>