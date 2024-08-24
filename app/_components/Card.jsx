import React from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { cardStat, PricingPlan } from "../data";

import { Button } from ".";

export default function Card() {
  return (
    <div className="my-6 border rounded-md border-bordergray py-6 mx-4 px-5 lg:max-w-[84%]">
      <div className="w-full lg:flex lg:space-x-5     ">
        <div className="lg:w-auto ">
          <iframe
           
            src="https://www.youtube.com/embed/QdBZY2fkU-0?si=6vHs-aXd_SnDn6q_"
            title="YouTube video player"
            frameborder="0"
            className="rounded-md md:w-[400px] w-full md:h-full "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="lg:w-auto  flex flex-col space-y-3 justify-between md:px-2 lg:border-r  border-bordergray lg:mt-0 mt-2">
            <div>
          <h1 className="font-bold">Teemil: Eco Print on Demand</h1>
          <p className="text-graylight">
            Collect and display product reviews and star ratings, sales with
            social proofs
          </p>
          </div>
          <div className=" flex flex-col gap-y-2">
            <div className="flex space-x-1 items-center">
              <HiCurrencyDollar color="green" size={25} />
              <span className="font-bold text-gray">Pricing plans</span>
              <p className="text-gray">4</p>
            </div>
            <div className="flex space-x-2 items-center border-b border-bordergray pb-4">
              {PricingPlan.map((item, index) => (
                <Button
                  title={`${item.plan}`}
                  textStyle={`text-[#999FAA] md:text-sm font-semibold text-xs`}
                  className={`border-bordergray border px-2 py-1 rounded-lg `}
                  key={index}

                />
              ))}
            </div>
          </div>

          <div className="flex justify-between ">
            {cardStat.map((item, index) => (
              <div key={index} className="flex flex-col ">
                <div className="flex space-x-1 items-center">
                  <h1 className="font-bold text-gray md:text-md text-sm">{item.title}</h1>
                  {index === 0 && (
                    <IoMdInformationCircleOutline color="blue" size={20} />
                  )}
                </div>
                <div>
                  <span className="text-gray md:text-sm text-xs">{item.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[20%] flex lg:flex-col items-center justify-between lg:mt-0 mt-2">
            <div className="flex">
                <div className="flex flex-col">
                    <span className="font-bold text-gray text-end md:text-md text-sm ">Good</span>
                    <span className=" text-graylight text-end md:text-md text-sm ">1844 reviews</span>
                    
                </div>

            </div>
            <div className="flex flex-col space-y-4">
                <Button title={`Choose your room`} className={`bg-green px-2 py-2 rounded-full flex items-center `} textStyle={`font-bold text-white md:text-md text-sm`}/>
                <Button title={`View Details`} className={`border px-2 py-1 rounded-lg border-bordergray`} textStyle={`font-bold md:text-md text-sm`}/>
            </div>


        </div>
      </div>
    </div>
  );
}
