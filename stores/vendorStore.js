import { decorate, observable } from "mobx";
import { instance } from "./instance";

class VendorStore {
  vendorCards = [];
  loading = true;
  cafes = [];
  restaurants = [];
  donuts = [];

  fetchAllVendors = async () => {
    try {
      const res = await instance.get("vendors/");
      const vendors = res.data;
      this.vendorCards = vendors;
      this.cafes = this.vendorCards.filter(card => card.category === "cafe");
      this.restaurants = this.vendorCards.filter(
        card => card.category === "restaurant"
      );
      this.donuts = this.vendorCards.filter(card => card.category === "donut");
      this.loading = false;
    } catch (err) {
      console.log("ERROR", err);
    }
  };
}

decorate(VendorStore, {
  vendorCards: observable,
  loading: observable,
  cafes: observable
});

const vendorStore = new VendorStore();
vendorStore.fetchAllVendors();

export default vendorStore;
