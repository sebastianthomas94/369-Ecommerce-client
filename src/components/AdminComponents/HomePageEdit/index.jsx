import React, { useState } from 'react';

const BannerUpload = ({ bannerType }) => {
  const [banners, setBanners] = useState([{ image: '', link: '' }, { image: '', link: '' }, { image: '', link: '' }]);

  const handleInputChange = (index, type, value) => {
    const newBanners = [...banners];
    newBanners[index][type] = value;
    setBanners(newBanners);
  };

  return (
    <div className="mb-8 w-1/2 px-4">
      <h2 className="text-xl font-bold mb-4">{bannerType} Banners</h2>
      {banners.map((banner, index) => (
        <div key={index} className="mb-4">
          <label className="flex flex-col mb-2">
            Banner {index + 1} Image:
            <input 
              type="file" 
              className="w-full mt-2 p-2 border rounded" 
              onChange={(e) => handleInputChange(index, 'image', e.target.files[0])}
            />
          </label>
          <label className="flex flex-col mb-2">
            Redirect Link:
            <input 
              type="text" 
              className="w-full mt-2 p-2 border rounded" 
              value={banner.link} 
              onChange={(e) => handleInputChange(index, 'link', e.target.value)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

const MainBar = () => {
  return (
    <div className="p-8 flex">
      <BannerUpload bannerType="Primary" />
      <BannerUpload bannerType="Secondary" />
    </div>
  );
};

export default MainBar;
