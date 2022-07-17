const initialView = true;

const listView = (state = initialView, action) => {
  switch (action.type) {
    case "rowCol":
      return !state;
    default:
      return state;
  }
};

export default listView;
