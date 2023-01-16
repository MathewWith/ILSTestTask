import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [
    {
      key: 1,
      id: "address_1",
      pickUpPoint: "Кубинская улица, Дунайский проспект",
      dropPoint: "Улица Типанова, Будапештская улица",
      loadingPointbound: [59.84660399, 30.29496392],
      dropPointbound: [59.82934196, 30.42423701],
    },
    {
      key: 2,
      id: "address_2",
      pickUpPoint: "Бухарестская улица, 158",
      dropPoint: "Загребский бульвар, 45",
      loadingPointbound: [59.82934196, 30.42423701],
      dropPointbound: [59.82761295, 30.41705607],
    },
    {
      key: 3,
      id: "address_3",
      pickUpPoint: "Дунайский проспект, 34/16",
      dropPoint: "Кубинская улица, 76к3",
      loadingPointbound: [59.83567701, 30.38064206],
      dropPointbound: [59.84660399, 30.29496392],
    },
    {
      key: 4,
      id: "address_4",
      pickUpPoint: "Торковичское сельское поселение",
      dropPoint: "Загребский бульвар, 45",
      loadingPointbound: [58.84660399, 30.29496392],
      dropPointbound: [59.82761295, 30.41705607],
    },
    {
      key: 5,
      id: "address_5",
      pickUpPoint: "Дунайский проспект, 34/16",
      dropPoint: "Кубинская улица, 76к3",
      loadingPointbound: [59.85567701, 30.38064206],
      dropPointbound: [59.84660399, 30.29496392],
    },
  ],
  selected: null,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectRequest(state, action) {
      state.selected = { ...state.selected, ...action.payload };
    },
  },
});

export const { selectRequest } = selectSlice.actions;
export const selectReducer = selectSlice.reducer;
