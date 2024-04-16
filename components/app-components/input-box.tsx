import { textColors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export function InputBox({ handleSearch }) {
  const [input, setInput] = useState('');

  return <View style={styles.box}>
    <TextInput style={styles.input} placeholder="Mahsulot nomini kiriting..." value={input} onChangeText={setInput}/>
    <Pressable onPress={() => {
      handleSearch(input);
    }}>
      <AntDesign name="search1" size={24} color="black" />
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: textColors.offGrey,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    maxHeight: 50,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 25
  },
  input: {
    width: '80%',
    // fontFamily: 'SpaceMono',
    fontSize: 16,
    fontWeight: '600'
  }
})
