
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-10 overflow-hidden">
      {/* Background Falling Petals */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <span 
            key={i} 
            className="material-symbols-outlined absolute text-primary-light/20 animate-petal-fall"
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 10}s`,
              fontSize: `${12 + Math.random() * 24}px`,
              animationDuration: `${8 + Math.random() * 7}s`
            }}
          >
            local_florist
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white leading-[1.1]">
            The Dragon Fruit Diary
          </h1>
          <p className="text-lg text-slate-500 dark:text-gray-300 leading-relaxed">
            Expert growing tips, delicious recipes, and seasonal guides for your backyard pitaya paradise.
          </p>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
          <div className="relative flex items-center bg-white dark:bg-surface-dark rounded-xl shadow-sm ring-1 ring-slate-200 dark:ring-white/10 focus-within:ring-2 focus-within:ring-primary transition-all">
            <div className="pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-primary">search</span>
            </div>
            <input className="block w-full pl-4 pr-32 py-4 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 text-base" placeholder="Search guides..." type="text"/>
            <div className="absolute right-1.5">
              <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg text-sm shadow-md">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3 mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
        {['All Posts', 'Growing Guides', 'Pollination', 'Recipes', 'Harvest', 'Shop Updates'].map((tag, i) => (
          <button 
            key={tag}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:border-primary'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="relative z-10 mb-16 group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto overflow-hidden">
            <img src={BLOG_POSTS[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs font-bold uppercase text-primary mb-4 tracking-widest">{BLOG_POSTS[0].category}</div>
            <h2 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{BLOG_POSTS[0].title}</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-8">
              <span>{BLOG_POSTS[0].date}</span>
              <span>•</span>
              <span>{BLOG_POSTS[0].readTime}</span>
            </div>
            <button className="w-fit text-primary font-bold flex items-center gap-2 group/btn transition-all">
              Read Full Article 
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {[...BLOG_POSTS, ...BLOG_POSTS].map((post, i) => (
          <article key={i} className="group flex flex-col h-full bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img src={post.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-[10px] font-black uppercase text-primary mb-3 tracking-[0.2em]">{post.category}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400">{post.date}</span>
                <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/5 rounded uppercase">Read Now</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Community Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#221019] px-6 py-16 text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at top right, #f4258c 0%, transparent 40%), radial-gradient(circle at bottom left, #f4258c 0%, transparent 40%)" }}></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 animate-bounce">mail</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">Join the Growing Community</h2>
          <p className="text-slate-400 text-lg">
            Get expert pollination tips, harvest alerts, and exclusive discounts on rare cuttings delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 focus:ring-primary focus:border-transparent" placeholder="Enter your email" type="email" />
            <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">Subscribe</button>
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">We respect your privacy. No spam, ever.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
