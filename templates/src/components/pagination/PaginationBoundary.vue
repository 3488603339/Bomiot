<template>
    <q-pagination
      v-model="current"
      :color="color"
      :max="max"
      :max-pages="maxPage"
      boundary-numbers
      @click="currentPage"
    />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PaginationBoundary',
  props: {
    max: {
      type: String,
      default: '100'
    },
    maxPage: {
      type: String,
      default: '6'
    },
    color: {
      type: String,
      default: 'purple'
    },
  },
  setup () {
    const current = ref(1)
    return {
      current,
      currentPage () {
        console.log(current.value)
      }
    }
  }
})
</script>
