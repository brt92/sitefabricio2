import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../constants';
import { Page } from '../types';

interface FooterProps {
    setPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-fabricio-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg inline-block">
                <Logo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Referência nacional em micronização e beneficiamento de plásticos pós-indústria. Tecnologia e sustentabilidade no coração do III Polo Petroquímico.
            </p>
            <p className="text-xs text-gray-500">CNPJ: {COMPANY_INFO.cnpj}</p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-fabricio-yellow pl-3">Contato</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start"><span className="font-semibold text-white mr-2">Endereço:</span>{COMPANY_INFO.address}</li>
              <li className="flex items-center"><span className="font-semibold text-white mr-2">Telefone:</span>{COMPANY_INFO.phone}</li>
              <li className="flex items-center"><span className="font-semibold text-white mr-2">Email:</span><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-fabricio-yellow">{COMPANY_INFO.email}</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-fabricio-yellow pl-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setPage(Page.ABOUT)} className="hover:text-fabricio-yellow transition-colors">Sobre a Empresa</button></li>
              <li><button onClick={() => setPage(Page.SERVICES)} className="hover:text-fabricio-yellow transition-colors">Serviços e Soluções</button></li>
              <li><button onClick={() => setPage(Page.CAREERS)} className="hover:text-fabricio-yellow transition-colors">Trabalhe Conosco</button></li>
              <li className="pt-4 mt-4 border-t border-gray-700 opacity-50">
                  <button onClick={() => setPage(Page.ADMIN_LOGIN)} className="text-xs uppercase tracking-tighter hover:text-white">Acesso Restrito</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fabrício Indústria Petroquímica Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};