import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modules: [
      {
        id: 1,
        img: "tech",
        name: "Module Name 1",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 2,
        img: "tech",
        name: "Module Name 2",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 3,
        img: "tech",
        name: "Module Name 3",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 78,
        img: "tech",
        name: "Module Name 4",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 11,
        img: "tech",
        name: "Module Name 5",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 22,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 34,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 42,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 5,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 6,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                            bulk of the card's content.`
      },
      {
        id: 7,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      },
      {
        id: 8,
        img: "tech",
        name: "Module Name",
        text: `Some quick example text to build on the card title and make up the
                        bulk of the card's content.`
      }
    ]
  },
  getters: {
    modules: state => state.modules
  }
});
