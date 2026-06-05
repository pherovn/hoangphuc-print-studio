import fs from 'fs';
import path from 'path';

// Define the locations, services and blogs based on the code maps.
const services = [
  'in-pet-dtf',
  'in-pet-ao-thun',
  'in-pet-local-brand',
  'in-pet-so-luong-it',
  'in-pet-so-luong-lon'
];

const knowledges = [
  'in-pet-la-gi',
  'in-pet-chi-tiet',
  'in-pet-va-in-lua-khac-nhau-the-nao',
  'in-pet-co-ben-khong',
  'pet-dtf-cho-local-brand',
  'cach-chuan-bi-file-in-pet',
  'bang-gia-in-pet-moi-nhat',
  'cac-loi-thuong-gap-khi-ep-pet',
  'nen-chon-pet-hay-decal',
  'in-pet-so-luong-it',
  'in-pet-so-luong-lon'
];

const locations = [
  'in-pet-quan-binh-tan',
  'in-pet-quan-tan-phu',
  'in-pet-quan-6',
  'in-pet-quan-tan-binh',
  'in-pet-binh-chanh',
  'in-pet-tphcm'
];

const baseUrl = 'https://inpet.hoangphuc.vn';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  
  <!-- Services -->
  ${services.map(slug => `<url><loc>${baseUrl}/dich-vu/${slug}</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`).join('\n  ')}
  
  <!-- Locations -->
  ${locations.map(slug => `<url><loc>${baseUrl}/${slug}</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`).join('\n  ')}
  
  <!-- Knowledge / Blogs -->
  <url><loc>${baseUrl}/kien-thuc</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  ${knowledges.map(slug => `<url><loc>${baseUrl}/kien-thuc/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join('\n  ')}
  
  <!-- Static Pages -->
  <url><loc>${baseUrl}/bang-gia</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>${baseUrl}/lien-he</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>`;

fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemap);
console.log('Sitemap successfully generated at public/sitemap.xml');
