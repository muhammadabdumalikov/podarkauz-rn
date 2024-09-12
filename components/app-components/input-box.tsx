import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

export function InputBox(
  props: TextInputProps & {
    handleSearch: (input: string) => void;
    hasPreIcon?: boolean;
    resultValue?: string;
  }
) {
  const [input, setInput] = useState('');

  return (
    <View style={[styles.box, props?.style]}>
      {props.hasPreIcon ? (
        <Pressable
          onPress={() => props.handleSearch(input)}
          style={[styles.searchIcon]}
        >
          <Feather
            name='search'
            size={moderateScale(24)}
            color={textColors.navyBlack}
          />
        </Pressable>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder='Qidiruv ...'
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
}

export function SearchInputBox(
  props: TextInputProps & {
    handleSearch: (input: string) => void;
    openBottomSheet?: () => void;
  }
) {
  const [input, setInput] = useState('');

  const handleFilterFocus = () => {    
    if (props?.openBottomSheet) {
      props.openBottomSheet();
    }
  };

  return (
    <View style={[styles.box, props?.style]}>
      <Pressable
        onPress={() => props.handleSearch(input)}
        style={[styles.searchIcon]}
      >
        <Feather
          name='search'
          size={moderateScale(24)}
          color={textColors.navyBlack}
        />
      </Pressable>

      <TextInput
        style={styles.input}
        placeholder={props?.placeholder ?? 'Qidiruv ...'}
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity onPress={handleFilterFocus} style={[styles.searchIcon]}>
        <MaterialCommunityIcons
          name='tune-variant'
          size={moderateScale(24)}
          color={textColors.navyBlack}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: textColors.grey2,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(56),
    borderRadius: 15,
    marginHorizontal: horizontalScale(16),
    paddingHorizontal: 15,
    overflow: 'hidden',
    marginBottom: verticalScale(24),
  },

  input: {
    flex: 1,
    fontFamily: 'UrbanistSemiBold',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  filterFocused: {
    borderColor: textColors.grey2,
    color: textColors.pureWhite,
  },
  searchIcon: {
    padding: 5,
    marginRight: 5,
  },
  searchIconFocused: {
    padding: 5,
    backgroundColor: textColors.purple,
    borderRadius: 10,
  },
});
