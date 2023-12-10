import React from "react";
import { useSelector } from "react-redux";

export default function TicketList() {
  // Lấy data về => useSelector
  let dsGheBanChon = useSelector((state) => state.bookingSlice.dsGheBanChon);

  // Render ds ghế bạn chọn
  const renderDsGheBanChon = () => {
    return dsGheBanChon.map((seat) => {
      return (
        <tbody key={seat.soGhe}>
          <tr>
            <td scope="row">{seat.soGhe}</td>
            <td>{seat.gia.toLocaleString()}đ</td>
          </tr>
        </tbody>
      );
    });
  };

  // Tính tổng tiền
  const tamTinh = dsGheBanChon.reduce((total, cur) => total + cur.gia, 0);

  return (
    <div className="col-4">
      <h3 className=" py-3 fw-bold">Danh sách ghế bạn chọn</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Số ghế</th>
            <th scope="col">Giá</th>
          </tr>
        </thead>
        {renderDsGheBanChon()}
      </table>
      <div className="row align-items-center">
        <div className="col-8">
          <h5 className="fw-bold mb-0">
            Tạm tính:{" "}
            <span className="tamTinh">{tamTinh.toLocaleString()}đ</span>
          </h5>
        </div>
        <div className="col-4">
          <button className="muaVe text-white">Mua vé</button>
        </div>
      </div>
    </div>
  );
}
