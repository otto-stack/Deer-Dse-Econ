
import React, { useState } from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  isScrolled: boolean;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isScrolled, 
  currentView, 
  onNavigate, 
  onAboutClick, 
  onContactClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  const navItemClasses = (isActive: boolean) => `
    w-full lg:w-auto text-center py-5 lg:py-0 block lg:inline-block 
    text-[1.1rem] lg:text-[1rem] transition-all duration-500 font-serif 
    border-b border-gray-50 lg:border-none relative group
    ${isActive ? 'text-deer-gold font-semibold' : 'text-deer-text opacity-75 hover:opacity-100 hover:text-deer-gold hover:-translate-y-0.5'}
  `;

  const underlineClasses = (isActive: boolean) => `
    hidden lg:block absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[1px] 
    bg-deer-gold transition-all duration-500 ease-in-out
    ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
  `;

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[80px] md:h-[90px] px-[6%] flex justify-between items-center z-[1000] transition-all duration-500 ${
        isScrolled ? 'bg-deer-bg/98 backdrop-blur-[8px] border-b border-deer-border shadow-sm' : 'bg-deer-bg border-b border-transparent'
      }`}
    >
      <div 
        className="flex items-center gap-[12px] cursor-pointer group" 
        onClick={() => handleNavClick(() => onNavigate(ViewType.MAIN))}
      >
        <div className="overflow-hidden rounded-full h-[36px] md:h-[40px] w-auto">
          <img 
            src="brand-logo.jpg" 
            alt="DEER ECON Logo" 
            className="h-full w-auto mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>
        <div className="font-serif font-medium text-[1rem] md:text-[1.2rem] tracking-[0.05em] text-deer-text group-hover:text-deer-gold transition-colors duration-500 flex flex-col md:flex-row md:items-center md:gap-3">
          <span>DEER DSE ECON</span>
          <span className="text-[0.65em] font-light opacity-60 md:border-l md:border-deer-gold/30 md:pl-3">經濟補習</span>
        </div>
      </div>

      <div 
        className="mobile-menu-btn lg:hidden cursor-pointer text-[1.4rem] p-2 hover:text-deer-gold transition-colors" 
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"></path></svg>
        )}
      </div>

      <nav 
        className={`absolute lg:static top-[100%] left-0 w-full lg:w-auto bg-white lg:bg-transparent border-b lg:border-none border-deer-border transition-all duration-500 ease-in-out overflow-hidden lg:overflow-visible ${
          isMenuOpen ? 'max-h-[500px] opacity-100 py-4 shadow-xl lg:shadow-none' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'
        }`}
      >
        <ul className="flex flex-col lg:flex-row list-none gap-0 lg:gap-[40px] p-0 items-center">
          {[
            { label: '關於我們', action: onAboutClick },
            { label: '課程配套', view: ViewType.ARSENAL },
            { label: '教學流程', view: ViewType.PROCESS },
            { label: '聯絡我們', action: onContactClick },
            { label: '章程', href: 'https://drive.google.com/drive/folders/1z9GjfF39lgeY5a62ftaZaMF7OIo1niHN?usp=sharing', isExternal: true }
          ].map((item, idx) => (
            <li key={idx} className="w-full lg:w-auto">
              {item.isExternal ? (
                <a 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navItemClasses(false)}
                >
                  {item.label}
                  <span className={underlineClasses(false)}></span>
                </a>
              ) : (
                <button 
                  onClick={() => handleNavClick(item.action || (() => onNavigate(item.view!)))}
                  className={navItemClasses(item.view === currentView)}
                >
                  {item.label}
                  <span className={underlineClasses(item.view === currentView)}></span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
