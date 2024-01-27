import React from "react";
import {
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaGift,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Ücretsiz Kargo */}
        <div className="space-y-2 text-center">
          <a href="/link-to-your-page" className="flex flex-col items-center justify-center">
            <FaTruck size="2.5em" className="text-orange-500 mb-1" />
            <h6 className="font-bold text-md">Ücretsiz Kargo</h6>
          </a>
          <p className="text-sm text-gray-600">250TL Üzeri Kargo Bedava</p>
        </div>
        {/* Kolay İade */}
        <div className="space-y-2 text-center">
          <a href="/link-to-your-page" className="flex flex-col items-center justify-center">
            <FaUndo size="2.5em" className="text-orange-500 mb-1" />
            <h6 className="font-bold text-md">Kolay İade</h6>
          </a>
          <p className="text-sm text-gray-600">14 Gün İçin de Koşulsuz Geri İade</p>
        </div>
        {/* Güvenli Alışveriş */}
        <div className="space-y-2 text-center">
          <a href="/link-to-your-page" className="flex flex-col items-center justify-center">
            <FaShieldAlt
              size="2.5em"
              className="text-orange-500 mb-1"
            />
            <h6 className="font-bold text-md">Güvenli Alışveriş</h6>
          </a>
          <p className="text-sm text-gray-600">Kartlarınız Bizimle Güvende</p>
        </div>
        {/* Özel Kutulama */}
        <div className="space-y-2 text-center">
          <a href="/link-to-your-page" className="flex flex-col items-center justify-center">
            <FaGift size="2.5em" className="text-orange-500 mb-1" />
            <h6 className="font-bold text-md">Özel Kutulama</h6>
          </a>
          <p className="text-sm text-gray-600">Zarar Görmeyecek Şekilde Paketlenir</p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Kurumsal */}
          <div>
            <h6 className="font-bold text-md mb-3">KURUMSAL</h6>
            <ul className="text-sm text-gray-600">
              <li className="mb-1">
                <a href="/about">Hakkımızda</a>
              </li>
              <li className="mb-1">
                <a href="/privacy">Gizlilik Politikası</a>
              </li>
              <li className="mb-1">
                <a href="/terms">Şartlar & Koşullar</a>
              </li>
              <li className="mb-1">
                <a href="/distance-sales">Mesafeli Satış Sözleşmesi</a>
              </li>
              <li className="mb-1">
                <a href="/cancel-return">İptal & İade Koşulları</a>
              </li>
              <li className="mb-1">
                <a href="/contact">İletişim</a>
              </li>
            </ul>
          </div>
          {/* Müşteri Hizmetleri */}
          <div>
            <h6 className="font-bold text-md mb-3">MÜŞTERİ HİZMETLERİ</h6>
            <ul className="text-sm text-gray-600">
              <li className="mb-1">
                <a href="/login">Giriş Yap</a>
              </li>
              <li className="mb-1">
                <a href="/register">Kayıt Ol</a>
              </li>
              <li className="mb-1">
                <a href="/orders">Siparişlerim</a>
              </li>
              <li className="mb-1">
                <a href="/favorites">Favori Listem</a>
              </li>
              <li className="mb-1">
                <a href="/store-application">Mağaza Başvurusu</a>
              </li>
              <li className="mb-1">
                <a href="/support">Destek Merkezi</a>
              </li>
            </ul>
          </div>
          {/* Kategoriler */}
          <div>
            <h6 className="font-bold text-md mb-3">KATEGORİLER</h6>
            <ul className="text-sm text-gray-600">
              <li className="mb-1">
                <a href="/computers-electronics">Bilgisayar & Elektronik</a>
              </li>
              <li className="mb-1">
                <a href="/fashion">Moda & Giyim</a>
              </li>
              <li className="mb-1">
                <a href="/cosmetics-personal-care">Kozmetik & Kişisel Bakım</a>
              </li>
              <li className="mb-1">
                <a href="/home-garden">Ev & Bahçe</a>
              </li>
              <li className="mb-1">
                <a href="/mother-baby">Anne & Bebek</a>
              </li>
              <li className="mb-1">
                <a href="/supermarket">Süper Market</a>
              </li>
              <li className="mb-1">
                <a href="/auto-motor">Otomobil & Motor</a>
              </li>
            </ul>
          </div>
          {/* İletişim */}
          <div>
            <h6 className="font-bold text-md mb-3">İLETİŞİM</h6>
            <div className="text-sm text-gray-600">
              <div className="mb-2">
                <FaMapMarkerAlt className="text-orange-500 mr-1 inline" />
                <span className="font-medium">
                  Deneme Mah. yukarı sokak. No:5 SAKARYA
                </span>
              </div>
              <div className="mb-2">
                <FaPhone className="text-orange-500 mr-1 inline" />
                <span className="font-medium">
                  +90 212 222 22 22
                </span>
              </div>
              <div>
                <FaEnvelope className="text-orange-500 mr-1 inline" />
                <span className="font-medium">
                  info@siteadi.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
