
let counter = 0;

const makeNewId = () => {
  counter++;
  return counter;
};

export const addToCartHelper = (cart, item) => {
  const newItem = {
    ...item,
    cart_item_id: makeNewId(),
    odabrane_opcije: []
  };
  const updatedCart = [...cart, newItem];
  return updatedCart;
};

export const removeFromCartHelper = (cart, id)=> {
  const updatedCart = cart.filter((item)=>{
    if (item.cart_item_id === id) {
      return false; // brise taj koji ima id za brisanje
    }
    return true; // svi ostali ostaju u cartu
  });
  return updatedCart;
};