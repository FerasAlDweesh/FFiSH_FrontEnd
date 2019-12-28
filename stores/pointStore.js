import { decorate, observable } from "mobx";
import { instance } from "./instance";
import vendorStore from "./vendorStore";
class PointStore {
  points = [];
  userPoints = [];
  loading = true;

  addPoint = async cardID => {
    const card = { card: cardID };
    try {
      const res = await instance.post("points/", card);
      const points = res.data;
      console.log("Errorrrrrr", points);
      this.userPoints = points % vendorStore.vendorCards.points;
      this.loading = false;
      console.log("LOADINGNNG", this.loading);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  fetchUserPoints = async () => {
    try {
      const res = await instance.get("points/");
      const points = res.data;
      this.points = points;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  };
}
decorate(PointStore, {
  points: observable,
  loading: observable
});
const pointStore = new PointStore();
export default pointStore;
