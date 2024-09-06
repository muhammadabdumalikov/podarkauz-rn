import { IProduct } from "@/constants/data";
import { useMMKVObject } from 'react-native-mmkv';

interface FavoritesMap {
  [key: string]: IProduct;
}

export function useFavorites() {
  const [favorites, setFavorites] = useMMKVObject<FavoritesMap>('favorites');

  // Initialize favorites to an empty object if not already set
  const initializeFavorites = () => {
    return favorites || {};
  };

  // Add product to favorites
  const addFavoriteProduct = (product: IProduct) => {
    const updatedFavorites = { ...initializeFavorites(), [product.id]: product };
    setFavorites(updatedFavorites);
  };

  // Remove product from favorites
  const removeFavoriteProduct = (productId: string) => {
    const updatedFavorites = { ...initializeFavorites() };
    delete updatedFavorites[productId];
    setFavorites(updatedFavorites);
  };

  // Check if product is in favorites
  const isFavoriteProduct = (productId: string) => {
    const initializedFavorites = initializeFavorites();
    return productId in initializedFavorites;
  };

  // Get all favorite products
  const getFavoriteProducts = (): IProduct[] => {
    return Object.values(initializeFavorites());
  };

  return {
    favorites,
    addFavoriteProduct,
    removeFavoriteProduct,
    isFavoriteProduct,
    getFavoriteProducts
  };
}
