import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { RiContactsFill } from 'react-icons/ri';
import { FiFolderPlus } from 'react-icons/fi';
import { LiaTelegramPlane } from 'react-icons/lia';
import { IoSettingsOutline } from 'react-icons/io5';

const LeftNav = () => {
  return (
    <div className="w-full xl:w-[5vw] xl:h-[100%] relative bg-slate-100 top-0 flex xl:flex-col justify-evenly items-center p-2 xl:p-4">
      <div className="">
        <CiLocationArrow1 size={40} />
      </div>

      <div className="bg-slate-500 rounded-md p-1">
        <RiContactsFill size={15} />
      </div>

      <div className="flex xl:flex-col  gap-3">
        <RiContactsFill size={23} className="bg-slate-500 rounded-md p-1" />
        <LiaTelegramPlane size={23} />
        <FiFolderPlus size={21} />
        <FiFolderPlus size={21} />
      </div>

      <div>
        <IoSettingsOutline size={21} />
      </div>
    </div>
  );
};

export default LeftNav;
