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
      className="grid grid-flow-row w-full p-0 bg-white-purple rounded-3xl shadow-md"
      style={{
        gridTemplateRows: '200px 250px auto',
      }}
    >
      {/* Image Section */}
      <div className="w-full h-full relative mb-5 flex items-center justify-center">
        <img
          src={imgUrl}
          alt="content-img"
          className="w-[80%] object-contain absolute bottom-0"
          style={imageStyle}
          />
      </div>

      {/* Content Section */}
      <div className="mx-10 ">
        <p className="text-[30px] font-extrabold">{title}</p>
        <h1 className="font-extralight text-[18px] my-3 text-balance">{description}</h1>
      </div>

      {/* Footer */}
      <div className="flex flex-row p-10">
        <a href={actionLink} className='cursor-pointer underline text-catacean-blue font-bold'> Learn more </a>
      </div>
    </div>
  );
};

export default ShortcutCard;