import { addToCartHelper, cartMinusHelper, cartPlusHelper, cartPosleUspesneNarudzbeHelper, editCartHelper, izmenaOpcijaProizvodaHelper, removeFromCartHelper } from "../utils/cart-utils";
// import { _products_example } from "../utils/proizvodi-example-data";


const initialState = {
  adminPanelOpened: false,
  adminRoute: null,
  adminLoggedRestoran: null,
  modalContent: null,
  odabraniRestoran: null,
  products: [],
  cart: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "PROIZVODI_FETCEHD":
      return {
        ...state,
        products: action.payload
      };

    case "ODABRAN_RESTORAN":
      return {
        ...state,
        odabraniRestoran: action.payload
      };

    case "DODAJ_U_KORPU_MODAL":
      return {
        ...state,
        modalContent: action.payload.modalContent
      };

    case "DODAJ_U_KORPU":
      return {
        ...state,
        cart: addToCartHelper(state.cart, action.payload),
        modalContent: null
      };

    case "IZMENI_IZ_KORPE_MODAL":
      return {
        ...state,
        modalContent: action.payload.modalContent
      };

    case "IZMENI_IZ_KORPE":
      return {
        ...state,
        cart: editCartHelper(state.cart, action.payload),
        modalContent: null
      };

    case "OBRISI_IZ_KORPE":
      return {
        ...state,
        cart: removeFromCartHelper(state.cart, action.payload)
      };

    case "KORPA_PLUS":
      return {
        ...state,
        cart: cartPlusHelper(state.cart, action.payload)
      };

    case "KORPA_MINUS":
      return {
        ...state,
        cart: cartMinusHelper(state.cart, action.payload)
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

    case 'MODAL_SHOW':
      return {
        ...state,
        modalContent: action.payload
      };

    case 'MODAL_CLOSE':
      return {
        ...state,
        modalContent: null
      };

    case 'ADMIN_PANEL_OPEN':
      return {
        ...state,
        adminPanelOpened: true
      };

    /*
  case 'ADMIN_PANEL_CLOSE':
    return {
      ...state,
      adminPanelOpened: false
    };
    */

    case 'ADMIN_LOGIN':
      return {
        ...state,
        adminLoggedRestoran: action.payload
      };

    case 'ADMIN_LOGOUT':
      return {
        ...state,
        adminPanelOpened: false,
        adminLoggedRestoran: null,
        adminRoute: null
      };

    case 'ADMIN_ROUTE_SET':
      return {
        ...state,
        adminRoute: action.payload
      };

    case 'ADMIN_DODAJ_PROIZVOD_MODAL':
      return {
        ...state,
        modalContent: action.payload.modalContent
      };

    default:
      return state;
  }
};

export default reducer;
