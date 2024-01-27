import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';


// Örnek ürün verileri
const yeniUrunler = [
  // Verdiğiniz ürün örnekleri eklenmiştir.
  {
    id: 5,
    name: "JBL T560bt Kulak Üstü Bluetooth",
    image:
      "https://media.istockphoto.com/id/1650381861/tr/vekt%C3%B6r/realistic-black-vector-3d-computer-mouse.jpg?s=2048x2048&w=is&k=20&c=fhuS57v6mI928EHqsC4frfXRO2uY_0J8U9ffX2QF6oQ=",
    description: "JBL T560bt Kulak Üstü Bluetooth Kulaklık 0001909754004",
    price: "₺754,00",
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

];

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
  
    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
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
              {/* Eksi İkonunun Boyutu Küçültüldü */}
            </button>
  
            <span className="text-lg font-semibold">{quantity}</span>
  
            <button
              onClick={incrementQuantity}
              className="text-green-600 bg-green-100 hover:bg-green-200 rounded-full p-2 shadow hover:shadow-lg transition duration-300"
            >
              <FaPlus className="h-2 w-4" />{" "}
              {/* Artı İkonunun Boyutu Küçültüldü */}
            </button>
          </div>
          <button className="bg-blue-600 w-full text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
            Sepete Ekle
          </button>
        </div>
      </div>
    );
  };

  const New_Product = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="flex justify-center my-4">
          <h2 className="text-xl text-orange-500 py-2">
            YENİ ÜRÜNLER
          </h2>
        </div>
        {/* Grid düzeni - mobilde 2, tablet ve üzerinde 3, büyük ekranlarda 4 sütun */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {yeniUrunler.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default New_Product;
