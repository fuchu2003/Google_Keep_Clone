const initialMode = true;

const lightDark = (state = initialMode, action) => {
  switch (action.type) {
    case "lightDark":
      return !state;
    default:
      return state;
  }
};

export default lightDark;
