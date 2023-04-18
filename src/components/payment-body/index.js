import React from "react";
import { TbGrave2 } from "react-icons/tb";
import { AiOutlineUser, AiOutlineInbox } from "react-icons/ai";
import PaymentPortal from "../payment-portal";

export const CreatePaymentData = [
  {
    label: "Grave Site",
    icon: <TbGrave2 size={20} />,
    data: "01-10001-23894",
  },
  {
    label: "Owner",
    icon: <AiOutlineUser size={20} />,
    data: "Loraine and Russ stewart",
  },
  {
    label: "Person Buried",
    icon: <AiOutlineInbox size={20} />,
    data: "Edgar steward",
  },
];

const PaymentBody = () => {
  return (
    <div className="w-100 bg-[#ccc] py-[2rem]">
      <div className="w-[90%] flex justify-start gap-[4rem] mx-auto px-4 flex-col lg:flex-row">
        <div className="flex flex-col items-start">
          <h1 className="text-green-900 text-5xl mb-8 font-semibold">Create Payment</h1>
          {CreatePaymentData?.map((item, index) => {
            return (
              <div className="flex flex-col items-start gap-4 mb-4">
                <div className="text-lg text-black">{item.label}</div>
                <div className="flex justify-start gap-4">
                  {item.icon}
                  <div className="text-gray-500">{item.data}</div>
                </div>
              </div>
            );
          })}
        </div>
        <PaymentPortal/>
      </div>
    </div>
  );
};

export default PaymentBody;
