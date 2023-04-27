<script>
export default{
  name: 'MyButton',
}
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="sass">
button
  font-family: 'Open Sans'
  align-items: center
  padding: 10px 15px
  gap: 10px
  background: #73C319
  border-radius: 20px
  border: 0px
  color: white
  font-weight: 600
  font-size: 18px
  line-height: 24px
  text-align: center
</style>