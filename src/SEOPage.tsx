import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar, Footer, QuoteModal, FloatingZalo, CTA } from './App';
import { useState, useMemo } from 'react';

// Reusable static dictionary map based on slug
const titles = {
  'in-pet-dtf': 'Dịch Vụ In PET DTF Chuyên Nghiệp HCM',
  'in-pet-ao-thun': 'In PET Áo Thun Chất Lượng Cao HCM',
  'in-pet-local-brand': 'Giải Pháp In PET Cho Local Brand',
  'in-pet-so-luong-it': 'Nhận In PET Số Lượng Ít Từ 1 Mét',
  'in-pet-so-luong-lon': 'In PET Số Lượng Lớn Cho Xưởng May',
};

const blogTitles = {
  'in-pet-la-gi': 'In PET là gì? Tất tần tật về công nghệ in PET chuyển nhiệt',
  'in-pet-chi-tiet': 'Hướng dẫn in PET từ A-Z',
  'in-pet-va-in-lua-khac-nhau-the-nao': 'In PET và in lụa khác nhau thế nào?',
  'in-pet-co-ben-khong': 'In PET chuyển nhiệt có bền không? Giặt có bị bong tróc?',
  'pet-dtf-cho-local-brand': 'Tại sao PET DTF lại là cứu cánh cho các Local Brand?',
  'cach-chuan-bi-file-in-pet': 'Cách chuẩn bị file thiết kế để in PET chuẩn nhất',
  'bang-gia-in-pet-moi-nhat': 'Cập nhật bảng giá in PET mới nhất năm nay',
  'cac-loi-thuong-gap-khi-ep-pet': 'Các lỗi thường gặp khi ép màng PET và hướng khắc phục',
  'nen-chon-pet-hay-decal': 'Nên chọn in PET chuyển nhiệt hay ép Decal?',
  'in-pet-so-luong-it': 'Giải pháp in PET số lượng ít tối ưu chi phí',
  'in-pet-so-luong-lon': 'Quy trình in PET số lượng lớn đạt chuẩn chất lượng',
};

