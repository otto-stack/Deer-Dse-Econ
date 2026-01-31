
import React, { useState } from 'react';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface CourseDetail {
  title: string;
  tag: string;
  desc: string;
  extra?: string;
}

const COURSE_INTRO_DATA: Record<string, CourseDetail> = {
  REGULAR: {
    title: "Regular Series 常規課程",
    tag: "穩固根基 ‧ 循序漸進",
    desc: "系統性按月推進（每月4堂），以「概念為主、技巧為輔」的核心教學理念，逐步建構DSE經濟科完整知識體系。我們專注培養學生以扎實理論框架，靈活解構題目萬變形態，從根本提升學科思維能力。",
    extra: "中四課程特別包含 F4 Mock Class，額外安排兩堂專注於鞏固所學，透過模擬試卷操練及DRQ答題技巧指導，助學生提前適應考試模式。"
  },
  INTENSIVE: {
    title: "Intensive Series 精讀課程",
    tag: "溫故知新 / 宏觀速構",
    desc: "Micro 系列精煉濃縮中四核心課題，強化供需理論與市場干預等微觀骨幹；Macro 系列則以 8 堂高效攻克宏觀經濟版圖，深度解讀國民收入與貨幣政策。實現「理解先行、操卷倍效」的學習躍升。"
  },
  DRILLING: {
    title: "Drilling Series 實戰操卷",
    tag: "全面精修 ‧ 決勝DSE",
    desc: "八個月密集式課程嚴選歷屆試題精髓，系統梳理DSE經濟科全範圍考核重點。以「零遺漏」為目標，結合最新評分準則強化答題邏輯與時間管理，針對性突破學生弱項，為公開試締造巔峰狀態。",
    extra: "透過密集訓練提升考試技巧，針對不同題目拆解陷阱、教授答題框架、強化時間管理，望助學生在短時間內突破分數瓶頸，再大考中取得理想成績。"
  }
};

const DetailModal: React.FC<{ detail: CourseDetail; onClose: () => void }> = ({ detail, onClose }) => (
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
        <span className="text-deer-gold font-serif text-[0.9rem] tracking-[0.2em] uppercase block mb-2">{detail.tag}</span>
        <h3 className="font-serif text-[1.8rem] text-deer-dark font-medium leading-tight">{detail.title}</h3>
      </div>
      <p className="text-[#555] font-serif leading-relaxed mb-6 text-justify text-[1.1rem]">
        {detail.desc}
      </p>
      {detail.extra && (
        <div className="bg-gray-50 p-4 border-l-2 border-deer-gold/30 italic text-[0.95rem] text-[#666] font-serif">
          {detail.extra}
        </div>
      )}
      <div className="mt-8">
        <button 
          onClick={onClose}
          className="w-full py-4 bg-deer-dark text-white font-serif tracking-widest text-[1rem] hover:bg-deer-gold transition-all"
        >
          關閉詳情
        </button>
      </div>
    </div>
  </div>
);

