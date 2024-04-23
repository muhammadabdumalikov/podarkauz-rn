import { textColors } from "@/constants/Colors";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export function InputBox({ handleSearch, customStyles }: { handleSearch: (input: string) => void, customStyles?: object }) {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilterFocused, setFilterFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleFilterFocus = () => {
    setFilterFocused(!isFilterFocused);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return <View style={[styles.box, isFocused && styles.inputFocused, customStyles]}>
    <Pressable
      onPress={() => handleSearch(input)}
      style={[styles.searchIcon, input.length > 0 && styles.searchIconFocused]}
    >
      <Feather name="search" size={26} color={input.length > 0 ? textColors.pureWhite : textColors.navyBlack} />
    </Pressable>

    <TextInput
      style={styles.input}
      placeholder="Qidiruv ..."
      value={input}
      onChangeText={setInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />

    <Pressable
      onPress={handleFilterFocus}
      style={[styles.searchIcon, isFilterFocused && styles.searchIconFocused]}
    >
      <MaterialCommunityIcons name="tune-variant" size={26} color={isFilterFocused ? textColors.pureWhite : textColors.navyBlack} />
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
  filterFocused: {
    borderColor: textColors.halfGrey,
    color: textColors.pureWhite
  },
  searchIcon: {
    padding: 5,
    marginRight: 5
  },
  searchIconFocused: {
    padding: 5,
    backgroundColor: textColors.navyBlack,
    borderRadius: 10
  }
})
