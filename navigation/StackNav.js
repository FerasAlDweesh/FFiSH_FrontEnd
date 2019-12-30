import { createStackNavigator } from "react-navigation-stack";

// Components
import VendorList from "../components/VendorList";
import Profile from "../components/Profile";
import Login from "../components/Login";
import VendorDetail from "../components/VendorDetail";
import ElevationDetail from "../components/ElevationDetail";
import KrispyDetail from "../components/KrispDetail";
// import Register from "../components/Register";

const StackNav = createStackNavigator(
  {
    VendorList: VendorList,
    VendorDetail: VendorDetail,
    ElevationDetail: ElevationDetail,
    KrispyDetail: KrispyDetail
  },
  {
    initialRouteName: "VendorList"
  }
);

export default StackNav;
