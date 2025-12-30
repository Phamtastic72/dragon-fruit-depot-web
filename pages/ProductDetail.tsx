
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { askDragonFruitAssistant } from '../services/geminiService';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [quantity, setQuantity] = useState(1);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  useEffect(() => {
    setActiveImage(product.mainImage);
  }, [product]);

  const handleAskAi = async () => {
    if (!aiQuestion.trim()) return;
    setIsAsking(true);
    const context = `Context: This is the ${product.name} dragon fruit variety. It is ${product.fleshColor} fleshed, ${product.pollination}, and has a Brix score of ${product.brix}. ${product.description}`;
    const answer = await askDragonFruitAssistant(`${context}\n\nQuestion: ${aiQuestion}`);
    setAiAnswer(answer || "");
    setIsAsking(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 pb-20">
      {/* Breadcrumbs */}
      <nav className="py-4 flex items-center gap-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap no-scrollbar">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-primary font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-4">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800">
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            {product.isBestSeller && (
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                Best Seller
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            <button 
              onClick={() => setActiveImage(product.mainImage)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === product.mainImage ? 'border-primary' : 'border-transparent opacity-70'}`}
            >
              <img src={product.mainImage} className="w-full h-full object-cover" />
            </button>
            {product.gallery.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary' : 'border-transparent opacity-70'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
            <button className="aspect-square rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">play_circle</span>
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <span className="material-symbols-outlined fill" style={{ fontSize: '18px' }}>star</span>
              <span className="material-symbols-outlined fill" style={{ fontSize: '18px' }}>star</span>
              <span className="material-symbols-outlined fill" style={{ fontSize: '18px' }}>star</span>
              <span className="material-symbols-outlined fill" style={{ fontSize: '18px' }}>star</span>
              <span className="material-symbols-outlined fill" style={{ fontSize: '18px' }}>star_half</span>
              <span className="text-slate-500 ml-1 text-xs font-medium">({product.reviewCount} Reviews)</span>
            </div>
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              {product.name} Cutting
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic">{product.scientificName}</p>
          </div>

          <div className="flex items-baseline gap-3 border-b border-slate-100 dark:border-slate-800 pb-6">
            <span className="text-primary text-4xl font-black tracking-tight">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-slate-400 text-lg line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Save {Math.round((1 - product.price/product.originalPrice)*100)}%</span>
              </>
            )}
            <span className="ml-auto text-green-600 dark:text-green-400 font-bold text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded">In Stock</span>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{product.description}</p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Pollination', val: product.pollination, icon: 'hive' },
              { label: 'Brix Score', val: product.brix, icon: 'water_drop' },
              { label: 'Growth', val: product.growth, icon: 'trending_up' },
              { label: 'Zone', val: product.hardiness, icon: 'thermostat' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{item.val}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <div className="flex gap-4">
              <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-lg h-12 w-32 bg-white dark:bg-slate-900">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input className="w-full text-center border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white font-bold p-0" type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-lg shadow-lg shadow-primary/30 h-12 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart
              </button>
            </div>
            <button className="w-full h-10 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Buy with PayPal
            </button>
          </div>
        </div>
      </div>

      {/* Tabs & AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
        <div className="lg:col-span-8">
          <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
            <button className="px-6 py-3 border-b-2 border-primary text-primary font-bold text-base">Description & Origin</button>
            <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-base">Growing Guide</button>
            <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-base">Taste Profile</button>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-10">
            <section>
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">history_edu</span> Origin & History
              </h3>
              <p>{product.origin}</p>
              <p>{product.description}</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">restaurant</span> Taste Profile
              </h3>
              <div className="bg-surface-light dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <p>{product.tasteProfile}</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                          <span>Sweetness</span>
                          <span className="text-primary">{product.brix} Brix</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                          <span>Acidity</span>
                          <span>Low-Mild</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-400 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex flex-col gap-3">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Flavor Notes</span>
                      <div className="flex flex-wrap gap-2">
                        {product.flavorNotes.map(note => (
                          <span key={note} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">{note}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Best Uses</span>
                      <div className="flex flex-wrap gap-2">
                        {product.bestUses.map(use => (
                          <span key={use} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md font-medium">{use}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* AI Assistant Block */}
          <div className="mt-20 p-8 rounded-2xl bg-[#221019] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dragon Fruit AI Assistant</h3>
                  <p className="text-slate-400 text-xs">Expert growing advice Powered by Gemini</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <textarea 
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Ask a question about growing this variety..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-primary focus:border-transparent"
                    rows={3}
                  />
                  <button 
                    onClick={handleAskAi}
                    disabled={isAsking}
                    className="absolute bottom-3 right-3 bg-primary hover:bg-primary-dark text-white font-bold py-1 px-4 rounded-lg text-sm transition-all disabled:opacity-50"
                  >
                    {isAsking ? 'Thinking...' : 'Ask AI'}
                  </button>
                </div>
                
                {aiAnswer && (
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl animate-in fade-in slide-in-from-top-4 duration-500">
                    <p className="text-sm leading-relaxed text-slate-200">{aiAnswer}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Specifications */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sticky top-24 shadow-sm">
            <h3 className="font-bold text-lg mb-5 pb-2 border-b border-slate-100 dark:border-slate-800">Quick Specs</h3>
            <div className="space-y-4">
              {[
                { k: 'Scientific', v: product.scientificName },
                { k: 'Flesh Color', v: product.fleshColor, color: 'text-primary' },
                { k: 'Sunlight', v: product.sunlight },
                { k: 'Watering', v: product.watering },
                { k: 'Pollination', v: product.pollination },
                { k: 'Zone', v: product.hardiness },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-slate-50 dark:border-slate-800 pb-2 last:border-0">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{spec.k}</span>
                  <span className={`font-bold ${spec.color || 'text-slate-900 dark:text-white'}`}>{spec.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <Link to="/blog" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm group">
                <span className="material-symbols-outlined text-primary">help</span>
                <p>Need help growing? <span className="text-primary font-bold group-hover:underline">Visit Care Guide</span></p>
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Review Section */}
      <section className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-16">
        <h2 className="text-3xl font-black mb-10">Customer Reviews</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-end gap-3 mb-4">
                <span className="text-5xl font-black">{product.rating}</span>
                <span className="text-slate-400 font-bold mb-1">/ 5</span>
              </div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill">star</span>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500 mb-6">Based on {product.reviewCount} reviews</p>
              <div className="space-y-3">
                {[
                  { star: 5, pct: 85 },
                  { star: 4, pct: 10 },
                  { star: 3, pct: 3 },
                  { star: 2, pct: 1 },
                  { star: 1, pct: 1 }
                ].map(item => (
                  <div key={item.star} className="flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="w-2">{item.star}</span>
                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.pct}%` }}></div>
                    </div>
                    <span className="w-8 text-right">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full py-3 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl transition-all hover:opacity-90">Write a Review</button>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {product.reviews.map(review => (
              <div key={review.id} className="pb-8 border-b border-slate-100 dark:border-slate-800 last:border-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
                      {review.userName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold">{review.userName}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500 font-bold text-[10px] uppercase tracking-wider">Verified Buyer</span>
                        <span className="size-1 bg-slate-300 rounded-full"></span>
                        <span className="text-slate-400 text-xs font-medium">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined fill text-sm">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{review.content}</p>
                {review.images && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((img, idx) => (
                      <img key={idx} src={img} className="size-20 rounded-lg object-cover border border-slate-100 dark:border-slate-800" />
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">thumb_up</span>
                    Helpful ({review.helpfulCount})
                  </button>
                  <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors underline">Report</button>
                </div>
              </div>
            ))}
            <button className="w-full py-4 text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors flex items-center justify-center gap-2">
              Load More Reviews
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
