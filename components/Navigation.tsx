import React, { useState } from 'react';
import { Page } from '../types';
import { Icons } from '../constants';
import Logo from './Logo';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', value: Page.HOME },
    { label: 'A Empresa', value: Page.ABOUT },
    { label: 'Serviços', value: Page.SERVICES },
    { label: 'Qualidade', value: Page.QUALITY },
    { label: 'Contato', value: Page.CONTACT },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between md:justify-center md:gap-12">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick(Page.HOME)} 
          className="flex items-center focus:outline-none"
        >
          <Logo />
        </button>
          
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 
                ${currentPage === item.value 
                  ? 'text-fabricio-blue border-b-2 border-fabricio-yellow' 
                  : 'text-gray-500 hover:text-fabricio-blue'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
              onClick={() => handleNavClick(Page.CAREERS)}
              className="bg-fabricio-blue text-white px-5 py-2 rounded font-bold uppercase text-xs hover:bg-blue-900 transition-colors shadow-lg"
          >
              Trabalhe Conosco
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-fabricio-blue focus:outline-none p-2"
          >
            {isOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl top-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium 
                  ${currentPage === item.value 
                    ? 'bg-fabricio-blue text-white' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-fabricio-blue'}`}
              >
                {item.label}
              </button>
            ))}
            <button
                onClick={() => handleNavClick(Page.CAREERS)}
                className="block w-full text-left px-3 py-4 rounded-md text-base font-bold bg-fabricio-yellow text-fabricio-blue"
              >
                Trabalhe Conosco
              </button>
          </div>
        </div>
      )}
    </header>
  );
};