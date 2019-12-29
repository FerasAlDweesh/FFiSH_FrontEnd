import { decorate, observable } from "mobx";
import { instance } from "./instance";
import vendorStore from "./vendorStore";
class PointStore {
  points = [];
  loading = true;

  addPoint = async vendor_id => {
    const vendor = { vendor: vendor_id };
    try {
      const res = await instance.post("createpoint/", vendor);
      const points = res.data;
      console.log("Errorrrrrr", points);
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
      console.log("the users points", points);
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
