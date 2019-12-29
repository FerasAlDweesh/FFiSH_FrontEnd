import { decorate, observable } from "mobx";
import { instance } from "./instance";
import cardStore from "./cardStore";
class PointStore {
  points = [];
  loading = true;

  addPoint = async vendor_id => {
    const vendor = { vendor: vendor_id };
    try {
      const res = await instance.post("createpoint/", vendor);
      const points = res.data;
      this.loading = false;
      await cardStore.fetchAllCards();
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
