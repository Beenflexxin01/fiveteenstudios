import { useState } from "react";

function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`burger ${isOpen && " open"} `}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="burger_bar" />
        <div className="burger_bar bar" />
        <div className="burger_bar bar3" />
      </div>
    </>
  );
}

export default Burger;
