const initialState = {
  nesto: "bla bla",
  products: [
    {
      kategorija: 'Hamburger',
      naziv: 'Hamburger',
      cena: 250,
      slika: ''
    },
    {
      kategorija: 'Hamburger',
      naziv: 'Hamburger Dupli',
      cena: 500,
      slika: ''
    },
    {
      kategorija: 'Sokovi',
      naziv: 'Coca Cola 0.25',
      cena: 100,
      slika: ''
    },
    {
      kategorija: 'Sokovi',
      naziv: 'Coca Cola 0.33',
      cena: 140,
      slika: ''
    },
    {
      kategorija: 'Ostalo',
      naziv: 'Pomfrit srednji',
      cena: 150,
      slika: ''
    },
    {
      kategorija: 'Ostalo',
      naziv: 'Pomfrit veliki',
      cena: 180,
      slika: ''
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEKA_AKCIJA":
      return state;

    default:
      return state;
  }
};

export default reducer;
