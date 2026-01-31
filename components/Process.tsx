
import React, { useState } from 'react';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface CourseInfo {
  title: string;
  tag: string;
  desc: string;
  extra?: string;
}

const COURSE_DETAILS: Record<string, CourseInfo> = {
  REGULAR: {
    title: "F4/ F5/ F6 Regular Series",
    tag: "穩固根基 ‧ 循序漸進",
    desc: "系統性按月推進（每月4堂），以「概念為主、技巧為輔」的核心教學理念，逐步建構DSE經濟科完整知識體系。我們專注培養學生以扎實理論框架，靈活解構題目萬變形態，從根本提升學科思維能力。",
    extra: "中四 Regular 額外包含 F4 Mock Class，透過模擬試卷操練及DRQ答題技巧指導，助學生提前適應考試模式。"
  },
  MICRO: {
    title: "Summer Micro Intensive",
    tag: "溫故知新 ‧ 搶佔先機",
    desc: "精煉濃縮中四核心課題，透過高強度重點複習與進階應用練習，完美銜接中五課程內容。課程特別強化供需理論、彈性、市場干預等微觀經濟骨幹知識，助學生提前掌握來年關鍵學習重點，建立學術優勢。"
  },
  MACRO: {
    title: "F6 Macro Intensive",
    tag: "宏觀速構 ‧ 思維領航",
    desc: "兩期8堂高效攻克宏觀經濟版圖，深度解讀國民收入、貨幣政策等核心課題。讓學生在密集操練前徹底掌握理論脈絡，實現「理解先行、操卷倍效」的學習躍升。"
  },
  DRILLING: {
    title: "DSE 實戰操卷班 (Mock)",
    tag: "全面精修 ‧ 決勝DSE",
    desc: "八個月密集式課程嚴選歷屆試題精髓，系統梳理DSE經濟科全範圍考核重點。以「零遺漏」為目標，結合最新評分準則強化答題邏輯與時間管理，針對性突破學生弱項，為公開試締造巔峰狀態。"
  },
  TIP: {
    title: "Final Tip Class",
    tag: "終極聚焦 ‧ 題分封頂",
    desc: "2堂DSE前關鍵衝刺課程，分設微觀/宏觀終極溫習專場。直擊最新年度熱門議題與高頻考點，提供精準預測題型與濃縮背記方案，手把手指導得分要訣，助學生臨場發揮極限潛能。"
  }
};

const CourseModal: React.FC<{ course: CourseInfo; onClose: () => void }> = ({ course, onClose }) => (
  <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6 animate-fadeIn">
    <div className="absolute inset-0 bg-deer-dark/60 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative bg-white max-w-lg w-full p-8 md:p-12 rounded-[4px] shadow-2xl animate-scaleUp border-t-4 border-deer-gold">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-deer-dark/20 hover:text-deer-dark transition-colors text-[1.5rem]"
      >
        ×
      </button>
      <div className="mb-6">
        <span className="text-deer-gold font-serif text-[0.9rem] tracking-[0.2em] uppercase block mb-2">{course.tag}</span>
        <h3 className="font-serif text-[1.8rem] text-deer-dark font-medium leading-tight">{course.title}</h3>
      </div>
      <p className="text-[#555] font-serif leading-relaxed mb-6 text-justify text-[1.05rem]">
        {course.desc}
      </p>
      {course.extra && (
        <div className="bg-gray-50 p-4 border-l-2 border-deer-gold/30 italic text-[0.9rem] text-[#666] font-serif">
          {course.extra}
        </div>
      )}
      <div className="mt-8">
        <button 
          onClick={onClose}
          className="w-full py-4 border border-deer-dark font-serif tracking-widest text-[1rem] hover:bg-deer-dark hover:text-white transition-all"
        >
          返回課程表
        </button>
      </div>
    </div>
  </div>
);

