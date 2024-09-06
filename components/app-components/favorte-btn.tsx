import { FavoriteHeartSvg, FavoriteHeartWhiteSvg } from "@/assets/icons/favorite-heart";
import { textColors } from "@/constants/Colors";
import { IProduct } from "@/constants/data";
import { useFavorites } from "@/hooks/queries/storage.hooks";
// import { addFavoriteProduct, getFavoriteProducts, isFavoriteProduct, removeFavoriteProduct } from "@/utils/favorites.storage";
import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";
import { Pressable, Animated, StyleSheet, Text } from "react-native";

export const FavoriteHeartBtn = ({ product }: { product: IProduct }) => {
  const { addFavoriteProduct, removeFavoriteProduct, isFavoriteProduct, getFavoriteProducts } = useFavorites();
  
  const isFavorite = isFavoriteProduct(product.id);
  const fadeAnimation = useRef(new Animated.Value(1)).current; 

  const onHeartPressHandler = () => {
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    if (isFavorite) {
      removeFavoriteProduct(product.id);
    } else {
      addFavoriteProduct(product);
    }
  };

  return (
    <Pressable onPress={onHeartPressHandler} style={styles.favoriteHeartBox}>
      <LinearGradient
        colors={['#7210FF', '#9D59FF']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}
      >
        <Animated.View style={{ opacity: fadeAnimation }}>
          
          {isFavorite ? (
            <FavoriteHeartWhiteSvg width={18} height={18} />
          ) : (
            <FavoriteHeartSvg width={18} height={18} color={textColors.pureWhite} />
            )}

        
            
        </Animated.View>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  favoriteHeartBox: {
    position: 'absolute',
    top: 14,
    right: 12,
    height: 28,
    width: 28,
  },
});
