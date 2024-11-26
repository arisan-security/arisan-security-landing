import React from 'react';
import PropTypes from 'prop-types';

interface UniversalCardPropTypes {
    title: string, 
    author: string,
    description: string,
    imgUrl: string,
    contentUrl: string,
    isArticle: boolean
}

const UniversalCard: React.FC<UniversalCardPropTypes> = ({title, author, description, imgUrl, contentUrl, isArticle}) => {
  return (
    <div className={`flex flex-col ${isArticle? 'w-full min-h-[300px] md:w-[unset]' : 'w-full h-[400px]'} p-8 bg-white-purple rounded-xl shadow-md `}>
        <div className='w-full h-[60%] relative'>
            <img src={imgUrl} alt="shortcut-img" className='w-full object-contain absolute bottom-0' />
        </div>
        UniversalCard
    </div>
  )
}

export default UniversalCard;

UniversalCard.defaultProps = {
    title: '',
    author: '',
    description: '',
    imgUrl: '',
    contentUrl: '',
    isArticle: false
}