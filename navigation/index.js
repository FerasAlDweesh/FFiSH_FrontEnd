import { createAppContainer } from "react-navigation";
import BottomTab from "./BottomTab";
import StackNav from "./StackNav";

const AppContainer = createAppContainer(StackNav);

export default AppContainer;
