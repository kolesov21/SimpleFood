import { defineStore } from 'pinia'

export const useBascketStore = defineStore('bascket',{
  state: () => ({
    bascket: [],
    quantity: 0,
    amount: 0,
  }),
  actions: {
    add(dishe){
      this.quantity++;
      this.amount+=dishe.price;
      this.bascket.push(dishe);
    },
    remove(dishe, quantity){
      this.quantity--;
      this.amount-=dishe.price*quantity;
      const index = this.bascket.indexOf(dishe);
      this.bascket.splice(index, 1);
    },
    isContain(dishe){
      return this.bascket.indexOf(dishe) === -1 ? false : true;
    },
    updateAmount(price){
      this.amount+=price;
    },
    reset(){
      this.bascket = [];
      this.quantity = 0;
      this.amount = 0;
    }
  }
})