const BundleBox: React.FC<{ 
  title: string; 
  subtitle?: string;
  items: { name: string; colorClass: string; note?: string; key: keyof typeof COURSE_DETAILS }[];
  accentColor: string;
  onItemClick: (key: keyof typeof COURSE_DETAILS) => void;
}> = ({ title, subtitle, items, accentColor, onItemClick }) => (
  <div className="mb-8 relative group transition-all duration-300">
    <div className={`border-2 ${accentColor} bg-white rounded-[4px] overflow-hidden shadow-sm transition-all`}>
      <div className={`${accentColor.replace('border-', 'bg-')} px-4 py-3 text-white font-serif text-[1.05rem] tracking-widest text-center font-bold`}>
        {title}
      </div>
      {subtitle && <div className="bg-gray-50 text-[0.8rem] text-center py-1.5 font-serif opacity-70 border-b italic">{subtitle}</div>}
      <div className="p-3 space-y-3">
        {items.map((item, i) => (
          <button 
            key={i} 
            onClick={() => onItemClick(item.key)}
            className={`${item.colorClass} w-full text-white p-4 rounded-[2px] text-center flex flex-col items-center justify-center min-h-[70px] hover:brightness-110 active:scale-95 transition-all shadow-sm`}
          >
            <span className="font-serif text-[1.1rem] leading-tight font-medium">{item.name}</span>
            {item.note && <span className="text-[0.75rem] opacity-90 mt-1 leading-tight font-light">{item.note}</span>}
            <span className="text-[0.75rem] mt-2 font-serif font-bold text-white tracking-[0.15em] opacity-80 border-t border-white/20 pt-1 w-full max-w-[120px]">點擊查看詳情</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const SingleStep: React.FC<{ 
  title: string; 
  colorClass?: string; 
  note?: string; 
  onClick: () => void;
}> = ({ title, colorClass = "bg-deer-dark", note, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full p-5 mb-8 ${colorClass} text-white rounded-[4px] text-center shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer flex flex-col items-center`}
  >
    <div className="font-serif text-[1.15rem] tracking-wider font-medium">{title}</div>
    {note && <div className="text-[0.85rem] opacity-80 mt-1 font-light">{note}</div>}
    <span className="text-[0.75rem] mt-2 font-serif font-bold text-white tracking-[0.15em] opacity-80 border-t border-white/20 pt-1 w-full max-w-[120px]">點擊查看詳情</span>
  </button>
);

const ArrowDown: React.FC = () => (
  <div className="text-center text-deer-dark text-[1.6rem] -mt-6 mb-2 z-10 relative bg-transparent w-8 mx-auto font-bold animate-pulse">
    ↓
  </div>
);

const Process: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);

  const handleItemClick = (key: keyof typeof COURSE_DETAILS) => {
    setSelectedCourse(COURSE_DETAILS[key]);
  };

  return (
    <section className="px-[6%] md:px-[10%] py-12 md:py-24 animate-fadeInUp bg-deer-bg relative">
      {selectedCourse && <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
      
      <div className="max-w-[1200px] mx-auto bg-white p-8 md:p-[60px_40px] rounded-[8px] shadow-sm border border-deer-border">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.6rem] mb-2 font-serif font-medium tracking-[0.2em] text-deer-dark">
            推薦報讀順序
          </h2>
          <p className="font-jost text-[0.85rem] text-deer-gold/60 uppercase tracking-[0.4em] mb-8">Recommended Enrolment Order</p>
          
          <p className="text-[1.1rem] text-[#444] max-w-[700px] mx-auto font-serif mt-6 leading-relaxed">
            按年級規劃你的奪星之路。點擊下方各項課程，可查看詳細教學重點。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 items-start">
          {/* F4 Column */}
          <div className="bg-[#f9f9f9]/50 p-6 md:p-8 rounded-[12px] border border-gray-100 flex flex-col h-full">
            <h3 className="text-[1.5rem] text-center mb-10 text-deer-dark border-b border-deer-gold/20 pb-4 w-full font-serif tracking-widest font-bold">
              中四 (F4)
            </h3>
            <div className="flex-grow">
              <SingleStep 
                title="F4 Regular" 
                colorClass="bg-black" 
                onClick={() => handleItemClick('REGULAR')} 
              />
              <ArrowDown />
              <BundleBox 
                title="升F5暑期套裝"
                accentColor="border-cyan-600"
                onItemClick={handleItemClick}
                items={[
                  { name: "Summer Micro Intensive", colorClass: "bg-red-700", key: "MICRO" },
                  { name: "F4 升 F5 Summer regular", colorClass: "bg-blue-800", key: "REGULAR" }
                ]}
              />
            </div>
          </div>

          {/* F5 Column */}
          <div className="bg-[#f9f9f9]/50 p-6 md:p-8 rounded-[12px] border border-gray-100 flex flex-col h-full">
            <h3 className="text-[1.5rem] text-center mb-10 text-deer-dark border-b border-deer-gold/20 pb-4 w-full font-serif tracking-widest font-bold">
              中五 (F5)
            </h3>
            <div className="flex-grow">
              <BundleBox 
                title="補底套裝"
                subtitle="適合底子差的中五學生"
                accentColor="border-gray-400"
                onItemClick={handleItemClick}
                items={[
                  { name: "F5 Regular", colorClass: "bg-black", key: "REGULAR" },
                  { name: "F4 Regular", colorClass: "bg-black", key: "REGULAR" }
                ]}
              />
              <ArrowDown />
              <BundleBox 
                title="升F6暑期套裝"
                accentColor="border-cyan-600"
                onItemClick={handleItemClick}
                items={[
                  { name: "Summer Micro Intensive", colorClass: "bg-red-700", note: "(適合新/底子差的升中六學生)", key: "MICRO" },
                  { name: "F5 升 F6 Summer regular", colorClass: "bg-green-700", key: "REGULAR" }
                ]}
              />
            </div>
          </div>

          {/* F6 Column */}
          <div className="bg-[#f9f9f9]/50 p-6 md:p-8 rounded-[12px] border border-gray-100 flex flex-col h-full">
            <h3 className="text-[1.5rem] text-center mb-10 text-deer-dark border-b border-deer-gold/20 pb-4 w-full font-serif tracking-widest font-bold">
              中六 (F6)
            </h3>
            <div className="flex-grow">
              <BundleBox 
                title="星級套裝"
                accentColor="border-deer-gold"
                onItemClick={handleItemClick}
                items={[
                  { name: "F6 Macro Intensive", colorClass: "bg-orange-500", key: "MACRO" },
                  { name: "DSE 實戰操卷班", colorClass: "bg-cyan-600", key: "DRILLING" }
                ]}
              />
              <ArrowDown />
              <SingleStep 
                title="F6 Tip Class" 
                colorClass="bg-[#a855f7]" 
                note="備戰系列"
                onClick={() => handleItemClick('TIP')}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-deer-bg border border-deer-border rounded-[8px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-serif text-deer-dark">
            <h4 className="text-[1.2rem] font-bold mb-2">準備好開始了嗎？</h4>
            <p className="text-[1rem] text-[#555]">同學可點擊上方方格了解課程詳情，或透過 WhatsApp 查詢最新優惠。</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="https://wa.me/85261433604?text=我想諮詢推薦報讀順序及套裝詳情" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-whatsapp text-white rounded-full font-serif text-[1rem] tracking-[0.1em] shadow-lg hover:bg-[#128C7E] transition-all duration-300 font-medium whitespace-nowrap"
            >
              <WhatsAppIcon />
              立即查詢套裝優惠
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
