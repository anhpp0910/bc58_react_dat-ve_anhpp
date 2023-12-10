import { createSlice } from "@reduxjs/toolkit";
import seatArr from "./assets/data";

let initialState = {
  seatArr: seatArr,
  dsGheBanChon: [],
};

let bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    addToDsGheBanChon: (state, action) => {
      let index = state.dsGheBanChon.findIndex(
        (seat) => seat.soGhe === action.payload.soGhe
      );
      // Nếu ghế chưa được chọn thì add vào ds ghế bạn chọn
      if (index === -1) {
        state.dsGheBanChon = [...state.dsGheBanChon, action.payload];
        // Nếu ghế đang được chọn thì remove khỏi ds ghế bạn chọn
      } else state.dsGheBanChon.splice(index, 1);
    },
  },
});

export default bookingSlice.reducer;
export let { addToDsGheBanChon } = bookingSlice.actions;
