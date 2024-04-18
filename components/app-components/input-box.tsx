import { textColors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export function InputBox({ handleSearch, customStyles }: { handleSearch: (input: string) => void, customStyles?: object }) {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return <View style={[styles.box, isFocused && styles.inputFocused, customStyles]}>
    <TextInput
      style={styles.input}
      placeholder="Mahsulot nomini kiriting..."
      value={input}
      onChangeText={setInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
    <Pressable
      onPress={() => handleSearch(input)}
      style={[styles.searchIcon, input.length > 0 && styles.searchIconFocused]}
    >
      <AntDesign name="search1" size={24} color={input.length > 0 ? textColors.pureWhite : textColors.navyBlack} />
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
    borderRadius: 15,
    paddingHorizontal: 15,
    overflow: 'hidden'
  },
  input: {
    flex: 1,
    // fontFamily: 'SpaceMono',
    fontSize: 16,
    fontWeight: '600'
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: textColors.halfGrey
  },
  searchIcon: {
    padding: 5
  },
  searchIconFocused: {
    padding: 5,
    backgroundColor: textColors.blueOcean,
    borderRadius: 10
  }
})
