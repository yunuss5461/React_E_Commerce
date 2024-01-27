import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const products = {
  cokSatanlar: [

    {
      id: 1,
      name: "Apple iPhone 13 128 GB",
      image:
        "https://media.istockphoto.com/id/513419717/tr/foto%C4%9Fraf/home-appliance.jpg?s=2048x2048&w=is&k=20&c=Kj5NClQ8b35Fv6fiCzyi9MpvguOIULQVYASV6Om2KI8=",
      description:
        "Apple iPhone 13 128 GB Yıldız Işığı Cep Telefonu (Apple Türkiye Garantili)",
      price: "₺76.354,00",
    },
    {
      id: 2,
      name: "Xiaomi Redmi 12 128 GB",
      image:
        "https://media.istockphoto.com/id/1476870691/tr/foto%C4%9Fraf/modern-minimalist-scandinavian-bathroom.jpg?s=2048x2048&w=is&k=20&c=YVDQMRNZYS3GqZl3pyW1TJCwpurTNK2iM2AceLqn390=",
      description:
        "Xiaomi Redmi 12 128 GB 8 GB RAM Gümüş Cep Telefonu (Xiaomi Türkiye Garantili)",
      price: "₺35.250,00",
    },
    {
      id: 3,
      name: "Samsung Galaxy A34 5G 128 GB",
      image:
        "https://media.istockphoto.com/id/1091474790/tr/foto%C4%9Fraf/robot-elektrikli-s%C3%BCp%C3%BCrge-oturan-ve-komik-yukar%C4%B1-seyir-sevimli-tekir-kedi.jpg?s=2048x2048&w=is&k=20&c=B3BvauqJNa3ZRapoanvTCLZwSrhs1fxcvk-EzIL0RZg=",
      description:
        "Samsung Galaxy A34 5G 128 GB Siyah Cep Telefonu (Samsung Türkiye Garantili)",
      price: "₺24.200,00",
    },
    {
      id: 4,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/511991248/tr/vekt%C3%B6r/smartphone-with-app-icons.jpg?s=2048x2048&w=is&k=20&c=Hde2GtfnUKvvNL8P3B0ysbvQKJksPcXGs07jyH5ZRuU=",
      description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
      price: "₺658,00",
    },
    {
      id: 5,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/1650381861/tr/vekt%C3%B6r/realistic-black-vector-3d-computer-mouse.jpg?s=2048x2048&w=is&k=20&c=fhuS57v6mI928EHqsC4frfXRO2uY_0J8U9ffX2QF6oQ=",
      description: "JBL T560bt Kulak Üstü Bluetooth",
      price: "₺855,00",
    },
    {
      id: 6,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/1412532125/tr/foto%C4%9Fraf/3d-swing.jpg?s=2048x2048&w=is&k=20&c=d9cYf7oG2xXYguaLA7oxlQPOzJ30JgiUnXRI_3FAr4I=",
      description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
      price: "₺1.285,00",
    },
    {
      id: 7,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/926239100/tr/foto%C4%9Fraf/siyah-klasik-i%C3%A7.jpg?s=2048x2048&w=is&k=20&c=O4NMNY046uNCtxvKx22Rsuk7nAxrF4KWZ_FqQudNQgI=",
      description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
      price: "₺1.285,00",
    },
    {
      id: 8,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/499602835/tr/foto%C4%9Fraf/modern-laptop-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=YdvxwpVDrsi-LlUvim-eFyeBDm_X6AvxGCUTjISgd8o=",
      description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
      price: "₺1.285,00",
    },
    {
      id: 9,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/1842489163/tr/foto%C4%9Fraf/cart-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=cBcSvcyz0S823MozGth3_mAWO0rDuBqLx7TuxQLjjVU=",
      description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
      price: "₺1.285,00",
    },
    {
      id: 10,
      name: "JBL T560bt Kulak Üstü Bluetooth",
      image:
        "https://media.istockphoto.com/id/891118484/tr/vekt%C3%B6r/parlak-ekranl%C4%B1-diz%C3%BCst%C3%BC.jpg?s=2048x2048&w=is&k=20&c=9amEDJf6XhXUVIWpjpFAHbFmYftfrWOXquVuenTocLs=",
      description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
      price: "₺1.285,00",
    },

  ],
  populerUrunler: [

    {
      id: 11,
      name: "Philips MG3710/15 Multigroom 3000 Series",
      image:
        "https://media.istockphoto.com/id/1280791268/tr/foto%C4%9Fraf/siyah-mutfak-aletleri-seti-%C3%A7ama%C5%9F%C4%B1r-makinesi-buzdolab%C4%B1-gaz-aral%C4%B1%C4%9F%C4%B1-mikrodalga-f%C4%B1r%C4%B1n-k%C4%B1yma.jpg?s=2048x2048&w=is&k=20&c=KXshEz2Ksl5PdiecRak7WVHsm9VLvfEz0nw82WudAaw=",
      description:
        "Philips MG3710/15 Multigroom 3000 Series 6 in 1 Erkek Bakım Kiti",
      price: "₺859,00",
    },
    {
      id: 12,
      name: "Ürün 6",
      image:
        "https://media.istockphoto.com/id/1246138278/tr/foto%C4%9Fraf/beyaz-arka-planda-izole-havada-g%C3%BCm%C3%BC%C5%9F-metalik-beyaz-kablosuz-kulakl%C4%B1klar-m%C3%BCzik-cihaz%C4%B1-u%C3%A7an.jpg?s=2048x2048&w=is&k=20&c=i67IdN_XDCvVR6Pg0dcbvI_AK9VbiuSCHOZQCxWAhnk=",
      description: "Açıklama 6",
      price: "₺150,00",
    },
    {
      id: 13,
      name: "Ürün 225",
      image:
        "https://media.istockphoto.com/id/514927944/tr/vekt%C3%B6r/vector-blue-headphones.jpg?s=2048x2048&w=is&k=20&c=6LEIwx2FtpXa3S_XiMwWYRPi1HkRdbYPrutcPHMqhUk=",
      description: "Açıklama 6",
      price: "₺150,00",
    },
    {
      id: 14,
      name: "Ürün 6",
      image:
        "https://media.istockphoto.com/id/1924279278/tr/foto%C4%9Fraf/assortment-of-electrical-equipment-and-tools-with-open-space-for-customized-text.jpg?s=2048x2048&w=is&k=20&c=1rov59J9NGdXl4DpgK78aOxll2yssL0BBir1xlLAivE=",
      description: "Açıklama 6",
      price: "₺150,00",
    },
    {
      id: 15,
      name: "Ürün 6",
      image:
        "https://media.istockphoto.com/id/516075586/tr/vekt%C3%B6r/vector-black-headphones.jpg?s=2048x2048&w=is&k=20&c=6gqaSBhAZP5Ba2aasDYic7QqQLCpsY5Qbmwj8H8TU_c=",
      description: "Açıklama 6",
      price: "₺150,00",
    },
    {
      id: 16,
      name: "Universal P68 Bluetooth Kablosuz",
      image:
        "https://media.istockphoto.com/id/173752380/tr/foto%C4%9Fraf/black-notebook.jpg?s=2048x2048&w=is&k=20&c=f3kPT3wcqxx8GFSMIytIorBPW7-97JO-cbRBfvLN2_8=",
      description: "Açıklama 6",
      price: "₺549,00",
    },
    {
      id: 17,
      name: "Universal P68 Bluetooth Kablosuz",
      image:
        "https://media.istockphoto.com/id/1069977938/tr/foto%C4%9Fraf/izole-beyaz-bir-arka-plan-%C3%BCzerinde-beyaz-diz%C3%BCst%C3%BC-bilgisayar.jpg?s=2048x2048&w=is&k=20&c=K0mYRV2ClMgb8xk1hnfCX9MrG6gbQxPxoXrmDdLPl94=",
      description: "Açıklama 6",
      price: "₺549,00",
    },
    {
      id: 18,
      name: "Universal P68 Bluetooth Kablosuz",
      image:
        "https://media.istockphoto.com/id/1391258485/tr/vekt%C3%B6r/realistic-wireless-earphones-of-trendy-color.jpg?s=2048x2048&w=is&k=20&c=rK96xVKJOXUUEJEIm7pNC4g0VpzNzcPRXovGm2vCVSQ=",
      description: "Açıklama 6",
      price: "₺549,00",
    },
    {
      id: 19,
      name: "Universal P68 Bluetooth Kablosuz",
      image:
        "https://media.istockphoto.com/id/172960307/tr/foto%C4%9Fraf/wardrobe-2.jpg?s=2048x2048&w=is&k=20&c=ePTGGPsmYHxWpIPKZRDK0XElVCUuVgax20fp-xumKoM=",
      description: "Açıklama 6",
      price: "₺549,00",
    },
    {
      id: 20,
      name: "Universal P68 Bluetooth Kablosuz",
      image:
        "https://media.istockphoto.com/id/924200962/tr/foto%C4%9Fraf/banyo-mobilyalar%C4%B1.jpg?s=2048x2048&w=is&k=20&c=aLXeCzZs1AVoy1uVEoyWMHJT1NIlpGMxzqKf8LWpPcc=",
      description: "Açıklama 6",
      price: "₺549,00",
    },


  ],
};

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <div className="flex flex-col w-full mx-auto overflow-hidden shadow-lg my-4 rounded-lg">
      <div className="flex-1">
        <img
          className="object-contain w-full h-48 rounded-t-lg"
          src={product.image}
          alt={product.name}
        />
        <div className="p-4">
          <h3 className="text-md sm:text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            {product.description}
          </p>
          <div className="text-md sm:text-lg text-indigo-600 font-bold my-2">
            {product.price}
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2 items-center justify-center mb-2">
          <button
            onClick={decrementQuantity}
            className="text-red-600 bg-red-100 hover:bg-red-200 rounded-full p-2 shadow hover:shadow-lg transition duration-300"
          >
            <FaMinus className="h-2 w-4" />{" "}
       
          </button>

          <span className="text-lg font-semibold">{quantity}</span>

          <button
            onClick={incrementQuantity}
            className="text-green-600 bg-green-100 hover:bg-green-200 rounded-full p-2 shadow hover:shadow-lg transition duration-300"
          >
            <FaPlus className="h-2 w-4" />{" "}
        
          </button>
        </div>
        <button className="bg-blue-600 w-full text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};


const Sales = () => {
  const [activeTab, setActiveTab] = useState("cokSatanlar");
 

  return (
    <div className="container mx-auto px-4">
      <div className="tabs flex justify-center space-x-4 my-4">
        <h2
          className={`tab cursor-pointer ${
            activeTab === "cokSatanlar"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("cokSatanlar")}
        >
          ÇOK SATANLAR
        </h2>
        <h2
          className={`tab cursor-pointer ${
            activeTab === "populerUrunler"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("populerUrunler")}
        >
          POPÜLER ÜRÜNLER
        </h2>
      </div>
      <div className="underline-bar  h-1 w-20 mb-4 mx-auto" />
      <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products[activeTab].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
