
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-primary">eco</span>
            <h3 className="font-bold text-lg">Dragon Fruit Depot</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Your #1 source for rare and exotic dragon fruit cuttings. Grown with love in Southern California.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-slate-900 dark:text-white">Shop</h4>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Rooted Cuttings</a>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Unrooted Cuttings</a>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Grafted Plants</a>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Supplies</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-slate-900 dark:text-white">Support</h4>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Growing Guide</a>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Shipping Policy</a>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Refund Policy</a>
          <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-900 dark:text-white">Stay Updated</h4>
          <div className="flex gap-2">
            <input 
              className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-primary" 
              placeholder="Email address" 
              type="email" 
            />
            <button className="bg-primary text-white p-2 rounded-lg">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400">© 2024 Dragon Fruit Depot. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-slate-300 text-xl">credit_card</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
