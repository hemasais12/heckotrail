import {View, Text, Pressable } from 'react-native';
import React from "react";

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <Pressable 
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
    </Pressable>
  );
}