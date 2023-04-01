import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('lang', {
  state: () => ({
    lang: 'en-US',
  }),
  getters: {
    getDark: (state) => state.lang
  },
  actions: {
    LanguageChange(e) {
      this.lang = e
    },
  },
  persist: {
    enabled: true ,
  }
});
