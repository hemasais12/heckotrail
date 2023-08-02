import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../common/colors";
import { GlobalSizes } from "../common/sizes";
import { FlatList } from "react-native";
import PercentageBar from "../controls/progressbars/PercentageBar";
import BoxTitleText from "../controls/texts/BoxTitleText";
import BoxText from "../controls/texts/BoxText";
import BikeImage from "../assets/images/tempImages/bike1.png";
import ServiceOrderImage from "../controls/images/ServiceOrderImage";
import { getRandomNumber } from "../utils/NumberUtil";

function ServiceOrder({ children, onPress, orderDetail, index }) {
  function renderOrderDetailItem(itemData) {
    return <BoxText>{itemData.item.name}</BoxText>;
  }

  function getRandomImageIndex() {
    //let length = GlobalColors.boxbar.randomBgColors.length;
    //return getRandomNumber(0, length - 1, true); //////
    return index % 10;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ServiceOrderImage image={BikeImage} />
        <View
          style={styles.orderDetail}
          backgroundColor={
            GlobalColors.boxbar.randomBgColors[getRandomImageIndex()]
          }
        >
          <BoxTitleText>{orderDetail.title}</BoxTitleText>

          <FlatList
            data={orderDetail.highlights}
            keyExtractor={(item) => item.id}
            renderItem={renderOrderDetailItem}
          />
          <PercentageBar bgcolor="blue" completed={"5%"} />
        </View>
      </View>
    </View>
  );
}

export default ServiceOrder;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: GlobalSizes.orderView.height,
    borderRadius: GlobalSizes.orderView.radius,
    borderColor: GlobalColors.primaryButton.dark,
    borderWidth: GlobalSizes.primaryButton.borderWidth,
    marginBottom: 8,
    flexDirection: "row",
    marginTop: 8,
  },
  orderDetail: {
    flex: 1,
    padding: 4,
    // backgroundColor: GlobalColors.boxbar.randomBgColors[0],
    //backgroundColor: "#ffcded",
  },
  pressed: {
    opacity: GlobalSizes.primaryButton.pressedOpacity,
    backgroundColor: GlobalColors.primaryButton.pressed,
    borderRadius: GlobalSizes.primaryButton.radius,
  },
});
