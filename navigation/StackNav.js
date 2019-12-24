import { createStackNavigator } from "react-navigation-stack";

// Components
import VendorList from "../components/VendorList";
import Profile from "../components/Profile";
import Login from "../components/Login";
// import Register from "../components/Register";

const StackNav = createStackNavigator(
  {
    VendorList: VendorList
  },
  {
    initialRouteName: "VendorList"
  }
);

export default StackNav;
