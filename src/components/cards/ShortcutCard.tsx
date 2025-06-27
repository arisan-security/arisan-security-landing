import React from 'react';

interface ShortcutCardProps {
  title: string;
  description: string;
  imgUrl: string;
  actionLink: string;
  imageStyle: {};
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ title, description, imgUrl, actionLink, imageStyle }) => {
  return (
    <div
      className="flex flex-col w-full bg-white-purple rounded-3xl shadow-md min-h-[420px] h-full"
    >
      {/* Image Section */}
      <div className="w-full h-40 md:h-52 relative mb-5 flex items-center justify-center flex-shrink-0">
        <img
          src={imgUrl}
          alt="content-img"
          className="w-[80%] object-contain absolute bottom-0"
          style={imageStyle}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 mx-6 md:mx-10 flex flex-col justify-center">
        <p className="text-[22px] md:text-[30px] font-extrabold">{title}</p>
        <h1 className="font-extralight text-[16px] md:text-[18px] my-3 text-balance">{description}</h1>
      </div>

      {/* Footer */}
      <div className="flex flex-row p-6 md:p-10 mt-auto">
        <a href={actionLink} className='cursor-pointer underline text-catacean-blue font-bold' target="_blank" rel="noopener noreferrer"> Learn more </a>
      </div>
    </div>
  );
};

export default ShortcutCard;