export default function SEOPage({ isBlog = false, isPricing = false, isContact = false }: { isBlog?: boolean, isPricing?: boolean, isContact?: boolean }) {
  const { slug } = useParams();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  let currentTitle = 'Dịch Vụ In PET TP.HCM';
  let desc = 'Xưởng in PET Hoàng Phúc tại Bình Tân TPHCM. Máy in 4-6 đầu I3200, chất lượng cao.';
  let type = 'Service';

  if (isPricing) {
    currentTitle = 'Bảng Giá In PET DTF Mới Nhất | In PET Hoàng Phúc';
    desc = 'Cập nhật bảng giá in PET DTF mới nhất cho xưởng may và shop local brand. Giá sỉ tận gốc Bình Tân. Nhận số lượng ít từ 1m.';
    type = 'Pricing';
  } else if (isContact) {
    currentTitle = 'Liên Hệ Xưởng In PET Hoàng Phúc';
    desc = 'Thông tin liên hệ, địa chỉ xưởng in PET DTF Hoàng Phúc tại Bình Tân. Hotline tư vấn và đặt hàng in áo thun, đồng phục.';
    type = 'Contact';
  } else if (isBlog) {
    currentTitle = slug ? (blogTitles[slug as keyof typeof blogTitles] || 'Kiến Thức In PET') : 'Danh Sách Bài Viết Kiến Thức In PET DTF';
    type = 'BlogPosting';
  } else {
    currentTitle = titles[slug as keyof typeof titles] || (slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Dịch Vụ In PET DTF');
  }

  const contentParagraphs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => (
      `Chúng tôi tại In PET Hoàng Phúc cung cấp giải pháp "${currentTitle.toLowerCase()}". 
      Được sản xuất trên dây chuyền máy in PET ORIC 4-6 đầu phun Epson I3200 thế hệ mới tốc độ trên 25m/h. 
      Công nghệ in màng chuyển nhiệt giúp hình in bám chắc lên vải, không bị nứt nẻ và đảm bảo chuẩn màu hệ CMYK. 
      In PET thích hợp cho mọi loại vải từ cotton, thun lạnh đến vải Kaki hay Denim. Bạn hoàn toàn có thể yên tâm về chất lượng khi chọn dịch vụ ${slug?.replace(/-/g, ' ') || 'tại xưởng'} của chúng tôi.`
    ));
  }, [currentTitle, slug]);

  const currentUrl = `https://inpet.hoangphuc.vn/${isBlog ? 'kien-thuc/' : isPricing ? 'bang-gia' : isContact ? 'lien-he' : 'dich-vu/'}${slug || ''}`;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col">
      <Helmet>
        <title>{currentTitle} | Hoàng Phúc</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={currentTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content={isBlog ? 'article' : 'website'} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Structured Data */}
        {isBlog && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": currentTitle,
              "image": "https://inpet.hoangphuc.vn/banner.png",
              "author": {
                "@type": "Organization",
                "name": "Hoàng Phúc Print Studio"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Hoàng Phúc Print Studio",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://inpet.hoangphuc.vn/454.png"
                }
              },
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0]
            })}
          </script>
        )}
      </Helmet>

      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main className="flex-grow pt-32 pb-20 relative px-6 md:px-12 max-w-4xl mx-auto w-full">
        
        {isBlog && !slug ? (
           <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-zinc-100 relative mt-10">
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 mb-8 pb-4 border-b border-zinc-100">
                Kiến Thức In PET
              </h1>
              <div className="space-y-4">
                 {Object.entries(blogTitles).map(([key, val]) => (
                   <Link key={key} to={`/kien-thuc/${key}`} className="block p-6 border border-zinc-100 hover:border-zinc-300 rounded-xl hover:bg-zinc-50 transition-colors">
                     <h2 className="text-xl font-medium text-zinc-900 mb-2">{val}</h2>
                     <span className="text-zinc-500 text-sm font-light">Tìm hiểu thêm →</span>
                   </Link>
                 ))}
              </div>
           </div>
        ) : isContact ? (
           <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-zinc-100 relative mt-10 text-center">
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 mb-6">Liên Hệ Đặt Hàng</h1>
              <p className="text-lg text-zinc-600 mb-8 font-light">Chúng tôi sẵn sàng tư vấn giải pháp in ấn tốt nhất cho bạn.</p>
              
              <div className="flex flex-col gap-4 max-w-sm mx-auto mb-10">
                 <div className="p-6 bg-zinc-50 rounded-[2rem] border border-zinc-100 flex flex-col items-center">
                   <div className="w-full max-w-[200px] aspect-square bg-white border border-zinc-200 rounded-2xl mb-4 p-2 shadow-sm">
                     <img src="/qr-zl.png" className="w-full h-full object-contain mix-blend-multiply" alt="Zalo" />
                   </div>
                   <h3 className="text-lg font-bold">Hotline / Zalo</h3>
                   <a href="tel:0905305693" className="text-blue-600 font-medium text-xl mt-2">0905 305 693</a>
                 </div>
              </div>
              <p className="text-sm text-zinc-500 font-light">Xưởng sản xuất: 557/64 Hương Lộ 3, Phường Bình Hưng Hòa, Quận Bình Tân, TPHCM</p>
           </div>
        ) : isPricing ? (
           <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-zinc-100 relative mt-10">
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 mb-6 text-center">Bảng Giá In PET DTF</h1>
              <p className="text-center font-light text-zinc-500 mb-10">Bảng giá tham khảo, vui lòng liên hệ Zalo 0905305693 để nhận giá sỉ tốt nhất hôm nay.</p>
              
              <div className="overflow-x-auto border border-zinc-200 rounded-2xl">
                 <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-zinc-50 text-zinc-600 font-medium border-b border-zinc-200">
                      <tr>
                        <th className="py-4 px-6">Số lượng</th>
                        <th className="py-4 px-6">Giá mét (Khổ 58cm)</th>
                        <th className="py-4 px-6">Hỗ trợ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 text-zinc-700 font-light">
                      <tr><td className="py-4 px-6">1 - 10m</td><td className="py-4 px-6 font-medium text-sky-600">Liên hệ 0905 305 693</td><td className="py-4 px-6">Vẽ file, tách nền, xếp file miễn phí, freeship nội thành HCM với đơn trên 20m, khách quen giá cực rẻ. Giao hàng toàn quốc.</td></tr>
                      <tr><td className="py-4 px-6">11 - 50m</td><td className="py-4 px-6 font-medium text-sky-600">Liên hệ 0905 305 693</td><td className="py-4 px-6">Vẽ file, tách nền, xếp file miễn phí, freeship nội thành HCM với đơn trên 20m, khách quen giá cực rẻ. Giao hàng toàn quốc.</td></tr>
                      <tr><td className="py-4 px-6">51 - 100m</td><td className="py-4 px-6 font-medium text-sky-600">Liên hệ 0905 305 693</td><td className="py-4 px-6">Vẽ file, tách nền, xếp file miễn phí, freeship nội thành HCM với đơn trên 20m, khách quen giá cực rẻ. Giao hàng toàn quốc.</td></tr>
                      <tr><td className="py-4 px-6">{">"} 100m</td><td className="py-4 px-6 font-medium text-sky-600">Liên hệ 0905 305 693</td><td className="py-4 px-6">Vẽ file, tách nền, xếp file miễn phí, freeship nội thành HCM với đơn trên 20m, khách quen giá cực rẻ. Giao hàng toàn quốc.</td></tr>
                    </tbody>
                 </table>
              </div>
           </div>
        ) : (
           <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-zinc-100 relative mt-10">
              <div className="mb-6 flex gap-2 text-sm text-zinc-500">
                 <Link to="/" className="hover:text-zinc-900">Trang chủ</Link>
                 <span>/</span>
                 <span className="text-zinc-900 capitalize">{slug?.replace(/-/g, ' ')}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight text-zinc-900 mb-8 pb-8 border-b border-zinc-100">
                 {currentTitle}
              </h1>

              <div className="prose prose-zinc max-w-none text-zinc-600 font-light leading-loose text-lg">
                 <p className="font-medium text-zinc-800">
                   In PET Hoàng Phúc tự hào là đơn vị cung cấp giải pháp in ấn chuyên nghiệp, phục vụ xưởng may, shop thời trang toàn quốc. Trong bài viết chuyên sâu này, chúng ta sẽ tìm hiểu rõ hơn về <strong>{currentTitle}</strong>.
                 </p>

                 <img src="/banner.png" alt={currentTitle} className="w-full rounded-2xl my-10 object-cover shadow-lg border border-zinc-100 h-[300px] md:h-[400px]" loading="lazy"/>

                 {contentParagraphs.map((paragraph, index) => (
                    <div key={index}>
                      {index % 3 === 0 && index !== 0 && (
                         <h2 className="text-2xl font-display font-semibold text-zinc-900 mt-12 mb-6">Chi tiết về {currentTitle} ({index})</h2>
                      )}
                      {index === 2 && (
                         <div className="bg-zinc-50 p-6 rounded-xl border-l-[4px] border-zinc-900 my-8 italic">
                           "Máy in ORIC I3200 với 4-6 đầu phun giúp chất lượng bản in rõ nét tuyệt đối, màu CMYK tươi sáng và hạt keo TPU mịn giúp hình bám dính siêu chặt vào vải."
                         </div>
                      )}
                      <p className="mb-6">{paragraph}</p>
                    </div>
                 ))}
                 
                 <h3>Liên hệ với chúng tôi ngay</h3>
                 <p>Để nhận báo giá đặc biệt cho <strong>{currentTitle}</strong>, vui lòng kết nối với chúng tôi qua Zalo 0905.305.693 để được kỹ thuật hỗ trợ chuẩn màu hệ CMYK.</p>
              </div>
           </div>
        )}

      </main>

      <CTA onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <Footer />
      <FloatingZalo />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
