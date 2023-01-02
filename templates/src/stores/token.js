import { defineStore } from 'pinia';

export const usetokenStore = defineStore('token', {
  state: () => ({
    token: '111',
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    increment(e) {
      this.token = e;
    },
  },
  persist: {
    enabled: true ,
  }
});
