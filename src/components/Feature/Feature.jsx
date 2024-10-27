/* eslint-disable react/prop-types */

import { IoCheckmarkCircle } from "react-icons/io5";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center justify-start gap-2">
      
        <IoCheckmarkCircle /> {feature}
      </p>
    </div>
  );
};

export default Feature;
