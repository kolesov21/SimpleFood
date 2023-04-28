<script>
import BascketCard from './BascketCard.vue';
import { useBascketStore } from '@/stores/bascket.js'
import { mapActions } from 'pinia'
export default{
  props:{
    bascket:{
      type: Array,
      required: true,
    }
  },
  components:{
    BascketCard
  },
  methods:{
    ...mapActions(useBascketStore, ['reset']),
  }
}
</script>

<template>
  <h1 class="label">Корзина</h1>
  <div class="wrapper">
    <div class="bascketList">
      <p class="bascketList__text" @click="this.reset()">Очистить корзину</p>
      <BascketCard
        v-for="item in bascket"
        :key="item.id"
        :dishe="item"
      ></BascketCard>
    </div>
  </div>
</template>

<style scoped lang="sass">
.bascketList
  display: flex
  flex-direction: column
  gap: 20px
  &__text
    font-weight: 400
    font-size: 16px
    line-height: 16px
    text-align: right
    text-decoration-line: underline
    cursor: pointer
</style>