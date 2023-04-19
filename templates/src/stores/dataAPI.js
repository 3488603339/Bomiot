import { defineStore } from 'pinia';

export const useDataAPIStore = defineStore('dataAPI', {
  state: () => ({
    api: ''
  }),

  getters: {
    getAPI: (state) => state.api
  },

  actions: {
    apiChange(e) {
      this.api = e;
    }
  },
  persist: {
    enabled: true ,
  }
});
