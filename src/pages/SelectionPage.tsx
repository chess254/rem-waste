import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import type { Tile } from '../types';

const API_URL = `${import.meta.env.VITE_API_URL}?postcode=NR32&area=Lowestoft`;


const SelectionPage: React.FC = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch tiles');
        }
        const data: Tile[] = await response.json();
        setTiles(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchTiles();
  }, []);

  if (loading) return <div className="text-center py-8">Loading tiles...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4">
        <ul className="flex flex-wrap justify-around text-gray-700">
          <li className="px-2 py-1">Postcode</li>
          <li className="px-2 py-1">Waste Type</li>
          <li className="px-2 py-1 font-bold text-green-600 border-b-2 border-green-600">Select Your Tile</li>
          <li className="px-2 py-1">Permit Check</li>
          <li className="px-2 py-1">Choose Date</li>
          <li className="px-2 py-1">Payment</li>
        </ul>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Choose Your Tile Size</h1>
        <p className="text-center text-gray-600 mb-6">Select the skip Tile that best suits your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiles.map((tile) => (
            <Card key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;