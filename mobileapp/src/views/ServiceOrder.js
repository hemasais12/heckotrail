import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../common/colors";
import { GlobalSizes } from "../common/sizes";
import { FlatList } from "react-native";

function ServiceOrder({ children, onPress, orderDetail }) {
  function renderOrderDetailItem(itemData) {
    return <Text>{itemData}</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
        }}
        style={styles.image}
      />
      {/*
      <>
        
        <Text style={styles.orderTitle}>{orderDetail.title}</Text>
        <FlatList
          data={orderDetail.highlights}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderDetailItem}
        />
      </>*/}
    </View>
  );
}

export default ServiceOrder;

const styles = StyleSheet.create({
  container: {
    width: GlobalSizes.orderView.width,
    height: GlobalSizes.orderView.height,
    borderRadius: GlobalSizes.orderView.radius,
    borderColor: GlobalColors.primaryButton.dark,
    borderWidth: GlobalSizes.primaryButton.borderWidth,
    marginBottom: 8,
    flexDirection: "row",
  },
  orderTitle: {
    paddingLeft: 8,
    paddingTop: 4,
    fontWeight: "bold",
  },
  pressed: {
    opacity: GlobalSizes.primaryButton.pressedOpacity,
    backgroundColor: GlobalColors.primaryButton.pressed,
    borderRadius: GlobalSizes.primaryButton.radius,
  },
  image: {
    width: "30%",
    height: "100%",
  },
});
