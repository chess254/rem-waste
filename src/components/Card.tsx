import React from "react";
import type { Tile } from "../types";

interface TileProps {
    tile: Tile;
}

const Card: React.FC<TileProps> = ({ tile }) => {
  const totalPrice = (tile.price_before_vat * (1 + tile.vat / 100)).toFixed(2);

  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row overflow-hidden mb-4">
      <img
        src="https://via.placeholder.com/150x150?text=tile+Image"
        alt={`${tile.size} Yard tile`}
        className="w-full md:w-1/3 h-40 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-green-600">{tile.size} Yard tile</h3>
          <p className="text-gray-700">Hire Period: {tile.hire_period_days} days</p>
          <p className="text-lg font-semibold text-gray-900">£{totalPrice}</p>
          <div className="mt-2 text-sm">
            <p className={tile.allowed_on_road ? "text-green-500" : "text-red-500"}>
              {tile.allowed_on_road ? "✅ Allowed on Road" : "❌ Not Allowed on Road"}
            </p>
            <p className={tile.allows_heavy_waste ? "text-green-500" : "text-red-500"}>
              {tile.allows_heavy_waste ? "✅ Allows Heavy Waste" : "❌ No Heavy Waste"}
            </p>
          </div>
        </div>
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          onClick={() => alert(`Selected ${tile.size} Yard tile`)}
        >
          Select This tile
        </button>
      </div>
    </div>
  );
};

export default Card;