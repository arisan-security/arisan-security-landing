import React from 'react';

interface PostCardProps {
  title: string;
  author: string;
  imgUrl: string;
  actionLink: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, author, imgUrl, actionLink}) => {
  return (
    <div
      className="grid grid-flow-row min-h-[300px] md:w-[unset] p-0 bg-white-purple rounded-xl shadow-md overflow-hidden"
      style={{
        gridTemplateRows: '140px 140px auto',
      }}
    >
      {/* Image Section */}
      <div className="w-full h-[120px] relative mb-5 flex items-center justify-center overflow-hidden">
        <img
          src={imgUrl}
          alt="article-img"
          className="w-full object-fill object-center"
        />
      </div>

      {/* Content Section */}
      <div className="mx-5 mb-5">
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