<script>
  export default {
    name: 'CategoryCard',
    props: {
      iconPath: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      curentCategory: {
        type: String,
        required: true,
      },
    },
    emits:[
      'updateCategory'
    ],
    methods: {
      updateCategory(){
        this.$emit('updateCategory', this.label);
      }
    }
  }
</script>

<template>
  <div 
    class="category" 
    :class="{category_darkgreen: this.curentCategory === this.label}"
    @click="updateCategory"
  >
    <img class="category__icon" :src="iconPath">
    <p class="category__label">{{ label }}</p>
  </div>
</template>

<style scoped lang="sass">
.category
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 1px
  width: 116px
  height: 111px
  background: #73C319
  border-radius: 10px
  user-select: none
  cursor: pointer
  &__icon
    width: 56px
    height: 56px
  &__label
    font-weight: 700
    font-size: 20px
    line-height: 27px
    color: #FFFFFF
  &:hover
    background: #2C8A24
    opacity: 0.9
  &_darkgreen
    background: #2C8A24
</style>