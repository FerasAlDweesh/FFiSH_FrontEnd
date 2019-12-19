import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";

//Navigation
import StackNav from "./StackNav";

const AuthStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "FFiSH"
    }
  }
);

export default AuthStack;
