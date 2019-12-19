import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import StackNav from "./StackNav";
import AuthStack from "./AuthStack";

const BottomTab = createBottomTabNavigator(
  {
    StackTab: StackNav,
    AuthTab: AuthStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "StackTab") {
          iconName = "card_giftcard";
          iconType = "MaterialIcons";
        } else if (routeName === "AuthTab") {
          iconName = "person_outline";
          iconType = "MaterialIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
