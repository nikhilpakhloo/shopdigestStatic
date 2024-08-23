import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Color from "../_constants/Color";

export default function BreadCrumb() {
  return (
    <div className="flex space-x-1 items-center">
      <AiOutlineHome color={Color.gray} />
      <MdKeyboardArrowRight color={Color.gray} />
      <span className="text-gray">Category</span>
      <MdKeyboardArrowRight color={Color.gray} />
      <span className="text-gray">Subcategory</span>
      <MdKeyboardArrowRight color={Color.gray} />
      <span className="text-[#9CA9C3]">item</span>
    </div>
  );
}
