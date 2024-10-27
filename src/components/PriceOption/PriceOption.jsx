/* eslint-disable react/prop-types */

import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-lg p-4 mt-6 text-white  flex flex-col">
      <h2 className="text-center">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-2xl"> /mon</span>
      </h2>
      <h4 className="text-3xl font-semibold my-4 text-center">{name}</h4>
     <div className='pl-6 flex-grow'>
     {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
     </div>
     <button className='btn mt-12 bg-yellow-200 w-full font-bold '>Buy Now</button>
    </div>
  );
};

export default PriceOption;
