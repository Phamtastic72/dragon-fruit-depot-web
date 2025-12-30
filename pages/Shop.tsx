
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { FleshColor } from '../types';

const Shop: React.FC = () => {
  const [selectedFleshColors, setSelectedFleshColors] = useState<FleshColor[]>([]);
  const [priceRange, setPriceRange] = useState<number>(150);
  const [showInStockOnly, setShowInStockOnly] = useState(true);

  const toggleFleshColor = (color: FleshColor) => {
    setSelectedFleshColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const colorMatch = selectedFleshColors.length === 0 || selectedFleshColors.includes(p.fleshColor);
    const priceMatch = p.price <= priceRange;
    return colorMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <nav className="flex gap-2 text-sm text-slate-500 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">Dragon Fruit Cuttings</span>
          </nav>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Shop Cuttings</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Showing {filteredProducts.length} varieties</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="pl-10 pr-4 py-2 bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-800 rounded-lg text-sm w-full focus:ring-primary" placeholder="Search varieties..." />
          </div>
          <select className="bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold py-2 pl-3 pr-8 focus:ring-primary">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Reviews</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">Flesh Color</h3>
            <div className="flex flex-col gap-3">
              {Object.values(FleshColor).map(color => (
                <label key={color} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedFleshColors.includes(color)}
                    onChange={() => toggleFleshColor(color)}
                    className="rounded border-slate-300 text-primary focus:ring-primary" 
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{color}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">Price Range</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm font-bold text-primary">
                <span>$0</span>
                <span>${priceRange}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="150" 
                step="5"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary" 
              />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
            <span className="font-bold">In Stock Only</span>
            <button 
              onClick={() => setShowInStockOnly(!showInStockOnly)}
              className={`w-12 h-6 rounded-full transition-colors relative ${showInStockOnly ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${showInStockOnly ? 'right-1' : 'left-1'}`}></div>
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={product.mainImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {product.isRare && <span className="absolute top-3 left-3 bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">RARE</span>}
                  {product.isSale && <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">SALE</span>}
                  <button className="absolute bottom-4 right-4 size-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </Link>
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs text-slate-500 font-medium italic">{product.scientificName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 my-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill" style={{ fontSize: '14px' }}>star</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">({product.reviewCount})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-3">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">${product.price.toFixed(2)}</span>
                      {product.originalPrice && <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      {product.fleshColor} Flesh
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
            <span className="text-slate-400 px-2">...</span>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">12</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
