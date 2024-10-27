import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 group class per week",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "3 group classes per week",
        "1 personal training session per month",
        "Access to sauna",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 80,
      features: [
        "24/7 access to gym equipment",
        "Locker room access with premium lockers",
        "Unlimited group classes",
        "2 personal training sessions per month",
        "Access to sauna and steam room",
        "Free towel service",
      ],
    },
    {
      id: 4,
      name: "VIP",
      price: 120,
      features: [
        "24/7 access to gym equipment",
        "Private locker room with personal locker",
        "Unlimited group classes",
        "4 personal training sessions per month",
        "Access to sauna, steam room, and jacuzzi",
        "Free towel and laundry service",
        "Dedicated nutrition plan",
        "Access to VIP lounge",
      ],
    },
  ];
  return (
    <div className='m-12'>
      <h2 className="text-4xl font-bold">Best Prices in the town</h2>
     <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
     {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
     </div>
    </div>
  );
};

export default PriceOptions;
