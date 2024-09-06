import { textColors } from "@/constants/Colors";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/metrics";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export function InputBox({ handleSearch, customStyles }: { handleSearch: (input: string) => void, customStyles?: object }) {
  const [input, setInput] = useState('');
  const [isFilterFocused, setFilterFocused] = useState(false);

  const handleFilterFocus = () => {
    setFilterFocused(!isFilterFocused);
  };

  return <View style={[styles.box, customStyles]}>
    <Pressable
      onPress={() => handleSearch(input)}
      style={[styles.searchIcon]}
    >
      <Feather name="search" size={moderateScale(24)} color={textColors.navyBlack} />
    </Pressable>

    <TextInput
      style={styles.input}
      placeholder="Qidiruv ..."
      value={input}
      onChangeText={setInput}
    />

    <Pressable
      onPress={handleFilterFocus}
      style={[styles.searchIcon, isFilterFocused && styles.searchIconFocused]}
    >
      <MaterialCommunityIcons name="tune-variant" size={moderateScale(24)} color={isFilterFocused ? textColors.pureWhite : textColors.navyBlack} />
    </Pressable>
  </View>;
}

export function InputBoxBtn({ customStyles }: { customStyles?: object }) {

  const handleFilterFocus = () => {
  };

  return <View style={[styles.box, customStyles]}>
    <Pressable
      onPress={() => handleFilterFocus()}
      style={[styles.searchIcon]}
    >
      <Feather name="search" size={moderateScale(24)} color={textColors.navyBlack} />
    </Pressable>

    <View
      style={styles.input}
      // placeholder="Qidiruv ..."
    />

    <Pressable
      onPress={handleFilterFocus}
      style={[styles.searchIcon]}
    >
      <MaterialCommunityIcons name="tune-variant" size={moderateScale(24)} color={textColors.navyBlack} />
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: textColors.grey2,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(56),
    borderRadius: 15,
    marginHorizontal: horizontalScale(16),
    paddingHorizontal: 15,
    overflow: 'hidden',
    marginBottom: verticalScale(24)
  },
  input: {
    flex: 1,
    fontFamily: 'UrbanistSemiBold',
    fontSize: moderateScale(16),
    fontWeight: '500'
  },
  filterFocused: {
    borderColor: textColors.grey2,
    color: textColors.pureWhite
  },
  searchIcon: {
    padding: 5,
    marginRight: 5
  },
  searchIconFocused: {
    padding: 5,
    backgroundColor: textColors.purple,
    borderRadius: 10
  }
})
