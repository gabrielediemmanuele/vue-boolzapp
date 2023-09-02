//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      contacts,
      activeContact: 0,
    };
  },

  //* Methods
  methods: {
    clickContact(index) {
      this.activeContact = index;
    },
  },
}).mount("#app");
