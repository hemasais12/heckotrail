import { StatusBar } from "expo-status-bar";
import { StyleSheet, Modal, Button, View, Text, FlatList, TouchableOpacity } from "react-native";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import NormalText from "../../controls/texts/NormalText";
import Input from "../../controls/inputs/Input";
import CustomPressable from "../../controls/commons/CustomPressable";
import { useState } from "react";
import { GlobalSizes } from "../../common/sizes";
import { GlobalColors } from "../../common/colors";

function EditVendorAddress(props) {
  const addressTypes = ["Home", "Work", "Hotel", "Other"];
  const [clickedId, setClickedId] = useState(0);

  const handleClick=(item,index)=>{
    setClickedId(index);
  }

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={(item) => handleClick(item,index)}
        key={index}
        style={index===clickedId?styles.addressTextActive:styles.addressText}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          {/* <NormalText>Model screen</NormalText> */}
          <Text style={styles.heading}>Enter Complete Address</Text>
          <View style={styles.lineStyle}/>
          <View style={styles.addressType}>
            <FlatList
              data={addressTypes}
              renderItem={renderItem}
              horizontal={true}
            />
          </View>

          <View style={styles.inputView}>
            <Input placeHolder="Building Name / office Name" />
          </View>
          <View style={styles.inputView}>
            <Input placeHolder="Floor" />
          </View>
          <View style={styles.inputView}>
            <Input placeHolder="Street" />
          </View>
          <View style={{flex:1,justifyContent:"flex-end"}}>
          <Button title="Close" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default EditVendorAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    transparent: true,
    justifyContent: "flex-end",
  },
  modal: {
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 4,
  },
  inputView: {
    height:GlobalSizes.vendorAddress.height,
    marginHorizontal: GlobalSizes.vendorAddress.marginHorizontal,
    marginBottom: GlobalSizes.vendorAddress.marginBottom,
  },
  addressType: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: GlobalSizes.vendorAddress.marginHorizontal,
    marginBottom: GlobalSizes.vendorAddress.marginBottom,
  },
  addressText: {
    borderWidth: 1,
    padding: GlobalSizes.vendorAddress.padding,
    paddingLeft: GlobalSizes.vendorAddress.paddingLeft,
    paddingRight: GlobalSizes.vendorAddress.paddingRight,
    borderRadius: 6,
    marginRight: GlobalSizes.vendorAddress.marginRight,
  },
  addressTextActive: {
    borderWidth: 1,
    padding: GlobalSizes.vendorAddress.padding,
    paddingLeft: GlobalSizes.vendorAddress.paddingLeft,
    paddingRight: GlobalSizes.vendorAddress.paddingRight,
    borderRadius: 6,
    marginRight: GlobalSizes.vendorAddress.marginRight,
    backgroundColor:GlobalColors.vendorAddress.backgroundColor,
  },
  heading:{
    paddingTop:GlobalSizes.vendorAddress.paddingTop,
    marginHorizontal:GlobalSizes.vendorAddress.marginHorizontal,
    fontSize:20,
    fontWeight:"bold",
  },
  lineStyle:{
    borderBottomColor:GlobalColors.vendorAddress.borderBottomColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom:GlobalSizes.vendorAddress.paddingBottom,
    marginBottom:15,
  }
});