const Arsenal: React.FC = () => {
  const [selectedDetail, setSelectedDetail] = useState<CourseDetail | null>(null);

  const packages = [
    {
      key: "REGULAR",
      title: "常規課程系列",
      subtitle: "Regular Series",
      courseRange: "F4/F5/F6 Regular // Summer Regular",
      accent: "from-gray-500 to-teal-700",
      sections: [
        {
          heading: "主筆記",
          points: [
            "每期課程將派發專屬主筆記",
            "中英文版本分開提供",
            "涵蓋所有課題概念，堂上即學即做"
          ]
        },
        {
          heading: "試題合集",
          points: [
            "每期精編歷屆試題彙編",
            "按課題及概念分層歸類，循序漸進"
          ]
        },
        {
          heading: "24/7 答疑服務",
          points: [
            "透過 WhatsApp 隨時提問",
            "教師即時以語音回覆解惑"
          ]
        }
      ]
    },
    {
      key: "INTENSIVE",
      title: "精讀課程系列",
      subtitle: "Intensive Series",
      courseRange: "Summer Micro Intensive | Macro Intensive",
      accent: "from-orange-500 to-yellow-600",
      sections: [
        {
          heading: "高效筆記",
          points: [
            "精煉課程核心概念，針對重點突破",
            "中英文版本分開提供",
            "收錄進階應用練習，強化銜接"
          ]
        },
        {
          heading: "課前測驗",
          points: [
            "每期包含導師原創測驗（即測即評）",
            "難度超 DSE 水平，考驗融會貫通能力"
          ]
        },
        {
          heading: "24/7 答疑服務",
          points: [
            "透過 WhatsApp 隨時提問",
            "全方位支援同學温習進度"
          ]
        }
      ]
    },
    {
      key: "DRILLING",
      title: "DSE 實戰操卷班",
      subtitle: "Drilling Series",
      courseRange: "DSE 實戰操卷班",
      accent: "from-cyan-500 to-blue-700",
      sections: [
        {
          heading: "主筆記",
          points: [
            "每期課程將派發專屬主筆記",
            "中英文版本分開提供",
            "涵蓋所有課題概念，每個概念附少量課堂練習題，堂上即學即做，深化理解"
          ]
        },
        {
          heading: "試題合集",
          points: [
            "每期精編歷屆試題彙編",
            "題目按課題及概念分層歸類，確保循序漸進吸收"
          ]
        },
        {
          heading: "重點速記卡",
          points: [
            "每期贈送重點速記卡",
            "濃縮考試關鍵：常見題型/陷阱/核心概念",
            "※ 注意：僅作為考前提醒，紮實所學仍是高分關鍵"
          ]
        },
        {
          heading: "24/7 答疑服務",
          points: [
            "透過 WhatsApp 隨時提問（包括凌晨時段）",
            "會有同學清晨 4:30 發問，教師即時以語音回覆解惑"
          ]
        }
      ]
    }
  ];

  return (
    <section className="px-[6%] md:px-[10%] py-12 md:py-24 bg-[#fcfcfc] animate-fadeInUp relative">
      {selectedDetail && <DetailModal detail={selectedDetail} onClose={() => setSelectedDetail(null)} />}

      <div className="max-w-4xl mb-16 md:mb-24">
        <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] text-deer-dark mb-1 tracking-[0.1em] font-medium">皇牌配套</h2>
        <p className="font-jost text-[0.9rem] text-deer-gold uppercase tracking-[0.4em] mb-8">The Arsenal</p>
        
        <p className="text-[1.15rem] md:text-[1.25rem] text-[#444] font-serif leading-relaxed max-w-2xl border-l-2 border-deer-gold/20 pl-6 md:pl-8">
          工欲善其事，必先利其器。我們重視教材的編製，每一份筆記都經過仔細校對，旨在為你提供最高效的溫習路徑。
        </p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-20 items-start">
        {packages.map((pkg, i) => (
          <div 
            key={i} 
            className="edu-card bg-white border border-deer-border p-8 md:p-10 relative flex flex-col group hover:border-deer-gold transition-all shadow-sm overflow-hidden min-h-full"
          >
            <div className={`absolute top-0 left-0 w-[6px] h-full bg-gradient-to-b ${pkg.accent} opacity-80`}></div>
            
            <div className="mb-8">
              <h4 className="font-serif text-[1.7rem] tracking-[0.05em] font-bold text-deer-dark leading-tight">{pkg.title}</h4>
              <p className="font-jost text-[0.9rem] text-deer-gold/60 uppercase tracking-widest mb-2">{pkg.subtitle}</p>
              <p className="font-serif text-[0.95rem] text-red-700 font-bold mt-1 tracking-wider">{pkg.courseRange}</p>
            </div>

            <div className="space-y-8 flex-grow mb-12">
              {pkg.sections.map((section, j) => (
                <div key={j} className="font-serif">
                  <h5 className="text-[1.25rem] text-red-700 font-bold mb-3 border-b border-red-700/10 pb-1">{section.heading}</h5>
                  <ul className="space-y-3">
                    {section.points.map((point, k) => (
                      <li key={k} className="text-[1.05rem] text-[#444] leading-relaxed flex gap-2">
                        <span className="text-red-700/40">-</span>
                        <span className="text-justify">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setSelectedDetail(COURSE_INTRO_DATA[pkg.key])}
              className="mt-auto w-full py-5 border-2 border-deer-gold text-deer-gold hover:bg-deer-gold hover:text-white transition-all font-serif font-bold tracking-[0.2em] text-[1rem] rounded-[2px]"
            >
              點擊查看詳情
            </button>
          </div>
        ))}
      </div>

      <div className="text-center fade-up">
        <a 
          href="https://wa.me/85261433604?text=我想查詢更多配套詳情" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-12 py-5 bg-whatsapp text-white rounded-full font-serif text-[1.1rem] tracking-[0.1em] shadow-lg hover:scale-105 transition-transform duration-300 font-medium"
        >
          <WhatsAppIcon />
          查詢完整配套清單
        </a>
      </div>
    </section>
  );
};

export default Arsenal;
