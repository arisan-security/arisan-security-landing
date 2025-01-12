import React from 'react';

interface ShortcutCardProps {
  title: string;
  description: string;
  imgUrl: string;
  actionLink: string;
}

const ShortcutCard: React.FC<ShortcutCardProps> = ({ title, description, imgUrl, actionLink }) => {
  return (
    <div
      className="grid grid-flow-row w-full p-0 bg-white-purple rounded-xl shadow-md"
      style={{
        gridTemplateRows: '170px 150px auto',
      }}
    >
      {/* Image Section */}
      <div className="w-full h-[150px] relative mb-5 flex items-center justify-center">
        <img
          src={imgUrl}
          alt="content-img"
          className="w-[80%] object-contain absolute bottom-0"
        />
      </div>

      {/* Content Section */}
      <div className="mx-5 mb-5">
        <p className="text-[24px] font-extrabold">{title}</p>
        <h1 className="font-extralight text-[14px] my-3">{description}</h1>
      </div>

      {/* Footer */}
      <div className="flex flex-row p-5">
        <a href={actionLink}> Learn more </a>
      </div>
    </div>
  );
};

export default ShortcutCard;