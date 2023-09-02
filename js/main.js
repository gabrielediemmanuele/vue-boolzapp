//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      contacts,
      activeContact: 0,
      newUserMessage: "",
    };
  },

  //* Methods
  methods: {
    clickContact(index) {
      this.activeContact = index;
    },
    //* nuovo messaggio
    sendNewMessage(activeContact) {
      const newMex = {
        date: "random",
        message: this.newUserMessage,
        status: "sent",
      };
      this.contacts[activeContact].messages.push(newMex);
      this.newUserMessage = "";

      //*time out per la risposta
      setTimeout(() => {
        this.otherNewMessage(activeContact), 2000;
      });
    },
    //* risposta al messaggio
    otherNewMessage(activeContact) {
      const newOtherMex = {
        date: "random",
        message: "Ok!",
        status: "received",
      };
      this.contacts[activeContact].messages.push(newOtherMex);
    },
  },
}).mount("#app");
