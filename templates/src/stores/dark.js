import { defineStore } from 'pinia';
import { Dark } from "quasar";

export const usedarkStore = defineStore('dark', {
  state: () => ({
    dark: Dark.isActive,
  }),
  getters: {
    getDark: (state) => state.dark,
  },
  actions: {
    darkModeChange() {
      this.dark = !this.dark;
      Dark.set(this.dark)
    },
  },
  persist: {
    enabled: true ,
  }
});
