<template>
  <MainTable />
</template>

<script>
import MainTable from 'components/table/TableData.vue'
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewTest",
  components: {
    MainTable
  }
})
</script>

<style scoped>

</style>
