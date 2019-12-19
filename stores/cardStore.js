import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CardStore {
  cards = [];
  loading = true;

  fetchAllCards = async () => {
    try {
      const res = await instance.get("cards/");
      const cards = res.data;
      this.cards = cards;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CardStore, {
  cards: observable,
  loading: observable
});

const cardStore = new CardStore();
cardStore.fetchAllCards();

export default cardStore;
