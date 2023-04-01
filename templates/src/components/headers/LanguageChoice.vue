<template>
  <q-btn
    round
    dense
    flat
    color="white"
    icon="translate"
    style="margin: 0 10px 0 10px"
  >
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item
          clickable
          v-close-popup
          v-for="(language, index) in langOptions"
          :key="index"
          @click="store.LanguageChange(language.value)"
        >
          <q-item-section>{{ language.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useLanguageStore } from 'stores/language';

export default defineComponent({
  name: 'LanguageChoice',

  setup () {
    const store = useLanguageStore()
    const lang = computed(() => store.lang)
    const langOptions = [
        { value: 'en-US', label: 'English' },
        { value: 'zh-hans', label: '中文简体' },
        { value: 'zh-hant', label: '中文繁體' },
        { value: 'fr', label: 'Français' },
        { value: 'pt', label: 'Português' },
        { value: 'sp', label: 'Español' },
        { value: 'de', label: 'Deutsch' },
        { value: 'ru', label: 'русский язык' },
        { value: 'ar', label: 'Arabic' },
        { value: 'it', label: 'Italiano' },
        { value: 'ja', label: '日本語' }
      ]

    return {
      langOptions,
      lang,
      store
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
})
</script>
