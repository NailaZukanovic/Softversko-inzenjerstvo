const initialState = {
  nesto: "bla bla",
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
