import React from 'react';

const ImagePlaceholder: React.FC<{ label: string; className?: string }> = ({ label, className }) => (
  <div className={`flex justify-center items-center bg-deer-border text-deer-accent font-jost text-[0.75rem] tracking-widest text-center p-[20px] w-full min-h-[300px] ${className}`}>
    <div>
      {label}<br />
      <span className="text-[0.6em] opacity-40 uppercase">(Media Asset Pending)</span>
    </div>
  </div>
);

const SafeImage: React.FC<{ src: string; alt: string; className?: string; placeholderLabel: string }> = ({ src, alt, className, placeholderLabel }) => {
  const [error, setError] = React.useState(false);
  if (error) return <ImagePlaceholder label={placeholderLabel} className={className} />;
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-90px)] w-full overflow-hidden flex items-center justify-center -mt-[80px] md:-mt-[90px]">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="hero-desktop.jpg" 
            alt="Atmosphere" 
            placeholderLabel="HERO DESKTOP" 
            className="hidden md:block w-full h-full object-cover animate-slowZoom"
          />
          <SafeImage 
            src="hero-mobile.jpg" 
            alt="Atmosphere" 
            placeholderLabel="HERO MOBILE" 
            className="md:hidden w-full h-full object-cover animate-slowZoom"
          />
          <div className="absolute inset-0 bg-deer-dark/30"></div>
        </div>
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="font-serif text-[2.2rem] md:text-[4rem] mb-4 md:mb-6 font-light tracking-[0.2em] leading-[1.3]">
            貼地教學<br />並肩作戰
          </h1>
          <p className="font-serif text-[1rem] md:text-[1.15rem] font-light tracking-[0.1em] opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
            不做高不可攀的名師，只做與你同行的專業經濟科導師。
          </p>
          <a 
            href="https://wa.link/rzlonb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white rounded-full font-serif text-[0.9rem] tracking-[0.1em] shadow-lg hover:scale-105 transition-transform duration-300 font-medium"
          >
            <WhatsAppIcon />
            立即諮詢課程
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-[0.7rem] font-jost tracking-[0.3em] animate-bounceDown uppercase">
          Explore the Path
        </div>
      </section>

      {/* Philosophy Section */}
      <div id="about-us">
        <section className="px-[6%] md:px-[10%] py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="edu-card fade-up">
            <SafeImage 
              src="philosophy-handwriting.jpg" 
              alt="Handwritten Notes" 
              placeholderLabel="NOTES DETAIL" 
              className="edu-img w-full shadow-sm"
            />
          </div>
          <div className="text-deer-dark fade-up">
            <h2 className="font-serif text-[1.4rem] md:text-[1.6rem] text-deer-gold mb-2 border-b border-deer-gold/30 inline-block pb-1 tracking-[0.1em] font-medium">
              教學理念
            </h2>
            <p className="font-jost text-[0.75rem] text-deer-gold/60 uppercase tracking-[0.3em] block mb-8 md:mb-12">The Philosophy</p>
            
            <div className="mb-10 md:mb-12">
              <h3 className="font-serif text-[1.6rem] md:text-[1.8rem] mb-5 md:mb-6 leading-[1.4] tracking-wide text-deer-dark">
                理念：<br /><span className="gold-underline">「不做高不可攀的名師，只做貼地的同行者。」</span>
              </h3>
              <p className="text-[1rem] mb-4 text-[#444] text-justify leading-relaxed">
                坊間很多名師都給人高高在上的感覺，但我創立課程的初衷很簡單：做一個你不需要抬頭仰望的導師。
              </p>
              <p className="text-[1rem] text-[#444] text-justify leading-relaxed">
                我相信教育應該是公平的。透過「Fair Economics」和公益補習，我希望直接幫助有需要的學生。我不會站在高處指指點點，而是會陪你一起面對 DSE。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-serif text-[1.6rem] md:text-[1.8rem] mb-5 md:mb-6 leading-[1.4] tracking-wide text-deer-dark">
                教學重點：<br /><span className="gold-underline">「不賣花巧口訣，只教核心邏輯。」</span>
              </h3>
              <p className="text-[1rem] mb-4 text-[#444] text-justify leading-relaxed">
                經濟科重點在於邏輯，而不只是背誦。我堅持「概念為主，技巧為輔」。
              </p>
              <p className="text-[1rem] text-[#444] text-justify leading-relaxed">
                我會教你拆解筆記裡的每一個圖表，確保你明白背後的原理。只要你真正理解「為什麼」，成績自然會好。
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <span className="w-8 md:w-10 h-[1px] bg-deer-gold"></span>
              <p className="text-[0.8rem] font-serif tracking-widest text-deer-gold font-medium">
                以邏輯賦予學生力量
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="px-[6%] md:px-[10%] py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center bg-[#f5f5f5]">
          <div className="order-2 md:order-1 text-deer-dark fade-up">
            <h2 className="font-serif text-[1.4rem] md:text-[1.6rem] text-deer-gold mb-2 border-b border-deer-gold/30 inline-block pb-1 tracking-[0.1em] font-medium">
              導師簡介
            </h2>
            <p className="font-jost text-[0.75rem] text-deer-gold/60 uppercase tracking-[0.3em] block mb-8 md:mb-12">The Educator</p>
            
            <h3 className="font-serif text-[1.7rem] md:text-[2.2rem] mb-6 md:mb-8 leading-[1.4] tracking-wide">
              科大經濟榮譽畢業，<br />實力與經驗兼備。
            </h3>
            <p className="text-[1rem] mb-5 text-[#444] leading-relaxed">
              <strong>新生代優勢：</strong> 作為 00 後導師，我與你經歷過同樣的 DSE 壓力。畢業於香港科技大學經濟系（Dean's List），我將專業的學術背景轉化為最直接、易懂的教學語言。
            </p>
            <p className="text-[1rem] mb-10 text-[#444] leading-relaxed">
              大學4年累積指導逾30名學生，橫跨DSE/IB/A-level/Asso及港英大學經濟課程，極度熟悉經濟科內容。在 Threads 上亦有超過 2,000 多位追蹤者，我每日都會分享試題與心得，旨在陪伴每位學生共同掌握經濟科的核心。
            </p>
            <a 
              href="https://wa.link/rzlonb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-whatsapp text-whatsapp rounded-full font-serif text-[0.85rem] tracking-[0.1em] hover:bg-whatsapp hover:text-white transition-all duration-300 font-medium"
            >
              <WhatsAppIcon />
              直接聯絡導師
            </a>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 edu-card fade-up">
            <SafeImage 
              src="profile-portrait.jpg" 
              alt="Deer Portrait" 
              placeholderLabel="PORTRAIT" 
              className="edu-img w-full h-full object-cover shadow-sm"
            />
             <SafeImage 
              src="profile-working.jpg" 
              alt="Deer Working" 
              placeholderLabel="PREPARATION" 
              className="edu-img w-full h-full object-cover mt-6 md:mt-8 shadow-sm"
            />
          </div>
        </section>

        {/* Course Series Section */}
        <section className="px-[6%] md:px-[10%] py-16 md:py-24 bg-deer-bg">
          <div className="text-center mb-12 md:mb-20 fade-up">
            <h2 className="font-serif text-[1.8rem] md:text-[2.2rem] text-deer-dark border-b border-deer-gold/30 pb-2 inline-block tracking-[0.2em] font-medium">
              課程系列
            </h2>
            <p className="mt-4 font-jost text-[0.8rem] text-deer-gold/60 uppercase tracking-[0.4em]">The Collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { title: "常規系列", en: "Regular Series", tag: "Foundation", img: "course-regular.jpg", label: "01" },
              { title: "精讀系列", en: "Intensive Series", tag: "Efficiency", img: "course-intensive.jpg", label: "02" },
              { title: "實戰操卷系列", en: "Drilling Series", tag: "Strategy", img: "course-mock.jpg", label: "03" }
            ].map((course, idx) => (
              <div key={idx} className="edu-card group fade-up flex flex-col" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="aspect-[4/5] overflow-hidden mb-6 md:mb-8">
                  <SafeImage 
                    src={course.img} 
                    alt={course.title} 
                    placeholderLabel={`COLLECTION ${course.label}`} 
                    className="edu-img w-full h-full object-cover"
                  />
                </div>
                <div className="border-l border-deer-gold/40 pl-5 flex-grow">
                  <span className="font-jost text-[0.7rem] text-deer-gold uppercase tracking-[0.2em] block mb-2 font-medium">{course.tag}</span>
                  <h4 className="font-serif text-[1.2rem] md:text-[1.4rem] text-deer-dark tracking-widest mb-1 font-normal">{course.title}</h4>
                  <p className="font-jost text-[0.85rem] opacity-40 uppercase tracking-widest mb-6">{course.en}</p>
                </div>
                <a 
                  href={`https://wa.me/85261433604?text=我想查詢${course.title}詳情`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 py-3 bg-gray-50 text-[#666] border border-transparent hover:border-whatsapp hover:text-whatsapp transition-all text-[0.9rem] font-serif tracking-widest rounded-sm"
                >
                  了解報讀詳情
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Stats Section */}
        <section className="relative py-16 md:py-24 px-[6%] md:px-[10%] text-white overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="absolute inset-0 z-0 bg-deer-dark">
            <SafeImage 
               src="voice-bg.jpg" 
               alt="Background" 
               placeholderLabel="STORY BACKGROUND" 
               className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="fade-up">
              <h2 className="font-serif text-[1.8rem] md:text-[2.2rem] text-deer-gold mb-2 tracking-[0.1em] font-medium">學生成績證明</h2>
              <p className="font-jost text-[0.75rem] text-white/40 mb-10 md:mb-12 uppercase tracking-[0.4em]">Real Outcomes</p>
              
              <h3 className="font-serif text-[1.8rem] md:text-[2.5rem] mb-10 md:mb-12 leading-[1.4] tracking-wide">
                讓學生成績，<br /><span className="gold-underline">成為我們的最佳證明。</span>
              </h3>
              <div className="space-y-6 md:space-y-8">
                {[
                   { val: "97%", label: "學生大考顯著進步" },
                   { val: "1st", label: "超過 30% 學生考獲全級第一" },
                   { val: "24/7", label: "隨時隨地的whatsapp支援" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-5 md:gap-6 group">
                    <span className="font-jost text-[2.2rem] md:text-[3.5rem] font-thin text-deer-gold/90 group-hover:text-deer-gold transition-colors leading-none">{stat.val}</span>
                    <span className="font-serif text-[1rem] opacity-80 tracking-widest leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-1 md:p-2 bg-white/5 border border-white/10 backdrop-blur-sm edu-card fade-up">
              <SafeImage 
                src="voice-evidence.jpg" 
                alt="Student Reviews" 
                placeholderLabel="EVIDENCE" 
                className="edu-img w-full opacity-80 shadow-inner"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;