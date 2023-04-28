<script>
import { useBascketStore } from '@/stores/bascket.js'
import { mapActions } from 'pinia'
export default{
  props:{
    dishe:{
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      quantity: 1,
    }
  },
  methods:{
    minusQuantity(){
      if(this.quantity > 1){
        this.quantity--;
        this.updateAmount(-this.dishe.price)
      }
    },
    plusQuantity(){
      this.quantity++;
      this.updateAmount(this.dishe.price)
    },
    ...mapActions(useBascketStore, ['remove']),
    ...mapActions(useBascketStore, ['updateAmount']),
  },
}
</script>

<template>
  <div class="card">
    <img 
      :src="this.dishe.imgPath" 
      :alt="this.dishe.name" 
      class="card__img"
    >
    <div class="card__info">
      <p class="card__label">{{ this.dishe.name }}</p>
      <p class="card__price">{{ this.dishe.price }}</p>
      <div class="card__actions">
        <div class="card__quantity">
          <img src="/icons/minus.svg" class="card__icon" @click="minusQuantity">
          <p class="card__text">{{ quantity }}</p>
          <img src="/icons/plus.svg" class="card__icon" @click="plusQuantity">
        </div>
        <img src="/icons/removeFromBascket.svg" class="card__bascket" @click="remove(this.dishe, this.quantity)">
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.card
  display: flex
  align-items: center
  &__img
    border-radius: 15px 0px 0px 15px
    width: 210px
    height: 130px
    object-fit: cover
    cursor: pointer
  &__info
    display: flex
    flex-direction: column
    padding: 11px 10px
    gap: 16px
    border-radius: 0px 15px 15px 0px
    background: #FFFFFF
    width: 240px
  &__label
    font-weight: 700
    font-size: 18px
    line-height: 22px
  &__price
    font-weight: 600
    font-size: 18px
    line-height: 22px
  &__actions
    display: flex
    justify-content: space-between
    align-items: center
  &__quantity
    display: flex
    justify-content: center
    align-items: center
    gap: 16px
    font-weight: 700
  &__icon
    width: 32px
    height: 32px
    cursor: pointer
  &__bascket
    width: 32px
    height: 32px
    cursor: pointer
</style>