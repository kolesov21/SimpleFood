<script>
export default{
  name: 'MyInput',
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped lang="sass">
input
  font-family: 'Open Sans'
  align-items: center
  padding: 10px
  gap: 10px
  border: 1px solid
  border-radius: 20px
  font-weight: 400
  font-size: 18px
  line-height: 24px
</style>