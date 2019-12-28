import { decorate, observable } from "mobx";
import { instance } from "./instance";

class VendorStore {
  vendorCards = [];
  loading = true;

  fetchAllVendors = async () => {
    try {
      const res = await instance.get("vendors/");
      const vendors = res.data;
      this.vendorCards = vendors;
      this.loading = false;
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
