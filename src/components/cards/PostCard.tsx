import React from 'react';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  author: string;
  imgUrl: string;
  actionLink: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, author, imgUrl, actionLink}) => {
  return (
    <div
      className="grid grid-flow-row grid-template-rows:120px_80px_20px min-h-[240px] md:[grid-template-rows:140px_140px_auto] md:min-h-[280px] md:w-[unset] p-0 bg-white-purple rounded-xl shadow-md overflow-hidden"
    >
      {/* Image Section */}
      <div className="w-full h-[120px] relative mb-5 flex items-center justify-center overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          unoptimized
          className="object-fill object-center"
          sizes="280px"
        />
      </div>

      {/* Content Section */}
      <div className="mx-5 mb-5 h-[80px] md:h-unset ">
        <h3 className="font-medium text-[12px] mb-2">{author}</h3>
        <p className="text-[12px] font-extrabold">{title}</p>
      </div>

      {/* Footer */}
      <div className="flex flex-row p-5 justify-end">
        <a href={actionLink} className='underline text-[12px]'> Read more </a>
      </div>
    </div>
  );
};

export default PostCard;