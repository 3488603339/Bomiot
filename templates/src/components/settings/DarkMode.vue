<template>
  <q-btn v-show="!dark" round flat icon="brightness_4" @click="darkModeChange()"></q-btn>
  <q-btn v-show="dark" round flat icon="bedtime" @click="darkModeChange()"></q-btn>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { usedarkStore } from 'stores/dark';
import { Dark } from 'quasar'

export default defineComponent({
  name: 'DarkMode',
  components: {
  },
  setup () {
    const store = usedarkStore()
    const dark = computed(() => store.dark)
    const darkModeChange = () => store.darkModeChange()

    onMounted(() => {
      Dark.set(dark.value)
    })

    return {
      dark,
      darkModeChange
    }
  }
})
</script>
