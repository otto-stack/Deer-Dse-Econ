
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-[60px] px-[20px] text-[0.7rem] text-deer-accent bg-deer-bg border-t border-deer-border font-jost tracking-[0.1em] uppercase">
      <p>&copy; {new Date().getFullYear()} DEER DSE ECON. All Rights Reserved.</p>
      <p className="mt-[10px] opacity-60 italic">Committed to Educational Excellence.</p>
    </footer>
  );
};

export default Footer;
