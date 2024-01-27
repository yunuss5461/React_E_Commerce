import React from 'react';

const brandsInfo = [
  { name: 'Mavi', logo: 'https://media.istockphoto.com/id/1385906320/tr/foto%C4%9Fraf/adidas-store-in-hong-kong.jpg?s=2048x2048&w=is&k=20&c=aMjyILv0OFNasyoKO9q75mx_dgAjvGvZCa-NQRWc1qg=' },
  { name: 'Bershka', logo: 'https://media.istockphoto.com/id/1385906320/tr/foto%C4%9Fraf/adidas-store-in-hong-kong.jpg?s=2048x2048&w=is&k=20&c=aMjyILv0OFNasyoKO9q75mx_dgAjvGvZCa-NQRWc1qg=' },
  { name: 'Sony', logo: 'https://media.istockphoto.com/id/157772033/tr/foto%C4%9Fraf/sign-of-sony-centre-in-liverpool.jpg?s=2048x2048&w=is&k=20&c=AhwrBsciqyfhK80ja1uDqKo5WcPScoyUhwWa0PJ-cvM=' },
  { name: 'Koton', logo: 'https://media.istockphoto.com/id/1385906320/tr/foto%C4%9Fraf/adidas-store-in-hong-kong.jpg?s=2048x2048&w=is&k=20&c=aMjyILv0OFNasyoKO9q75mx_dgAjvGvZCa-NQRWc1qg=' },
  { name: 'Canon', logo: 'https://media.istockphoto.com/id/675403536/tr/foto%C4%9Fraf/canon-5d-mark-iv.jpg?s=2048x2048&w=is&k=20&c=vWFbmNuKzvKOe25YZpU9l-W_UyNzNcVD7Px96E130kk=' },
  { name: 'Puma', logo: 'https://media.istockphoto.com/id/1193623124/tr/foto%C4%9Fraf/niagara-kanada-outlet-koleksiyonu-puma-vitrin.jpg?s=2048x2048&w=is&k=20&c=YDqmcYxl0E1XCME-W7SRgOxK3VLxPEYoNgCiZfDOup8=' },
  { name: 'Apple', logo: 'https://media.istockphoto.com/id/1463289142/tr/foto%C4%9Fraf/the-store-sign-of-apple-store-at-vancouver-downtown.jpg?s=2048x2048&w=is&k=20&c=9G04IKPYoAPAxOHRC0htjRZcmO9NSNlfy5Se7_mXgr0=' },
  { name: 'Penti', logo: 'https://media.istockphoto.com/id/1463289142/tr/foto%C4%9Fraf/the-store-sign-of-apple-store-at-vancouver-downtown.jpg?s=2048x2048&w=is&k=20&c=9G04IKPYoAPAxOHRC0htjRZcmO9NSNlfy5Se7_mXgr0=' },
];

const Brands = () => {
  const handleClick = (brandName) => {
  
    console.log(`${brandName} clicked`);
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {brandsInfo.map((brand, index) => (
            <div key={index} 
              className="flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => handleClick(brand.name)}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center border border-gray-300 overflow-hidden">
                <img src={brand.logo} alt={brand.name} className="h-full w-full object-cover" />
              </div>
              <span className="text-xs mt-2 text-center">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;