import { StyleSheet, View, Text, Pressable } from 'react-native';

export const ProductCard = ({onSelectHandle}) => {
  return <Pressable style={styles.box} onPress={onSelectHandle}>
  </Pressable>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: 156,
    height: 242,
    backgroundColor: 'yellow',
    borderRadius: 10,
    margin: 10
  }
});