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
      return { ...state, selected: { ...payload } };
    case "DEL":
      state.list = state.list.filter((list) => list.id !== payload);
      return { ...state };
    case "EDIT_USER":
      console.log("edit");
      state.list = state.list.map((ele) => {
        if (ele.maSV === payload.maSV) {
          return payload;
        }
        return ele;
      });
    default:
      return state;
  }
};
