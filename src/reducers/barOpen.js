const initialPos = false;

const barOpen = (state = initialPos, action) => {
  switch (action.type) {
    case "open":
      return !state;
    default:
      return state;
  }
};

export default barOpen;
