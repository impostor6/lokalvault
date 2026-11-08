/**
 * DATABASE BRAND FASHION LOKAL (LOKALPRIDE / FITS)
 * 
 * Nanti setiap kali lo punya link Shopee/Tokopedia produk fashion lokal baru,
 * tinggal kirim ke chat dan bakal otomatis di-update ke file ini.
 */

const categories = [
  { id: "all", label: "Semua Fits" },
  { id: "tshirt", label: "Kaos & T-Shirt" },
  { id: "outer", label: "Jaket & Outer" },
  { id: "bottoms", label: "Celana & Denim" },
  { id: "footwear", label: "Sepatu & Sneakers" },
  { id: "bags", label: "Tas & Aksesoris" }
];

const products = [
  {
    id: "sai-canda-workjacket",
    title: "SAI — Canda WorkJacket Denim Boxy Trucker Raw",
    category: "outer",
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224u-mkmostuu1la805",
    badge: "Raw Denim 13oz",
    rating: "4.9",
    sold: "4.5k terjual",
    desc: "100% Raw Denim 13oz kaku berkarakter dengan jahitan kontras putih. Cuttingan boxy cropped pas banget buat layering.",
    price: "Rp 135.000",
    originalPrice: "Rp 249.000",
    marketplace: "shopee",
    affiliateUrl: "https://s.shopee.co.id/7VHo9P38vC"
  },
  {
    id: "skystars-boxy-corduroy",
    title: "SKY STARS — Jaket Boxy Corduroy Casual Unisex",
    category: "outer",
    image: "https://down-id.img.susercontent.com/file/id-11134207-822wp-mpp3rvl604cu28",
    badge: "Corduroy Boxy",
    rating: "4.8",
    sold: "3.8k terjual",
    desc: "Tekstur korduroi timbul khas vintage 90-an. Potongan boxy santai, gampang dipadukan sama kaos polos atau loose denim.",
    price: "Rp 149.000",
    originalPrice: "Rp 239.000",
    marketplace: "shopee",
    affiliateUrl: "https://s.shopee.co.id/3B8ozMglQ9"
  },
  {
    id: "sontog-casual-shorts",
    title: "SontoG — Casual Shorts Celana Pendek Santai Pria",
    category: "bottoms",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lwgu5rp2w16l66",
    badge: "Daily Casual",
    rating: "4.8",
    sold: "8.2k terjual",
    desc: "Celana pendek santai bahan twill katun adem. Pinggang karet elastis dengan tali serut, nyaman buat nongkrong harian.",
    price: "Rp 59.000",
    originalPrice: "Rp 99.000",
    marketplace: "shopee",
    affiliateUrl: "https://s.shopee.co.id/906byX2KSe"
  },
  {
    id: "fits-1",
    title: "Heavyweight Boxy Tee 16s Cotton Combed",
    category: "tshirt",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
    badge: "Bahan Tebal 16s",
    rating: "4.9",
    sold: "23k terjual",
    desc: "Rib leher tebal anti-melar. Cutting boxy bikin ilusi pundak tegap, bahan adem walau tebal.",
    price: "Rp 89.000",
    originalPrice: "Rp 145.000",
    marketplace: "shopee",
    affiliateUrl: "https://shopee.co.id"
  },
  {
    id: "fits-2",
    title: "Workwear Canvas Coach Jacket Water-Repellent",
    category: "outer",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=80",
    badge: "Brand Bandung",
    rating: "4.9",
    sold: "8.1k terjual",
    desc: "Bahan canvas twill kokoh tahan angin & gerimis halus. Furing dalem adem, saku dalam rahasia aman.",
    price: "Rp 189.000",
    originalPrice: "Rp 279.000",
    marketplace: "shopee",
    affiliateUrl: "https://shopee.co.id"
  },
  {
    id: "fits-3",
    title: "Loose Fit Washed Denim 13.5oz Raw Vintage",
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80",
    badge: "Vintage Wash",
    rating: "4.8",
    sold: "12k terjual",
    desc: "Siluet lurus gombrong retro 90-an. Efek fading natural, kancing & zipper YKK anti-macet.",
    price: "Rp 215.000",
    originalPrice: "Rp 320.000",
    marketplace: "tokopedia",
    affiliateUrl: "https://tokopedia.com"
  },
  {
    id: "fits-4",
    title: "Retro Vulcanized Canvas Low-Top Sneakers",
    category: "footwear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=80",
    badge: "Local Pride",
    rating: "4.9",
    sold: "41k terjual",
    desc: "Insole empuk double-density, nggak bikin tumit sakit buat jalan seharian. Foxing tebal awet.",
    price: "Rp 159.000",
    originalPrice: "Rp 249.000",
    marketplace: "shopee",
    affiliateUrl: "https://shopee.co.id"
  },
  {
    id: "fits-5",
    title: "Minimalist Cordura Sling Bag Waterproof",
    category: "bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    badge: "Waterproof",
    rating: "4.9",
    sold: "15k terjual",
    desc: "Muat dompet, HP, charger, dan parfum. Resleting seal karet anti-rembes air hujan.",
    price: "Rp 79.000",
    originalPrice: "Rp 120.000",
    marketplace: "shopee",
    affiliateUrl: "https://shopee.co.id"
  },
  {
    id: "fits-6",
    title: "Cuban Collar Patterned Camp Shirt",
    category: "outer",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    badge: "Bahan Rayon Adem",
    rating: "4.8",
    sold: "9.5k terjual",
    desc: "Kemeja kerah terbuka ala retro santai. Bahan rayon jatuh adem cocok buat nongkrong atau pantai.",
    price: "Rp 115.000",
    originalPrice: "Rp 175.000",
    marketplace: "shopee",
    affiliateUrl: "https://shopee.co.id"
  }
];
