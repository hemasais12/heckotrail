import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../common/colors";
import { GlobalSizes } from "../common/sizes";
import { FlatList } from "react-native";
import PercentageBar from "../controls/progressbars/PercentageBar";
import ServiceOrderImage from "../controls/images/ServiceOrderImage";
import BoxTitleText from "../controls/texts/BoxTitleText";
import BoxText from "../controls/texts/BoxText";

function ServiceOrder({ children, onPress, orderDetail }) {
  function renderOrderDetailItem(itemData) {
    return <BoxText>{itemData.item.name}</BoxText>;
  }

  return (
    <View style={styles.container}>
      <ServiceOrderImage
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
        }}
      />

      <View style={styles.orderDetail}>
        <BoxTitleText>{orderDetail.title}</BoxTitleText>

        <FlatList
          data={orderDetail.highlights}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderDetailItem}
        />
        <PercentageBar bgcolor="blue" completed={"5%"} />
      </View>
    </View>
  );
}

export default ServiceOrder;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: GlobalSizes.orderView.height,
    borderRadius: GlobalSizes.orderView.radius,
    borderColor: GlobalColors.primaryButton.dark,
    borderWidth: GlobalSizes.primaryButton.borderWidth,
    marginBottom: 8,
    flexDirection: "row",
  },
  orderDetail: {
    flex: 1,
    padding: 4,
  },
  pressed: {
    opacity: GlobalSizes.primaryButton.pressedOpacity,
    backgroundColor: GlobalColors.primaryButton.pressed,
    borderRadius: GlobalSizes.primaryButton.radius,
  },
});
