
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-pink-100 dark:border-pink-900 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm px-4 lg:px-10 py-3 shadow-sm transition-colors duration-200">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-white group">
          <div className="relative size-10 flex items-center justify-center">
            {/* Fruit base */}
            <span className="material-symbols-outlined text-primary text-3xl absolute bottom-0">nutrition</span>
            {/* Floating Crown */}
            <span className="material-symbols-outlined text-amber-500 text-lg absolute -top-1 left-1/2 -translate-x-1/2 fill animate-bounce duration-1000">crown</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Dragon Fruit King</h2>
        </Link>
        <div className="hidden lg:flex items-center gap-9">
          <NavLink 
            to="/shop" 
            className={({ isActive }) => 
              `text-sm font-medium leading-normal transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`
            }
          >
            Shop
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `text-sm font-medium leading-normal transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`
            }
          >
            Blog
          </NavLink>
          <a className="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">About Us</a>
          <a className="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Contact</a>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-4 lg:gap-8">
        <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-slate-200 dark:ring-slate-700 focus-within:ring-primary transition-shadow">
            <div className="text-slate-500 dark:text-slate-400 flex border-none bg-slate-50 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 rounded-lg rounded-l-none border-none bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-0 focus:ring-0 h-full placeholder:text-slate-400 px-4 pl-2 text-sm" 
              placeholder="Search varieties..." 
            />
          </div>
        </label>
        <div className="flex gap-2">
          <button 
            onClick={toggleDarkMode}
            className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
          >
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
