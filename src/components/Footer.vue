<script>
export default{
  name: 'Footer',
}
</script>

<template>
  <div class="wrapper">
    <footer>
      <div class="footer__top">
        <div class="footer__left">
          <p class="footer__text footer__text_underline">О нас</p>
          <p class="footer__text footer__text_underline">Документы</p>
        </div>
        <div class="footer__right">
          <p class="footer__text">Наши соц. сети</p>
          <div class="footer__socials">
            <img src="/icons/tg_logo.png" alt="" class="footer__img">
            <img src="/icons/yt_logo.png" alt="" class="footer__img">
          </div>
        </div>
      </div>
      <p class="footer__bottom">SimpleFood © 2023</p>
    </footer>
  </div>
</template>

<style scoped lang="sass">
footer
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 10px
  gap: 8px
  background-color: white
  width: 100%
.footer__top
  display: flex
  justify-content: space-between
  align-items: center
  width: 984px
.footer__left
  display: flex
  flex-direction: column
  gap: 16px
.footer__text
  font-size: 15px
  line-height: 16px
  &_underline
    text-decoration: underline
.footer__right
  display: flex
  flex-direction: column
  gap: 16px
.footer__socials
  display: flex
  gap: 24px
  align-items: center
.footer__bottom
  font-size: 13px
  line-height: 15px
</style>