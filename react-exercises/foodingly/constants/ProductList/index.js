import { v4 } from 'uuid';

export const productOptions = [
  'All Categories',
  'Noodles',
  'Burger',
  'Chicken',
  'Ice cream',
  'Drinks',
];

export const products = [
  {
    id: v4(),
    name: 'Full Chicken Grill',
    image: '/item7.png',
    discount: 0,
    price: 45.0,
    category: 'Chicken',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },
  {
    id: v4(),
    name: 'Double Cheese Burger',
    image: '/item1.png',
    discount: 50,
    price: 59.0,
    category: 'Burger',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },

  {
    id: v4(),
    name: 'Chicken Cutlet',
    image: '/item5.png',
    discount: 0,
    price: 32.0,
    category: 'Chicken',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },

  {
    id: v4(),
    name: 'Noodles With Cheese',
    image: '/item4.png',
    discount: 30,
    price: 60.0,
    category: 'Noodles',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },

  {
    id: v4(),
    name: 'New Arrival Ice cream',
    image: '/item9.png',
    discount: 0,
    price: 17.0,
    category: 'Ice cream',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },

  {
    id: v4(),
    name: 'Glass of cola with ice',
    image: '/item10.png',
    discount: 0,
    price: 25.0,
    category: 'Drinks',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },

  {
    id: v4(),
    name: 'Seafood pizza',
    image: '/item11.png',
    discount: 0,
    price: 18.0,
    category: 'All Categories',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },

  {
    id: v4(),
    name: 'Homemade Sandwich',
    image: '/item12.png',
    discount: 60,
    price: 12.0,
    category: 'All Categories',
    rating: '4.8/5 Excellent',
    reviews: 1214,
  },
];
