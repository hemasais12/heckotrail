import {View, Text, TouchableOpacity} from 'react-native';
import React from "react";

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 150,
        alignItems: 'center',
        width: 160,
        height:50,
        paddingVertical: 10,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 20, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}