import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const PaymentPortal = () => {
  return (
    <div className="bg-white px-10 py-8 rounded-[1rem] lg:w-[50rem] w-full">
      <h2 className="text-black text-3xl font-semibold mb-6">
        Payment Details
      </h2>
      <div className="lg:grid lg:grid-cols-2 gap-4 pb-12 border-b-2 border-[#ccc]">
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Reciept Number
          </label>
          <input
            placeholder="Reciept Number"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0 block w-full p-2.5"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Transaction Id
          </label>
          <input
            placeholder="Transaction Id"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0  block w-full p-2.5"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Amount
          </label>
          <input
            placeholder="Amount"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0  block w-full p-2.5"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Date Paid
          </label>
          <input
            placeholder="Date Paid"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0  block w-full p-2.5"
          />
        </div>
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Payment Type
          </label>

<select id="payment_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Select Payment Type">
  <option hidden>Select Payment</option>
  <option value="cash">Cash</option>
  <option value="debit_card">Debit Card</option>
  <option value="credit_card">Credit Card</option>
  <option value="upi">UPI</option>
</select>

        </div>
        <div className="">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Payor
          </label>
          <input
            placeholder="Payor"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0  block w-full p-2.5"
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Description
          </label>
          <textarea
            rows={"5"}
            placeholder="Transaction Id"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-0  block w-full p-2.5 resize-none"
          />
        </div>
      </div>
      <div className="flex justify-start items-center gap-6 pt-8 relative w-full flex-wrap">
        <ButtonComponent
          bgColor={"bg-green-700"}
          hoverBgColor={"bg-green-500"}
          onClick={() => {
            console.log("submit");
          }}
        >
          Submit
        </ButtonComponent>
        <ButtonComponent
          bgColor={"bg-gray-700"}
          hoverBgColor={"bg-gray-500"}
          onClick={() => {
            console.log("cancel");
          }}
        >
          Cancel
        </ButtonComponent>
        <div className="md:absolute right-[1rem] flex justify-start items-center text-gray-400 gap-2 cursor-pointer">
          <IoMdAddCircleOutline size={20} />
          <div className="text-base">Add another payment</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;

const ButtonComponent = ({ children, handleClick, bgColor, hoverBgColor }) => {
  return (
    <div
      className={`px-8 py-3 cursor-pointer transition-colors duration-500 ease-linear rounded-[1.8rem] text-center ${
        bgColor ? bgColor : "bg-white"
      } hover:${
        hoverBgColor ? hoverBgColor : "bg-gray-500"
      } text-white text-lg`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
