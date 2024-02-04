import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mx-auto">
      {/* Mobil Menü Açma/Kapama Butonu */}
      <div className="sm:hidden flex justify-end bg-gradient-to-r from-pink-500 to-orange-500 p-2">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX className="text-white w-6 h-6" /> : <FiMenu className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Mobil Menü */}
      <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gradient-to-r from-pink-500 to-orange-500 p-4 z-50`}>
        {/* Menü Öğeleri */}
        <a href="#elektronik" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">ELEKTRONIK</a>
          <a href="#moda-giyim" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">MODA & GIYIM</a>
          <a href="#ev-yasam" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">EV & YAŞAM</a>
          <a href="#oto-bahce" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">OTO & BAHÇE</a>
          <a href="#anne-bebek" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">ANNE & BEBEK</a>
          <a href="#kozmetik-bakim" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">KOZMETIK & BAKIM</a>
          <a href="#kitap-film-muzik" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">KITAP, FILM & MUZIK</a>
          <a href="#super-market" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">SÜPER MARKET</a>
          <a href="#spor-outdoor" className="block hover:text-orange-200 transition-colors duration-150 py-2 text-base">SPOR & OUTDOOR</a>
        
        {/* Diğer menü öğeleri */}
      </div>

      {/* Normal Görünüm */}
      <div className="hidden sm:flex justify-around items-center bg-gradient-to-r from-pink-500 to-orange-500 p-2">
        {/* Normal Görünümdeki Menü */}
        <a href="#elektronik" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">ELEKTRONIK</a>
        <a href="#moda-giyim" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">MODA & GIYIM</a>
        <a href="#ev-yasam" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">EV & YAŞAM</a>
        <a href="#oto-bahce" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">OTO & BAHÇE</a>
        <a href="#anne-bebek" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">ANNE & BEBEK</a>
        <a href="#kozmetik-bakim" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">KOZMETIK & BAKIM</a>
        <a href="#kitap-film-muzik" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">KITAP, FILM & MUZIK</a>
        <a href="#super-market" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">SÜPER MARKET</a>
        <a href="#spor-outdoor" className="hover:text-orange-200 transition-colors duration-150 py-2 text-xs sm:text-sm md:text-base">SPOR & OUTDOOR</a>

      </div>
    </div>
  );
};

export default Menu;


