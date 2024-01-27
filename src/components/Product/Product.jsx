import React from 'react';

const Product = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sol Üst Banner */}
            <a href="#" className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-blue-500 bg-opacity-60 flex items-center p-4 md:p-8">
                <div className="text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">Cep Telefonu Fırsatları</p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mt-2 drop-shadow-lg">SAMSUNG</p>
                </div>
              </div>
              <img 
                src="https://media.istockphoto.com/id/1497968983/tr/foto%C4%9Fraf/samsung-s23-ultra-mobile-phone-with-galaxy-watch-on-it-over-rustic-wood-selective-focus.jpg?s=2048x2048&w=is&k=20&c=KBIPi_--AEE8rSOjWIuvBPHWuyZ-3OA38Zi8yx3GfKc=" 
                alt="Samsung Phone"
                className="object-cover w-full h-48 md:h-full group-hover:opacity-80 transition duration-300"
              />
            </a>
            
            {/* Sağ Üst Banner */}
            <a href="#" className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-orange-500 bg-opacity-60 flex items-center p-4 md:p-8">
                <div className="text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">Sepette %55 İNDİRİM</p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mt-2 drop-shadow-lg">RodiJeans</p>
                </div>
              </div>
              <img 
                src="https://media.istockphoto.com/id/1614207049/tr/foto%C4%9Fraf/stack-of-different-jeans-on-wooden-table-and-grey-background.jpg?s=2048x2048&w=is&k=20&c=UHbI7LWYRUhpE7O3_lchbUNEbDnptCK6LHfRpXgLNJM=" 
                alt="Fashion Offer"
                className="object-cover w-full h-48 md:h-full group-hover:opacity-80 transition duration-300"
              />
            </a>
    
            {/* Sol Alt Banner */}
            <a href="#" className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-purple-500 bg-opacity-60 flex items-center p-4 md:p-8">
                <div className="text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">Robot Süpürge Fırsatları</p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mt-2 drop-shadow-lg">Toplam 500 TL MaxiPuan</p>
                </div>
              </div>
              <img 
                src="https://media.istockphoto.com/id/1718769024/tr/foto%C4%9Fraf/banner-with-a-robot-vacuum-cleaner-the-robot-vacuum-cleaner-cleans-the-room.jpg?s=2048x2048&w=is&k=20&c=0PWbqyfEH4d8EQLMOoRsuOsfNGWTcEA2DRxrTMD2QEc=" 
                alt="Robot Vacuum"
                className="object-cover w-full h-48 md:h-full group-hover:opacity-80 transition duration-300"
              />
            </a>
            
            {/* Sağ Alt Banner */}
            <a href="#" className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-pink-500 bg-opacity-60 flex items-center p-4 md:p-8">
                <div className="text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">Sevgililer Gününe Özel</p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mt-2 drop-shadow-lg">Çok Satan Kadın Çantaları</p>
                </div>
              </div>
              <img 
                src="https://media.istockphoto.com/id/615511272/tr/foto%C4%9Fraf/colorful-bags-and-purses-isolated-on-purple-background-with-copyspace.jpg?s=2048x2048&w=is&k=20&c=DpHzlv4QODEHaXBFBZwrl_PUMwOrPqxDzJBphzrUcwI=" 
                alt="Women's Bags"
                className="object-cover w-full h-48 md:h-full group-hover:opacity-80 transition duration-300"
              />
            </a>
          </div>
        </div>
    );
};

export default Product;
