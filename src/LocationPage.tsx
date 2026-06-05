import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar, Footer, QuoteModal, FloatingZalo, CTA } from './App';
import { useState, useMemo } from 'react';
import { MapPin, ShieldCheck, Printer, Cog, Truck, PackageCheck, Lightbulb, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const locationData = {
  'in-pet-quan-binh-tan': {
    name: 'Quận Bình Tân',
    keyword: 'in pet quận bình tân',
    title: 'Xưởng In PET Quận Bình Tân | In Chuyển Nhiệt DTF Giá Rẻ, Giao Nhanh',
    desc: 'Xưởng in PET quận Bình Tân uy tín. Nhận in PET DTF, in áo thun số lượng ít đến lớn. Máy in 4-6 đầu phun I3200, cam kết không bong tróc, giá tận xưởng.',
    geoAdvantage: 'Tọa lạc tại khu vực năng động với các cụm công nghiệp phát triển như KCN Tân Tạo và gần Aeon Mall Bình Tân, xưởng in PET của chúng tôi rất thuận tiện cho quá trình vận chuyển và giao thương hàng hóa.',
  },
  'in-pet-quan-tan-phu': {
    name: 'Quận Tân Phú',
    keyword: 'in pet quận tân phú',
    title: 'In PET Quận Tân Phú | In Áo Thun Chuyển Nhiệt Nhanh Chóng, Sắc Nét',
    desc: 'Chuyên nhận in PET quận Tân Phú, xưởng in DTF chất lượng cao bám dính siêu tốt. Phục vụ shop thời trang, local brand tại Tân Phú.',
    geoAdvantage: 'Nằm ở vị trí kết nối thuận lợi gần trục đường Lũy Bán Bích sầm uất và khu vực Công viên văn hóa Đầm Sen, việc giao nhận hàng in PET DTF đến các xưởng may tại Tân Phú luôn được diễn ra nhanh chóng nhất.',
  },
  'in-pet-quan-6': {
    name: 'Quận 6',
    keyword: 'in pet quận 6',
    title: 'In PET Quận 6 | In Màng PET Chuyển Nhiệt Rẻ Đẹp HCM',
    desc: 'Xưởng gia công in PET trực tiếp phục vụ khu vực Quận 6. Màng in dễ ép, màu CMYK tươi sáng, không giới hạn màu sắc.',
    geoAdvantage: 'Quận 6 nổi tiếng với các khu chợ đầu mối giao thương nhộn nhịp. Chúng tôi tự hào cung cấp dịch vụ in màng PET lấy liền, phục vụ nhu cầu lớn của các shop quần áo và tiểu thương trên địa bàn.',
  },
  'in-pet-quan-tan-binh': {
    name: 'Quận Tân Bình',
    keyword: 'in pet quận tân bình',
    title: 'In PET Quận Tân Bình | Xưởng In Đồng Phục, Áo Thun Local Brand',
    desc: 'Dịch vụ in PET Tân Bình chuyên nghiệp cho xưởng may mặc. Giao hàng hỏa tốc khu vực Tân Bình, file in sắc nét 4-6 đầu phun.',
    geoAdvantage: 'Là trung tâm sản xuất với nhiều kho bãi, xưởng may và gần ngay Sân bay Quốc tế Tân Sơn Nhất, việc thiết kế file và in ấn tại khu vực Tân Bình giúp tiết kiệm tối đa thời gian vận hành cho doanh nghiệp may mặc.',
  },
  'in-pet-binh-chanh': {
    name: 'Huyện Bình Chánh',
    keyword: 'in pet bình chánh',
    title: 'In PET Bình Chánh | Xưởng In DTF Công Suất Lớn, Nhận Mọi Đơn Hàng',
    desc: 'Nhận in PET DTF giao tận nơi Bình Chánh. Giải pháp ép chuyển nhiệt lên mọi loại vải bền bỉ, nhận đơn từ 1 mét đến hàng ngàn mét.',
    geoAdvantage: 'Nằm tiếp giáp ngay trục đường huyết mạch Quốc lộ 1A, các chuyến xe vận chuyển màng PET cuộn lớn của chúng tôi có thể dễ dàng đi đến mọi nhà xưởng quy mô lớn tại khu vực Bình Chánh.',
  },
  'in-pet-tphcm': {
    name: 'TP.HCM',
    keyword: 'in pet tphcm',
    title: 'In PET TPHCM | Xưởng In PET Chuyển Nhiệt DTF Lớn Nhất Sài Gòn',
    desc: 'In PET TPHCM chuyên nghiệp với hệ thống máy ORIC I3200 cao cấp. Giao hàng toàn quốc, hỗ trợ thiết kế file, báo giá in PET TPHCM tận gốc.',
    geoAdvantage: 'Phục vụ thị trường TP.HCM năng động, In PET Hoàng Phúc đáp ứng mọi quy mô đơn hàng của thị trường thành phố lớn nhất nước, hỗ trợ thiết kế và giao hàng hỏa tốc cho các Local Brand và nhà xưởng.',
  }
};

export default function LocationPage() {
  const { slug } = useParams();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  // Cast safety
  const loc = locationData[slug as keyof typeof locationData] || {
    name: 'Khu vực của bạn',
    keyword: slug?.replace(/-/g, ' ') || 'in pet',
    title: 'Xưởng In PET Chuyển Nhiệt Uy Tín, Giá Rẻ',
    desc: 'Cung cấp dịch vụ in PET chất lượng cao, giao hàng tận nơi. Màu sắc rực rỡ, độ bền tuyệt đối.'
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-cyan-200 selection:text-cyan-900 flex flex-col">
      <Helmet>
        <title>{loc.title}</title>
        <meta name="description" content={loc.desc} />
        <meta name="keywords" content={`${loc.keyword}, in pet dtf ${loc.name.toLowerCase()}, xưởng in pet ${loc.name.toLowerCase()}`} />
        <meta property="og:title" content={loc.title} />
        <meta property="og:description" content={loc.desc} />
        <link rel="canonical" href={`https://inpet.hoangphuc.vn/${slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Xưởng In PET Hoàng Phúc - ${loc.name}`,
            "image": "https://inpet.hoangphuc.vn/banner.png",
            "telephone": "0905305693",
            "areaServed": loc.name,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "557/64 Hương Lộ 3, Bình Hưng Hòa",
              "addressLocality": "Bình Tân",
              "addressRegion": "Hồ Chí Minh",
              "addressCountry": "VN"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://inpet.hoangphuc.vn"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": loc.name,
                "item": `https://inpet.hoangphuc.vn/${slug}`
              }
            ]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `In PET tại ${loc.name} mất bao lâu?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Với hệ thống máy in công nghiệp tốc độ cao >25m/h, tại ${loc.name} chúng tôi hỗ trợ giao hỏa tốc trong ngày với các đơn hàng dưới 100m. Đơn sỉ lớn sẽ từ 1-3 ngày làm việc.`
                }
              },
              {
                "@type": "Question",
                "name": `Có hỗ trợ thiết kế file in PET cho khách ${loc.name} không?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hoàn toàn có! Đội ngũ thiết kế của Hoàng Phúc sẽ hỗ trợ khách hàng rà soát, tách nền, tạo viền trắng, và bình file chuẩn in CMYK, đảm bảo ép lên áo đẹp nhất."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main className="flex-grow pt-32 pb-0">
        
        {/* Section 1: Hero */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-32">
           <div className="mb-8 flex gap-2 text-[13px] text-zinc-500 font-medium">
             <Link to="/" className="hover:text-zinc-900 transition-colors">Trang chủ</Link>
             <span>/</span>
             <span className="text-zinc-900">{loc.name}</span>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div>
               <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-semibold tracking-wide uppercase shadow-sm">
                 Dịch vụ In PET DTF {loc.name}
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                 Xưởng <span className="text-transparent bg-clip-text bg-gradient-cmyk">{loc.keyword}</span> chất lượng cao
               </h1>
               <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8 max-w-lg">
                 Hoàng Phúc Print Studio tự hào cung cấp dịch vụ {loc.keyword} tốt nhất năm {currentYear}. Giải pháp in màng chuyển nhiệt siêu nét, bám dính cực tốt trên mọi chất liệu vải. Giao tận nơi siêu tốc khu vực {loc.name}.
               </p>
               <div className="flex flex-wrap gap-4">
                 <button onClick={() => setIsQuoteModalOpen(true)} className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all shadow-md">
                   Nhận báo giá ngay
                 </button>
                 <a href="tel:0905305693" className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all flex items-center gap-2">
                   <Phone className="w-4 h-4 text-zinc-400" />
                   0905 305 693
                 </a>
               </div>
             </div>
             
             <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-100/50">
               <img src="/banner.png" alt={`In pet tại ${loc.name}`} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
                  <div>
                    <div className="font-display text-xl font-bold mb-1">Máy in ORIC I3200 cao cấp</div>
                    <div className="font-light text-sm text-zinc-300">Đảm bảo màu sắc chuẩn xác tuyệt đối</div>
                  </div>
               </div>
             </div>
           </div>
        </section>

        {/* Section 2: Why Choose Us in this Location */}
        <section className="bg-zinc-50 py-24 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-zinc-900 mb-4">
                Vì sao khách hàng {loc.name} luôn chọn <br/>Hoàng Phúc?
              </h2>
              <p className="text-zinc-600 font-light text-lg">Hệ thống máy móc hiện đại và quy trình khép kín giúp chúng tôi loại bỏ hoàn toàn trung gian, mang lại mức giá in PET DTF tận gốc cho khách hàng tại {loc.name}.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: 'Tốc độ sản xuất đỉnh cao', icon: Printer, desc: `Sử dụng dàn máy in PET công nghiệp 4-6 đầu phun I3200 thế hệ mới, công suất đạt >25 mét/giờ. Đảm bảo tiến độ cho các xưởng may và local brand tại khu vực ${loc.name}.` },
                 { title: 'Màu CMYK cực rực rỡ', icon: Lightbulb, desc: 'Mực in PET cao cấp kết hợp quy trình quản lý màu ICC profile chuẩn xác. Bản in ra tươi sáng, đúng màu thiết kế, mực thấm đều và lớp lót trắng siêu bám.' },
                 { title: 'Giao hàng hỏa tốc', icon: Truck, desc: `Đội ngũ vận chuyển chuyên nghiệp sẵn sàng giao các cuộn màng PET đã in xong đến tận tay quý khách tại ${loc.name} chỉ trong vài giờ làm việc.` }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                   <div className="w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6">
                     <item.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-display font-semibold text-zinc-900 mb-3">{item.title}</h3>
                   <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Section 3: Deep Dive SEO Content */}
        <section className="py-24 max-w-4xl mx-auto px-6 md:px-12">
          <article className="prose prose-zinc prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl font-light text-zinc-600">
            <h2>Giải pháp {loc.keyword} toàn diện cho ngành may mặc</h2>
            <p>
              Nếu bạn đang kinh doanh thời trang, làm áo thun thương hiệu (local brand), hoặc vận hành một xưởng gia công may mặc tại <strong>{loc.name}</strong>, công nghệ In PET chuyển nhiệt (DTF - Direct to Film) là lựa chọn không thể bỏ qua. Khác với in lụa truyền thống cần số lượng lớn và hạn chế số lượng màu sắc, công nghệ <strong>{loc.keyword}</strong> tại Hoàng Phúc cho phép bạn in những thiết kế đa sắc phức tạp nhất, gradient mượt mà với chỉ từ một mét trở lên.
            </p>

            {loc.geoAdvantage && (
              <>
                <h3>Lợi thế địa lý tại {loc.name}</h3>
                <p>{loc.geoAdvantage}</p>
              </>
            )}
            
            <h3>Chất lượng màng PET và mực in là cốt lõi</h3>
            <p>
              Hàng trăm khách hàng tại <em>{loc.name}</em> đã tin tưởng Hoàng Phúc bởi chúng tôi chỉ sử dụng loại màng PET tiêu chuẩn chống tĩnh điện, lột mượt. Mực in trắng có độ phủ cao, kết hợp cùng bột keo TPU mịn, giúp hình in khi ép lên vải cực kỳ dẻo dai, chống nứt nẻ kể cả khi kéo giãn mạnh hay kiểm tra bằng bài test giặt máy khắc nghiệt.
            </p>
            <img src="/2.png" alt={`Công nghệ in PET DTF tại ${loc.name}`} className="w-full rounded-2xl shadow-md border border-zinc-100 my-8" />

            <h3>Quy trình nhận file và sản xuất nhanh gọn</h3>
            <ul>
               <li><strong>Bước 1:</strong> Tư vấn và nhận file thiết kế (AI, Corel, PSD, PNG) từ khách hàng qua Zalo. Đội ngũ kiểm tra chất lượng vector, hệ màu.</li>
               <li><strong>Bước 2:</strong> Báo giá chi tiết dựa trên số lượng mét in (in càng nhiều, giá in pet tại {loc.name} càng rẻ).</li>
               <li><strong>Bước 3:</strong> Tiến hành chạy máy với sự theo dõi liên tục để đảm bảo không bị sọc đầu phun.</li>
               <li><strong>Bước 4:</strong> Rắc keo và sấy nhiệt qua hộc sấy công nghiệp giúp màng PET khô ráo, phủ đều keo.</li>
               <li><strong>Bước 5:</strong> Đóng gói chống ẩm bằng màng co và tiến hành giao hàng.</li>
            </ul>

            <div className="bg-zinc-900 text-white p-8 rounded-2xl my-10 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-medium mb-2 mt-0 text-white">Bạn chưa có kinh nghiệm thiết kế chuẩn in?</h4>
                <p className="text-zinc-400 text-sm mb-0">Đừng lo! Đội ngũ thiết kế của chúng tôi sẵn sàng rà soát, hỗ trợ bình file (sắp xếp chi tiết vào khổ 58cm) hoàn toàn miễn phí cho khách hàng mới.</p>
              </div>
              <Cog className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5" />
            </div>

            <h2>Bảng giá {loc.keyword} tham khảo</h2>
            <p>
              Mức giá in phụ thuộc lớn vào tổng số mét của mỗi đơn hàng. Chúng tôi luôn có chính sách chiết khấu rất tốt cho các Shop và xưởng tại {loc.name} có tần suất đặt hàng thường xuyên. (Vui lòng liên hệ trực tiếp hotline để nhận bảng giá sỉ siêu rẻ hôm nay).
            </p>
          </article>
        </section>

        {/* Section 4: Image Gallery Highlights */}
        <section className="bg-white py-12 border-t border-zinc-100 max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-display font-semibold text-center mb-12">Sản phẩm thực tế tại xưởng</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-zinc-100">
                  <img src={`/${i}.png`} alt={`Mẫu in pet ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy"/>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
               <a href="/#gallery" className="text-sm font-medium border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">Xem toàn bộ thư viện ảnh</a>
            </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="bg-zinc-50 py-24 border-t border-zinc-100">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
             <h2 className="text-3xl font-display font-semibold tracking-tight text-center mb-10">Các câu hỏi thường gặp khi {loc.keyword}</h2>
             <div className="space-y-4">
               {[
                 { q: `Đặt in PET tại ${loc.name} số lượng tối thiểu là bao nhiêu?`, a: "Hoàng Phúc nhận gia công in màng PET từ 1 mét dài (khổ 58cm). Bạn có thể xếp tùy ý bao nhiêu hình vào khung đó đều được." },
                 { q: `Độ bền của PET chuyển nhiệt có bong tróc khi giặt không?`, a: "Hoàn toàn không nếu bạn ép đúng nhiệt độ (thường là 150-160 độ C trong 10-15 giây). Keo TPU xịn sẽ tan chảy và khóa chặt hạt mực vào sợi vải, bám rất dai và có độ co giãn." },
                 { q: "Quá trình giao hàng đến khu vực của tôi mất bao lâu?", a: `Với nội thành HCM và khu vực ${loc.name}, chúng tôi thường book Grab/Ahamove giao liền trong 30 phút sau khi in xong.` }
               ].map((faq, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200">
                   <h3 className="text-lg font-medium font-display text-zinc-900 mb-2">{faq.q}</h3>
                   <p className="text-zinc-600 font-light text-sm">{faq.a}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

      </main>

      <CTA onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <Footer />
      <FloatingZalo />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
