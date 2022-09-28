import { createContext } from "react";

// Bloque que contiene informacion
export const ColorPalettesContext = createContext({
  colorPalettes: [],
  setColorPalettes: () => {},
});
