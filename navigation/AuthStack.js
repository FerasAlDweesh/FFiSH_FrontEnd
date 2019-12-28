import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";

// Auth
import LoginScreen from "../Auth/screens/LoginScreen";
import RegisterScreen from "../Auth/screens/RegisterScreen";

//Navigation
import StackNav from "./StackNav";

const AuthStack = createStackNavigator(
  {
    Profile: Profile,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "FFiSH"
    }
  }
);

export default AuthStack;
