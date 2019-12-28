import { decorate, observable } from "mobx";
import { instance } from "./instance";
class PointStore {
  points = [];
  loading = true;

  addPoint = async cardID => {
    const card = { card: cardID };
    try {
      const res = await instance.post("points/", card);
      const points = res.data;
      console.log("Errorrrrrr", points);
      this.points = points;
      this.loading = false;
      console.log("LOADINGNNG", this.loading);
    } catch (err) {
      console.log("ERROR", err);
    }
  };
}
decorate(PointStore, {
  points: observable,
  loading: observable
});
const pointStore = new PointStore();
export default pointStore;
