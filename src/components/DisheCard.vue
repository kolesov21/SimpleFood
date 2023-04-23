<script>
import ModalWindow from './UI/ModalWindow.vue';

export default{
  name: 'DisheCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
  },
  components:{
    ModalWindow,
  },
  emits: [
    'disheAddedToBascket',
    'disheRemovedFromBascket'
  ],
  data() {
    return {
      showModal: false,
      dishe: {
        id: this.id,
        name: this.name,
        price: this.price,
      },
      inBasket: false
    }
  },
  methods: {
    changeBasket(){
      if (!this.inBasket){
        this.inBasket = true;
        this.$emit('disheAddedToBascket', this.dishe);
      }else{
        this.inBasket = false;
        this.$emit('disheRemovedFromBascket', this.dishe);
      }
    },
    openDetails(){
      this.showModal = true;
    }
  }
}
</script>

<template>
  <div class="dishecard">
    <img 
      @click="openDetails" 
      class="dishecard__photo" 
      :src="imgPath" 
      :alt="name"
    >
    <div class="dishecard__info">
      <p class="dishecard__name">{{ name }}</p>
      <div class="dishecard__info-bottom">
        <p class="dishecard__price">{{ price }} руб.</p>
        <img 
          @click="changeBasket" 
          class="dishecard__button" 
          :src="this.inBasket ? '/icons/removeFromBascket.svg' : '/icons/addToBascket.svg'" 
          alt="Добавить в корзину"
        >
      </div>
    </div>
  </div>

  <ModalWindow v-if="showModal" @close="showModal = false" v-slot="{close}">
      <div class="wrapper">
      <button @click="close">Close</button>
      <div class="dishecardDetails">
        <img
          class="dishecardDetails__photo"
          :src="imgPath" 
          :alt="name"
        >
        <div class="dishecardDetails__info">
          <div class="dishecardDetails__info-top">
            <p class="dishecardDetails__text">{{ name }}</p>
            <div class="dishecardDetails__price-info">
              <p class="dishecardDetails__price">{{ price }} руб.</p>
              <img 
                @click="changeBasket" 
                class="dishecardDetails__button" 
                :src="this.inBasket ? '/icons/removeFromBascket.svg' : '/icons/addToBascket.svg'" 
                alt="Добавить в корзину"
              >
            </div>
          </div>
          <p class="dishecardDetails__description">{{ description }}</p>
        </div>
      </div>
    </div>
  </ModalWindow>
</template>

<style scoped lang="sass">
.dishecard
  max-width: 184px
  max-height: 231px
  &__photo
    width: 184px
    height: 130px
    border-radius: 15px 15px 0px 0px
    cursor: pointer
  &__info
    display: flex
    flex-direction: column
    padding: 8px 15px
    gap: 16px
    border-radius: 0px 0px 15px 15px
    background-color: white
  &__name
    font-weight: 700
    font-size: 18px
    line-height: 20px
  &__info-bottom
    display: flex
    justify-content: space-between
    align-items: center
  &__price
    font-weight: 600
    font-size: 20px
  &__button
    width: 32px
    height: 32px
    cursor: pointer

.dishecardDetails
  display: flex
  flex-direction: column
  align-items: center
  &__photo
    width: 480px
    height: 250px
    border-radius: 15px 15px 0px 0px
  &__info
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 20px 25px
    gap: 16px
    background: #FFFFFF
    border-radius: 0px 0px 15px 15px
    width: 430px
  &__info-top
    width: 430px
    display: flex
    justify-content: space-between
    align-items: center
  &__text
    font-weight: 700
    font-size: 17px
    line-height: 23px
  &__price-info
    display: flex
    justify-content: center
    align-items: center
    gap: 16px
  &__price
    font-weight: 700
    font-size: 17px
    line-height: 23px
  &__button
    cursor: pointer
  &__description
    font-size: 17px
    line-height: 23px
</style>