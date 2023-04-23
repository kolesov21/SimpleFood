<script>
// Сохранить состояние открытия/закрытия окна
// Встроенный компонент телепорт
// ПОЧИТАТЬ Scoped Slots
export default{
  name: 'ModalWindow',
  methods: {
    tryToClose(event){
      if (event.classList.contains('wrapper') ||
          event.classList.contains('modal-wrapper')){
        this.$emit('close');
      }
    },
    close(){
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div class="modal-mask" @click="tryToClose($event.target)">
      <div class="modal-wrapper">
        <slot v-bind="{close}"></slot>
      </div>
    </div>
</template>

<style scoped lang="sass">
.modal-mask
  position: fixed
  z-index: 9999
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: table
  transition: opacity 0.3s ease
.modal-wrapper
  display: table-cell
  vertical-align: middle
.modal-default-button
  float: right
</style>