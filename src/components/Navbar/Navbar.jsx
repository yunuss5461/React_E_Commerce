import React, { useState } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [favoriteItemCount, setFavoriteItemCount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <div className="container mx-auto">
      <nav className="bg-white shadow px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://media.istockphoto.com/id/1492030887/tr/vekt%C3%B6r/st-letter-logo-alphabet-design.jpg?s=2048x2048&w=is&k=20&c=TenueMW7qZ5ROLQd6UnRvsEw6md5YOZI4RUuXywgoUI="
            alt="Logo"
            className="h-8 mr-2"
          />
        </a>

        {/* Arama Çubuğu */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-10 text-sm placeholder-gray-600 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          />
          <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-500 focus:outline-none">
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

       
        <div className="hidden md:flex items-center space-x-6">
          <a href="/account" className="flex flex-col items-center hover:text-orange-500">
            <FiUser className="w-5 h-5" />
            <span className="text-xs">Hesabınız</span>
          </a>
          <a href="/favorites" className="flex flex-col items-center hover:text-orange-500">
            <FiHeart className="w-5 h-5" />
            <span className="text-xs">Favorilerim</span>
          </a>
          <a href="/cart" className="flex flex-col items-center relative hover:text-orange-500">
            <FiShoppingCart className="w-5 h-5" />
            <span className="text-xs">Sepetim</span>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </a>
        </div>

        
        <div className="flex md:hidden items-center space-x-3">
          <a href="/account">
            <FiUser className="w-5 h-5 text-gray-600" />
          </a>
          <a href="/favorites" className="relative">
            <FiHeart className="w-5 h-5 text-gray-600" />
            {favoriteItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {favoriteItemCount}
              </span>
            )}
          </a>
          <a href="/cart" className="relative">
            <FiShoppingCart className="w-5 h-5 text-gray-600" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
