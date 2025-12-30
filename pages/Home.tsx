
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full px-4 py-6 md:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center text-center px-4" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZRYAKq-inEegI2POcSB6wFEhkpa8z5b1Mg5jWVKIG-blsVjEbI68wjIjrFIGT-k5kRTKYksiP32akCXyqvF-dwbN3gIveo-pbG3atlqC49PnqtvkgcCGDHsgiUEkCDWo0_gS5rHtHlq3cxt1dWnkfRvb4j7ndwDbCfAID-aHSphOA2l0lX1ODuKYpPMe6ta46TkZf7r9OCffm2Du76NpDxJr0A634s-RWRd54orExIny5hzp-bTzG7kw5PdrtDRBhbHJ3-cCbZVE')" }}>
            <div className="relative z-10 max-w-3xl flex flex-col gap-6 items-center">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
                Grow Exotic Sweetness at Home
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl drop-shadow-md">
                Premium cuttings and expert advice for your backyard orchard. Start your tropical journey today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white text-base md:text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Shop Trees
                </Link>
                <Link to="/blog" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base md:text-lg font-bold py-3 px-8 rounded-lg shadow-lg transition-all">
                  Read Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="w-full py-16 bg-white dark:bg-surface-dark/50">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-3">Editor's Choice</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Varieties</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
              Our most sought-after varieties of the season. From rare collector's items to reliable backyard producers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={product.mainImage} alt={product.name} className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">BEST SELLER</div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-0.5 text-yellow-400 text-sm">
                      <span className="material-symbols-outlined fill" style={{ fontSize: '16px' }}>star</span>
                      <span className="font-medium text-slate-900 dark:text-white ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">{product.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cuttings</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 bg-background-light dark:bg-background-dark border-y border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4 p-4">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="text-xl font-bold">Fast & Safe Shipping</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">We carefully package every cutting to ensure it arrives healthy and ready to root.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-4">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold">Quality Guaranteed</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">All cuttings come from mature, fruiting mother plants verified for variety accuracy.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-4">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="text-xl font-bold">Expert Support</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Not sure where to start? Our care guides and AI support team are here to help you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">From the Grower's Guide</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Expert tips on pollination, soil mix, and maximizing your harvest.</p>
            </div>
            <Link to="/blog" className="text-primary font-bold hover:underline flex items-center gap-1 group">
              Read the blog
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 aspect-video bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  <span>{post.category}</span>
                  <span className="text-slate-300">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to="/blog" className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white mt-auto hover:text-primary transition-colors">
                  Read Article <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-16 px-4">
        <div className="mx-auto max-w-5xl bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Growing Community</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
              Sign up for our newsletter to get weekly growing tips, variety spotlights, and <span className="font-bold text-primary">10% off your first order</span>.
            </p>
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input className="flex-1 rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark dark:text-white px-4 py-3 focus:ring-primary" placeholder="Your email address" type="email" />
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md">Sign Up</button>
            </div>
            <p className="text-xs text-slate-400">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
