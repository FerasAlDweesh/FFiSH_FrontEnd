import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Profile from "../components/Profile";
import Login from "../components/Login";
// import Register from "../components/Register";

const StackNav = createStackNavigator(
  {
    List: List
  },
  {
    initialRouteName: "List"
  }
);

export default StackNav;
