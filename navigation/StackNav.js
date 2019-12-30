import { createStackNavigator } from "react-navigation-stack";
import React from "react";

// Components
import VendorList from "../components/VendorList";
import Profile from "../components/Profile";
import VendorDetail from "../components/VendorDetail";
import ElevationDetail from "../components/ElevationDetail";
import KrispyDetail from "../components/KrispDetail";
// import Register from "../components/Register";

import ProfileButton from "../components/Buttons/ProfileButton";
import QrCode from "../components/QrCode/index";

// Auth
import LoginScreen from "../Auth/screens/LoginScreen";
import RegisterScreen from "../Auth/screens/RegisterScreen";

const StackNav = createStackNavigator(
  {
    VendorList: VendorList,

    VendorDetail: VendorDetail,
    ElevationDetail: ElevationDetail,
    KrispyDetail: KrispyDetail,

    Profile: Profile,
    Login: LoginScreen,
    Register: RegisterScreen,
    QrCode: QrCode
  },
  {
    initialRouteName: "VendorList",

    defaultNavigationOptions: {
      headerRight: <ProfileButton />
    }
  }
);

export default StackNav;
