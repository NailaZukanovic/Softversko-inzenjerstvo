
let counter = 0;

const makeNewId = () => {
  counter++;
  return counter;
};

export const addToCartHelper = (cart, item) => {
  const newItem = {
    ...item,
    cart_item_id: makeNewId(),
    odabrane_opcije_obj: {}
  };
  const updatedCart = [...cart, newItem];
  return updatedCart;
};

export const removeFromCartHelper = (cart, id) => {
  const updatedCart = cart.filter((item) => {
    if (item.cart_item_id === id) {
      return false; // brise taj koji ima id za brisanje
    }
    return true; // svi ostali ostaju u cartu
  });
  return updatedCart;
};

export const izmenaOpcijaProizvodaHelper = (cart, cart_item_id, opcija, checked) => {
  const updatedCart = cart.map((item) => {
    if (item.cart_item_id === cart_item_id) {
      // ovaj menjamo
      const updatedItem = {
        ...item,
        odabrane_opcije_obj: {
          ...item.odabrane_opcije_obj,
          [opcija]: checked
        }
      };
      return updatedItem;
    }
    return item; // sve ostali ostaju neizmenjeni
  });

  return updatedCart;
};

export const cartPosleUspesneNarudzbeHelper = (odabraniRestoran, cart) => {
  const updatedCart = cart.filter((item) => {
    if (item.restoran === odabraniRestoran) {
      return false; // brisemo one koji su od restorana za kojeg smo obavili uspesnu narudzbu
    }
    return true; // stavke od ostalih restorana ostaju
  });
  return updatedCart;
};

export const pripremiCartItemsZaNaruudzbu = (odabraniRestoran, cartItems) => {
  // 1) filterovanje samo za jedan restoran
  // const pripremljenCartItems = [];
  const cartItemsZaRestoran = cartItems.filter((item) => {
    if (item.restoran === odabraniRestoran) {
      return true; // uzimamo samo one iteme koji su od odabranog restorana
    }
    return false; // svi ostali ne idu u narudzbu
  });
  // 2) prepakivanje order_items_obj u object_items obican array sa CSV (comma separated values, reci odvojene zarezima)
  const pripremljeniCartItems = cartItemsZaRestoran.map((item) => {
    let odabraneOpcijeNiz = [];
    Object.keys(item.odabrane_opcije_obj).forEach((key) => {
      if (item.odabrane_opcije_obj[key] === true) {
        odabraneOpcijeNiz.push(key);
      }
    });
    return {
      ...item,
      odabrane_opcije: odabraneOpcijeNiz
    }
  });
  return pripremljeniCartItems;
};
