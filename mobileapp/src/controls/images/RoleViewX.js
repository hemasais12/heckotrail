import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { ROLE_VENDOR } from "../../common/constants";
import { getLangObject } from "../../utils/LanguageUtil";
import CustomPressable from "../commons/CustomPressable";
import NormalText from "../texts/NormalText";

export const ROLE_CLIENT = "CLIENT";

function RoleView({ children, role, isSelected, onPress }) {
  const [selected, setSelected] = useState(isSelected);

  const [imageSource, setImageSource] = useState(
    require("../../assets/images/roleclient.png")
  );

  useEffect(() => {
    if (role === ROLE_CLIENT) {
      setImageSource(require("../../assets/images/roleclient.png"));
    } else if (role === ROLE_VENDOR) {
      setImageSource(require("../../assets/images/rolevendor.png"));
    }
  }, []);

  function getRoleTitle() {
    if (role === ROLE_CLIENT) {
      return getLangObject().General.clientTitle;
    } else if (role === ROLE_VENDOR) {
      return getLangObject().General.vendorTitle;
    }
  }

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  function clickHandler() {
    onPress(role);
  }

  return (
    <CustomPressable onPress={clickHandler}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.role}>
            <Image source={imageSource} style={styles.image} />
          </View>
        </View>
        {selected ? (
          <Image
            style={styles.stretch}
            source={require("../../assets/images/roletick.png")}
          />
        ) : (
          <></>
        )}
        <NormalText style={styles.title}>{getRoleTitle()}</NormalText>
      </View>
    </CustomPressable>
  );
}

export default RoleView;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: GlobalColors.app.borderColor,
    marginHorizontal: 24,
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  container: {
    flexDirection: "row",
    borderColor: GlobalColors.app.borderColor,
    padding: 2,
  },

  role: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
  },
  stretch: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
    position: "absolute",
    marginLeft: 2,
  },
  title: {
    textAlign: "center",
  },
});
