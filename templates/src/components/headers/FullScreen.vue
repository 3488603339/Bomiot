<template>
  <q-btn
     round
     flat
     @click="$q.fullscreen.toggle()"
     :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullScreen"
})
</script>

<style scoped>

</style>
