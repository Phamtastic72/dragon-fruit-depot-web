
// Fix: Added missing Review type to the import from './types'
import { FleshColor, PollinationType, Product, BlogPost, Review } from './types';

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'Jane Doe',
    rating: 5,
    date: '2 days ago',
    content: "The cutting arrived in perfect condition! It was well packaged and even had some small roots starting. I planted it immediately and it's already showing new growth after just 2 weeks. Highly recommend this variety for beginners.",
    isVerified: true,
    helpfulCount: 12,
    images: ['https://picsum.photos/200/200?random=1']
  },
  {
    id: 'r2',
    userName: 'Michael Smith',
    rating: 4.5,
    date: '1 week ago',
    content: "Very healthy thick cutting. Took a bit longer to ship than expected but worth the wait. The variety is definitely a fast grower once established.",
    isVerified: true,
    helpfulCount: 4
  },
  {
    id: 'r3',
    userName: 'Sarah M.',
    rating: 5,
    date: '2 months ago',
    content: "The fruit is absolutely stunning. Neon pink inside and tastes like a grape crossed with a watermelon. Worth every penny.",
    isVerified: true,
    helpfulCount: 24,
    images: ['https://picsum.photos/200/200?random=2']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'sugar-dragon',
    name: 'Sugar Dragon (S8)',
    scientificName: 'Hylocereus polyrhizus hybrid',
    price: 18.00,
    fleshColor: FleshColor.PURPLE,
    skinColor: 'Dark Magenta',
    pollination: PollinationType.SELF_STERILE,
    brix: '19-22%',
    growth: 'Very Fast',
    fruitSize: 'Small-Medium (0.5-1lb)',
    hardiness: 'Good (30°F)',
    sunlight: 'Full Sun (6+ hrs)',
    watering: 'Moderate / Dry',
    description: "Known for its incredibly sweet, berry-like flavor, Sugar Dragon is a must-have for any collector. This variety produces medium to large fruit with stunning purple flesh and a high Brix score.",
    origin: "Sugar Dragon, often referred to as S8, is a hybrid variety likely related to Hylocereus guatemalensis. It originated from Paul Thomson's pioneering breeding program in California.",
    tasteProfile: "Considered by many connoisseurs as the best tasting dragon fruit available. Produces smaller, egg-sized fruits packed with an incredibly sweet, berry-like flavor that rivals any candy.",
    flavorNotes: ['Berry', 'Lychee', 'Sweet'],
    bestUses: ['Fresh eating', 'Smoothies', 'Garnishes'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF60hGtOMyw6ApDzAfEj_ySJvHWSvPCav1JzlQC7kVA7VfbKopgE8xvaDJ0LFvD0dFgQ4AUiNTaB3hdkAXTKJG7PPA4pJpuFnk5Tf-MgENRUVsebQE0Z-PK4ES5epbP_dxrFtdRa4yR9QZcx3tTbizxk-h_4JkmTxXX8Q3QlSNX_kni5vERFHsfkL4bbHt42zfEN8ul8U-BlTx0TNWW3zGtc7anFGFiEYxki37pvKXul1-YIsnMm1a3KvGI-KSebWo_xqP0BFQkYs',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwjV-CqSvYtkddV38xjPd5UxmZ0KtDVJ3xtUCHBwVFATrFhC8fiicmBmXc8x-ix5hN-YDU4p3IDF7W04uFGByztRNyBR-X0N-sRziOaPsuLyvOGuidTPyvgRkTIx4zCaktef3NupheTw-a7pEYv4PcM54ilfnuLX4HeVoRYvNl7wNJ0iyR2Uul4a-CJTNTVC71BDcYc8NedQFduls_hS76b1wkO9fJje25j5o-eD0cPeNTH0E7i4bq45c9AuzIJ1MEACpZ_EGoVao',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqblHgnB3CPMvMMcKsRQilE2KIwZ757fbf7fAw2sBnMp0wlfHRLWaz_fCvpRfUEaEfkzha4lWbES5U5103qAijU6RBaEtC4D73mgm0ux4a5IXM3KQlHbja5d2Y9PAz_ckjKiMmjUbo0rxmWFXHSiy7HVGUoskEXjytLwPg2naXApIiIoHQ5vmzPCgEXoWRFQHVdKYz8xPsUpXuMpQFstKsrgh4HAK-5cMHCq98-TSGJbsinQoxbnKEiFY1--FztT8xQ05vXemkbq4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfsJYRkwa6cDQTLVIviXQ1fW_81WqtYo39Rfw_nYUBL7qT-iX6rzBOCBSh7eMS5fKnFpTiRA6jQH27Aa3c0zIF7KZjA2guwZziOnQcqiKKPla5ztOe_EnE2GVfMsm--W19cQYraY294sCz6rhyDjgEO0yqCstC3R0bsrkAejr99zTTLwQTe_LEXkoTesHXelK5VGKRsQ46ekBIG389hvVx-DH_DPdbEvjGL-UrggRYUlvLRaaTGxQiOZ3jSBdH1_3waf2H1jXqH6c'
    ],
    reviews: MOCK_REVIEWS,
    rating: 4.8,
    reviewCount: 42,
    isBestSeller: true
  },
  {
    id: 'cosmic-charlie',
    name: 'Cosmic Charlie',
    scientificName: "Hylocereus undatus 'Cosmic Charlie'",
    price: 24.00,
    originalPrice: 32.00,
    fleshColor: FleshColor.PURPLE,
    skinColor: 'Vibrant Pink',
    pollination: PollinationType.SELF_FERTILE,
    brix: '18+',
    growth: 'Fast',
    fruitSize: 'Medium-Large',
    hardiness: 'Zone 9b',
    sunlight: 'Full Sun',
    watering: 'Moderate',
    description: "Stunning purple flesh with a grape-like flavor. High production and vigorous growth.",
    origin: "Hybrid descended from Hylocereus undatus.",
    tasteProfile: "Visually stunning but also incredibly sweet. Texture is firm yet juicy.",
    flavorNotes: ['Grape', 'Kiwi', 'Melon'],
    bestUses: ['Fresh Eating', 'Smoothies'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXqt7IW1m4YHqZdM3ykJeh6vzVOiahV7_7uHoklQY4haP6T8rz9GZJugR5XRuwKRnGa01wX9H0940JJ0FFj4TsprgrKrxW-HPalOkKSEkH70NJKkvPkoaTAVBeFOdeHSyIOGPVE5hQZ03k2shPpBv-DuyzRNcTHOCUXGvObu1fyNgUeA4u5ZFo1CQd2-5yfS3LNklXy1WOYzB7YIq9VyC0SJ_W5luQAMpzYuy9nUCVciujIm5Qc98M8OHOYO1laC5aoBKJktoJ8M',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBH7AURBsgyJ05_NZxxppIbsWQoetT6pbdM3FvWwoPAru05CrdmcVFnbVu_M49fQfSncVgMUrwUncH4TdNdONzF8GOoyHDC4bi-EWKVgZXNiaf2XMhP0skRM7a8Bu20dmEo9xHmzzdvZXVwtVpqWlzqsSmXnZpyJ0AZiWzGnQQaZOfj5R5thh8Zc77mHngqnS8AnvHcTzq7VN7BCy7ZC7ofpgNSfgOsAzRrys_cHA4dG_ycWRi5-D3oJW0BG7bpj33GX77RMfVBqco',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqijoYHTDPBME78KwmXYtTq5a4sprh3GNemES15GAvP1EXpOW4o_yBE03e6rLoBEzo3o6UnSS7YryXrR1CTJVChxT3FGukbwPSxQJUuwxn5rpGEl6rzrVR_WoIZZMnwVzCDMDfpNkA3ZTpMP2Ve5_FRYQt-nxF5gy-vvuWLNGNxexTEzgIgiWOdrBlP-v4Z6feIWoN3hV0u3EJ_lkFGtn0d9_vyWn5hjt-HEzBlcutIcPsDVF184eeVL87u9W5q7JV9ufTmCQ-7Ag'
    ],
    reviews: MOCK_REVIEWS,
    rating: 4.8,
    reviewCount: 142,
    isBestSeller: true,
    isSale: true
  },
  {
    id: 'physical-graffiti',
    name: 'Physical Graffiti',
    scientificName: 'Hylocereus polyrhizus x H. undatus',
    price: 18.00,
    fleshColor: FleshColor.PURPLE,
    skinColor: 'Pinkish-Red',
    pollination: PollinationType.SELF_STERILE,
    brix: '18',
    growth: 'Fast',
    fruitSize: '0.75 - 1.5 lbs',
    hardiness: 'Zones 9b-11',
    sunlight: 'Full Sun to Partial Shade',
    watering: 'Moderate',
    description: "Famous for its vibrant purple-red flesh and impressive sweetness.",
    origin: "Masterful hybrid created by Paul Thomson, a pioneer in dragon fruit cultivation.",
    tasteProfile: "The flesh is a brilliant purple-red that looks almost neon. Smooth and firm.",
    flavorNotes: ['Grape', 'Lychee', 'Berry'],
    bestUses: ['Fresh Eating', 'Smoothies', 'Garnishes'],
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfRZAUpV8IW7RACJt7LCmpT5_-infSaOBBV8whUBjD4ySJgSEU3rkpVN22P7PmaRiv5vNbw9jbVkpK0qdI3soViNtwvJz1xFfLMEcyphLe9zbSXRziArxK-i4lFj5woETLB2xR5ZwysbqagtRa9oy0DHmLE7roO4YlRA-g2fJDinN4fPvQSitcDNCxJwEuikwFTqVzrO8pVIDtVTNmzAHtbYCy6YytKBZnsSPF_St8FCwMcPEWyZMH0Ni67RqpWfY97Ak8k2kDUyA',
    gallery: [],
    reviews: MOCK_REVIEWS,
    rating: 4.8,
    reviewCount: 85
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'pollination-guide',
    title: 'How to Hand-Pollinate Your Dragon Fruit Night Blooms',
    excerpt: 'Learn the essential techniques to ensure a bountiful harvest this season.',
    category: 'Pollination',
    date: 'October 24, 2023',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeAiGMwCddIEFiRVT91Yv6FUToWsOpfYui95XqSOAUIfeKCyaZbdn_fec2IDYygXQqXckXzBXqmNTcBqq84cS7XqhqwE9nqPc5SWos4IrYrdoFSr5TR38d5TBxGYbKpaksR-Eu8curckiSpzOFGLx2hbICZzGm1raTgb6PrD75EHLyQgTPDA6DVbTIe0tEdB1PZiJdsU3ZjDIxJgPuFwF4RSMpPGyxx5NuJG4yF6MbLrTDQtuMz7RzNQcR6o3rwvVH0is41CW_tlo'
  },
  {
    id: 'mistakes-guide',
    title: '5 Common Mistakes When Planting Pitaya Cuttings',
    excerpt: 'Starting from cuttings is the best way to get fruit fast, but rotting roots and sunburn are common pitfalls.',
    category: 'Guides',
    date: 'September 15, 2023',
    readTime: '4 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz0mXugaws5tzB9VU8SMvnAvJQGKcEBSeSIgUp2S2QxJhzzaCJfqewO5mP_8z3IP-gKBLNQ04jvw6_Yv-MZwAK-bcWMHJOR3BLpFLtnD4S3mIKIh2lX7D_fMfQA5LdTJJLyXlIqukaEyvI72KwxB50je6oosdsyZ_XMEC_VZGaD4wybEfFORXX-pxh-6ETGzlEd9cKefe6yETbjmksP83el3MvNxpqDs6XGUoWWocCf1ncVHKLN_aSC6-1QsQ6B0fjmkFtjxppJtk'
  },
  {
    id: 'pruning-techniques',
    title: 'The Art of Pruning: Shaping Your Dragon Fruit Trellis',
    excerpt: 'A well-structured trellis is key to a heavy harvest. Discover how to prune for maximum airflow and fruit production.',
    category: 'Maintenance',
    date: 'January 12, 2024',
    readTime: '6 min read',
    image: 'https://picsum.photos/800/450?random=10'
  },
  {
    id: 'soil-mix-recipe',
    title: 'The Ultimate Dragon Fruit Soil Mix for Fast Rooting',
    excerpt: 'Dragon fruit aren\'t your typical cactus. Learn the perfect ratio of drainage to organic matter they crave.',
    category: 'Guides',
    date: 'December 05, 2023',
    readTime: '4 min read',
    image: 'https://picsum.photos/800/450?random=11'
  },
  {
    id: 'winter-protection',
    title: 'Winterizing Your Pitaya: Protecting Against Frost',
    excerpt: 'Frost can be fatal to tropical cactus. Here is how to keep your plants warm when the temperature drops below 40°F.',
    category: 'Maintenance',
    date: 'November 20, 2023',
    readTime: '7 min read',
    image: 'https://picsum.photos/800/450?random=12'
  }
];
