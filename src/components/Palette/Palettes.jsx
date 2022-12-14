import React from "react";
import Palette from "./Palette";
import "./Palettes.css";

const Palettes = ({ palettes }) => {
  return (
    <div>
      <div className="grid">
        {palettes.map((palette) => (
          <Palette key={palette.id} palette={palette} />
        ))}
      </div>
    </div>
  );
};

export default Palettes;
