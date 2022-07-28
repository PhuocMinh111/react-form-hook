const DEFAULT = {
  list: [],
  selected: null
};
export const formReducer = (state = DEFAULT, { type, payload }) => {
  switch (type) {
    case "ADD":
      let data = [...state.list];

      data.push({ ...payload, id: Date.now() });
      return { ...state, list: [...data] };
    case "EDIT":
      const selected = state.list.find((item) => item.id === payload);
      return { ...state, selected: selected };
    case "DEL":
      state.list = state.list.filter((list) => list.id !== payload);
      return { ...state };
    case "CONFIRM_EDIT":
      console.log("editededited");
      state.list = state.list.map((ele) => {
        if (ele.maSV === payload.maSV) {
          return payload;
        }
        return ele;
      });
      state.selected = null;
      return { ...state };
    default:
      return state;
  }
};
