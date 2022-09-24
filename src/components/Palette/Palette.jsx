import React from "react";
import { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../context/FavoriteContext";
import "./Palette.css";

const Palette = ({ palette }) => {
  const { id, name, colors, liked } = palette;
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(liked);

  const handleFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite);

    // Buscar si la paleta ya esta en favoritos
    const founIndex = favorites.findIndex((fav) => fav.id === id);

    // Agregar a favoritos
    if (founIndex === -1) {
      setFavorites([...favorites, palette]);
      return;
    }

    // Quitar de favoritos
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="palette-container">
      <div className="palette">
        <h3>{name}</h3>
        {colors.map((color) => {
          return (
            <div
              key={color}
              className="color"
              style={{ backgroundColor: color }}
            >
              <span>{color}</span>
            </div>
          );
        })}
      </div>
      <div className="fav">
        {isFavorite ? (
          <FaHeart className="fav heart" onClick={handleFavorite} />
        ) : (
          <FaRegHeart className="fav" onClick={handleFavorite} />
        )}
      </div>
    </div>
  );
};

export default Palette;
