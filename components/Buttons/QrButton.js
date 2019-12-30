import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const QrButton = ({ navigation }) => {
  return (
    <Button transparent light>
      {authStore.user ? (
        <>
          <Icon
            name="qrcode"
            type="AntDesign"
            style={{ color: "#F24502" }}
            onPress={() => navigation.navigate("QrCode")}
          />
        </>
      ) : (
        <Icon
          name="button"
          type="MaterialCommunityIcons"
          style={{ color: "#F24502" }}
          onPress={() => navigation.navigate("Login")}
        />
      )}
    </Button>
  );
};

export default withNavigation(observer(QrButton));
