import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

import card from "../../stores/pointStore";

// Stores
import authStore from "../../stores/authStore";
import pointStore from "../../stores/pointStore";
import cardStore from "../../stores/cardStore";

const AddPointButton = ({ navigation, item }) => {
  return (
    <Button transparent light>
      {authStore.user && (
        <Icon
          onPress={() => pointStore.addPoint(item.id)}
          name="plus-circle"
          type="MaterialCommunityIcons"
          style={{
            color: "white",
            position: "absolute",
            marginLeft: 20,
            bottom: 5,
            right: 5
          }}
        />
      )}
    </Button>
  );
};

export default withNavigation(observer(AddPointButton));
