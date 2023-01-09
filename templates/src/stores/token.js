import { defineStore } from 'pinia';

export const usetokenStore = defineStore('token', {
  state: () => ({
    token: '',
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    tokenaction(e) {
      this.token = e;
    },
    tokencheck() {
      if (this.token === '') {
        this.router.push({ name: 'logon' })
      } else {
        let strings = this.token.split(".")
        var userinfo = JSON.parse(decodeURIComponent(escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))));
        var tokeninit = userinfo.exp - (Date.parse(new Date()) / 1000)
        if (tokeninit <= 0) {
          this.token = ''
          this.router.push({ name: 'logon' })
        }
      }
    }
  },
  persist: {
    enabled: true ,
  }
});
