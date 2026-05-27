import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, X, ArrowRight, Printer, PenTool, CheckCircle, Package, Layers, Droplet, Clock, ShieldCheck, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main>
        <Hero scrollYProgress={scrollYProgress} onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <Services />
        <Features />
        <Gallery />
        <Process />
        <CTA onOpenQuote={() => setIsQuoteModalOpen(true)} />
      </main>
      <Footer />
      <FloatingZalo />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

function Navbar({ onOpenQuote }: { onOpenQuote?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-200/50 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-cmyk opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
             <img src="/454.png" alt="Hoàng Phúc Logo" className="w-10 h-10 object-contain relative z-10" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-base tracking-tight leading-none mb-0.5">HOÀNG PHÚC</span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-zinc-500 uppercase">Print Studio</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-500">
          <a href="#services" className="hover:text-zinc-900 transition-colors flex flex-col items-center group">
            <span>Dịch vụ</span>
            <span className="text-[10px] text-zinc-400 font-light group-hover:text-zinc-600 transition-colors">Services</span>
          </a>
          <a href="#features" className="hover:text-zinc-900 transition-colors flex flex-col items-center group">
            <span>Vì sao chọn</span>
            <span className="text-[10px] text-zinc-400 font-light group-hover:text-zinc-600 transition-colors">Why Us</span>
          </a>
          <a href="#gallery" className="hover:text-zinc-900 transition-colors flex flex-col items-center group">
            <span>Thư viện ảnh</span>
            <span className="text-[10px] text-zinc-400 font-light group-hover:text-zinc-600 transition-colors">Gallery</span>
          </a>
          <a href="#process" className="hover:text-zinc-900 transition-colors flex flex-col items-center group">
            <span>Quy trình</span>
            <span className="text-[10px] text-zinc-400 font-light group-hover:text-zinc-600 transition-colors">Process</span>
          </a>
        </div>
        <button onClick={onOpenQuote} className="bg-zinc-900 text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] inline-flex items-center gap-4 group cursor-pointer border-none outline-none">
          <div className="flex flex-col items-start leading-none gap-0.5 py-0.5">
            <span>Nhận báo giá</span>
            <span className="text-[10px] text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">Get Quote</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </nav>
  );
}

