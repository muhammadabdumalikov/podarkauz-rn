// import { IProduct } from "@/constants/data";
// import { storage } from "@/mmkv-storage";

// function initializeFavorites() {
//   const favorites = JSON.parse(storage.getString('favorites') || '{}');
//   return new Map(Object.entries(favorites));
// }

// // Save favorites back to storage
// function saveFavorites(favoritesMap: Map<string, unknown>) {
//   storage.set('favorites', JSON.stringify(Object.fromEntries(favoritesMap)));
// }

// export function addFavoriteProduct(product: any) {
//   const favorites = initializeFavorites();
//   favorites.set(product.id, product);
//   saveFavorites(favorites);
// }

// export function removeFavoriteProduct(productId: string) {
//   const favorites = initializeFavorites();
//   favorites.delete(productId.toString());
//   saveFavorites(favorites);
// }

// export function isFavoriteProduct(productId: string) {
//   const favorites = initializeFavorites();
//   return favorites.has(productId.toString());
// }

// export function getFavoriteProducts(): IProduct[] {
//   const favorites = initializeFavorites();
//   return Array.from(favorites.values()) as IProduct[];
// }
