import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { MdArrowDropDown } from "react-icons/md";
import { FcBriefcase } from "react-icons/fc";
import { Button } from '.';


export default function Filters() {
  return (
    <div className="flex md:justify-between justify-end gap-2 border-b  border-bordergray pb-4 px-4 ">
    <div className="flex  space-x-4 items-center ">
      <Button
        title={`All filters`}
        leftIcon={<VscSettings />}
        className={`flex items-center px-5 border border-bordergray  rounded-full py-1 space-x-1 hover:bg-hoverGray`}
      />
      <Button
        title={`People`}
        rightIcon={<MdArrowDropDown size={25} color="white" />}
        className={` items-center px-4 border-none rounded-full py-1 space-x-1 bg-purple lg:flex hidden`}
        textStyle={`text-white`}
      />
      <Button
        title={`Locations`}
        rightIcon={<MdArrowDropDown size={25} color="white" />}
        className={`lg:flex hidden border-none items-center px-4 border rounded-full py-1 space-x-1 bg-purple `}
        textStyle={`text-white`}
      />
      <Button
        title={`Seniority`}
        leftIcon={<FcBriefcase />}
        className={`lg:flex hidden items-center px-5 border border-bordergray rounded-full py-1 space-x-1 hover:bg-hoverGray`}
      />

      <div className="  lg:flex hidden items-center  space-x-1  border border-bordergray rounded-full group ">
        <Button
          title={`1st`}
          className={`border-r border-bordergray h-full px-3 py-1 group-hover:hover:bg-hoverGray rounded-tl-full rounded-bl-full `}
        />
        <Button
          title={`2nd`}
          className={`border-r border-bordergray h-full px-2 py-1 group-hover:hover:bg-hoverGray`}
        />
        <Button
          title={`3rd+`}
          className={`px-2 group-hover:hover:bg-hoverGray rounded-tr-full rounded-br-full `}
        />
      </div>
      <Button
        title={`Current company`}
        rightIcon={<MdArrowDropDown size={25} />}
        className={`xl:flex hidden items-center px-5 border border-bordergray rounded-full py-1 space-x-1 hover:bg-hoverGray`}
      />

      <div className='lg:flex hidden'>
        <span>Reset</span>
      </div>
    </div>

    <div>
      <Button
        title={`Order By`}
        rightIcon={<MdArrowDropDown size={25} />}
        className={`flex items-center px-5 border border-bordergray rounded-full py-1 space-x-1 hover:bg-hoverGray`}
      />
    </div>
  </div>
  )
}
