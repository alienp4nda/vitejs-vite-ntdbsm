import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    setAuthentication(value: boolean) {
      this.authenticated = value;
    },
  },
});
