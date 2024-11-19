import React, { useState } from 'react';

const LanguageSwitch: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    // setIsEnglish(!isEnglish);
  };

  return (
    <div onClick={toggleLanguage}
      className="flex items-center justify-between rounded-[11px] h-[23px] w-[47px] border-solid border relative">
      {/* ANIMATED THIS CIRCLE TO THE RIGHT OR LEFT LIKE A SWITCH BUTTON */}
      <div className={`absolute z-0 w-[19px] h-[19px] rounded-full bg-white left-[1px] text-[10px] flex items-center justify-center transition-transform duration-300 ${isEnglish ? 'translate-x-[24px]' : 'translate-x-[0px]'}`}></div>
      <div className={`text-[10px] !z-10 ${isEnglish ? 'text-white ml-2' : 'text-black ml-[6px]'}`}>
        ID
      </div>
      <div className={`text-[10px] !z-10 transition-transform duration-300 ${!isEnglish ? 'text-white mr-2' : 'text-black mr-1'}`}>
        EN
      </div>
    </div>
  );
};

export default LanguageSwitch;