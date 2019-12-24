import { decorate, observable } from "mobx";
import { instance } from "./instance";

class VendorStore {
  vendorCards = [];
  loading = true;

  fetchAllVendors = async () => {
    try {
      const res = await instance.get("vendors/");
      const vendors = res.data;
      console.log("Errorrrrrr", vendors);
      this.vendorCards = vendors;
      this.loading = false;
      console.log("LOADINGNNG", this.loading);
    } catch (err) {
      console.log("ERROR", err);
    }
  };
}

decorate(VendorStore, {
  vendorCards: observable,
  loading: observable
});

const vendorStore = new VendorStore();
vendorStore.fetchAllVendors();

export default vendorStore;
