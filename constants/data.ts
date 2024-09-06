export const DATA = [
  {
    title: 'Main',
    data: [{
      name: 'x',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps', '1', '2', '3', '4']
    }],
  },
  {
    title: 'Main dishes',
    data: [{
      name: 'x',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps', '1', '2', '3', '4']
    }],
  },
];

export const PRODUCT_DATA: IProduct[] = [
  {
    id: "1",
    image: require('@/assets/images/lego.png'),
    name: 'Nimadir mahsulot',
    rating: 3,
    price: 45000,
    orders: 12121
  },
  {
    id: "2",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 2,
    price: 45000,
    orders: 5
  },
  {
    id: "3",
    image: require('@/assets/images/sumka.png'),
    name: 'Nimadir mahsulot',
    rating: 5,
    price: 45000,
    orders: 4443
  },
  {
    id: "4",
    image: require('@/assets/images/lego.png'),
    name: 'Nimadir mahsulot',
    rating: 3,
    price: 45000,
    orders: 501
  },
  {
    id: "5",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 4,
    price: 45000,
    orders: 110
  },
  {
    id: "6",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 4,
    price: 45000,
    orders: 110
  },
  {
    id: "7",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 4,
    price: 45000,
    orders: 110
  },
  {
    id: "8",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 4,
    price: 45000,
    orders: 110
  },
  {
    id: "9",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 4,
    price: 45000,
    orders: 110
  },
  {
    id: "10",
    image: require('@/assets/images/toy.png'),
    name: 'Nimadir mahsulot',
    rating: 4,
    price: 45000,
    orders: 110
  },
];

export interface IProduct {
  id: string,
  image: any,
  name: string,
  price: number,
  rating: number,
  orders: number
}

export const CATEGORY_DATA = [
  {
    title: 'Colors',
  },
  {
    title: 'Dishes',
  },
  {
    title: 'Home attributes',
  },
  {
    title: 'After building',
  },
  {
    title: 'Classic building',
  },
  {
    title: 'New Moons',
  },
  {
    title: 'Trash',
  },
];

export const DATA_WITH_ID_10 = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

export const images = [require('@/assets/images/lego.png'), require('@/assets/images/toy.png'), require('@/assets/images/sumka.png')];