import { addToCartHelper, cartPosleUspesneNarudzbeHelper, izmenaOpcijaProizvodaHelper, removeFromCartHelper } from "../utils/cart-utils";

const initialState = {
  odabraniRestoran: "Hamburgerko",
  products: [
    {
      restoran: 'Hamburgerko',
      kategorija: 'Hamburger',
      naziv: 'Hamburger',
      cena: 250,
      slika: 'slika-hamburger.jpg',
      opcije: ['Zelena salata', 'Luk', 'Kupus', 'Kečap', 'Urnebes']
    },
    {
      restoran: 'Hamburgerko',
      kategorija: 'Hamburger',
      naziv: 'Hamburger Dupli',
      cena: 500,
      slika: 'slika-hamburger.jpg',
      opcije: ['Zelena salata', 'Luk', 'Kupus', 'Kečap', 'Urnebes']
    },
    {
      restoran: 'Hamburgerko',
      kategorija: 'Sokovi',
      naziv: 'Coca Cola 0.25',
      cena: 100,
      slika: 'slika-coca-cola.png'
    },
    {
      restoran: 'Hamburgerko',
      kategorija: 'Sokovi',
      naziv: 'Coca Cola 0.33',
      cena: 140,
      slika: 'slika-coca-cola.png'
    },
    {
      restoran: 'Hamburgerko',
      kategorija: 'Ostalo',
      naziv: 'Pomfrit srednji',
      cena: 150,
      slika: 'slika-pomfrit.jpg',
      opcije: ['Kečap']
    },
    {
      restoran: 'Hamburgerko',
      kategorija: 'Ostalo',
      naziv: 'Pomfrit veliki',
      cena: 180,
      slika: 'slika-pomfrit.jpg',
      opcije: ['Kečap']
    },
    {
      restoran: 'Walter',
      kategorija: 'Roštilj',
      naziv: 'Ćevapi 10 komada',
      cena: 610,
      slika: 'slika-hamburger.jpg',
      opcije: ['Kečap', 'Luk', 'Majonez']
    },
  ],
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ODABRAN_RESTORAN":
      return {
        ...state,
        odabraniRestoran: action.payload
      };

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

    case 'ODABRANA_OPCIJA_PROIZVODA':
      return {
        ...state,
        cart: izmenaOpcijaProizvodaHelper(state.cart, action.payload.cart_item_id, action.payload.opcija, action.payload.checked) // TODO
      };

    case 'POSLE_USPESNE_NARUDZBE':
      return {
        ...state,
        cart: cartPosleUspesneNarudzbeHelper(action.payload, state.cart)
      };

    default:
      return state;
  }
};

export default reducer;
