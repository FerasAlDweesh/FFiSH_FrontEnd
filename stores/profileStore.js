import { decorate, observable } from "mobx";

import { instance } from "./instance";

class ProfileStore {
  user = null;
  loading = true;

  getUserProfile = async () => {
    try {
      const res = await instance.get("profile/");
      const user = res.data;
      this.user = user;
      console.log("help", user);
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(ProfileStore, {
  user: observable,
  loading: observable
});

const profileStore = new ProfileStore();

export default profileStore;
