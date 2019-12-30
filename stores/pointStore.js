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
      console.log("point 1");
      const res = await instance.get("points/");
      console.log("point 2");
      const points = res.data;
      this.points = points;
      console.log("point:", points);

      this.loading = false;
    } catch (err) {
      console.log("this is an", err);
    }
  };
}
decorate(PointStore, {
  points: observable,
  loading: observable
});
const pointStore = new PointStore();
export default pointStore;
