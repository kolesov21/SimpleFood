<script>
import categories from '../assets/categories';

import CategoryCard from './CategoryCard.vue';

export default {
  name: 'CategoriesList',
  props: {
    curentCategory: {
      type: String,
      required: true,
    },
  },
  components: {
    CategoryCard
  },
  emits: [
    'updateCategory'
  ],
  data() {
    return {
      categories
    };
  },
  methods: {
    updateCategory(categoryLabel){
      this.$emit('updateCategory', categoryLabel);
    }
  }
}
</script>

<template>
  <h1 class="label">Категории блюд</h1>
  <div class="wrapper">
    <div class="categories">
      <CategoryCard 
        v-for="category in categories"
        :key="category.id"
        :iconPath="category.iconPath"
        :label="category.label"
        :curentCategory="this.curentCategory"

        @updateCategory="updateCategory"
      >
      </CategoryCard>
    </div>
  </div>
</template>

<style scoped lang="sass">
.categories
  display: flex
  gap: 8px
  padding-left: 20px
  padding-right: 20px
</style>