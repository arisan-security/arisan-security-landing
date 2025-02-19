import React from "react";

interface ProgramCardProps {
 img: string;
 title: string;
 description: string
}

const ProgramCard: React.FC<ProgramCardProps> = ({img, title, description }) => {
    return (
        <div className="w-full bg-white-purple rounded-3xl px-12 py-12">
            <div className="">
              <div className="w-full flex justify-center max-w-[150px] mx-auto max-h-[150px] object-contain"><img src={img}/></div>
              <h2 className="text-balance text-black font-bold text-3xl pb-4 pt-8">{title}</h2>
              <p className="text-balance text-black font-normal">{description}</p>
            </div>
          </div>
    );
}

export default ProgramCard;