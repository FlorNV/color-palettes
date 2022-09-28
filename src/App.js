import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import PaletteDisplay from "./routes/palette/PaletteDisplay";
import { getColorPalettes } from "./service";
import { ColorPalettesContext } from "./context/ColorPalettesContext";

function App() {
  const [colorPalettes, setColorPalettes] = useState([]);

  // Obtengo la lista de paletas del service
  useEffect(() => {
    getColorPalettes()
      .then((data) => {
        setColorPalettes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Se provee del contexto a la aplicacion y paso la lista de paletas y su funcion set mediante el context
  return (
    <div className="App">
      <ColorPalettesContext.Provider
        value={{ colorPalettes, setColorPalettes }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palette/:id" element={<PaletteDisplay />} />
        </Routes>
      </ColorPalettesContext.Provider>
    </div>
  );
}

export default App;
