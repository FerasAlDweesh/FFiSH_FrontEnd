import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Icon, Button } from "native-base";

// Styles

//stores
import authStore from "../../stores/authStore";

const LogoutButton = ({ navigation }) => {
  if (authStore.user)
    return (
      <Icon
        onPress={() => authStore.logout(navigation)}
        name="power"
        type="MaterialCommunityIcons"
        style={{ color: "rgb(153,0,0)" }}
      />
    );
};

export default withNavigation(observer(LogoutButton));
