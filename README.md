# LOKALVAULT ⚡ - Indonesian Streetwear & Apparel Archive

Website katalog kurasi brand fashion lokal Indonesia bergaya **Neo-Brutalism**. Didesain cepat, mobile-friendly, dan fokus pada konversi affiliate Shopee & Tokopedia.

## 📂 Struktur File

- `index.html`: Antarmuka utama bertema Neo-Brutalism (search bar, filter kategori, sorting harga, tombol checkout langsung).
- `products.js`: Database penyimpanan daftar produk kurasi dan link affiliate kamu.

## 🏷️ Kategori yang Tersedia

1. `all` - Semua Fits
2. `tshirt` - Kaos & T-Shirt (Boxy, Heavyweight 16s/24s)
3. `outer` - Jaket & Outer (Coach Jacket, Flannel, Camp Shirt)
4. `bottoms` - Celana & Denim (Washed Denim, Loose Fit, Cargo)
5. `footwear` - Sepatu & Sneakers (Vulcanized Canvas, Retro Low)
6. `bags` - Tas & Aksesoris (Slingbag Cordura, Totebag)

## 🚀 Cara Input Produk Baru

Kirim link Shopee/Tokopedia produk brand lokal kamu ke chat Antigravity, dan AI akan otomatis menambahkan produk ke `products.js` dengan format:

```javascript
{
  id: "fits-unik",
  title: "Nama Brand & Produk",
  category: "tshirt", // tshirt | outer | bottoms | footwear | bags
  image: "https://link-gambar.jpg",
  badge: "Bahan Tebal 16s",
  rating: "4.9",
  sold: "1.2k terjual",
  desc: "Catatan review bahan & cuttingan fit...",
  price: "Rp 89.000",
  originalPrice: "Rp 145.000",
  marketplace: "shopee", // shopee | tokopedia
  affiliateUrl: "https://shope.ee/link-affiliate-kamu"
}
```

## 🌐 Cara Publikasikan ke Internet (100% Gratis)

Upload folder ini ke [Netlify Drop](https://app.netlify.com/drop) atau [Vercel](https://vercel.com) untuk mendapatkan link online gratis (misal: `lokalvault.netlify.app`), lalu pasang di bio media sosialmu!
