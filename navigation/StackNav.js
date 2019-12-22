import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Profile from "../components/Profile";
import Login from "../components/Login";
// import Register from "../components/Register";

const StackNav = createStackNavigator(
  {
    List: List,
    Profile: Profile,
    Login: Login
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "List"
    }
  }
);

export default StackNav;
