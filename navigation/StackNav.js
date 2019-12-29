import { createStackNavigator } from "react-navigation-stack";
import React from "react";

// Components
import VendorList from "../components/VendorList";
import Profile from "../components/Profile";
import ProfileButton from "../components/Buttons/ProfileButton";

// Auth
import LoginScreen from "../Auth/screens/LoginScreen";
import RegisterScreen from "../Auth/screens/RegisterScreen";

const StackNav = createStackNavigator(
  {
    VendorList: VendorList,
    Profile: Profile,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "VendorList",

    defaultNavigationOptions: {
      headerRight: <ProfileButton />
    }
  }
);

export default StackNav;
