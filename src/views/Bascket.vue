<script>
import { useBascketStore } from '@/stores/bascket.js'
import { mapState } from 'pinia'
import BascketList from '../components/BascketList.vue';

export default{
    data() {
        return {};
    },
    computed: {
        ...mapState(useBascketStore, ["bascket"]),
        ...mapState(useBascketStore, ["amount"])
    },
    components: { BascketList }
}
</script>

<template>
  <BascketList
    v-if="amount>0"
    :bascket="bascket">
  </BascketList>
  <p v-else class="text">Ваша корзина пуста</p>
  <div class="wrapper">
    <div class="payment">
      <div class="payment__top">
        <div class="payment__order-info">
          <div class="payment__address">
            <p class="payment__text">Адрес</p>
            <p class="payment__text payment__text_thicker">ул.Пушкина, д.111, кв.999</p>
          </div>
          <div class="payment__method">
            <p class="payment__text">Оплата курьеру</p>
            <p class="payment__text payment__text_thicker">Наличкой</p>
          </div>
        </div>
      </div>
      <div class="payment__bottom">
        <p class="payment__text payment__text_thicker">Итог {{ amount }}</p>
        <MyButton>Подтвердить</MyButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.text
  padding-top: 20px
  font-weight: 400
  font-size: 24px
  line-height: 28px
  text-align: center
.wrapper
  background: white
.payment
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 0px
  gap: 20px
  width: 472px
  padding: 20px 0px
  &__text
    font-weight: 400
    font-size: 17px
    line-height: 20px
    &_thicker
      font-weight: 600
  &__top
    display: flex
    flex-direction: column
    align-items: flex-start
  &__order-info
    display: flex
    flex-direction: column
    padding: 0px
    gap: 8px
  &__bottom
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    min-width: 472px
</style>