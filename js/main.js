//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      contacts,
      activeContact: 0,
      newUserMessage: "",
      filterName: "",
    };
  },

  //* Methods
  methods: {
    clickContact(index) {
      this.activeContact = index;
    },

    //* nuovo messaggio
    sendNewMessage(activeContact) {
      //* DateTime Luxon
      let DateTime = luxon.DateTime;
      const now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss");

      const newMex = {
        date: now,
        message: this.newUserMessage,
        status: "sent",
        hiddenmenu: false,
      };
      this.contacts[activeContact].messages.push(newMex);
      this.newUserMessage = "";

      //*time out per la risposta
      setTimeout(() => {
        this.otherNewMessage(activeContact), 3000;
      });
    },
    //* risposta al messaggio
    otherNewMessage(activeContact) {
      const newOtherMex = {
        date: "random",
        message: "Ok!",
        status: "received",
        hiddenmenu: false,
      };
      this.contacts[activeContact].messages.push(newOtherMex);
    },

    //* delete message
    deleteMessage(index, activeContact) {
      this.contacts[activeContact].messages.splice(index, 1);
    },
  },
}).mount("#app");
