import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDsGheBanChon } from "./bookingSlice";

export default function Screen() {
  // Lấy data về => useSelector
  // Lấy ds ghế
  let seatList = useSelector((state) => state.bookingSlice.seatArr);

  // Lấy ds ghế theo hàng
  let seatRowList = seatList.map((rowList) => rowList.danhSachGhe);

  // Render ghế theo hàng
  const renderSeatRow = (seatRow) => {
    return seatRow.map((seat) => {
      let isBooked = seat.daDat === true ? "gheDaDat" : "";
      return (
        <button
          key={seat.soGhe}
          className={"btn text-white col-1 seat " + isBooked}
          onClick={(e) => {
            e.target.classList.toggle("gheBanChon");
            handleClickOnSeat(seat);
          }}
        >
          {seat.soGhe}
        </button>
      );
    });
  };

  // Render ghế theo cột + hàng
  const renderSeat = () => {
    return seatRowList.map((seatRow, index) => {
      return (
        <div key={index} className="seats row justify-content-center">
          {renderSeatRow(seatRow)}
        </div>
      );
    });
  };

  // Đẩy data lên redux => useDispatch
  // Handle khi click chọn ghế
  let dispatch = useDispatch();
  let handleClickOnSeat = (seat) => {
    dispatch(addToDsGheBanChon(seat));
  };

  return (
    <div className="col-8 screen">
      <p className="text-white manHinh p-5 fw-bold">MÀN HÌNH</p>
      <div className="seat_map">{renderSeat()}</div>
      <div className="seat_guide row my-5">
        <div className="col-4">
          <button className="btn text-white col-1 seat gheDaDat"></button>
          <span className="text-white ms-1">Ghế đã đặt</span>
        </div>
        <div className="col-4">
          <button className="btn text-white col-1 seat gheBanChon"></button>
          <span className="text-white ms-1">Ghế bạn chọn</span>
        </div>
        <div className="col-4">
          <button className="btn text-white col-1 seat"></button>
          <span className="text-white ms-1">Ghế chưa đặt</span>
        </div>
      </div>
    </div>
  );
}
