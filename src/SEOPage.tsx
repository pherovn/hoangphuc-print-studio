import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar, Footer, QuoteModal, FloatingZalo, CTA } from './App';
import { useState, useMemo } from 'react';

// Reusable static dictionary map based on slug
const titles = {
  'in-pet-tphcm': 'In PET TPHCM - Xưởng In Chuyển Nhiệt HCM',
  'in-pet-chuyen-nhiet': 'In PET Chuyển Nhiệt Giá Rẻ HCM',
  'xuong-in-pet': 'Xưởng In PET Lớn Nhất TP.HCM, Đảm Bảo Tiến Độ',
  'in-pet-binh-tan': 'Xưởng In PET Bình Tân, Giá Gốc Không Qua Trung Gian',
  'in-pet-tan-phu': 'In PET Tân Phú Nhận In Số Lượng Ít',
  'in-pet-tan-binh': 'In PET Tân Bình, Giao Hàng Nhanh',
  'thiet-ke-file-in': 'Hỗ Trợ Thiết Kế File In PET Chuyên Nghiệp',
  'in-ao-thun-theo-yeu-cau': 'In Áo Thun Theo Yêu Cầu, In PET Bền Đẹp',
  'in-dong-phuc': 'In Đồng Phục Bằng Công Nghệ PET Chuyển Nhiệt'
};

const blogTitles = {
  'in-pet-la-gi': 'In PET là gì? Tất tần tật về công nghệ in PET chuyển nhiệt',
  'in-pet-chuyen-nhiet-hoat-dong-nhu-the-nao': 'In PET chuyển nhiệt hoạt động như thế nào?',
  'in-pet-va-dtf-khac-nhau-gi': 'In PET và DTF khác nhau gì?',
  'cach-chuan-bi-file-in-pet': 'Cách chuẩn bị file in PET chuẩn xác nhất',
  'nhiet-do-ep-pet-tieu-chuan': 'Nhiệt độ ép PET tiêu chuẩn là bao nhiêu?',
  'cac-loi-thuong-gap-khi-ep-pet': 'Các lỗi thường gặp khi ép PET và cách khắc phục',
  'in-pet-co-ben-khong': 'In PET có bền không? Cách bảo quản hình in lâu dài',
  'pet-phu-hop-voi-loai-vai-nao': 'PET phù hợp với loại vải nào?',
  'cach-chon-xuong-in-pet-uy-tin': 'Kinh nghiệm chọn xưởng in PET uy tín tại TPHCM',
  'bao-gia-in-pet-theo-so-luong': 'Bảng báo giá in PET chuyển nhiệt theo số lượng'
};

export default function SEOPage({ isBlog = false }: { isBlog?: boolean }) {
  const { slug } = useParams();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const titleMap = isBlog ? blogTitles : titles;
  const currentTitle = titleMap[slug as keyof typeof titleMap] || (isBlog ? 'Tin Tức In PET' : 'Dịch Vụ In PET TP.HCM');

  const contentParagraphs = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => (
      `Chúng tôi tại In PET Hoàng Phúc luôn đem lại chất lượng cao nhất cho dịch vụ "${currentTitle.toLowerCase()}". 
      Được sản xuất trên dây chuyền máy in PET ORIC 4-6 đầu phun Epson I3200 thế hệ mới tốc độ trên 25m/h. 
      Công nghệ in màng chuyển nhiệt giúp hình in bám chắc lên vải, không bị nứt nẻ và đảm bảo chuẩn màu hệ CMYK. 
      In PET thích hợp cho mọi loại vải từ cotton, thun lạnh đến vải Kaki hay Denim. Khách hàng, đặc biệt là các hãng thời trang, 
      local brand, xưởng may và các shop quần áo đều có thể hưởng lợi từ dịch vụ ${slug?.replace(/-/g, ' ')} giá gốc tại Hoàng Phúc.`
    ));
  }, [currentTitle, slug]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-cyan-200 selection:text-cyan-900 flex flex-col">
      <Helmet>
        <title>{currentTitle} | In PET Hoàng Phúc</title>
        <meta name="description" content={`Tìm hiểu về ${currentTitle}. Xưởng in PET Hoàng Phúc tại Bình Tân TPHCM. Máy in 4-6 đầu I3200, chất lượng cao.`} />
        <meta name="keywords" content={slug?.replace(/-/g, ', ')} />
      </Helmet>

      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main className="flex-grow pt-32 pb-20 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-zinc-100 mt-12 relative z-10">
          
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
               In PET Hoàng Phúc tự hào là đơn vị cung cấp giải pháp in ấn chuyên nghiệp, phục vụ xưởng may, shop thời trang toàn quốc. Với công nghệ in PET DTF tân tiến, bài viết này sẽ giải đáp về <strong>{currentTitle}</strong>.
             </p>

             <img src="/banner.png" alt={currentTitle} className="w-full rounded-2xl my-10 object-cover shadow-lg border border-zinc-100 h-[400px]" loading="lazy"/>

             {contentParagraphs.map((paragraph, index) => (
                <div key={index}>
                  {index % 3 === 0 && index !== 0 && (
                     <h2 className="text-2xl font-display font-semibold text-zinc-900 mt-12 mb-6">Xưởng In PET Hoàng Phúc Uy Tín - {index}</h2>
                  )}
                  {index === 5 && (
                     <div className="bg-zinc-50 p-6 rounded-xl border-l-[4px] border-zinc-900 my-8 italic">
                       "Chất lượng bản in rõ nét tuyệt đối, độ phân giải sắc nét từ máy in ORIC giúp mọi chi tiết thiết kế đều hiển thị chân thực 100% khi ép lên vải."
                     </div>
                  )}
                  <p className="mb-6">{paragraph}</p>
                </div>
             ))}
          </div>

        </div>
      </main>

      <CTA onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <Footer />
      <FloatingZalo />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
