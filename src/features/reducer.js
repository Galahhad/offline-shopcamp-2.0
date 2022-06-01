import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: "MacBook",
      price: 100000,
      discount: 3,
      left: 31,
      image:
        "https://avatars.mds.yandex.net/i?id=31055635e727c0eb2e76d594394ad89a-7030344-images-thumbs&n=13",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Galaxy",
      price: 35999,
      discount: 0,
      left: 11,
      image: "https://spb.shop.megafon.ru/images/goods/1387/138752_p_8_1.jpg",
    },
    {
      id: 3,
      categoryId: 3,
      name: "Скутер",
      price: 65500,
      discount: 10,
      left: 0,
      image:
        "https://avatars.mds.yandex.net/i?id=84bfea40f5d901c34138046b1254587f-4935719-images-thumbs&n=13",
    },
    {
      id: 4,
      categoryId: 2,
      name: "Монитор Samsung",
      price: 12000,
      discount: 0,
      left: 7,
      image:
        "https://avatars.mds.yandex.net/i?id=053930d7cae0edebf29e609f3cf7bd7f-7084594-images-thumbs&n=13",
    },
    {
      id: 5,
      categoryId: 3,
      name: "Респераторная маска",
      price: 500,
      discount: 0,
      left: 24,
      image:
        "https://avatars.mds.yandex.net/i?id=d7c21bee35903405a3666d544c311f92-4412543-images-thumbs&n=13",
    },
    {
      id: 6,
      categoryId: 2,
      name: "Стиральная машина",
      price: 100000,
      discount: 25,
      left: 0,
      image:
        "https://avatars.mds.yandex.net/i?id=7b2f716c120f0d0afa188d2460e0ce7b-5686193-images-thumbs&n=13",
    },
    {
      id: 7,
      categoryId: 2,
      name: "Белый холодильник",
      price: 43100,
      discount: 50,
      left: 18,
      image:
        "https://avatars.mds.yandex.net/i?id=30498bd8792e17f53db1ebe8844ba51b-5685903-images-thumbs&n=13",
    },
    {
      id: 8,
      categoryId: 1,
      name: "Колонка",
      price: 3000,
      discount: 0,
      left: 1,
      image:
        "https://avatars.mds.yandex.net/i?id=1617bb5c73a5468d83eeea0ddcd1591d-5512684-images-thumbs&n=13",
    },
    {
      id: 9,
      categoryId: 1,
      name: "Наушники",
      price: 1500,
      discount: 15,
      left: 5,
      image:
        "https://avatars.mds.yandex.net/i?id=d6b06838463f4082265dd97de4426ada-5220059-images-thumbs&n=13",
    },
  ],
  categories: [
    {
      categoryId: 1,
      name: "Гаджеты и аксессуары",
    },
    {
      categoryId: 2,
      name: "Бытовая техника",
    },
    {
      categoryId: 3,
      name: "Прочее",
    },
  ],
  cartItems: [],
};

export const addToBag = createAction("add_to_bag");
export const deleteProduct = createAction("delete_product");
export const inc = createAction("inc");
export const dec = createAction("dec");

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addToBag, (state, action) => {
    state.products.map((item) => {
      if (item.id === action.payload.id) {
        return (item.left -= 1);
      }
      return item;
    });
    state.cartItems.push(action.payload.cartItem);
  });
  builder.addCase(deleteProduct, (state, action) => {
    state.products.map((item) => {
      if (item.id === action.payload.id) {
        return (item.left += action.payload.amount);
      }
      return item;
    });
    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.cartId);
  });
  builder.addCase(inc, (state, action) => {
    state.cartItems.map((item) => {
      if (item.id === action.payload.cart) {
        return (item.amount += 1);
      }
      return item;
    });
    state.products.map((item) => {
      if (item.id === action.payload.product) {
        return (item.left -= 1);
      }
      return item;
    });
  });
  builder.addCase(dec, (state, action) => {
    state.cartItems.map((item) => {
      if (item.id === action.payload.cart) {
        return (item.amount -= 1);
      }
      return item;
    });
    state.products.map((item) => {
      if (item.id === action.payload.product) {
        return (item.left += 1);
      }
      return item;
    });
  });
});