function Hero({ scrollYProgress, onOpenQuote }: { scrollYProgress: any, onOpenQuote?: () => void }) {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-zinc-50/50">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-zinc-200/80 bg-white/60 backdrop-blur-md shadow-sm">
            <span className="text-xs font-semibold tracking-wider text-zinc-800 uppercase mr-3">Xưởng In Trực Tiếp</span>
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase border-l border-zinc-300 pl-3">Factory Direct</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] text-zinc-900 mb-4">
            XƯỞNG IN PET <br/>
            <span className="text-transparent bg-clip-text bg-gradient-cmyk drop-shadow-sm">HOÀNG PHÚC</span>
          </h1>
          <div className="text-2xl sm:text-3xl font-display font-medium text-zinc-400 mb-8 tracking-tight">
            PET DTF PRINTING FACTORY
          </div>
          
          <div className="space-y-2 mb-10 border-l-2 border-zinc-200 pl-6 py-1">
            <p className="text-lg text-zinc-700 max-w-xl leading-relaxed font-light">
              In PET DTF chuyên nghiệp — màu sắc CMYK sắc nét — giá xưởng tận gốc.
            </p>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed font-light">
              Professional PET printing — vivid CMYK colors — factory-direct pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={onOpenQuote} className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all inline-flex flex-col items-center shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] group cursor-pointer border-none outline-none">
              <span className="text-base">Báo giá nhanh</span>
              <span className="text-[10px] text-zinc-400 font-light group-hover:text-zinc-300 transition-colors">Quick Quote</span>
            </button>
            <a href="#gallery" className="bg-white border border-zinc-200 text-zinc-800 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all inline-flex flex-col items-center hover:border-zinc-300 group shadow-sm cursor-pointer">
              <span className="text-base">Xem mẫu in</span>
              <span className="text-[10px] text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">View Gallery</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ y, opacity }}
          className="relative lg:h-[650px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0 mb-12 lg:mb-0"
        >
          {/* Main Visual */}
          <div className="relative w-[90%] sm:w-full mx-auto sm:mx-0 max-w-lg aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[85%]">
            <div className="absolute inset-0 bg-transparent relative z-10 overflow-hidden rounded-[2rem] group shadow-2xl border border-white/50">
               <img 
                 src="/banner.png" 
                 alt="PET DTF Printer"
                 className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent"></div>
               
               {/* Inside Image Label */}
               <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-3 sm:p-4 flex justify-between items-center text-white">
                  <div>
                    <div className="font-display font-semibold mb-0.5 text-base sm:text-lg">4-6 Head I3200</div>
                    <div className="text-[10px] sm:text-xs text-zinc-300 font-light">Khổ in 58cm</div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xl shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                  </div>
               </div>
            </div>
            
            {/* Soft Floating Elements */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-20 right-0 sm:-bottom-12 sm:-right-8 xl:-bottom-16 xl:-right-12 w-40 h-40 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-5 z-20 flex flex-col justify-center border border-white"
            >
              <div className="font-display text-2xl font-bold tracking-tighter text-zinc-900">CMYK</div>
              <div className="text-[10px] sm:text-xs font-light text-zinc-500 uppercase tracking-widest mt-1">Calibrated</div>
              <div className="flex bg-zinc-100 h-1.5 sm:h-2 mt-3 sm:mt-5 rounded-full overflow-hidden">
                <div className="w-1/4 bg-cyan-400"></div>
                <div className="w-1/4 bg-fuchsia-500"></div>
                <div className="w-1/4 bg-yellow-400"></div>
                <div className="w-1/4 bg-zinc-900"></div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -15, 15] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-10 left-0 sm:-bottom-12 sm:-left-12 w-32 h-40 sm:w-48 sm:h-56 rounded-2xl sm:rounded-3xl z-10 overflow-hidden shadow-2xl border border-white/50"
            >
               <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Vibrant Canvas" />
               <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/90 backdrop-blur text-[10px] sm:text-xs px-2 py-1 rounded-md font-medium text-zinc-800 shadow-sm">
                 Premium Ink
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: 'In PET DTF', en: 'PET DTF Printing', desc: 'Công nghệ in sắc nét, bền màu trên film PET trong suốt.', icon: Printer, colSpan: 'md:col-span-2 lg:col-span-2' },
    { title: 'Ép chuyển nhiệt', en: 'Heat Transfer', desc: 'Áp dụng công nghệ ép nhiệt công nghiệp cao cấp.', icon: Layers, colSpan: 'md:col-span-1 lg:col-span-1' },
    { title: 'Thiết kế file', en: 'File Design', desc: 'Xử lý vector chuẩn in.', icon: PenTool, colSpan: 'md:col-span-1 lg:col-span-1' },
    { title: 'Hỗ trợ local brand', en: 'Local Brand Support', desc: 'Đồng hành sản xuất.', icon: CheckCircle, colSpan: 'md:col-span-2 lg:col-span-1' },
    { title: 'In đồng phục', en: 'Uniform Printing', desc: 'Giải pháp in ấn hàng loạt.', icon: Package, colSpan: 'md:col-span-1 lg:col-span-1' },
    { title: 'Giao hàng toàn quốc', en: 'Nationwide Delivery', desc: 'Đóng gói kỹ, vận chuyển nhanh.', icon: MapPin, colSpan: 'md:col-span-2 lg:col-span-2' },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-zinc-900 mb-4">
            Dịch vụ chuyên nghiệp
          </h2>
          <div className="text-zinc-400 font-display tracking-widest uppercase text-sm border-b border-zinc-200 pb-4 max-w-sm w-full mx-auto mb-6">
            Professional Services
          </div>
          <p className="text-zinc-500 font-light text-lg max-w-2xl">
            Giải pháp in ấn công nghiệp toàn diện, đáp ứng tiêu chuẩn khắt khe nhất của các thương hiệu thời trang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`group cursor-pointer ${service.colSpan}`}
            >
              <div className="h-full border border-zinc-100 rounded-3xl p-8 bg-zinc-50 hover:bg-white hover:border-zinc-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-zinc-200/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl transform translate-x-12 -translate-y-12"></div>
                
                <div>
                  <div className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-zinc-800" />
                  </div>
                  <h3 className="text-xl font-display font-semibold tracking-tight text-zinc-900 mb-1">{service.title}</h3>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mb-4 font-light">{service.en}</div>
                  <p className="text-sm font-light text-zinc-500 leading-relaxed">{service.desc}</p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all text-zinc-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: 'Màu CMYK chuẩn', en: 'Perfect CMYK Colors', desc: 'Mực in công nghiệp đảm bảo bản in đúng màu, tươi sáng và không phai.', icon: Droplet },
    { title: 'Giá xưởng tận gốc', en: 'Factory Direct Pricing', desc: 'Tối ưu chi phí nhờ hệ thống máy móc khép kín, không qua trung gian.', icon: Package },
    { title: 'Hỗ trợ file chuyên nghiệp', en: 'Pro File Support', desc: 'Đội ngũ designer rà soát và căn chỉnh file trước khi đưa vào sản xuất.', icon: PenTool },
    { title: 'Giao nhanh toàn quốc', en: 'Fast Nationwide', desc: 'Quy trình đóng gói cẩn thận, đáp ứng các đơn hàng cần tiến độ gấp.', icon: Clock },
    { title: 'Hỗ trợ Local Brand', en: 'Local Brand Run', desc: 'Phù hợp làm tag, nhãn, logo và các chi tiết định vị thương hiệu.', icon: ShieldCheck },
  ];

  return (
    <section id="features" className="py-32 bg-[#fafafa] border-y border-zinc-100 relative overflow-hidden">
       {/* Ambient Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="col-span-1 lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-zinc-900 mb-3">
              Vì sao chọn <br/>Hoàng Phúc
            </h2>
            <div className="text-zinc-400 font-display tracking-widest uppercase text-xs mb-6">
              Why Choose Us
            </div>
            <p className="text-zinc-500 font-light leading-relaxed mb-8 max-w-sm">
              Chúng tôi kết hợp công nghệ máy in tối tân cùng sự thấu hiểu sâu sắc về nhu cầu sản xuất của các thương hiệu nội địa.
            </p>
            <div className="hidden lg:flex items-center gap-3 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors cursor-pointer w-fit group">
               Tìm hiểu thêm về nhà máy
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          <div className="col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start gap-5 p-6 rounded-3xl bg-white border border-zinc-100/50 hover:border-zinc-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-zinc-800" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-zinc-900 mb-1">{feature.title}</h4>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest mb-3 font-light">{feature.en}</div>
                  <p className="text-sm font-light leading-relaxed text-zinc-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => `/${i + 1}.png`);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.5;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-display font-semibold tracking-tight text-zinc-900 mb-2">
            Thư viện ảnh
          </h2>
          <div className="text-zinc-400 font-display tracking-widest uppercase text-xs">
            Studio Gallery
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 mr-4">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer text-zinc-600 hover:text-zinc-900 shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer text-zinc-600 hover:text-zinc-900 shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <button onClick={() => alert('Đang cập nhật thêm tại Google Drive / Fanpage của xưởng!')} className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-colors cursor-pointer">
            Xem toàn bộ
          </button>
        </div>
      </div>
      
      {/* Horizontal smooth wrapper */}
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory px-6 lg:px-12 gap-4 lg:gap-6 pb-8 pt-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
             <div 
              key={i} 
              onClick={() => setSelectedImage(img)}
              className="relative group/card cursor-pointer min-w-[65vw] md:min-w-[32vw] lg:min-w-[20vw] aspect-[4/5] max-h-[400px] bg-zinc-100 rounded-2xl overflow-hidden shadow-sm shrink-0 hover:shadow-md transition-shadow snap-center"
             >
               <img src={img} className="w-full h-full object-cover transform scale-100 group-hover/card:scale-[1.02] transition-transform duration-700 ease-out" alt={`Hoàng Phúc Print Studio Portfolio ${i+1}`} loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
             </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            className="w-full max-w-5xl max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            alt="Zoomed Portfolio Image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function Process() {
  const steps = [
    { title: 'Gửi file', en: 'Send File', desc: 'Gửi file thiết kế dạng vector hoặc PSD chất lượng cao.' },
    { title: 'Kiểm tra file', en: 'File Checking', desc: 'Rà soát, canh chỉnh màu và fix lỗi layout.' },
    { title: 'In PET', en: 'PET Printing', desc: 'Xuất màng PET chất lượng cao trên máy công nghiệp.' },
    { title: 'Ép nhiệt', en: 'Heat Press', desc: 'Áp dụng nhiệt và lực ép chuẩn xác lên sản phẩm.' },
    { title: 'Giao hàng', en: 'Delivery', desc: 'Kiểm tra chất lượng (QC) và giao hàng tận nơi.' }
  ];

  return (
    <section id="process" className="py-32 bg-[#0f1115] text-white relative overflow-hidden">
      {/* Soft dark background glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            5 bước từ file đến thành phẩm
          </h2>
          <div className="text-zinc-500 font-display tracking-widest uppercase text-sm mb-6">
            5-Step Printing Process
          </div>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto text-lg border-t border-zinc-800 pt-6">
            Quy trình khép kín, tối ưu thời gian tạo ra sản phẩm hoàn hảo.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#1a1d24] border border-zinc-700/50 flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-zinc-500 group-hover:bg-[#22262f] transition-all duration-300">
                  <span className="font-display font-bold text-white text-2xl group-hover:scale-110 transition-transform">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-display font-medium text-white mb-1">{step.title}</h4>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">{step.en}</div>
                <p className="text-sm font-light text-zinc-400 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ onOpenQuote }: { onOpenQuote?: () => void }) {
  return (
    <section className="py-32 md:py-40 relative flex items-center justify-center overflow-hidden bg-white">
      {/* CMYK Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.1)_0%,_transparent_70%)] rounded-full blur-3xl absolute -translate-x-1/4 -translate-y-1/4"></div>
        <div className="w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(255,0,122,0.08)_0%,_transparent_70%)] rounded-full blur-3xl absolute translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-block mb-8 px-5 py-2 rounded-full border border-zinc-200 bg-white shadow-sm">
             <span className="text-xs font-semibold tracking-wider text-zinc-800 uppercase mx-2">Luôn sẵn sàng</span>
             <span className="text-zinc-300 mx-2">|</span>
             <span className="text-[10px] tracking-widest text-zinc-400 uppercase mx-2">Ready to Print</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-zinc-900 mb-6 drop-shadow-sm">
            CHẤT LƯỢNG <br/>TẠO NÊN <span className="text-transparent bg-clip-text bg-gradient-cmyk">UY TÍN</span>
          </h2>
          <div className="text-xl md:text-2xl font-light text-zinc-400 mb-12 tracking-wide uppercase">
            Quality Creates Trust
          </div>
          
          <button onClick={onOpenQuote} className="bg-zinc-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-zinc-800 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 inline-flex flex-col items-center gap-1 group cursor-pointer border-none outline-none">
            <span>Đặt in ngay</span>
            <span className="text-xs text-zinc-400 font-light group-hover:text-zinc-300 transition-colors tracking-widest uppercase">Start Your Order</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0b0d] text-zinc-400 py-20 border-t border-zinc-800/50 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-cmyk opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden group bg-white rounded-lg">
                 <img src="/454.png" alt="Hoàng Phúc Logo" className="w-10 h-10 object-contain relative z-10 p-1" />
               </div>
               <div className="flex flex-col">
                  <span className="font-display font-bold text-white tracking-tight leading-none mb-1">HOÀNG PHÚC</span>
                  <span className="font-sans text-[9px] tracking-[0.2em] text-zinc-500 uppercase">Print Studio</span>
               </div>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-sm mb-8 text-zinc-500">
              Xưởng in PET DTF chuyên nghiệp tại Việt Nam. Cung cấp giải pháp in ấn công nghiệp chất lượng cao, đồng hành cùng các thương hiệu nội địa vươn xa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3">
            <h5 className="text-white font-medium mb-2 font-display">Chuyên mục</h5>
            <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-6 border-b border-zinc-800/50 pb-2 inline-block">Navigation</div>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">In PET DTF chất lượng cao</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sản xuất áo thun Local Brand</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thiết kế & Canh màu chuẩn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gia công ép chuyển nhiệt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vật tư ngành in PET</a></li>
            </ul>
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <h5 className="text-white font-medium mb-2 font-display">Thông tin liên hệ</h5>
            <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-6 border-b border-zinc-800/50 pb-2 inline-block">Contact</div>
            <ul className="space-y-5 text-sm font-light">
              <li className="flex items-center gap-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 shrink-0 text-zinc-500 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-600 uppercase tracking-widest mb-1">Hotline / Zalo</span>
                    <span className="text-white text-base font-medium">0905 305 693</span>
                  </div>
                </div>
                <div className="p-1.5 bg-white rounded-xl shadow-lg border border-zinc-800 shrink-0 w-14 h-14">
                  <img src="/qr-zl.png" alt="Zalo QR Code" className="w-full h-full object-contain" />
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-zinc-500 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-600 uppercase tracking-widest mb-1">Địa chỉ / Address</span>
                  <span className="text-zinc-400">557/64 Hương Lộ 3, Phường Bình Hưng Hòa, Quận Bình Tân, TP. Hồ Chí Minh</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Facebook className="w-5 h-5 shrink-0 text-zinc-500 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-600 uppercase tracking-widest mb-1">Facebook</span>
                  <span className="text-zinc-400">Xưởng In PET Hoàng Phúc</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-600">
          <p>© {new Date().getFullYear()} Hoàng Phúc Print Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingZalo() {
  return (
    <motion.a
      href="https://zalo.me/0905305693"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-6 bottom-8 z-[100] flex flex-col items-center group cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
      >
        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-colors duration-500"></div>
        <div className="bg-white p-1.5 rounded-2xl shadow-xl border border-zinc-100 group-hover:scale-110 transition-transform duration-300 w-14 h-14 xl:w-16 xl:h-16 flex items-center justify-center relative z-10 overflow-hidden">
          <img src="/qr-zl.png" alt="Zalo Contact" className="w-full h-full object-contain" />
        </div>
        <div className="mt-2 bg-blue-500 text-white font-bold text-[10px] px-3 py-1 rounded-full shadow-lg relative z-10 group-hover:-translate-y-1 transition-transform tracking-widest uppercase">
          Zalo
        </div>
      </motion.div>
    </motion.a>
  );
}

function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-zinc-100 hover:bg-zinc-200 rounded-full flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-zinc-900/5 mb-6">
                <Phone className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-3xl font-display font-bold tracking-tight text-zinc-900 mb-2">Liên Hệ Báo Giá</h3>
              <p className="text-[11px] text-zinc-400 font-semibold tracking-widest uppercase">Quick Quotation</p>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-6 text-center mb-8 shadow-inner w-full">
              <p className="text-zinc-600 leading-relaxed font-light mb-6 text-[15px]">
                Để được tư vấn về file in và báo giá in pet nhanh nhất, quý khách vui lòng liên hệ hotline:
              </p>
              <div className="flex flex-col gap-3 max-w-[280px] mx-auto">
                <a href="tel:0905305693" className="bg-white border border-zinc-200/80 px-6 py-3.5 rounded-2xl font-medium text-lg text-zinc-900 hover:border-zinc-300 hover:shadow-md transition-all flex items-center justify-center gap-3 group">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                  0905 305 693
                </a>
                <a href="tel:0936764864" className="bg-white border border-zinc-200/80 px-6 py-3.5 rounded-2xl font-medium text-lg text-zinc-900 hover:border-zinc-300 hover:shadow-md transition-all flex items-center justify-center gap-3 group">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                  0936 764 864
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 p-3 bg-white border border-zinc-200/80 rounded-[1.5rem] shadow-sm mb-4 group hover:shadow-md transition-shadow">
                <img src="/qr-zl.png" alt="Zalo QR Code" className="w-full h-full object-contain rounded-xl" />
              </div>
              <div className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
                Quét mã Zalo
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
