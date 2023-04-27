<script>
export default{
  name: 'Navigation',
}
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">
        <div class="logo">
          <img class="logo__icon" src="/icons/logo.svg" alt="Logo Icon">
          <p class="logo__text">Simple<span class="logo__text_darkgreen">Food</span></p>
        </div>
      </RouterLink>
      <div class="nav">
        <RouterLink to="/search"><img class="nav__item" src="/icons/searchIcon.svg" alt="Search"></RouterLink>
        <img class="nav__item" src="/icons/profileIcon.svg" alt="Profile">
        <RouterLink to="/bascket"><img class="nav__item" src="/icons/basketIcon.svg" alt="Basket"></RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="sass">
nav
  min-width: 984px
  display: flex
  justify-content: space-between
  padding: 20px
  padding-bottom: 0px
.logo
  display: flex
  align-items: center
  column-gap: 10px
  &__icon
    width: 46px
    height: 40px
  &__text
    font-weight: 700
    font-size: 32px
    line-height: 44px
    color: #73C319
    &_darkgreen
      color: #2C8A24
.nav
  display: flex
  column-gap: 40px
  &__item
    width: 32px
    height: 32px
</style>