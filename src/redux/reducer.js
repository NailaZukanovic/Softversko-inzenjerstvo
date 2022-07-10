import { addToCartHelper, removeFromCartHelper } from "../utils/cart-utils";

const initialState = {
  nesto: "bla bla",
  products: [
    {
      kategorija: 'Hamburger',
      naziv: 'Hamburger',
      cena: 250,
      slika: 'slika-hamburger.jpg'
    },
    {
      kategorija: 'Hamburger',
      naziv: 'Hamburger Dupli',
      cena: 500,
      slika: 'slika-hamburger.jpg'
    },
    {
      kategorija: 'Sokovi',
      naziv: 'Coca Cola 0.25',
      cena: 100,
      slika: 'slika-coca-cola.png'
    },
    {
      kategorija: 'Sokovi',
      naziv: 'Coca Cola 0.33',
      cena: 140,
      slika: 'slika-coca-cola.png'
    },
    {
      kategorija: 'Ostalo',
      naziv: 'Pomfrit srednji',
      cena: 150,
      slika: 'slika-pomfrit.jpg'
    },
    {
      kategorija: 'Ostalo',
      naziv: 'Pomfrit veliki',
      cena: 180,
      slika: 'slika-pomfrit.jpg'
    },
  ],
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "DODAJ_U_KORPU":
      return {
        ...state,
        // cart: [...state.cart, action.payload]
        cart: addToCartHelper(state.cart, action.payload)
      };

    case "OBRISI_IZ_KORPE":
      return {
        ...state,
        cart: removeFromCartHelper(state.cart, action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
