<template>
  <q-btn v-show="note" round flat icon="spatial_audio">
    <q-tooltip class="bg-indigo" :offset="[10, 10]">
      {{ note }}
    </q-tooltip>
  </q-btn>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'DarkMode',
  components: {
  },
  setup () {
    const note = ref('')

    onMounted(() => {
      note.value = '<p>1</p><p>1</p>'
    })

    return {
      note
    }
  }
})
</script>
