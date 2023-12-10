import React, { memo } from "react";

function Header() {
  return (
    <header>
      <h3 className="text-white fw-bold">Mua vé xem phim</h3>
    </header>
  );
}

export default memo(Header);
