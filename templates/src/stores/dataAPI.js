import { defineStore } from 'pinia';

export const useTableDataStore = defineStore('dataAPI', {
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
